# -*- coding: utf-8 -*-
"""Master Test Runner for ShopirGo Review Suite.
Runs all verification scripts sequentially and reports status.
"""
import subprocess
import sys
from pathlib import Path

if sys.platform == "win32":
    import codecs
    sys.stdout = codecs.getwriter("utf-8")(sys.stdout.detach())
    sys.stderr = codecs.getwriter("utf-8")(sys.stderr.detach())

BASE_DIR = Path(__file__).resolve().parent

TESTS = [
    ("Database Integrity Test", "test_yhq_database.py"),
    ("Grammar & Dialect Engine Test", "test_grammar_engine.py"),
    ("Telegram Bot Logic Test", "test_bot_sanity.py"),
    ("Backend REST API & Persistence Test", "test_backend_api.py"),
    ("Viral Certificate & Canvas Test", "test_viral_engine.py"),
    ("TMA Core Playwright Test", "test_tma_app.py"),
    ("Avtomaktab B2B Portal Playwright Test", "test_avtomaktab.py"),
]

def run_suite():
    print("=" * 65)
    print(" [SHOPIRGO] COMPREHENSIVE AUTOMATED VERIFICATION SUITE")
    print("=" * 65)
    
    passed = 0
    failed = 0

    for name, script in TESTS:
        script_path = BASE_DIR / script
        print(f"\n>> Running: {name} ({script})...")
        res = subprocess.run([sys.executable, str(script_path)], capture_output=True, text=True, encoding="utf-8", errors="replace")
        if res.returncode == 0:
            print(f"  [PASS] {name}")
            passed += 1
        else:
            print(f"  [FAIL] {name}")
            print("  --- STDOUT ---")
            print(res.stdout)
            print("  --- STDERR ---")
            print(res.stderr)
            failed += 1

    print("\n" + "=" * 65)
    print(f" RESULTS: {passed} PASSED, {failed} FAILED (TOTAL {len(TESTS)})")
    print("=" * 65)
    if failed > 0:
        sys.exit(1)

if __name__ == "__main__":
    run_suite()
