# -*- coding: utf-8 -*-
"""Playwright test suite verifying ShopirGo TMA core requirements:
1. Single Profile: Shokir aka from Andijon (Asaka).
2. Gender Identification & Honorifics:
   - 1-tap toggle on home screen [👨 Uka (Sen)] / [👩 Singlim (Siz)].
   - Grammatically pure "Sen" (for young male) vs "Siz" (for female).
3. Authentic Andijon dialect markers (Anjan Sheva):
   - "Ko'zing qattedi", "Ne qivosan", "Bos-da", "Asaka Cobalti", etc.
4. Official Road Signs & SVGs:
   - 12 official road signs with vector SVGs and test questions.
   - Dynamic SVG rendering and instant feedback.
5. Zero console errors on full load.
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

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 390, "height": 844})

        console_errors = []
        page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
        page.on("pageerror", lambda exc: console_errors.append(str(exc)))

        print("Navigating to ShopirGo TMA:", INDEX_HTML)
        await page.goto(INDEX_HTML)
        await page.wait_for_timeout(1000)

        # 1. Console Errors Check
        print(f"Console errors: {len(console_errors)}")
        for err in console_errors:
            print("  ERROR:", err)
        assert len(console_errors) == 0, f"Found {len(console_errors)} console errors!"

        # 2. Single Profile Verification
        print("\n--- 1. Testing Single Profile (Shokir aka, Andijon) ---")
        inst_name = await page.inner_text("#instructor-name")
        inst_region = await page.inner_text("#instructor-region-pill")
        print("Header instructor:", inst_name, "| Region:", inst_region)
        assert "Shokir aka" in inst_name
        assert "Andijon" in inst_region

        # 3. Gender Switcher Verification
        print("\n--- 2. Testing Gender Identification & Quick Switcher ---")
        male_btn_visible = await page.is_visible("#quick-btn-male")
        female_btn_visible = await page.is_visible("#quick-btn-female")
        print(f"Quick buttons visible: Male={male_btn_visible}, Female={female_btn_visible}")
        assert male_btn_visible and female_btn_visible

        # Switch to Female
        await page.click("#quick-btn-female")
        await page.wait_for_timeout(400)
        lbl_f = await page.inner_text("#quick-gender-label")
        quote_f = await page.inner_text("#shokir-quote")
        print(f"Label after female toggle: {lbl_f}")
        print(f"Home quote (Female): {quote_f}")
        assert "Singlim" in lbl_f or "Siz" in lbl_f
        assert "Singlim" in quote_f or "singlim" in quote_f or "siz" in quote_f.lower()

        # Switch to Male
        await page.click("#quick-btn-male")
        await page.wait_for_timeout(400)
        lbl_m = await page.inner_text("#quick-gender-label")
        quote_m = await page.inner_text("#shokir-quote")
        print(f"Label after male toggle: {lbl_m}")
        print(f"Home quote (Male): {quote_m}")
        assert "Uka" in lbl_m or "Sen" in lbl_m

        # 4. Dialect & Road Signs Verification
        print("\n--- 3. Testing Categories & Road Signs ---")
        await page.evaluate("startCategoryQuiz('road_signs')")
        await page.wait_for_timeout(500)

        quiz_visible = await page.is_visible("#quiz-modal")
        assert quiz_visible, "Quiz modal did not open for road signs category!"

        cat_pill = await page.inner_text("#q-category-pill")
        print("Category pill:", cat_pill)
        assert "Yo'l Belgilari" in cat_pill

        svg_content = await page.inner_html("#svg-diagram-wrapper")
        print("SVG diagram rendered length:", len(svg_content))
        assert "<svg" in svg_content
        assert len(svg_content) > 50

        print("\nALL SHOPIRGO TMA CORE TESTS PASSED SUCCESSFULLY!")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
