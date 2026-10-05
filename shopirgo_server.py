# -*- coding: utf-8 -*-
"""ShopirGo Unified Backend Server & API Layer.

Provides:
- SQLite persistence (users, leads, duels, referrals)
- Telegram WebApp HMAC-SHA256 signature verification
- B2B Partner Lead ingestion with Telegram notification support
- Asynchronous PvP duel rooms and challenge lookups
- Referral registration and validation
"""
import hmac
import hashlib
import json
import logging
import os
import sqlite3
import time
import urllib.parse
from http.server import HTTPServer, BaseHTTPRequestHandler
from pathlib import Path

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger("ShopirGoServer")

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "shopirgo.db"
BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN", "8860852821:AAH_rDL4s4pSsF7sd57FoNOjHacZqcMBhIc")
ADMIN_CHAT_ID = os.getenv("TELEGRAM_ADMIN_CHAT_ID", "")
PORT = int(os.getenv("SHOPIRGO_PORT", "8008"))


def init_database():
    """Initialize SQLite database with required tables and indexes."""
    with sqlite3.connect(DB_PATH) as conn:
        cursor = conn.cursor()
        
        # 1. Users Table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS users (
                telegram_id TEXT PRIMARY KEY,
                first_name TEXT,
                username TEXT,
                wallet INTEGER DEFAULT 50000,
                car_health INTEGER DEFAULT 100,
                selected_car TEXT DEFAULT 'matiz',
                streak INTEGER DEFAULT 1,
                xp INTEGER DEFAULT 0,
                last_active_date TEXT,
                created_at INTEGER
            )
        """)

        # 2. B2B Partner Leads Table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS partner_leads (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                school_name TEXT NOT NULL,
                contact_name TEXT NOT NULL,
                phone TEXT NOT NULL,
                student_count TEXT,
                plan_type TEXT,
                source TEXT DEFAULT 'avtomaktab_web',
                status TEXT DEFAULT 'new',
                created_at INTEGER
            )
        """)

        # 3. PvP Duel Challenges Table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS duels (
                duel_id TEXT PRIMARY KEY,
                creator_id TEXT,
                creator_name TEXT,
                creator_score INTEGER DEFAULT 0,
                creator_time REAL DEFAULT 0,
                opponent_id TEXT,
                opponent_name TEXT,
                opponent_score INTEGER DEFAULT 0,
                opponent_time REAL DEFAULT 0,
                status TEXT DEFAULT 'pending',
                created_at INTEGER
            )
        """)

        # 4. Referral Tracking Table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS referrals (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                referrer_id TEXT NOT NULL,
                referred_user_id TEXT NOT NULL UNIQUE,
                created_at INTEGER
            )
        """)
        conn.commit()
        logger.info("Database initialized successfully at %s", DB_PATH)


def verify_telegram_init_data(init_data_str: str, bot_token: str) -> bool:
    """Verifies Telegram WebApp initData HMAC-SHA256 signature."""
    if not init_data_str or not bot_token:
        return False
    try:
        parsed = urllib.parse.parse_qsl(init_data_str, keep_blank_values=True)
        data_dict = dict(parsed)
        received_hash = data_dict.pop("hash", None)
        if not received_hash:
            return False

        # Build data-check-string (sorted alphabetically key=val)
        items = [f"{k}={v}" for k, v in sorted(data_dict.items())]
        data_check_string = "\n".join(items)

        # Secret key = HMAC_SHA256("WebAppData", bot_token)
        secret_key = hmac.new(b"WebAppData", bot_token.encode("utf-8"), hashlib.sha256).digest()
        computed_hash = hmac.new(secret_key, data_check_string.encode("utf-8"), hashlib.sha256).hexdigest()

        return hmac.compare_digest(computed_hash, received_hash)
    except Exception as e:
        logger.warning("HMAC validation error: %s", e)
        return False


