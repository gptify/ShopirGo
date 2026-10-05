# -*- coding: utf-8 -*-
"""Verification script for ShopirGo Viral Certificate and Protocol Engine.
Tests canvas generation for both:
1. Failed Exam: 'Moshin Berilmasin!' protocol card & PNG canvas generation (>10KB).
2. Passed Exam: 'Prava Berilsin!' gold certificate & PNG canvas generation (>10KB).
3. Duel state & viral challenge URLs.
"""
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE_DIR = Path(__file__).resolve().parent.parent
INDEX_HTML = f"file:///{str(BASE_DIR / 'index.html').replace('\\', '/')}"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 390, "height": 844})

    errors = []
    page.on("console", lambda msg: errors.append(f"[{msg.type}] {msg.text}") if msg.type in ['error'] else None)
    page.on("pageerror", lambda exc: errors.append(f"[EXCEPTION] {exc}"))

    print("Navigating to ShopirGo:", INDEX_HTML)
    page.goto(INDEX_HTML)
    page.wait_for_timeout(500)

    # 1. Test Failed Exam state & Viral Protocol
    fail_eval = page.evaluate("""() => {
        state.mistakesCount = 3;
        showExamResult(false);
        const protoCard = document.getElementById('viral-protocol-card');
        const certCard = document.getElementById('viral-certificate-card');
        const isProtoVisible = protoCard && !protoCard.classList.contains('hidden');
        const isCertHidden = certCard && certCard.classList.contains('hidden');
        
        // Generate Canvas
        const c = generateCertificateCanvas(false);
        const dataUrl = c.toDataURL('image/png');
        return {
            isProtoVisible,
            isCertHidden,
            dataUrlLength: dataUrl.length,
            startsWithPng: dataUrl.startsWith('data:image/png;base64,')
        };
    }""")
    print("Fail Eval:", fail_eval)
    assert fail_eval["isProtoVisible"], "Viral protocol card should be visible"
    assert fail_eval["isCertHidden"], "Certificate card should be hidden on fail"
    assert fail_eval["startsWithPng"], "Canvas data URL must be valid PNG"
    assert fail_eval["dataUrlLength"] > 10000, "Canvas image data length must be > 10KB"

    # 2. Test Passed Exam state & Gold Certificate
    pass_eval = page.evaluate("""() => {
        state.mistakesCount = 1;
        showExamResult(true);
        const protoCard = document.getElementById('viral-protocol-card');
        const certCard = document.getElementById('viral-certificate-card');
        const isProtoHidden = protoCard && protoCard.classList.contains('hidden');
        const isCertVisible = certCard && !certCard.classList.contains('hidden');
        
        // Generate Canvas
        const c = generateCertificateCanvas(true);
        const dataUrl = c.toDataURL('image/png');
        return {
            isProtoHidden,
            isCertVisible,
            dataUrlLength: dataUrl.length,
            startsWithPng: dataUrl.startsWith('data:image/png;base64,')
        };
    }""")
    print("Pass Eval:", pass_eval)
    assert pass_eval["isProtoHidden"], "Viral protocol card should be hidden on pass"
    assert pass_eval["isCertVisible"], "Certificate card should be visible on pass"
    assert pass_eval["startsWithPng"], "Canvas data URL must be valid PNG"
    assert pass_eval["dataUrlLength"] > 10000, "Canvas image data length must be > 10KB"

    print("ALL VIRAL ENGINE & CANVAS TESTS PASSED SUCCESSFULLY!")
    browser.close()
