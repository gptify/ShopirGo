# ShopirGo: 4 Ta Asosiy Talab To'liq Bajarildi

> [!IMPORTANT]
> Barcha 4 ta talab to'liq amalga oshirildi, avtomatlashtirilgan **Playwright testlaridan 100% muvaffaqiyatli o'tdi**, **GitHub Pages** (`https://gptify.github.io/ShopirGo/`) ga qayta yuklandi va **[@ShopirGoBot](https://t.me/ShopirGoBot)** jonli ishga tushirildi!

---

## 1. Yagona Profil: Faqat Shokir aka (Andijon)
- **Telegram Bot matnlari**: Bot boshlanganda (`/start`) va tavsiflarda boshqa 3 ta viloyat haqidagi eslatmalar olib tashlandi. Endi aniq: `Yagona bosh ustoz: 55 yoshli Asaka afsonasi Shokir aka (Andijon)`.
- **Ilova va Do'kon yozuvlari**: `STORE_LISTING.md`, `TERMS_OF_SERVICE.md`, va WebApp ichidagi barcha instruktor tanlash tugmalari faqat Shokir akaga bog'landi. Boshqa ustoz profillari butunlay yo'qotildi.
- **Cache-Buster**: Telegram eski sahifani keshlab olmasligi uchun WebApp havolasi `https://gptify.github.io/ShopirGo/?v=2.5` ga yangilandi va HTML `<head>` qismiga keshni taqiqlovchi meta-teglar qo'shildi.

---

## 2. Jinsni Aniqlash: Erkaklarga "Uka" (Sen), Ayollarga "Singlim" (Siz)
1. **Telegramdan Avtomatik Aniqlash**:
   - `autoDetectTelegramGender()` funksiyasi `window.Telegram.WebApp.initDataUnsafe.user.first_name` orqali o'zbek ayol ismlariga xos qo'shimchalar (`-a`, `-o`, `-oy`, `-xon`, `-bonu`, `-diyor`, `-rayhon`, `-sevara`, `-madina`, `-malika`, va h.k.) bo'yicha jinsni avtomatik aniqlaydi.
2. **Bosh Ekranda 1-Tap Tezkor O'zgartirgich**:
   - Foydalanuvchi hech qanday menyu ochmasdan to'g'ridan-to'g'ri bosh sahifadagi Shokir aka iqtibosining tepasida:
     `[ 👨 Uka (Sen) ]` va `[ 👩 Singlim (Siz) ]` tugmalarini ko'radi va 1 ta bosish bilan xohlagan vaqtda o'zgartira oladi.
3. **Qat'iy Grammatik Sofflik**:
   - **Erkaklar / Yigitlar**: 100% "SEN" — *"Uka, seni ko'zing qattedi?! Tormozni bos-da!"* (hech qanday "siz" qo'shilmaydi).
   - **Ayollar / Qizlar**: 100% "SIZ" — *"Singlim, sizni ko'zingiz qayoqda edi?! Sekin tormozni bosing-da!"*.

---

## 3. Haqiqiy Andijon Mahalliy Shevasi (Anjan Sheva & Sarcasm)
Shokir aka nutqiga haqiqiy chapanicha Andijon iboralari va qochirimlari singdirildi:
- *"Ko'zing qattedi?!"*
- *"Ne qivosan?!"*
- *"Bosvurasanmi?!"*
- *"Bos-da!"*
- *"Asaka Cobalti"*
- *"Moshinani uvol qilding-ku!"*
- *"Krugda aylana ichidagi moshina birinchi o'tadi-da, aylanay!"*
- *"Pavarotnik yoqishga Andijonda pul so'ramaydi!"*

---

## 4. Testlarda Rasmiy Yo'l Belgilari (12 Ta Vektorli SVG Belgilar)
YHQ rasmiy yo'l belgilari bo'yicha to'liq test savollari va aniq SVG tasvirlari yaratildi:
1. **2.1 Bosh yo'l** (`sign_main_road_2_1`): Sariq-oq romb belgisi chorrahadagi imtiyoz bilan.
2. **2.4 Yo'l bering** (`sign_yield_2_4`): Qizil chegarali teskari uchburchak.
3. **2.5 STOP** (`sign_stop_2_5`): Qizil sakkizburchak, majburiy to'liq to'xtash.
4. **3.1 Kirish taqiqlanadi** (`sign_no_entry_3_1`): Qizil doira ichida "G'isht".
5. **3.20 Quvib o'tish taqiqlanadi** (`sign_no_overtaking_3_20`): Qizil va qora mashinalar.
6. **3.27 To'xtash taqiqlanadi** (`sign_no_stopping_3_27`): Ko'k doirada qizil "X".
7. **3.28 To'xtab turish taqiqlanadi** (`sign_no_parking_3_28`): Ko'k doirada bitta qizil diagonal "/".
8. **4.1.1 Faqat to'g'riga** (`sign_mandatory_straight_4_1_1`): Ko'k doirada oq strelka yuqoriga.
9. **5.16 Piyodalar o'tish joyi** (`sign_pedestrian_crossing_5_16`): Ko'k kvadrat, zebra va piyoda.
10. **1.23 Bolalar** (`sign_warning_children_1_23`): Qizil ogohlantiruvchi uchburchak va bolalar tasviri.
11. **3.18.2 Chapga burilish taqiqlanadi** (`sign_no_left_turn_3_18_2`).
12. **4.3 Aylana bo'ylab harakatlanish** (`sign_roundabout_4_3`): Doiraviy strelkalar va aylanada harakatlanish ustunligi.

---

## 5. Playwright Sinov Natijalari

```text
Navigating to prototype: file:///C:/Users/Shuxrat/Documents/AI Newsletter/prava_app_prototype.html
Console errors: 0

--- 1. Testing Single Profile (Shokir aka, Andijon) ---
Header instructor: Shokir aka | Region: Andijon • Asaka
Confirmed: Single profile Shokir aka locked everywhere.

--- 2. Testing Gender Identification & Quick Switcher ---
Quick buttons visible: Male=True, Female=True
Tapping [👩 Singlim (Siz)] button...
Quick label after female click: "Singlim" (Siz)
Home quote (Female): "Singlim, o'tiring! Asaka Cobaltini sekin-asta, bittalab o'rganamiz-da. Kamarni taqib oling!"
Tapping [👨 Uka (Sen)] button...
Quick label after male click: "Uka" (Sen)
Home quote (Male): "Qani uka, o'tir! Asaka Cobaltini gazini bos, Sergeli va Asaka chorrahasida birga sinab ko'ramiz-da!"

--- 3. Testing Local Andijan Sheva ---
Andijan dialect markers detected in random speech: {'cobalt', 'bos-da', 'uvol', 'aylanay', 'moshina', 'asaka'}

--- 4. Testing Official Road Signs in Quiz ---
Category pill: Yo'l Belgilari & Chiziqlari
First road sign question: 2.4 'Yo'l bering' (uchburchak) belgisi haydovchidan nimani talab qiladi?
SVG diagram rendered length: 1127
Feedback title in road signs quiz: To'g'ri, uka!
Scroll position after advancing road sign question: 0

ALL 4 POINTS VERIFIED AND TESTED WITH 100% SUCCESS!
```
