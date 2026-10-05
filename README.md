# 🚗 ShopirGo — Sarcastic Driving App & YHQ 2026 Simulator (Telegram Mini App)

> **ShopirGo** is an Uzbek gamified driving theory test and exam simulator built as a Telegram Mini App (TMA). It combines verified 2024–2026 Traffic Rules (Yo'l Harakati Qoidalari — YHQ), official 20-minute timed State Traffic Police (DYP) exam simulations, and a folk instructor persona: **55-year-old Asaka car factory legend Shokir aka** (Andijon).

---

## 🌟 Live Deployments & Endpoints

- **Live Telegram Mini App**: [https://gptify.github.io/ShopirGo/](https://gptify.github.io/ShopirGo/)
- **Telegram Bot**: [@ShopirGoBot](https://t.me/ShopirGoBot)
- **Source Repository**: [https://github.com/gptify/ShopirGo](https://github.com/gptify/ShopirGo)
- **B2B Driving School Portal**: `avtomaktab.html` (hosted locally and on GitHub Pages)

---

## 🎯 Key Project Highlights & Features

### 1. Folk Instructor Persona: Shokir aka (Andijon / Asaka)
- **Single Master Profile**: Anchored around 55-year-old Asaka automotive factory tester Shokir aka.
- **Dialect & Wit**: Authentic Andijon vernacular (*"Ko'zing qattedi?!"*, *"Ne qivosan?!"*, *"Bos-da!"*, *"Asaka Cobalti"*).
- **Strict Gender Honorific Engine**:
  - **Younger Male (`<55`)**: 100% informal **"Sen"** / *"Uka"* (*"Uka, tormozni bos-da!"*).
  - **Female (all ages)**: 100% formal, respectful **"Siz"** / *"Singlim"* (*"Singlim, sekin tormozni bosing-da!"*).
  - **Elder Male (`55+`)**: Respectful **"Siz"** / *"Aka"*.
  - **1-Tap Quick Switcher**: Instant toggle `[ 👨 Uka (Sen) ]` / `[ 👩 Singlim (Siz) ]` directly on the home header.

### 2. Verified 2024–2026 YHQ Question Bank
- **100 Comprehensive Questions**: 5 official tickets (20 questions each) covering 10 categories.
- **2024–2026 Amendments**:
  - **60 km/h** urban speed limit (Tashkent, Nukus, regional centers; Cabinet of Ministers Decision #140).
  - **20 km/h** electric scooter regulations & sidewalk priority.
  - **30 km/h** school/kindergarten safety zones (300m radius).
  - **Roundabout (Krug) Absolute Priority**: Traffic inside the circle has right of way.
  - **Dedicated A-Lanes (Avtobus yo'lagi)**: Public transport lane restrictions (MJtK Art. 128).
  - **+5 km/h Radar Margin**: Technical speed buffer regulations.
  - **Child Restraints (Avtokreslo)**: Mandatory under 12 years.

### 3. Official DYP Exam Simulator Mode
- **20 questions** randomized or by ticket.
- **20-minute countdown timer**.
- **Max 2 mistakes threshold** (3rd mistake triggers immediate failure protocol).
- **Dynamic Situation SVGs**: 12 custom vector diagrams for crossroads, roundabouts, priority signs, and lane layouts.

### 4. Viral Growth Loops & Client-Side Canvas Certificates
- **"Moshin Berilmasin!" Failure Protocol**: High-contrast, sarcastic official penalty protocol stamp with 6-month walking penalty.
- **"Prava Berilsin!" Gold Certificate**: Official certificate with verified badge and instructor quote.
- **Zero-Backend Canvas Generator**: Produces ready-to-share PNG images (`>150KB`) via native HTML5 Canvas.
- **1v1 Duels**: Instant Telegram challenge links (`https://t.me/share/url?url=...`).

### 5. B2B Avtomaktab Partner Portal (`avtomaktab.html`)
- Dedicated B2B landing page for driving schools in Uzbekistan.
- Dynamic interactive ROI calculator estimating student pass rates and partner revenue.
- CRM lead collection form with localStorage caching and Telegram notification support.

---

## 📁 Repository & Directory Layout

```text
ShopirGo Code Reivew/
├── index.html                   # Core TMA Single-Page Application (HTML5, Tailwind, Vanilla JS)
├── avtomaktab.html              # B2B Driving School Partner Portal & ROI Calculator
├── shopirgo_bot.py              # Official Telegram Bot backend (@ShopirGoBot)
├── .nojekyll                    # GitHub Pages asset routing bypass
├── CODE_REVIEW_GUIDE.md         # In-depth architectural guide for reviewing agents
├── assets/
│   ├── app_icon.jpg             # App icon
│   ├── brand/                   # Logo and promotional banners
│   ├── mascot/                  # Shokir aka visual states (default, angry, facepalm)
│   ├── cars/                    # Toy car 3D renders (Cobalt, Damas, Gentra, Matiz)
│   └── data/
│       ├── yhq_questions_db.js  # 100 verified YHQ questions database
│       └── roasts_uz.json       # Regional roast & praise dataset
├── docs/
│   ├── STORE_LISTING.md         # Store listings for Telegram Apps Center & Google Play (UZ & RU)
│   ├── PRIVACY_POLICY.md        # Privacy Policy compliant with Telegram Apps Center
│   ├── TERMS_OF_SERVICE.md      # Terms of Service compliant with Telegram Apps Center
│   ├── implementation_plan.md   # Architectural & feature implementation roadmap
│   ├── marketing_and_promotion_blueprint.md # Viral growth mechanics & unit economics
│   ├── walkthrough.md           # Step-by-step verification walkthrough
│   ├── shokir_aka_showcase.md   # Mascot specifications and dialect samples
│   └── toy_cars_showcase.md     # Garage collectibles and car metadata
├── tests/
│   ├── run_all_tests.py         # Master automated verification test runner
│   ├── test_yhq_database.py     # Schema, question count, and ticket integrity check
│   ├── test_grammar_engine.py   # Gender/age honorific engine strictness test
│   ├── test_bot_sanity.py       # Telegram bot endpoints and payload validation
│   ├── test_viral_engine.py     # Canvas certificate PNG generator test
│   ├── test_tma_app.py          # Playwright E2E test for index.html (0 console errors)
│   └── test_avtomaktab.py       # Playwright E2E test for avtomaktab.html B2B portal
└── screenshots/                 # Verified test screenshots and mobile previews
```

---

## 🚀 How to Run & Test Locally

### 1. Run Automated Test Suite
From the root directory:
```bash
python tests/run_all_tests.py
```
*Executes all 6 test suites covering database integrity, grammar engine, Telegram bot payloads, canvas certificate generator, and Playwright UI tests.*

### 2. Run Local Web Server
You can launch any static HTTP server (or open `index.html` directly in modern browsers):
```bash
python -m http.server 8080
```
Open [http://localhost:8080/](http://localhost:8080/) in your browser.

### 3. Run Telegram Bot (Optional)
```bash
python shopirgo_bot.py
```
*(Requires active internet connection to communicate with Telegram Bot API).*
