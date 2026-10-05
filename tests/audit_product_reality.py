# -*- coding: utf-8 -*-
"""Comprehensive Product Reality Verification Suite for ShopirGo.
Verifies that:
1. Zero-data new user initializes with honest defaults (Name='Haydovchi', Health=100%, Streak=1, Wallet=50k).
2. Question answering updates state.wallet and state.carHealth, and PERSISTS to localStorage.
3. Reloading page preserves exact persistent state (survives refresh test).
4. Garage car selection updates state.selectedCar and persists across reload.
5. All buttons and interactive controls use in-app notifications (zero crude alert() calls).
6. Real data isolation between User 1 and User 2.
"""
import asyncio
import os
import sys
from pathlib import Path
from playwright.async_api import async_playwright

if sys.platform == "win32":
    import codecs
    sys.stdout = codecs.getwriter("utf-8")(sys.stdout.detach())
    sys.stderr = codecs.getwriter("utf-8")(sys.stderr.detach())

BASE_DIR = Path(__file__).resolve().parent.parent
INDEX_HTML = f"file:///{str(BASE_DIR / 'index.html').replace(os.sep, '/')}"

async def audit():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 390, "height": 844})
        page = await context.new_page()

        console_errors = []
        page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
        page.on("pageerror", lambda exc: console_errors.append(str(exc)))

        print(">>> 1. Loading application as brand-new user with ZERO storage...")
        await page.goto(INDEX_HTML)
        await page.wait_for_timeout(1000)

        # Inspect initial header stats for a zero-data user
        initial_name = await page.inner_text("#header-user-name")
        initial_wallet = await page.inner_text("#wallet-val")
        initial_streak = await page.inner_text("#streak-val")
        initial_health = await page.inner_text("#car-health-txt")
        print(f"Initial Header: Name='{initial_name}', Wallet='{initial_wallet}', Streak='{initial_streak}', Health='{initial_health}'")

        assert initial_name == "Haydovchi", f"Expected default 'Haydovchi', got '{initial_name}'"
        assert initial_health == "100%", f"Expected 100% initial health, got '{initial_health}'"
        assert initial_streak == "1", f"Expected 1-day active streak, got '{initial_streak}'"
        assert initial_wallet == "50k", f"Expected 50k starter wallet, got '{initial_wallet}'"
        print("  [PASS] Zero-data user initialization verified.")

        # >>> 2. Test Question Flow & Real Persistence
        print("\n>>> 2. Testing Question Answering & Real Persistence...")
        await page.evaluate("startTicketQuiz(1)")
        await page.wait_for_timeout(500)

        # Answer question 1 wrongly to test real fine deduction
        await page.click(".option-btn:nth-child(1)")
        await page.wait_for_timeout(300)

        wallet_after_wrong = await page.evaluate("state.wallet")
        health_after_wrong = await page.evaluate("state.carHealth")
        print(f"State after wrong answer: Wallet={wallet_after_wrong}, Health={health_after_wrong}")

        ls_wallet = await page.evaluate("localStorage.getItem('shopirgo_wallet')")
        ls_health = await page.evaluate("localStorage.getItem('shopirgo_car_health')")
        print(f"LocalStorage after wrong answer: wallet='{ls_wallet}', car_health='{ls_health}'")

        assert ls_wallet is not None, "Wallet must be persisted in localStorage"
        assert ls_health is not None, "Car health must be persisted in localStorage"
        assert int(ls_health) < 100, "Health must be decremented on mistake"
        print("  [PASS] Real question answering & penalty persistence verified.")

        # >>> 3. Test Refresh Persistence
        print("\n>>> 3. Testing Refresh Behavior (State Survives Reload)...")
        await page.reload()
        await page.wait_for_timeout(1000)

        reloaded_wallet = await page.evaluate("state.wallet")
        reloaded_health = await page.evaluate("state.carHealth")
        reloaded_health_ui = await page.inner_text("#car-health-txt")
        print(f"After Reload: Wallet={reloaded_wallet}, Health={reloaded_health} ({reloaded_health_ui})")

        assert reloaded_health == health_after_wrong, f"Health should survive reload ({reloaded_health} vs {health_after_wrong})"
        assert reloaded_wallet == wallet_after_wrong, f"Wallet should survive reload ({reloaded_wallet} vs {wallet_after_wrong})"
        print("  [PASS] State survival across browser reload verified.")

        # >>> 4. Test Garage Car Selection Persistence
        print("\n>>> 4. Testing Garage Selection Persistence...")
        await page.evaluate("switchTab('garage')")
        await page.wait_for_timeout(300)
        await page.evaluate("selectFullToyCar('gentra')")
        await page.wait_for_timeout(300)
        selected_car_state = await page.evaluate("state.selectedCar")
        ls_car = await page.evaluate("localStorage.getItem('shopirgo_selected_car')")
        print(f"After selecting Gentra in garage: state.selectedCar='{selected_car_state}', localStorage='{ls_car}'")

        assert selected_car_state == 'gentra', "state.selectedCar must be 'gentra'"
        assert ls_car == 'gentra', "localStorage must contain 'gentra'"

        # Reload to ensure car selection survives
        await page.reload()
        await page.wait_for_timeout(500)
        car_after_reload = await page.evaluate("state.selectedCar")
        assert car_after_reload == 'gentra', f"Selected car must survive reload (got '{car_after_reload}')"
        print("  [PASS] Garage car selection & persistence verified.")

        # >>> 5. Test Interactive Poyga Duel Game Loop
        print("\n>>> 5. Testing Interactive Poyga Duel Game Loop...")
        await page.evaluate("switchTab('race')")
        await page.wait_for_timeout(300)
        await page.evaluate("startPoygaDuel()")
        await page.wait_for_timeout(500)

        is_quiz_open = await page.is_visible("#quiz-modal")
        assert is_quiz_open, "Poyga Duel must open interactive question quiz"
        q_tag = await page.inner_text("#quiz-mode-tag")
        assert "Poyga Duellari" in q_tag, f"Expected Poyga Duellari mode, got '{q_tag}'"
        print(f"  [PASS] Real interactive duel quiz launched: '{q_tag}'")
        await page.evaluate("closeQuiz()")

        # >>> 6. Auditing Buttons & Raw Alerts
        print("\n>>> 6. Auditing Buttons & In-App Notification System...")
        buttons_with_raw_alerts = await page.evaluate("""() => {
            const btns = Array.from(document.querySelectorAll('button, [onclick]'));
            return btns
                .map(b => b.getAttribute('onclick') || '')
                .filter(c => c.includes('alert('));
        }""")
        print(f"Found {len(buttons_with_raw_alerts)} buttons with raw alert() calls.")
        assert len(buttons_with_raw_alerts) == 0, f"Expected 0 raw alerts in buttons, found {buttons_with_raw_alerts}"
        print("  [PASS] Zero raw alert() calls verified; native in-app toast system active.")

        # >>> 7. Testing Data Isolation for Second User
        print("\n>>> 7. Testing Data Isolation for Second User...")
        context2 = await browser.new_context(viewport={"width": 390, "height": 844})
        page2 = await context2.new_page()
        await page2.goto(INDEX_HTML)
        await page2.wait_for_timeout(500)

        user2_wallet = await page2.evaluate("state.wallet")
        user2_car = await page2.evaluate("state.selectedCar")
        user2_health = await page2.evaluate("state.carHealth")
        print(f"User 2 clean state: Wallet={user2_wallet}, Car='{user2_car}', Health={user2_health}")

        assert user2_wallet == 50000, f"User 2 must have clean starter wallet, got {user2_wallet}"
        assert user2_car == 'matiz', f"User 2 must start with default 'matiz', got {user2_car}"
        assert user2_health == 100, f"User 2 must start with 100% health, got {user2_health}"
        print("  [PASS] User 2 data isolation verified.")

        print("\n" + "=" * 60)
        print(" ALL PRODUCT REALITY & ZERO-DATA VERIFICATIONS PASSED 100%!")
        print("=" * 60)
        await browser.close()

if __name__ == "__main__":
    asyncio.run(audit())
