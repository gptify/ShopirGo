# Implementation Plan: Verified YHQ Question Bank (2024–2026) & Exam Engine for PravaGo

Integrate an up-to-date, verified Yo'l Harakati Qoidalari (YHQ) question bank tailored to Uzbekistan's official driving test standards, incorporating all recent 2024–2026 legislative amendments (60 km/h urban speed limit, electric scooter regulations, A-bus lanes, roundabout priority, and updated MJtK administrative fine articles).

---

## User Review Required

> [!IMPORTANT]
> **Key Exam & Question Bank Decisions to Confirm:**
> 1. **Official Exam Simulation Format**: In accordance with Uzbekistan's Driving Test Centers (YHXBB / Davlat Test Markazi):
>    - **20 questions** per standard ticket.
>    - **20-minute countdown timer**.
>    - Maximum **2 mistakes permitted** (3rd mistake = "Imtihondan yiqildi" / Fail).
> 2. **Learning Modes Provided to Users**:
>    - **Biletlar bo'yicha (Tickets)**: Practice standard 20-question tickets sequentially.
>    - **Mavzular bo'yicha (Categories)**: Practice specific weak areas (e.g., *Tezlik & Radarlar*, *Chorrahalar*, *Yangi qoidalar: Skuter & A-polosa*).
>    - **Real Imtihon Simulyatori (Exam Mode)**: Randomized 20-question strict test with countdown timer and pass/fail certificate.
>    - **Xatolar ustida ishlash (Mistakes Bank)**: Auto-saves any failed question to a personal review queue.
> 3. **2024–2026 Legal Amendments Highlighted**: All questions with recent rule updates will be visually tagged with a green/amber **"Yangi Qoida (2024-2026)"** badge so users specifically notice updated laws.

---

## Key Legal Amendments (2024–2026) to Include

The question bank will explicitly cover and test the latest amendments from the Cabinet of Ministers of Uzbekistan:
1. **Harakatlanish tezligi (Speed Limits)**:
   - Toshkent shahri, Nukus va viloyatlar markazlarida: **60 km/soat** (ilgari 70 km/soat edi).
   - Maktablar va bolalar bog'chalari atrofida (300 m masofada): **30 km/soat**.
   - Turar joy zonalari va hovlilarda: **20 km/soat**.
2. **Elektr samakatlar va individual harakatlanish vositalari**:
   - Piyodalar yo'lkasida maksimal tezlik: **20 km/soat** (piyodalarga xalaqit bermaslik sharti bilan).
   - Yo'l qatnov qismida harakatlanish cheklovlari va tungi vaqtda nur qaytargichli nimcha kiyish talabi.
3. **A-polosa (Avtobus yo'lagi)**:
   - Jamoat transporti uchun ajratilgan qatnov qismida boshqa transportlarning harakatlanishi va to'xtab turishi taqiqlanishi (MJtK 128-modda).
4. **Aylana harakat (Roundabout / Krug)**:
   - Aylana ichida harakatlanayotgan transport vositasi har doim ustunlikka ega (agar ustunlik belgilari boshqacha tartibni belgilamagan bo'lsa).
5. **Piyodalar o'tish joylari**:
   - Tartibga solinmagan piyodalar o'tish joyiga piyoda qadam bosgan paytdayoq to'xtab yo'l berish majburiyati.
6. **Bolalar xavfsizligi**:
   - 12 yoshga to'lmagan bolalarni maxsus bolalar o'rindig'isiz (avtokreslo) old o'rindiqda olib yurish taqiqlanishi.

---

## Proposed Changes

### Component 1: Comprehensive Verified YHQ Question Database

#### [NEW] [assets/data/yhq_questions_db.js](file:///c:/Users/Shuxrat/Documents/AI%20Newsletter/assets/data/yhq_questions_db.js)
A modular database file containing structured questions with:
- Unique ID, Category ID, Ticket number, Difficulty.
- Question text in clean Uzbek Latin.
- 4 Multiple-choice answers.
- `correctIndex` (0–3).
- `ruleRef`: Exact YHQ article (e.g., `YHQ 78-band`).
- `fineRef`: Relevant MJtK administrative fine (e.g., `MJtK 128-3-modda: 1.125.000 so'm`).
- `isNewRegulation`: Boolean for 2024–2026 changes.
- `explanation`: Detailed, pedagogical explanation.
- `svgType`: SVG road situation diagram identifier (crossroads, roundabouts, traffic lights, lane positioning).

---

### Component 2: Ticket & Category Navigation in Interactive Prototype

#### [MODIFY] [prava_app_prototype.html](file:///c:/Users/Shuxrat/Documents/AI%20Newsletter/prava_app_prototype.html)
- Integrate `yhq_questions_db.js`.
- Add **Mavzular & Biletlar (Topic & Ticket)** selector tray to the map view.
- Update **Quiz Modal** to render dynamic situation SVGs based on `svgType` (crossroads with priority signs, roundabouts, traffic light phases, speed limit signs).
- Implement **Real Exam Simulator (20 savol / 20 daqiqa / 2 xato limiti)** with countdown timer bar and pass/fail summary modal.
- Connect regional instructor feedback (`Shokir aka`, `Rustam aka`, `Polvon aka`) directly to each question's rule explanation.

---

### Component 3: Inline Widget Synchronization

#### [MODIFY] [prava_app_widget.html](file:///C:/Users/Shuxrat/.gemini/antigravity/brain/3859088f-d5c2-4409-9039-275d57f4e9c9/prava_app_widget.html)
- Sync verified YHQ questions and 2024–2026 updates into the interactive chat widget.
- Include interactive road situation diagrams for the widget test view.

---

## Verification Plan

### Automated Verification
- Run syntax and data integrity verification script:
  - Ensure every question has exactly 4 options.
  - Ensure `correctIndex` is between 0 and 3.
  - Verify all IDs and category keys are unique and non-null.
  - Ensure no missing rule or fine strings.

### Manual Verification
- Test ticket selection flow in `prava_app_prototype.html`.
- Test countdown timer and error limit (fail after 3rd mistake).
- Verify that regional instructors (Andijon, Toshkent, Xorazm) give authentic context-aware explanations on both right and wrong answers.
- Verify visual presentation of SVG traffic situations across desktop and mobile screen sizes.