def notify_admin_lead(lead_data: dict):
    """Optional Telegram push notification for newly submitted B2B lead."""
    token = BOT_TOKEN
    chat_id = ADMIN_CHAT_ID
    if not token or not chat_id:
        return
    try:
        import urllib.request
        msg = (
            f"🔔 <b>Yangi Hamkorlik Arizasi (ShopirGo B2B)!</b>\n\n"
            f"🏫 <b>Avtomaktab:</b> {lead_data.get('school_name')}\n"
            f"👤 <b>Mas'ul shaxs:</b> {lead_data.get('contact_name')}\n"
            f"📞 <b>Telefon:</b> {lead_data.get('phone')}\n"
            f"👥 <b>O'quvchilar soni:</b> {lead_data.get('student_count')}\n"
            f"📦 <b>Tarif:</b> {lead_data.get('plan_type')}\n"
        )
        url = f"https://api.telegram.org/bot{token}/sendMessage"
        payload = json.dumps({"chat_id": chat_id, "text": msg, "parse_mode": "HTML"}).encode("utf-8")
        req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"})
        urllib.request.urlopen(req, timeout=5)
    except Exception as e:
        logger.warning("Failed to dispatch admin notification: %s", e)


class ShopirGoApiHandler(BaseHTTPRequestHandler):
    """REST API Handler for ShopirGo platform."""

    def _set_cors_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")

    def do_OPTIONS(self):
        self.send_response(200)
        self._set_cors_headers()
        self.end_headers()

    def _send_json(self, status_code: int, data: dict):
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self._set_cors_headers()
        self.end_headers()
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode("utf-8"))

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        query = dict(urllib.parse.parse_qsl(parsed.query))

        if path == "/api/health":
            self._send_json(200, {"status": "ok", "service": "ShopirGo Unified API", "version": "3.1"})
            return

        elif path == "/api/duels/get":
            duel_id = query.get("id")
            if not duel_id:
                self._send_json(400, {"ok": False, "error": "Missing duel id"})
                return
            with sqlite3.connect(DB_PATH) as conn:
                conn.row_factory = sqlite3.Row
                c = conn.cursor()
                row = c.execute("SELECT * FROM duels WHERE duel_id = ?", (duel_id,)).fetchone()
                if not row:
                    self._send_json(404, {"ok": False, "error": "Duel not found"})
                    return
                self._send_json(200, {"ok": True, "duel": dict(row)})
                return

        elif path == "/api/user/sync":
            tg_id = query.get("tg_id")
            if not tg_id:
                self._send_json(400, {"ok": False, "error": "Missing tg_id"})
                return
            with sqlite3.connect(DB_PATH) as conn:
                conn.row_factory = sqlite3.Row
                c = conn.cursor()
                row = c.execute("SELECT * FROM users WHERE telegram_id = ?", (tg_id,)).fetchone()
                if row:
                    # Also count verified referrals
                    ref_count = c.execute("SELECT COUNT(*) FROM referrals WHERE referrer_id = ?", (tg_id,)).fetchone()[0]
                    res = dict(row)
                    res["referral_count"] = ref_count
                    self._send_json(200, {"ok": True, "user": res})
                else:
                    self._send_json(200, {"ok": True, "user": None})
                return

        # Fallback 404
        self._send_json(404, {"ok": False, "error": "Endpoint not found"})

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        content_length = int(self.headers.get("Content-Length", 0))
        post_data = self.rfile.read(content_length) if content_length > 0 else b"{}"
        try:
            body = json.loads(post_data.decode("utf-8"))
        except Exception:
            body = {}

        # 1. B2B Partner Lead Ingestion
        if path == "/api/leads/submit":
            school_name = (body.get("school_name") or "").strip()
            contact_name = (body.get("contact_name") or "").strip()
            phone = (body.get("phone") or "").strip()
            student_count = (body.get("student_count") or "").strip()
            plan_type = (body.get("plan_type") or "").strip()

            if not school_name or not contact_name or not phone:
                self._send_json(400, {"ok": False, "error": "school_name, contact_name, and phone are required"})
                return

            with sqlite3.connect(DB_PATH) as conn:
                c = conn.cursor()
                c.execute("""
                    INSERT INTO partner_leads (school_name, contact_name, phone, student_count, plan_type, created_at)
                    VALUES (?, ?, ?, ?, ?, ?)
                """, (school_name, contact_name, phone, student_count, plan_type, int(time.time())))
                lead_id = c.lastrowid
                conn.commit()

            notify_admin_lead(body)
            self._send_json(200, {"ok": True, "lead_id": lead_id, "message": "Ariza muvaffaqiyatli qabul qilindi!"})
            return

        # 2. User State Persistence (Sync)
        elif path == "/api/user/save":
            tg_id = str(body.get("telegram_id") or "")
            if not tg_id:
                self._send_json(400, {"ok": False, "error": "telegram_id required"})
                return

            with sqlite3.connect(DB_PATH) as conn:
                c = conn.cursor()
                now = int(time.time())
                c.execute("""
                    INSERT INTO users (telegram_id, first_name, username, wallet, car_health, selected_car, streak, xp, last_active_date, created_at)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    ON CONFLICT(telegram_id) DO UPDATE SET
                        first_name = COALESCE(excluded.first_name, users.first_name),
                        wallet = excluded.wallet,
                        car_health = excluded.car_health,
                        selected_car = excluded.selected_car,
                        streak = excluded.streak,
                        xp = excluded.xp,
                        last_active_date = excluded.last_active_date
                """, (
                    tg_id,
                    body.get("first_name", "Haydovchi"),
                    body.get("username", ""),
                    int(body.get("wallet", 50000)),
                    int(body.get("car_health", 100)),
                    body.get("selected_car", "matiz"),
                    int(body.get("streak", 1)),
                    int(body.get("xp", 0)),
                    body.get("last_active_date", ""),
                    now
                ))
                conn.commit()
            self._send_json(200, {"ok": True, "saved": True})
            return

        # 3. Create or Finish PvP Duel
        elif path == "/api/duels/create":
            duel_id = body.get("duel_id") or f"duel_{int(time.time() * 1000)}"
            creator_id = str(body.get("creator_id") or "anon")
            creator_name = body.get("creator_name") or "Haydovchi"
            creator_score = int(body.get("creator_score", 0))
            creator_time = float(body.get("creator_time", 0.0))

            with sqlite3.connect(DB_PATH) as conn:
                c = conn.cursor()
                c.execute("""
                    INSERT INTO duels (duel_id, creator_id, creator_name, creator_score, creator_time, status, created_at)
                    VALUES (?, ?, ?, ?, ?, 'waiting_opponent', ?)
                    ON CONFLICT(duel_id) DO UPDATE SET
                        creator_score = excluded.creator_score,
                        creator_time = excluded.creator_time
                """, (duel_id, creator_id, creator_name, creator_score, creator_time, int(time.time())))
                conn.commit()

            self._send_json(200, {"ok": True, "duel_id": duel_id})
            return

        # 4. Record Verified Referral
        elif path == "/api/referrals/register":
            referrer_id = str(body.get("referrer_id") or "")
            referred_user_id = str(body.get("referred_user_id") or "")
            if not referrer_id or not referred_user_id or referrer_id == referred_user_id:
                self._send_json(400, {"ok": False, "error": "Invalid referral parameters"})
                return

            with sqlite3.connect(DB_PATH) as conn:
                c = conn.cursor()
                try:
                    c.execute("""
                        INSERT INTO referrals (referrer_id, referred_user_id, created_at)
                        VALUES (?, ?, ?)
                    """, (referrer_id, referred_user_id, int(time.time())))
                    conn.commit()
                    success = True
                except sqlite3.IntegrityError:
                    success = False  # Already registered

                ref_count = c.execute("SELECT COUNT(*) FROM referrals WHERE referrer_id = ?", (referrer_id,)).fetchone()[0]

            self._send_json(200, {"ok": True, "registered": success, "total_referrals": ref_count})
            return

        self._send_json(404, {"ok": False, "error": "Endpoint not found"})


def run_server(port=PORT):
    init_database()
    server = HTTPServer(("0.0.0.0", port), ShopirGoApiHandler)
    logger.info("ShopirGo API Server running on port %d...", port)
    server.serve_forever()


if __name__ == "__main__":
    run_server()
