# -*- coding: utf-8 -*-
"""Playwright test suite verifying ShopirGo Avtomaktab B2B Partner Portal:
1. Clean render with zero console/page errors.
2. Dynamic ROI Calculator: Interactive slider updates monthly profit.
3. B2B Lead Form: Validates inputs, saves lead into localStorage, and confirms success state.
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
HTML_PATH = f"file:///{str(BASE_DIR / 'avtomaktab.html').replace(os.sep, '/')}"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 900})
        
        console_errors = []
        page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
        page.on("pageerror", lambda exc: console_errors.append(str(exc)))
        
        print("Navigating to Avtomaktab B2B Portal:", HTML_PATH)
        await page.goto(HTML_PATH)
        await page.wait_for_timeout(1000)
        
        print("Console errors count:", len(console_errors))
        for err in console_errors:
            print("  ERROR:", err)
        assert len(console_errors) == 0, "Found console errors in avtomaktab.html!"
        
        # Check ROI Calculator
        val_before = await page.inner_text("#extra-profit")
        print("ROI Profit before slider change:", val_before)
        
        await page.evaluate("""() => {
            const r = document.getElementById('students-range');
            r.value = '300';
            r.dispatchEvent(new Event('input'));
        }""")
        await page.wait_for_timeout(300)
        
        val_after = await page.inner_text("#extra-profit")
        print("ROI Profit after setting 300 students:", val_after)
        assert "10.500.000" in val_after or "10,500,000" in val_after
        
        # Test Lead Form Submission
        await page.fill("#lead-school", "Oltin Rul Avtomaktab")
        await page.fill("#lead-city", "Andijon shahar")
        await page.fill("#lead-name", "Akmaljon Rahimov")
        await page.fill("#lead-phone", "+998 90 999 88 77")
        
        await page.click("#btn-submit-lead")
        await page.wait_for_timeout(500)
        
        success_visible = await page.is_visible("#lead-success-msg")
        print("Lead success message visible:", success_visible)
        assert success_visible, "Success message should be displayed after form submit!"
        
        leads_in_storage = await page.evaluate("localStorage.getItem('shopirgo_partner_leads')")
        print("Saved lead in localStorage:", leads_in_storage)
        assert "Oltin Rul" in leads_in_storage
        
        print("\nALL AVTOMAKTAB B2B PORTAL TESTS PASSED SUCCESSFULLY!")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
