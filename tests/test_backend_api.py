# -*- coding: utf-8 -*-
"""Verification Suite for ShopirGo Backend Server & REST API.

Tests:
1. Healthcheck endpoint.
2. B2B Partner Lead ingestion & database persistence.
3. User state save & sync.
4. PvP Duel creation & retrieval.
5. Referral registration & fraud prevention.
6. Telegram WebApp HMAC-SHA256 signature verification.
"""
import hashlib
import hmac
import json
import os
import sqlite3
import sys
import threading
import time
import urllib.parse
import urllib.request
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BASE_DIR))

from shopirgo_server import (
    DB_PATH,
    init_database,
    verify_telegram_init_data,
    ShopirGoApiHandler,
    HTTPServer
)

TEST_PORT = 8019


def run_test_server():
    init_database()
    server = HTTPServer(("127.0.0.1", TEST_PORT), ShopirGoApiHandler)
    server_thread = threading.Thread(target=server.serve_forever, daemon=True)
    server_thread.start()
    time.sleep(0.5)
    return server


def make_request(path, method="GET", body=None):
    url = f"http://127.0.0.1:{TEST_PORT}{path}"
    data = json.dumps(body).encode("utf-8") if body else None
    headers = {"Content-Type": "application/json"} if body else {}
    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    with urllib.request.urlopen(req, timeout=5) as resp:
        return resp.status, json.loads(resp.read().decode("utf-8"))


def test_api_suite():
    print("=" * 65)
    print(" [TEST] RUNNING SHOPIRGO BACKEND API & PERSISTENCE VERIFICATION")
    print("=" * 65)

    server = run_test_server()

    # 1. Healthcheck
    status, res = make_request("/api/health")
    assert status == 200 and res.get("status") == "ok", f"Healthcheck failed: {res}"
    print("  [PASS] 1. API Healthcheck endpoint verified.")

    # 2. B2B Lead Submission
    lead_payload = {
        "school_name": "Andijon Avto Ustoz MCHJ",
        "contact_name": "Akmal Rustamov (Asaka)",
        "phone": "+998901234567",
        "student_count": "150-300",
        "plan_type": "Pro Hamkorlik"
    }
    status, res = make_request("/api/leads/submit", method="POST", body=lead_payload)
    assert status == 200 and res.get("ok") is True, f"Lead submission failed: {res}"
    lead_id = res.get("lead_id")

    with sqlite3.connect(DB_PATH) as conn:
        c = conn.cursor()
        row = c.execute("SELECT school_name, phone FROM partner_leads WHERE id = ?", (lead_id,)).fetchone()
        assert row is not None and row[0] == "Andijon Avto Ustoz MCHJ", f"Database lead mismatch: {row}"
    print(f"  [PASS] 2. B2B Partner Lead ingestion verified (Lead #{lead_id} persisted in SQLite).")

    # 3. User State Save & Sync
    user_payload = {
        "telegram_id": "999888777",
        "first_name": "Bobur",
        "username": "bobur_drive",
        "wallet": 125000,
        "car_health": 90,
        "selected_car": "cobalt",
        "streak": 4,
        "xp": 350
    }
    status, res = make_request("/api/user/save", method="POST", body=user_payload)
    assert status == 200 and res.get("ok") is True

    status, sync_res = make_request("/api/user/sync?tg_id=999888777")
    assert status == 200 and sync_res.get("ok") is True
    user_data = sync_res.get("user")
    assert user_data["wallet"] == 125000, f"Expected wallet 125000, got {user_data.get('wallet')}"
    assert user_data["selected_car"] == "cobalt", f"Expected cobalt, got {user_data.get('selected_car')}"
    print("  [PASS] 3. User state save & multi-device sync verified.")

    # 4. PvP Duel Creation & Retrieval
    duel_payload = {
        "duel_id": "duel_test_42",
        "creator_id": "999888777",
        "creator_name": "Bobur",
        "creator_score": 3,
        "creator_time": 18.5
    }
    status, res = make_request("/api/duels/create", method="POST", body=duel_payload)
    assert status == 200 and res.get("ok") is True

    status, duel_res = make_request("/api/duels/get?id=duel_test_42")
    assert status == 200 and duel_res.get("ok") is True
    duel_info = duel_res.get("duel")
    assert duel_info["creator_score"] == 3 and duel_info["status"] == "waiting_opponent"
    print("  [PASS] 4. PvP Duel challenge creation & room lookup verified.")

    # 5. Referral Registration & Deduplication
    test_referrer = f"ref_usr_{int(time.time() * 1000)}"
    test_referred = f"new_usr_{int(time.time() * 1000)}"
    ref_payload = {
        "referrer_id": test_referrer,
        "referred_user_id": test_referred
    }
    status, ref_res = make_request("/api/referrals/register", method="POST", body=ref_payload)
    assert status == 200 and ref_res.get("registered") is True, f"Failed first referral: {ref_res}"
    assert ref_res.get("total_referrals") == 1

    # Attempt duplicate referral from same user (Fraud Prevention)
    status, dup_res = make_request("/api/referrals/register", method="POST", body=ref_payload)
    assert status == 200 and dup_res.get("registered") is False
    assert dup_res.get("total_referrals") == 1
    print("  [PASS] 5. Referral registration & fraud prevention (deduplication) verified.")

    # 6. Telegram HMAC-SHA256 Signature Verification
    test_token = "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11"
    # Construct a valid test initData
    user_json = json.dumps({"id": 999888777, "first_name": "Bobur"})
    params = {
        "auth_date": "1710000000",
        "query_id": "AAHdF6IQAAAAAN0XohD_test",
        "user": user_json
    }
    items = [f"{k}={v}" for k, v in sorted(params.items())]
    data_check_string = "\n".join(items)
    secret_key = hmac.new(b"WebAppData", test_token.encode("utf-8"), hashlib.sha256).digest()
    valid_hash = hmac.new(secret_key, data_check_string.encode("utf-8"), hashlib.sha256).hexdigest()

    valid_init_data = f"auth_date=1710000000&query_id=AAHdF6IQAAAAAN0XohD_test&user={urllib.parse.quote(user_json)}&hash={valid_hash}"
    invalid_init_data = f"auth_date=1710000000&query_id=AAHdF6IQAAAAAN0XohD_test&user={urllib.parse.quote(user_json)}&hash=fake_tampered_hash_999"

    assert verify_telegram_init_data(valid_init_data, test_token) is True, "Valid HMAC rejected"
    assert verify_telegram_init_data(invalid_init_data, test_token) is False, "Invalid HMAC accepted"
    print("  [PASS] 6. Telegram WebApp HMAC-SHA256 cryptographic signature verified.")

    server.shutdown()
    print("=" * 65)
    print(" ALL BACKEND API & PERSISTENCE VERIFICATIONS PASSED (6/6)!")
    print("=" * 65)


if __name__ == "__main__":
    test_api_suite()
