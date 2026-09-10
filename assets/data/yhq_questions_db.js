/**
 * ShopirGo — Rasmiy Yo'l Harakati Qoidalari (YHQ) Savollar Bazasi
 * O'zbekiston Respublikasi Vazirlar Mahkamasining amaldagi YHQ
 * va 2024–2026 yillardagi eng so'nggi o'zgartirishlari bilan tasdiqlangan.
 * 100 ta to'liq savol (5 ta 20 talik rasmiy DYP biletlari) va 10 ta toifa.
 */

const YHQ_CATEGORIES = [
  {
    "id": "new_2026",
    "title": "⚡ 2024–2026 Yangi Qoidalar",
    "desc": "60 km/soat shahar tezligi, samakatlar, A-polosa, radar xatoligi va yangi jarimalar",
    "icon": "🔥",
    "badge": "Yangi tahrir"
  },
  {
    "id": "intersections",
    "title": "🚦 Chorrahalar & Aylanalar",
    "desc": "Teng ahamiyatli, bosh yo'l, tramvay, o'ng qo'l va aylanma (krug) harakat ustunligi",
    "icon": "🔄",
    "badge": "Imtihon asosi"
  },
  {
    "id": "road_signs",
    "title": "🛑 Yo'l Belgilari & Chiziqlari",
    "desc": "Ogohlantiruvchi, imtiyoz, taqiqlovchi, buyuruvchi va chiziqlar (1.1, stop-liniya)",
    "icon": "⛔",
    "badge": "Baza"
  },
  {
    "id": "speed_limits",
    "title": "🏎️ Tezlik & Radar Qoidalari",
    "desc": "Aholi punktlari, avtomagistrallar, maktab zonalari va +5 km/soat radar xatoligi",
    "icon": "📸",
    "badge": "Ko'p jarima"
  },
  {
    "id": "maneuvers",
    "title": "🚗 Qayta Tizilish & Quvib O'tish",
    "desc": "Pavarotnik yoqish masofasi, oraliq masofa, quvib o'tish taqiqlari, qayrilib olish",
    "icon": "↔️",
    "badge": "Amaliyot"
  },
  {
    "id": "stopping_parking",
    "title": "🅿️ To'xtash & To'xtab Turish",
    "desc": "Chorrahalar (5m), bekatlar (15m), piyodalar o'tish joyi, 3.27 va 3.28 farqi",
    "icon": "🅿️",
    "badge": "Shahar hayoti"
  },
  {
    "id": "traffic_lights",
    "title": "🚥 Svetofor & Regulyator",
    "desc": "Qo'shimcha seksiyalar, miltillovchi chiroqlar, tartibga soluvchi inspektor ishoralari",
    "icon": "🚦",
    "badge": "Muhim"
  },
  {
    "id": "fines_mjtk",
    "title": "⚖️ Jarimalar & MJtK Moddalari",
    "desc": "BHM stavkalari, jarima ballari, telefonda gaplashish, guvohnomadan mahrum qilish",
    "icon": "💰",
    "badge": "Qonun"
  },
  {
    "id": "safety_firstaid",
    "title": "🩹 Xavfsizlik & Tibbiy Yordam",
    "desc": "Arterial qon ketish, jqut qo'yish, yurak-o'pka reanimatsiyasi, aptechka va kamar",
    "icon": "🚑",
    "badge": "Xavfsizlik"
  },
  {
    "id": "technical_rules",
    "title": "🔧 Texnik Xavfsizlik & Nosozliklar",
    "desc": "Tormoz, rul lyufti (max 10°), protektor balandligi (1.6mm), yong'in o'chirgich",
    "icon": "🛠️",
    "badge": "Texnik ko'rik"
  }
];

const YHQ_QUESTIONS = [
  {
    "id": 1,
    "ticket": 1,
    "category": "new_2026",
    "categoryName": "⚡ 2024–2026 Yangi Qoidalar",
    "isNew2026": true,
    "q": "Toshkent shahri, Nukus va viloyatlar markazlaridagi aholi punktlarida transport vositalarining ruxsat etilgan eng yuqori tezligi necha km/soat?",
    "options": [
      "A) 70 km/soat",
      "B) 60 km/soat (Vazirlar Mahkamasi qarori bilan tasdiqlangan)",
      "C) 65 km/soat",
      "D) Faqat tirbandlikda 50 km/soat"
    ],
    "correct": 1,
    "rule": "YHQ 78-band (yangi tahrir): Toshkent shahri, Nukus shahri va viloyatlar markazlarida tezlik soatiga 60 km dan oshmasligi kerak.",
    "fine": "MJtK 128-3-modda: Tezlikni 20 km/soatgacha oshirish — 1 BHM (375.000 so'm).",
    "explanation": "2023-yildan poytaxt va viloyat markazlarida aholi punktlarida maksimal tezlik 70 dan 60 km/soatga tushirilgan.",
    "svgType": "speed_sign_60"
  },
  {
    "id": 2,
    "ticket": 1,
    "category": "new_2026",
    "categoryName": "⚡ 2024–2026 Yangi Qoidalar",
    "isNew2026": true,
    "q": "Maktablar va bog'chalarga tutash yo'l qismlarida kamida 300 metr masofada ruxsat etilgan maksimal tezlik qancha?",
    "options": [
      "A) 40 km/soat",
      "B) 50 km/soat",
      "C) 30 km/soat",
      "D) 20 km/soat faqat dars paytida"
    ],
    "correct": 2,
    "rule": "YHQ 78-1-band: Maktab va maktabgacha ta'lim tashkilotlari oldidagi yo'llarda 300 metrgacha masofada tezlik soatiga 30 kilometrdan oshmasligi shart.",
    "fine": "MJtK 128-3-modda: Tezlikni oshirish uchun ma'muriy jarima qo'llaniladi.",
    "explanation": "Bolalar xavfsizligini ta'minlash maqsadida ta'lim maskanlari atrofida qat'iy 30 km/soat cheklovi amal qiladi.",
    "svgType": "school_zone_30"
  },
  {
    "id": 3,
    "ticket": 1,
    "category": "new_2026",
    "categoryName": "⚡ 2024–2026 Yangi Qoidalar",
    "isNew2026": true,
    "q": "A-polosa (jamoat transporti uchun ajratilgan yo'lak)da yengil avtomobillarning harakatlanishiga qachon ruxsat beriladi?",
    "options": [
      "A) Uzuq-uzuq chiziq bor joyda yo'lovchini mindirish/tushirish yoki o'ngga burilish uchun",
      "B) Har doim, agar orqadan avtobus kelmayotgan bo'lsa",
      "C) Tirbandlikda tezroq o'tib ketish uchun",
      "D) Kechasi soat 21:00 dan keyin"
    ],
    "correct": 0,
    "rule": "YHQ 18.2-band: Jamoat transporti yo'lagi uzuq-uzuq chiziq bilan ajratilgan bo'lsa, yo'lovchi chiqarish/tushirish va o'ngga burilish uchun kirish mumkin.",
    "fine": "MJtK 128-modda: Ajratilgan yo'lak qoidasini buzish — 1.5 BHM (562.500 so'm).",
    "explanation": "Avtobuslarga xalaqit bermagan holda faqat uzuq-uzuq chiziqdan burilish yoki yo'lovchi mindirish/tushirish uchun kirish ruxsat etiladi.",
    "svgType": "bus_lane_A"
  },
  {
    "id": 4,
    "ticket": 1,
    "category": "new_2026",
    "categoryName": "⚡ 2024–2026 Yangi Qoidalar",
    "isNew2026": true,
    "q": "Elektr samakatlar (individual harakatlanish vositalari) piyodalar yo'lkasida qanday maksimal tezlikda yurishi mumkin?",
    "options": [
      "A) 25 km/soat",
      "B) 20 km/soatdan oshmagan holda va piyodaga xalaqit bermasdan",
      "C) 30 km/soat",
      "D) Piyodalar yo'lkasida yurish taqiqlanadi"
    ],
    "correct": 1,
    "rule": "YHQ 24-band: Individual harakatlanish vositalari piyodalar yo'lkasi va veloyo'lkada maksimal 20 km/soat tezlikda harakatlanishi shart.",
    "fine": "MJtK 128-modda: Piyodalar xavfsizligini buzganlik uchun javobgarlik belgilanadi.",
    "explanation": "Piyodalar yo'lkasida piyoda mutlaq ustunlikka ega, samakat tezligi 20 km/soatdan oshmasligi shart.",
    "svgType": "scooter_crossing"
  },
  {
    "id": 5,
    "ticket": 1,
    "category": "speed_limits",
    "categoryName": "🏎️ Tezlik & Radar Qoidalari",
    "isNew2026": true,
    "q": "Avtomatlashtirilgan fotoradarlar va kameralar qayd etgan tezlik ko'rsatkichidan qancha texnik xatolik chegiriladi?",
    "options": [
      "A) Xatolik chegirilmaydi",
      "B) 5 km/soat chegiriladi (Vazirlar Mahkamasining 377-son qarori)",
      "C) 10 km/soat chegiriladi",
      "D) 3 km/soat chegiriladi"
    ],
    "correct": 1,
    "rule": "VM 377-son qarori: Fotoradar va maxsus vositalar orqali o'lchangan tezlikdan qurilma xatoligi uchun 5 km/soat chegirib jarima hisoblanadi.",
    "fine": "Chegirilgandan keyin qolgan ortiqcha tezlikka qarab MJtK 128-3-modda qo'llaniladi.",
    "explanation": "Masalan, 60 hududda radar 64 qayd etsa, 5 km/soat chegirilib 59 hisoblanadi va jarima yozilmaydi.",
    "svgType": "radar_tolerance"
  },
  {
    "id": 6,
    "ticket": 1,
    "category": "intersections",
    "categoryName": "🚦 Chorrahalar & Aylanalar",
    "isNew2026": true,
    "q": "4.3 'Aylana bo'ylab harakatlanish' (krug) belgisida agar imtiyoz belgilari bo'lmasa, qaysi transport vositasi ustunlikka ega?",
    "options": [
      "A) Aylanaga kirib kelayotgan (o'ng tomondagi) mashina",
      "B) Aylanada (krug ichida) harakatlanayotgan mashina",
      "C) Faqat yuk avtomobillari",
      "D) Kattaroq tezlikda kelayotgan mashina"
    ],
    "correct": 1,
    "rule": "YHQ 110-band (yangi tahrir): 4.3 belgisi o'rnatilgan aylanada harakatlanayotgan transport vositalari aylanaga kirib kelayotganlarga nisbatan ustunlikka ega.",
    "fine": "MJtK 128-modda: Ustunlikka ega transportga yo'l bermaslik — 1 BHM (375.000 so'm).",
    "explanation": "Yangi qoidalarga binoan, aylanma chorrahada aylana ichidagi mashina birinchi o'tadi, aylanaga kirayotgan har bir haydovchi yo'l berishi shart.",
    "svgType": "sign_roundabout_4_3"
  },
  {
    "id": 7,
    "ticket": 1,
    "category": "fines_mjtk",
    "categoryName": "⚖️ Jarimalar & MJtK Moddalari",
    "isNew2026": false,
    "q": "Harakat vaqtida haydovchining telefondan qo'lda foydalanishi uchun qanday jarima belgilangan?",
    "options": [
      "A) 1 BHM",
      "B) 2 BHM",
      "C) 3 BHM (1.125.000 so'm)",
      "D) Faqat ogohlantirish"
    ],
    "correct": 2,
    "rule": "MJtK 128-1-modda: Transport vositasini boshqarish vaqtida haydovchilarning telefondan foydalanishi — 3 BHM miqdorida jarima solishga sabab bo'ladi.",
    "fine": "MJtK 128-1-modda: 3 BHM (1.125.000 so'm). Quloqlik (hands-free) orqali ruxsat etiladi.",
    "explanation": "Rulda telefonni qo'lda ushlab gaplashish yoki xabar yozish qat'iyan man etiladi va 3 BHM jarimaga sabab bo'ladi.",
    "svgType": "no_phone_rule"
  },
  {
    "id": 8,
    "ticket": 1,
    "category": "fines_mjtk",
    "categoryName": "⚖️ Jarimalar & MJtK Moddalari",
    "isNew2026": false,
    "q": "Svetoforning qizil chirog'ida Stop-liniya (1.12 chizig'i)ni bosib o'tganlik uchun qanday jarima qo'llaniladi?",
    "options": [
      "A) 0.5 BHM (187.500 so'm)",
      "B) 2 BHM (750.000 so'm)",
      "C) 1 BHM (375.000 so'm)",
      "D) Jarima yo'q, agar chorrahaga kirmasa"
    ],
    "correct": 0,
    "rule": "MJtK 128-4-modda: Svetoforning taqiqlovchi signalida to'xtash chizig'ini (Stop-liniya) bosib o'tish — 0.5 BHM miqdorida jarima solishga sabab bo'ladi.",
    "fine": "MJtK 128-4-modda 1-qism: 0.5 BHM (187.500 so'm).",
    "explanation": "Stop-liniyadan o'tib to'xtash 0.5 BHM, agar chorrahani qizilda kesib o'tib ketsa 2 BHM jarima hisoblanadi.",
    "svgType": "stop_line_violation"
  },
  {
    "id": 9,
    "ticket": 1,
    "category": "fines_mjtk",
    "categoryName": "⚖️ Jarimalar & MJtK Moddalari",
    "isNew2026": false,
    "q": "Svetoforning taqiqlovchi (qizil) chirog'ida chorrahaga kirib harakatlanganlik uchun qanday jarima qo'llaniladi?",
    "options": [
      "A) 1 BHM",
      "B) 2 BHM (750.000 so'm)",
      "C) 3 BHM",
      "D) 5 BHM"
    ],
    "correct": 1,
    "rule": "MJtK 128-4-modda 2-qism: Svetoforning taqiqlovchi signaliga yoki tartibga soluvchining taqiqlovchi ishorasiga bo'ysunmasdan o'tish — 2 BHM jarima.",
    "fine": "MJtK 128-4-modda 2-qism: 2 BHM (750.000 so'm). Bir yil ichida takrorlansa — 5 BHM.",
    "explanation": "Qizil chiroqqa o'tish jiddiy xavf tug'diruvchi qoidabuzarlik hisoblanadi.",
    "svgType": "red_light_crossing"
  },
  {
    "id": 10,
    "ticket": 1,
    "category": "safety_firstaid",
    "categoryName": "🩹 Xavfsizlik & Tibbiy Yordam",
    "isNew2026": false,
    "q": "Old o'rindiqdagi yo'lovchi va haydovchi xavfsizlik kamarini taqishi majburiymi?",
    "options": [
      "A) Faqat shahar tashqarisidagi yo'llarda majburiy",
      "B) Ha, harakatlanish boshlanishidan oldin taqish shart",
      "C) Faqat tezlik 60 dan oshsa majburiy",
      "D) Faqat YPX inspektori ko'ringanda taqiladi"
    ],
    "correct": 1,
    "rule": "YHQ 9-band: Konstruksiyasida xavfsizlik kamarlari ko'zda tutilgan transport vositasini boshqarayotgan haydovchi va yo'lovchilar kamarni taqib olishlari shart.",
    "fine": "MJtK 125-modda: Xavfsizlik kamarini taqmaslik — 0.5 BHM (187.500 so'm).",
    "explanation": "Xavfsizlik kamari har qanday tezlikda inson hayotini asrab qoluvchi asosiy vositadir.",
    "svgType": "seatbelt_rule"
  },
  {
    "id": 11,
    "ticket": 1,
    "category": "fines_mjtk",
    "categoryName": "⚖️ Jarimalar & MJtK Moddalari",
    "isNew2026": false,
    "q": "O'zbekistonda haydovchining qonida qancha promille spirt bo'lishiga qonunan ruxsat berilgan?",
    "options": [
      "A) 0.3 promille",
      "B) 0.2 promille",
      "C) Mutlaqo 0.0 promille (nol tolerantlik)",
      "D) 0.5 promille"
    ],
    "correct": 2,
    "rule": "YHQ 12-band va MJtK 131-modda: Transport vositasini har qanday darajadagi mastlik holatida boshqarish qat'iyan taqiqlanadi (0.0 promille).",
    "fine": "MJtK 131-modda: 25 BHM jarima va 1.5 yildan 3 yilgacha haydovchilik huquqidan mahrum qilish.",
    "explanation": "O'zbekiston qonunchiligida mast holda rulga o'tirishga hech qanday ruxsat etilgan me'yor yo'q, darhol huquqdan mahrum qilinadi.",
    "svgType": "no_alcohol_rule"
  },
  {
    "id": 12,
    "ticket": 1,
    "category": "intersections",
    "categoryName": "🚦 Chorrahalar & Aylanalar",
    "isNew2026": false,
    "q": "Tartibga solinmagan piyodalar o'tish joyi (zebra)ga qadam qo'ygan piyodaga haydovchi nima qilishi shart?",
    "options": [
      "A) Signal chalib, tezlikni oshirib o'tib ketish",
      "B) Sekinlashishi va piyodaga to'liq yo'l berishi shart",
      "C) Faqat piyoda qo'l ko'targan holda to'xtash",
      "D) Faqat bolalar bo'lsa yo'l berish"
    ],
    "correct": 1,
    "rule": "YHQ 113-band: Tartibga solinmagan piyodalar o'tish joyida haydovchi qatnov qismiga kirgan piyodalarga yo'l berishi shart.",
    "fine": "MJtK 128-modda: Piyodaga yo'l bermaslik — 1 BHM (375.000 so'm).",
    "explanation": "Zebra chizig'ida piyodalar mutlaq ustuvorlikka ega, haydovchi to'liq to'xtab o'tkazib yuborishi shart.",
    "svgType": "pedestrian_priority"
  },
  {
    "id": 13,
    "ticket": 1,
    "category": "maneuvers",
    "categoryName": "🚗 Qayta Tizilish & Quvib O'tish",
    "isNew2026": false,
    "q": "Burilish yoki qayta tizilishdan oldin burilish ko'rsatkichlari (pavarotnik) qachon yoqilishi shart?",
    "options": [
      "A) Burilayotgan soniyaning o'zida",
      "B) Manevr boshlanishidan oldin, boshqa haydovchilarni o'z vaqtida ogohlantirish uchun",
      "C) Faqat orqada YPX mashinasi turganda",
      "D) Faqat tunda"
    ],
    "correct": 1,
    "rule": "YHQ 57-band: Haydovchi manyovrni boshlashdan oldin tegishli yo'nalishdagi chiroqli burilish ko'rsatkichlari bilan signal berishi shart.",
    "fine": "MJtK 128-modda bo'yicha ma'muriy jarima qo'llaniladi.",
    "explanation": "Pavarotnik manyovr boshlanishidan oldinroq yoqilishi va manyovr tugashi bilanoq darhol o'chirilishi kerak.",
    "svgType": "turn_signal_rule"
  },
  {
    "id": 14,
    "ticket": 1,
    "category": "safety_firstaid",
    "categoryName": "🩹 Xavfsizlik & Tibbiy Yordam",
    "isNew2026": false,
    "q": "Avariya holatida to'xtaganda ogohlantiruvchi qizil uchburchak belgi aholi punktida mashinadan kamida qancha masofaga qo'yiladi?",
    "options": [
      "A) 5 metr",
      "B) 15 metr",
      "C) 30 metr",
      "D) 50 metr"
    ],
    "correct": 1,
    "rule": "YHQ 55-band: Falokatli to'xtash belgisi aholi punktlarida transport vositasidan kamida 15 metr, aholi punktlaridan tashqarida esa kamida 30 metr masofada o'rnatiladi.",
    "fine": "YHQ talablariga rioya etmaslik ma'muriy javobgarlikka sabab bo'ladi.",
    "explanation": "Boshqa haydovchilar to'xtab turgan mashinani uzoqdan ko'rib, sekinlashishga ulgurishi uchun aholi punktida 15m, trassada 30m masofa shart.",
    "svgType": "emergency_triangle_15"
  },
  {
    "id": 15,
    "ticket": 1,
    "category": "new_2026",
    "categoryName": "⚡ 2024–2026 Yangi Qoidalar",
    "isNew2026": true,
    "q": "Kunduzi harakatlanayotganda yaqinni yorituvchi faralar yoki kunduzgi chiroqlar (DRL)ni yoqish majburiymi?",
    "options": [
      "A) Faqat qish mavsumida va noqulay ob-havoda",
      "B) Har doim, har qanday ob-havoda barcha transportlar uchun",
      "C) Faqat yuk mashinalari uchun",
      "D) Kunduzi farani yoqish taqiqlanadi"
    ],
    "correct": 0,
    "rule": "YHQ 138-band (yangi tahrir): Kunduzgi vaqtda yaqinni yorituvchi chiroqlar bolalar guruhini tashiyotganda, noqulay ob-havoda va tuman paytida yoqilishi shart.",
    "fine": "Yoritish asboblaridan foydalanish qoidasini buzish — MJtK 128-modda.",
    "explanation": "Umumiy transportlar uchun kunduzi tiniq ob-havoda fara yoqish majburiyati bekor qilingan, ammo noqulay ob-havoda va maxsus transportlarda shart.",
    "svgType": "headlights_daytime"
  },
  {
    "id": 16,
    "ticket": 1,
    "category": "stopping_parking",
    "categoryName": "🅿️ To'xtash & To'xtab Turish",
    "isNew2026": false,
    "q": "Piyodalar o'tish joyi (zebra) oldida unga qancha masofa qolganda to'xtash taqiqlanadi?",
    "options": [
      "A) Kamida 5 metr",
      "B) Kamida 15 metr",
      "C) Kamida 20 metr",
      "D) To'g'ridan-to'g'ri zebra ustida to'xtash mumkin"
    ],
    "correct": 0,
    "rule": "YHQ 89-band: Piyodalar o'tish joylarida va ulardan oldin 5 metrdan yaqin masofada to'xtash taqiqlanadi.",
    "fine": "MJtK 128-6-modda: To'xtash qoidalarini buzish — 2 BHM (750.000 so'm).",
    "explanation": "Zebra oldida 5 metr masofada to'xtash taqiqlanadi, chunki bu boshqa haydovchilarning piyodalarni ko'rishiga to'siq bo'ladi.",
    "svgType": "stop_5m_pedestrian"
  },
  {
    "id": 17,
    "ticket": 1,
    "category": "stopping_parking",
    "categoryName": "🅿️ To'xtash & To'xtab Turish",
    "isNew2026": false,
    "q": "Yo'nalishli transport vositalari (avtobus) bekatlariga qancha masofada to'xtash va to'xtab turish taqiqlanadi?",
    "options": [
      "A) 5 metr",
      "B) 10 metr",
      "C) 15 metr (yo'lovchi mindirish/tushirishdan tashqari)",
      "D) 30 metr"
    ],
    "correct": 2,
    "rule": "YHQ 89-band: Bekat maydonchasidan, u bo'lmaganda 5.12 yoki 5.13 belgisidan 15 metrdan yaqin masofada to'xtash taqiqlanadi.",
    "fine": "MJtK 128-6-modda: 2 BHM (750.000 so'm).",
    "explanation": "Bekatga avtobuslarning xavfsiz kirib-chiqishi uchun 15 metr masofa doimo bo'sh qoldirilishi shart.",
    "svgType": "bus_stop_15m"
  },
  {
    "id": 18,
    "ticket": 1,
    "category": "fines_mjtk",
    "categoryName": "⚖️ Jarimalar & MJtK Moddalari",
    "isNew2026": true,
    "q": "Yo'l harakati qoidabuzarligi bo'yicha jarimani necha kun ichida to'lasa, 50% chegirma beriladi?",
    "options": [
      "A) 10 kun ichida",
      "B) 15 kun ichida",
      "C) 30 kun ichida",
      "D) Chegirma faqat pensiya yoshidagilarga beriladi"
    ],
    "correct": 1,
    "rule": "MJtK 332-1-modda: Jarima solish to'g'risidagi qaror topshirilgan kundan boshlab 15 kun ichida jarima miqdorining 50 foizi to'lansa, qolgan qismidan ozod qilinadi.",
    "fine": "15 kundan keyin to'liq 100% miqdor to'lanadi.",
    "explanation": "Qaror chiqqan kundan e'tiboran 15 kalendar kuni ichida to'lov qilinsa, haydovchi 50% tejaydi.",
    "svgType": "discount_50_fine"
  },
  {
    "id": 19,
    "ticket": 1,
    "category": "intersections",
    "categoryName": "🚦 Chorrahalar & Aylanalar",
    "isNew2026": false,
    "q": "Teng ahamiyatli chorrahada qarama-qarshi kelayotgan mashinalar bir vaqtda burilganda, kim kimga yo'l beradi?",
    "options": [
      "A) Chapga burilayotgan haydovchi to'g'riga va o'ngga burilayotganlarga yo'l beradi",
      "B) Chapga burilayotgan har doim birinchi o'tadi",
      "C) Katta yuk mashinasi birinchi o'tadi",
      "D) Kim tezroq kelsa o'sha o'tadi"
    ],
    "correct": 0,
    "rule": "YHQ 102-band: Chapga burilish yoki qayrilib olishda haydovchi qarama-qarshi yo'nalishdan to'g'riga va o'ngga harakatlanayotganlarga yo'l berishi shart.",
    "fine": "MJtK 128-modda: Chorrahada yo'l bermaslik — 1 BHM.",
    "explanation": "Chapga burilayotgan avtomobil qarama-qarshi oqimni kesib o'tgani uchun, to'g'riga va o'ngga buriluvchilarga to'liq yo'l berishi shart.",
    "svgType": "intersection_left_turn"
  },
  {
    "id": 20,
    "ticket": 1,
    "category": "speed_limits",
    "categoryName": "🏎️ Tezlik & Radar Qoidalari",
    "isNew2026": false,
    "q": "Aholi punktlaridan tashqaridagi oddiy (ajratuvchi polosasi bo'lmagan) yo'llarda yengil avtomobillarning ruxsat etilgan tezligi qancha?",
    "options": [
      "A) 90 km/soat",
      "B) 100 km/soat",
      "C) 110 km/soat",
      "D) 80 km/soat"
    ],
    "correct": 1,
    "rule": "YHQ 78-band: Aholi punktlaridan tashqarida yengil avtomobillar va to'la vazni 3.5 tonnadan oshmaydigan yuk avtomobillariga soatiga 100 kilometrgacha ruxsat etiladi.",
    "fine": "MJtK 128-3-modda bo'yicha ortiqcha tezlikka jarima belgilanadi.",
    "explanation": "Trassada yengil avtomobillar uchun 100 km/soat, avtomagistralda esa 110 km/soat etib belgilangan.",
    "svgType": "speed_highway_100"
  },
  {
    "id": 21,
    "ticket": 2,
    "category": "road_signs",
    "categoryName": "🛑 Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "Sariq va oq romb shaklidagi 2.1 'Bosh yo'l' belgisi tartibga solinmagan chorrahada qanday imtiyoz beradi?",
    "options": [
      "A) Faqat yuk mashinalariga yo'l berish shartini",
      "B) Tartibga solinmagan chorrahada birinchi bo'lib o'tish imtiyozini",
      "C) Tezlikni 100 km/soatgacha oshirish majburiyatini",
      "D) O'ng tomondagi barcha mashinalarni o'tkazib yuborishni"
    ],
    "correct": 1,
    "rule": "YHQ 2.1-band: 'Bosh yo'l' belgisi tartibga solinmagan chorrahalarda haydovchiga birinchi bo'lib o'tish huquqini beradi.",
    "fine": "MJtK 128-modda: Bosh yo'ldagi transportga yo'l bermaslik — 1 BHM (375.000 so'm).",
    "explanation": "2.1 belgisi o'rnatilgan yo'lda kelayotgan haydovchi ikkinchi darajali yo'ldagilarga nisbatan ustunlikka ega.",
    "svgType": "sign_main_road_2_1"
  },
  {
    "id": 22,
    "ticket": 2,
    "category": "road_signs",
    "categoryName": "🛑 Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "Teskari qizil uchburchak shaklidagi 2.4 'Yo'l bering' belgisi o'rnatilgan chorrahaga yaqinlashganda nima qilish shart?",
    "options": [
      "A) Signal chalib, tezlikni oshirish",
      "B) Kesib o'tilayotgan (bosh yo'ldagi) barcha transport vositalariga yo'l berish",
      "C) Yo'lda hech kim bo'lmasa ham kamida 1 daqiqa kutish",
      "D) Faqat svetofor yo'q bo'lsa quvib o'tish"
    ],
    "correct": 1,
    "rule": "YHQ 2.4-band: 'Yo'l bering' — haydovchi kesib o'tilayotgan yo'ldan kelayotganlarga yo'l berishi shart.",
    "fine": "MJtK 128-modda: Yo'l bermaslik — 1 BHM (375.000 so'm).",
    "explanation": "2.4 belgisi haydovchini ikkinchi darajali yo'lda ekanligini bildiradi va bosh yo'ldagilarga yo'l berishni talab qiladi.",
    "svgType": "sign_yield_2_4"
  },
  {
    "id": 23,
    "ticket": 2,
    "category": "road_signs",
    "categoryName": "🛑 Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "Qizil sakkizburchak shaklidagi 2.5 'STOP' belgisi oldida to'xtash majburiymi?",
    "options": [
      "A) Yo'lda boshqa mashina ko'rinmasa to'xtamasdan o'tsa bo'ladi",
      "B) Ha, yo'l mutlaqo bo'sh bo'lsa ham Stop-liniya oldida majburiy to'liq to'xtash shart",
      "C) Faqat tezlik 60 dan yuqori bo'lsa to'xtaladi",
      "D) Faqat YPX xodimi turganda to'xtaladi"
    ],
    "correct": 1,
    "rule": "YHQ 2.5-band: 'To'xtamasdan harakatlanish taqiqlanadi' — Stop-liniya oldida to'xtamasdan o'tish taqiqlanadi.",
    "fine": "MJtK 128-modda: Stop belgisi talabini buzish — 1 BHM (375.000 so'm).",
    "explanation": "2.5 belgisi oldida g'ildiraklar to'liq to'xtashi shart (sekinlashib o'tib ketish qoidabuzarlik hisoblanadi).",
    "svgType": "sign_stop_2_5"
  },
  {
    "id": 24,
    "ticket": 2,
    "category": "road_signs",
    "categoryName": "🛑 Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "Qizil doira ichida oq to'rtburchak (3.1 'Kirish taqiqlanadi' / 'G'isht') belgisi ta'sir zonasiga kim kira oladi?",
    "options": [
      "A) Shu ko'chada yashovchi barcha fuqarolar",
      "B) Belgilangan yo'nalishli jamoat transport vositalari (avtobuslar)",
      "C) Faqat Damas va taksilar",
      "D) Barcha yengil avtomobillar"
    ],
    "correct": 1,
    "rule": "YHQ 3.1-band: 'Kirish taqiqlanadi' belgisi barcha transportlarning kirishini taqiqlaydi, yo'nalishli transportlar bundan mustasno.",
    "fine": "MJtK 128-modda: Taqiqlovchi belgi talabiga rioya qilmaslik — 1 BHM (375.000 so'm).",
    "explanation": "'G'isht' belgisi bir tomonlama yo'lning qarama-qarshi tomoniga o'rnatiladi va jamoat transportidan boshqa hammaga kirishni man etadi.",
    "svgType": "sign_no_entry_3_1"
  },
  {
    "id": 25,
    "ticket": 2,
    "category": "road_signs",
    "categoryName": "🛑 Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "Ko'k fonda ikkita qizil kesishgan chiziq (3.27 'To'xtash taqiqlanadi' X) belgisi nimani bildiradi?",
    "options": [
      "A) 5 daqiqagacha to'xtasa bo'ladi",
      "B) Transport vositalarining to'xtashini ham, to'xtab turishini ham mutlaqo taqiqlaydi",
      "C) Faqat kechasi to'xtash mumkin",
      "D) Faqat yuk tushirishga ruxsat beradi"
    ],
    "correct": 1,
    "rule": "YHQ 3.27-band: 'To'xtash taqiqlanadi' — transport vositalarining to'xtashi va to'xtab turishi taqiqlanadi.",
    "fine": "MJtK 128-6-modda: 2 BHM (750.000 so'm).",
    "explanation": "3.27 (X) belgisi hatto 1 soniyaga ham to'xtashni man etadi (avtobus bekatlari mustasno).",
    "svgType": "sign_no_stopping_3_27"
  },
  {
    "id": 26,
    "ticket": 2,
    "category": "road_signs",
    "categoryName": "🛑 Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "Ko'k fonda bitta qizil qiya chiziq tushirilgan 3.28 'To'xtab turish taqiqlanadi' (/) belgisi nimaga ruxsat beradi?",
    "options": [
      "A) Mashinani ertalabgacha qoldirib ketishga",
      "B) Yo'lovchini chiqarish/tushirish yoki yuk ortish uchun 5 daqiqagacha to'xtashga",
      "C) Istalgan vaqt davomida to'xtab turishga",
      "D) Hech narsaga ruxsat bermaydi"
    ],
    "correct": 1,
    "rule": "YHQ 3.28-band: 5 daqiqagacha bo'lgan to'xtashga, yo'lovchi mindirish/tushirish bilan bog'liq bo'lsa undan ko'proqqa ruxsat etiladi.",
    "fine": "MJtK 128-6-modda: 2 BHM (750.000 so'm).",
    "explanation": "3.28 belgisida qisqa to'xtash (5 daqiqagacha) mumkin, ammo uzoq muddatli to'xtab turish (stoyanka) taqiqlanadi.",
    "svgType": "sign_no_parking_3_28"
  },
  {
    "id": 27,
    "ticket": 2,
    "category": "road_signs",
    "categoryName": "🛑 Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "Ko'k doira ichida oq strelka yuqoriga qaragan (4.1.1 'Harakat faqat to'g'riga') belgisi oldida qaysi tomonga burilish mumkin?",
    "options": [
      "A) O'ngga va chapga erkin burilish mumkin",
      "B) Faqat to'g'ri yo'nalishda harakatlanish shart, burilish taqiqlanadi",
      "C) Faqat qayrilib olishga ruxsat beriladi",
      "D) Qizil chiroqda burilish mumkin"
    ],
    "correct": 1,
    "rule": "YHQ 4.1.1-band: Buyuruvchi belgi — faqat ko'rsatilgan (to'g'ri) yo'nalishda harakatlanishga ruxsat beradi.",
    "fine": "MJtK 128-modda: Buyuruvchi belgi talabini buzish — 1 BHM.",
    "explanation": "4.1.1 chorraha oldiga qo'yilsa, shu chorrahada burilish yoki qayrilib olish taqiqlanadi.",
    "svgType": "sign_mandatory_straight_4_1_1"
  },
  {
    "id": 28,
    "ticket": 2,
    "category": "road_signs",
    "categoryName": "🛑 Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "Ko'k kvadrat ichida oq uchburchak va piyoda tasvirlangan 5.16 belgisi nimani anglatadi?",
    "options": [
      "A) Yer osti piyodalar yo'lini",
      "B) Piyodalar o'tish joyi chegarasini va haydovchining yo'l berish majburiyatini",
      "C) Piyodalarning yo'lga chiqishi taqiqlanganini",
      "D) Bolalar bog'chasini"
    ],
    "correct": 1,
    "rule": "YHQ 5.16.1, 5.16.2-bandlar: Piyodalar o'tish joyining chegaralarini belgilaydi.",
    "fine": "MJtK 128-modda: Piyodaga yo'l bermaslik — 1 BHM.",
    "explanation": "5.16 belgisi tartibga solinmagan piyodalar o'tish joyi chegaralarini belgilaydi.",
    "svgType": "sign_pedestrian_crossing_5_16"
  },
  {
    "id": 29,
    "ticket": 2,
    "category": "road_signs",
    "categoryName": "🛑 Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "Qizil uchburchak ichida yugurayotgan bolalar tasvirlangan (1.23 'Bolalar') belgisi nimadan ogohlantiradi?",
    "options": [
      "A) Bolalarni mashinada tashish taqiqlanganidan",
      "B) Maktab yoki bog'chaga tutash yo'lda to'satdan bolalar chiqib qolish xavfidan",
      "C) Bolalar veloyo'lagidan",
      "D) Piyodalar yo'qligidan"
    ],
    "correct": 1,
    "rule": "YHQ 1.23-band: Bolalar muassasalariga tutash yo'l qismida bolalar paydo bo'lish xavfi haqida ogohlantiradi.",
    "fine": "Ogohlantiruvchi belgi: haydovchi tezlikni pasaytirishi shart.",
    "explanation": "Ushbu belgini ko'rganda haydovchi darhol tezlikni kamaytirishi va tormoz bosishga tayyor turishi lozim.",
    "svgType": "sign_warning_children_1_23"
  },
  {
    "id": 30,
    "ticket": 2,
    "category": "road_signs",
    "categoryName": "🛑 Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "Qizil doira ichida chapga buriluvchi qizil chiziq bilan chizilgan (3.18.2) belgi qayrilib olishga ruxsat beradimi?",
    "options": [
      "A) Yo'q, qayrilib olish ham taqiqlanadi",
      "B) Ha, belgi faqat chapga burilishni taqiqlaydi, qayrilib olishga ruxsat beradi",
      "C) Faqat yuk mashinalariga ruxsat beradi",
      "D) Faqat tunda ruxsat beradi"
    ],
    "correct": 1,
    "rule": "YHQ 3.18.2-band: 'Chapga burilish taqiqlanadi' belgisi faqat chapga burilishni taqiqlaydi, qayrilib olishni taqiqlamaydi.",
    "fine": "MJtK 128-modda: Belgiga rioya qilmaslik — 1 BHM.",
    "explanation": "Bu YHQ imtihonlarining eng mashhur savoli: 3.18.2 belgisi qayrilib olishni man etmaydi!",
    "svgType": "sign_no_left_turn_3_18_2"
  },
  {
    "id": 31,
    "ticket": 2,
    "category": "road_signs",
    "categoryName": "🛑 Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "Qatnov qismidagi 1.1 sidirg'a (yaxlit oq) chiziqni bosib o'tish yoki kesib o'tish mumkinmi?",
    "options": [
      "A) Xohlagan vaqtda bosib o'tish mumkin",
      "B) Qat'iyan taqiqlanadi (faqat ruxsat etilgan favqulodda to'xtash hollari bundan mustasno)",
      "C) Tezlik 40 dan past bo'lsa mumkin",
      "D) Signal chalib bosib o'tish mumkin"
    ],
    "correct": 1,
    "rule": "YHQ 1-ilova (yo'l chiziqlari): 1.1 chizig'ini kesib o'tish taqiqlanadi.",
    "fine": "MJtK 128-modda: Chiziq talabini buzish — 0.5 BHM.",
    "explanation": "1.1 yaxlit chizig'i transport oqimlarini ajratadi va uni bosib manyovr qilish qat'iyan man etiladi.",
    "svgType": "line_solid_1_1"
  },
  {
    "id": 32,
    "ticket": 2,
    "category": "road_signs",
    "categoryName": "🛑 Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "Qizil doira ichida qora va qizil yengil mashinalar tasvirlangan (3.20) belgi nimani taqiqlaydi?",
    "options": [
      "A) To'xtashni",
      "B) Barcha transport vositalarini quvib o'tishni (soatiga 30 km dan kam tezlikdagi yakka transportlar bundan mustasno)",
      "C) O'ng tomondan quvib o'tishni",
      "D) Qaytadan tizilishni"
    ],
    "correct": 1,
    "rule": "YHQ 3.20-band: 'Quvib o'tish taqiqlanadi' — barcha transport vositalarini quvib o'tish taqiqlanadi.",
    "fine": "MJtK 128-modda: Quvib o'tish qoidasini buzish — 1 BHM.",
    "explanation": "3.20 belgisi hududida qarama-qarshi polosaga chiqib quvib o'tish taqiqlanadi.",
    "svgType": "sign_no_overtaking_3_20"
  },
  {
    "id": 33,
    "ticket": 2,
    "category": "road_signs",
    "categoryName": "🛑 Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "Oq doira qizil gardish bilan o'ralgan, ichida hech qanday tasvir bo'lmagan (3.2) belgi nimani bildiradi?",
    "options": [
      "A) Piyodalar yo'li",
      "B) 'Harakatlanish taqiqlanadi' — barcha transportlarning harakatlanishini taqiqlaydi",
      "C) Tezlik cheklanmagan",
      "D) Yo'l ta'mirlanmoqda"
    ],
    "correct": 1,
    "rule": "YHQ 3.2-band: 'Harakatlanish taqiqlanadi' — barcha transport vositalarining harakatlanishi taqiqlanadi (shu zonada yashovchilar va xizmat ko'rsatuvchilar mustasno).",
    "fine": "MJtK 128-modda: 1 BHM.",
    "explanation": "3.2 belgisi harakatni ikki tomondan ham taqiqlaydi, lekin shu hududda yashovchilar uyiga borishi mumkin.",
    "svgType": "sign_no_traffic_3_2"
  },
  {
    "id": 34,
    "ticket": 2,
    "category": "road_signs",
    "categoryName": "🛑 Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "Qizil doira ichida qora '70' raqami yozilgan (3.24) belgi nimani anglatadi?",
    "options": [
      "A) Minimal tezlik 70 km/soat",
      "B) Tavsiya etilgan tezlik",
      "C) Yuqori tezlik cheklangan — soatiga 70 km dan ortiq tezlikda harakatlanish taqiqlanadi",
      "D) Yuk mashinalari uchun tezlik"
    ],
    "correct": 2,
    "rule": "YHQ 3.24-band: 'Yuqori tezlik cheklangan' — belgida ko'rsatilgandan ortiq tezlikda harakatlanish taqiqlanadi.",
    "fine": "MJtK 128-3-modda bo'yicha ortiqcha tezlikka qarab jarima.",
    "explanation": "Ko'rsatilgan raqamdan oshirib haydash qoidabuzarlik hisoblanadi.",
    "svgType": "sign_speed_limit_70"
  },
  {
    "id": 35,
    "ticket": 2,
    "category": "road_signs",
    "categoryName": "🛑 Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "Yashil to'rtburchak fonda ikkita yo'l va ko'prik tasvirlangan 5.1 'Avtomagistral' belgisida qaysi harakat taqiqlanadi?",
    "options": [
      "A) 100 km/soat tezlikda yurish",
      "B) Piyodalar, velosipedlar, ot-aravalarning harakati hamda orqaga harakatlanish va qayrilib olish",
      "C) O'ng qatorda harakatlanish",
      "D) Kunduzi chiroqlarni yoqish"
    ],
    "correct": 1,
    "rule": "YHQ 16-bo'lim: Avtomagistrallarda piyodalar, velosipedlar, texnik tezligi 40 km/soatdan kam transportlar harakati, qayrilib olish va orqaga yurish taqiqlanadi.",
    "fine": "MJtK 128-modda: Avtomagistral qoidalarini buzish.",
    "explanation": "Avtomagistral yuqori tezlikdagi xavfsiz yo'l bo'lgani uchun sekin harakatlanuvchi vositalar va qayrilib olish qat'iyan taqiqlanadi.",
    "svgType": "sign_motorway_5_1"
  },
  {
    "id": 36,
    "ticket": 2,
    "category": "road_signs",
    "categoryName": "🛑 Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "Ko'k kvadrat ichida oq 'P' harfi tasvirlangan 5.15 belgisi nimani bildiradi?",
    "options": [
      "A) Yoqilg'i quyish shoxobchasi",
      "B) To'xtab turish joyi (Parkovka)",
      "C) Piyodalar yo'lkasi",
      "D) Politsiya posti"
    ],
    "correct": 1,
    "rule": "YHQ 5.15-band: 'To'xtab turish joyi' — transport vositalarini to'xtab turishiga ruxsat etilgan maydoncha.",
    "fine": "Qoidaga muvofiq to'xtab turish uchun jarima yo'q.",
    "explanation": "5.15 belgisi transport vositalarini qoldirib ketish xavfsiz bo'lgan maxsus parkovka hududini belgilaydi.",
    "svgType": "sign_parking_5_15"
  },
  {
    "id": 37,
    "ticket": 2,
    "category": "road_signs",
    "categoryName": "🛑 Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "Qizil uchburchak ichida qora undov (!) belgisi tasvirlangan 1.30 belgisi nimani anglatadi?",
    "options": [
      "A) Yo'l tamom bo'ldi",
      "B) 'Boshqa xavflar' — boshqa ogohlantiruvchi belgilar bilan ko'zda tutilmagan xavf mavjud bo'lgan yo'l qismi",
      "C) Jarima to'lash joyi",
      "D) To'xtash majburiy"
    ],
    "correct": 1,
    "rule": "YHQ 1.30-band: 'Boshqa xavflar' — yo'lda kutilmagan to'siq yoki xavfli holat yuzaga kelishi mumkinligi haqida ogohlantiradi.",
    "fine": "Ogohlantiruvchi belgi: haydovchi ehtiyotkorlikni oshirishi kerak.",
    "explanation": "Ushbu belgi oldida tezlikni kamaytirish va yo'l qoplamasiga diqqat qilish shart.",
    "svgType": "sign_danger_1_30"
  },
  {
    "id": 38,
    "ticket": 2,
    "category": "road_signs",
    "categoryName": "🛑 Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "Oq fonda qizil xoch tasvirlangan 6.4 belgisi qanday servis xizmatini bildiradi?",
    "options": [
      "A) Dori-darmon do'koni",
      "B) Shifoxona yoki tibbiy yordam punkti",
      "C) Qizil yarim oy jamiyati",
      "D) Mehmonxona"
    ],
    "correct": 1,
    "rule": "YHQ 6.4-band: 'Tibbiy yordam punkti' — yaqin atrofda tez tibbiy yordam ko'rsatish punkti borligini bildiradi.",
    "fine": "Servis belgisi.",
    "explanation": "YTH yuz berganda yoki zarurat tug'ilganda eng yaqin tibbiy yordam maskanini ko'rsatadi.",
    "svgType": "sign_first_aid_6_4"
  },
  {
    "id": 39,
    "ticket": 2,
    "category": "road_signs",
    "categoryName": "🛑 Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "Yo'lda chizilgan qo'shaloq sidirg'a oq chiziq (1.3 chizig'i) qanday yo'llarga chiziladi?",
    "options": [
      "A) Bir polosali yo'llarga",
      "B) Harakatlanish uchun to'rtta va undan ortiq polosasi bo'lgan yo'llarga",
      "C) Faqat qishloq yo'llariga",
      "D) Faqat avtomagistralga"
    ],
    "correct": 1,
    "rule": "YHQ 1.3-chizig'i: To'rtta va undan ortiq polosali yo'llarda qarama-qarshi yo'nalishdagi transport oqimlarini ajratadi. Kesib o'tish taqiqlanadi.",
    "fine": "MJtK 128-modda: Qo'shaloq chiziqni bosish — javobgarlikka sabab bo'ladi.",
    "explanation": "Keng ko'chalarda qarama-qarshi oqimga chiqib ketmaslik uchun 1.3 qo'shaloq yaxlit chizig'i chiziladi.",
    "svgType": "line_double_solid_1_3"
  },
  {
    "id": 40,
    "ticket": 2,
    "category": "road_signs",
    "categoryName": "🛑 Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "Chorraha oldida ko'k kvadrat ichida oq strelkalar bilan chizilgan 5.8.1 belgisi nimani buyuradi?",
    "options": [
      "A) Yo'ldagi mashinalar sonini",
      "B) 'Polosalar bo'yicha harakatlanish yo'nalishlari' — har bir polosa bo'yicha ruxsat etilgan burilish va to'g'ri yurish yo'nalishini",
      "C) Tezlik chegarasini",
      "D) Yo'l qoplamasi holatini"
    ],
    "correct": 1,
    "rule": "YHQ 5.8.1-band: Polosalar bo'yicha harakatlanish yo'nalishlarini belgilaydi. Eng chap polosadan chapga burilishga ruxsat beruvchi belgi qayrilib olishga ham ruxsat beradi.",
    "fine": "MJtK 128-modda: Polosa bo'yicha harakat qoidasini buzish — 1 BHM.",
    "explanation": "Chorraha oldida o'z yo'nalishingizga mos polosani oldindan egallashingiz shart.",
    "svgType": "sign_lane_directions_5_8"
  },
  {
    "id": 41,
    "ticket": 3,
    "category": "intersections",
    "categoryName": "🚦 Chorrahalar & Aylanalar",
    "isNew2026": false,
    "q": "Teng ahamiyatli tartibga solinmagan chorrahada ikkita mashina to'qnash kelganda, kim kimga yo'l berishi shart?",
    "options": [
      "A) Chap tomonidagi mashinaga",
      "B) O'ng tomondan kelayotgan transport vositasiga ('O'ng qo'l qoidasi')",
      "C) Kichikroq mashinaga",
      "D) Qimmatroq avtomobilga"
    ],
    "correct": 1,
    "rule": "YHQ 101-band: Teng ahamiyatli yo'llar kesishgan chorrahada haydovchi o'ng tomondan kelayotgan transport vositalariga yo'l berishi shart.",
    "fine": "MJtK 128-modda: Chorrahada ustunlik bermaslik — 1 BHM.",
    "explanation": "Bu haydovchilar tilida 'O'ng qo'l qoidasi' deb ataladi: o'ng tomoningiz bo'sh bo'lsa o'tasiz, o'ngingizda mashina bo'lsa yo'l berasiz.",
    "svgType": "inter_right_hand_rule"
  },
  {
    "id": 42,
    "ticket": 3,
    "category": "intersections",
    "categoryName": "🚦 Chorrahalar & Aylanalar",
    "isNew2026": false,
    "q": "Teng ahamiyatli chorrahada tramvay va yengil avtomobil bir vaqtda yetib kelsa, kim birinchi o'tadi?",
    "options": [
      "A) Yengil avtomobil, agar u o'ngda bo'lsa",
      "B) Tramvay uning harakat yo'nalishidan qat'i nazar teng sharoitda ustunlikka ega",
      "C) Kim baland signal chalsa o'sha",
      "D) Faqat yo'lovchisi bor tramvay"
    ],
    "correct": 1,
    "rule": "YHQ 101-band: Teng ahamiyatli yo'llar kesishmasida tramvay uning harakat yo'nalishidan qat'i nazar retsiz transport vositalariga nisbatan ustunlikka ega.",
    "fine": "MJtK 128-modda: Tramvayga yo'l bermaslik — 1 BHM.",
    "explanation": "Teng huquqli sharoitda tramvay har doim yengil avtomobildan ustun hisoblanadi.",
    "svgType": "tram_priority_equal"
  },
  {
    "id": 43,
    "ticket": 3,
    "category": "intersections",
    "categoryName": "🚦 Chorrahalar & Aylanalar",
    "isNew2026": false,
    "q": "Chorrahada bosh yo'l yo'nalishi burilayotgan bo'lsa (7.13 belgisi o'rnatilgan), bosh yo'ldagilar o'zaro qanday o'tishadi?",
    "options": [
      "A) Katta tezlikdagisi o'tadi",
      "B) O'zaro teng ahamiyatli yo'llar qoidasiga ko'ra ('o'ng qo'l qoidasi' bo'yicha)",
      "C) Faqat to'g'riga ketayotgani o'tadi",
      "D) Signal chalgan birinchi o'tadi"
    ],
    "correct": 1,
    "rule": "YHQ 104-band: Agar bosh yo'l yo'nalishini o'zgartirsa, bosh yo'lda harakatlanayotgan haydovchilar o'zaro teng ahamiyatli chorrahani kesib o'tish qoidalariga amal qiladilar.",
    "fine": "MJtK 128-modda.",
    "explanation": "Bosh yo'ldagi ikki mashina o'rtasida o'ng tomondan keluvchi avtomobil ustunlikka ega bo'ladi.",
    "svgType": "main_road_bend_7_13"
  },
  {
    "id": 44,
    "ticket": 3,
    "category": "traffic_lights",
    "categoryName": "🚥 Svetofor & Regulyator",
    "isNew2026": false,
    "q": "Svetoforning asosiy yashil chirog'i yongan, lekin qo'shimcha chap strelkasi yonmagan bo'lsa, chapga burilish mumkinmi?",
    "options": [
      "A) Mumkin, chunki asosiy chiroq yashil",
      "B) Qat'iyan taqiqlanadi — qo'shimcha seksiya yongandagina shu yo'nalishda burilish mumkin",
      "C) Agar qarama-qarshi mashina bo'lmasa mumkin",
      "D) Faqat tunda mumkin"
    ],
    "correct": 1,
    "rule": "YHQ 38-band: Qo'shimcha seksiyali svetoforlarda seksiya o'chiq bo'lsa, shu strelka ko'rsatgan tomonga harakatlanish taqiqlanadi.",
    "fine": "MJtK 128-4-modda: Qizil chiroqqa tenglashtiriladi — 2 BHM (750.000 so'm).",
    "explanation": "Qo'shimcha strelka o'chiq turganda burilish svetoforning qizil chirog'iga o'tish bilan bir xil hisoblanadi!",
    "svgType": "traffic_light_arrow_off"
  },
  {
    "id": 45,
    "ticket": 3,
    "category": "traffic_lights",
    "categoryName": "🚥 Svetofor & Regulyator",
    "isNew2026": false,
    "q": "Svetoforning sariq miltillovchi chirog'i nimani bildiradi?",
    "options": [
      "A) Chorrahada to'xtash shartligini",
      "B) Chorrahaning tartibga solinmaganligini va haydovchi ehtiyotkorlik bilan imtiyoz belgilariga amal qilishi kerakligini",
      "C) Tezlikni 70 gacha oshirishni",
      "D) Svetofor buzilganini va harakat butunlay to'xtatilganini"
    ],
    "correct": 1,
    "rule": "YHQ 38-band: Sariq rangli miltillovchi signal harakatlanishga ruxsat beradi va chorrahaning tartibga solinmaganligidan ogohlantiradi.",
    "fine": "Imtiyoz belgilariga rioya qilmaslik — MJtK 128-modda.",
    "explanation": "Kechasi ko'p svetoforlar sariq miltillash rejimiga o'tadi — bu holatda imtiyoz belgilari yoki o'ng qo'l qoidasiga amal qilinadi.",
    "svgType": "traffic_light_flashing_yellow"
  },
  {
    "id": 46,
    "ticket": 3,
    "category": "traffic_lights",
    "categoryName": "🚥 Svetofor & Regulyator",
    "isNew2026": false,
    "q": "Tartibga soluvchi (YPX inspektori) o'ng qo'lini oldinga uzatib turganda, uning chap tomonidan kelayotgan avtomobil qaysi tomonga yurishi mumkin?",
    "options": [
      "A) Faqat to'g'riga",
      "B) Barcha yo'nalishlarda (to'g'riga, o'ngga, chapga va qayrilib olishga)",
      "C) Faqat o'ngga",
      "D) Harakat taqiqlanadi"
    ],
    "correct": 1,
    "rule": "YHQ 42-band: Tartibga soluvchining o'ng qo'li oldinga uzatilganda: chap yon tomondan retsiz transport vositalariga barcha yo'nalishlarda harakatlanishga ruxsat etiladi.",
    "fine": "MJtK 128-4-modda: Tartibga soluvchiga bo'ysunmaslik — 2 BHM.",
    "explanation": "Inspektorning chap tomonidan kelayotgan haydovchi uchun bu eng erkin holat: barcha tomonlarga burilish ruxsat etiladi.",
    "svgType": "regulator_left_side"
  },
  {
    "id": 47,
    "ticket": 3,
    "category": "traffic_lights",
    "categoryName": "🚥 Svetofor & Regulyator",
    "isNew2026": false,
    "q": "Tartibga soluvchi qo'lini yuqoriga ko'targanda kimlarga harakatlanish ruxsat etiladi?",
    "options": [
      "A) Barcha transport vositalari va piyodalarning harakati taqiqlanadi",
      "B) Faqat to'g'riga ketayotganlarga",
      "C) Faqat jamoat transportiga",
      "D) O'ng tomondagi mashinalarga"
    ],
    "correct": 0,
    "rule": "YHQ 42-band: Tartibga soluvchining qo'li yuqoriga ko'tarilganda — barcha transport vositalari va piyodalarning harakati taqiqlanadi.",
    "fine": "MJtK 128-4-modda: 2 BHM.",
    "explanation": "Qo'l yuqorida — bu svetoforning qizil va sariq chirog'iga teng bo'lib, hamma uchun mutlaq to'xtash signalidir.",
    "svgType": "regulator_arm_up"
  },
  {
    "id": 48,
    "ticket": 3,
    "category": "intersections",
    "categoryName": "🚦 Chorrahalar & Aylanalar",
    "isNew2026": false,
    "q": "Chorrahada tirbandlik hosil bo'lgan bo'lsa va haydovchi to'xtab qolib ko'ndalang harakatga xalaqit berishi aniq bo'lsa, unga chorrahaga kirish mumkinmi?",
    "options": [
      "A) Mumkin, agar svetofor yashil bo'lsa",
      "B) Taqiqlanadi, hatto svetofor yashil bo'lsa ham chorrahaga kirish taqiqlanadi",
      "C) Faqat signal chalib kirish mumkin",
      "D) Faqat o'ng qatordagilarga mumkin"
    ],
    "correct": 1,
    "rule": "YHQ 97-band: Haydovchi chorrahada yoki qatnov qismlari kesishmasida to'xtashga majbur bo'lib, ko'ndalang yo'nalishdagi harakatga to'sqinlik qiladigan tirbandlik yuzaga kelsa, chorrahaga kirish taqiqlanadi.",
    "fine": "MJtK 128-modda: 1 BHM.",
    "explanation": "Ko'cha tiqilib turgan bo'lsa, yashil chiroq yonsa ham chorraha markazini to'sib qo'ymaslik uchun stop-liniyada kutish shart.",
    "svgType": "gridlock_intersection"
  },
  {
    "id": 49,
    "ticket": 3,
    "category": "intersections",
    "categoryName": "🚦 Chorrahalar & Aylanalar",
    "isNew2026": false,
    "q": "Chorrahada yashil chiroqda kirgan haydovchi burilishni qachon yakunlashi kerak?",
    "options": [
      "A) Svetofor yana yashil bo'lishini kutib",
      "B) Chorrahadan chiqishdagi svetofor signalidan qat'i nazar, belgilangan yo'nalishda harakatni davom ettirib chiqib ketishi shart",
      "C) Qizil yongan zahoti to'xtab qolishi kerak",
      "D) Orqaga qayrilib olishi kerak"
    ],
    "correct": 1,
    "rule": "YHQ 100-band: Svetoforning ruxsat etuvchi signalida chorrahaga kirgan haydovchi chiqishdagi svetofor signalidan qat'i nazar belgilangan yo'nalishda harakatlanishi shart.",
    "fine": "Chorraha o'rtasida to'xtab qolish xavf tug'diradi.",
    "explanation": "Chorrahaga ruxsat etilgan paytda kirgan bo'lsangiz, ko'ndalang oqimga xalaqit bermay chiqib ketishingiz lozim.",
    "svgType": "intersection_clearance"
  },
  {
    "id": 50,
    "ticket": 3,
    "category": "traffic_lights",
    "categoryName": "🚥 Svetofor & Regulyator",
    "isNew2026": false,
    "q": "Tartibga soluvchi (inspektor)ning ishorasi svetofor chirog'i yoki yo'l belgilariga zid kelsa, haydovchi kimga bo'ysunadi?",
    "options": [
      "A) Yo'l belgilariga",
      "B) Svetoforga",
      "C) Tartibga soluvchining ishoralariga bo'ysunishi shart",
      "D) Bosh yo'l qoidasiga"
    ],
    "correct": 2,
    "rule": "YHQ 44-band: Tartibga soluvchining ishoralari va ko'rsatmalari svetofor signallari, yo'l belgilari va chiziqlari talablariga zid kelgan hollarda haydovchilar tartibga soluvchining ishoralariga amal qilishlari shart.",
    "fine": "MJtK 128-4-modda: Tartibga soluvchiga bo'ysunmaslik — 2 BHM.",
    "explanation": "YHQ iyerarxiyasida eng oliy kuchga ega — bu jonli tartibga soluvchi (inspektor) hisoblanadi.",
    "svgType": "regulator_priority_over_sign"
  },
  {
    "id": 51,
    "ticket": 3,
    "category": "intersections",
    "categoryName": "🚦 Chorrahalar & Aylanalar",
    "isNew2026": false,
    "q": "Chorrahada o'ngga burilayotgan avtomobil qatnov qismini kesib o'tayotgan piyodalar va velosipedchilarga yo'l berishi shartmi?",
    "options": [
      "A) Yo'q, mashina burilayotganda ustun",
      "B) Ha, burilayotganda qatnov qismini kesib o'tayotgan piyodalar va velosipedchilarga yo'l berish shart",
      "C) Faqat piyodalar yugurmasa yo'l beradi",
      "D) Faqat zebra chizig'i bo'lsa yo'l beradi"
    ],
    "correct": 1,
    "rule": "YHQ 96-band: O'ngga yoki chapga burilayotgan haydovchi qatnov qismini kesib o'tayotgan piyodalarga va velosiped yo'lkasidagi velosipedchilarga yo'l berishi shart.",
    "fine": "MJtK 128-modda: 1 BHM.",
    "explanation": "Har qanday burilishda siz kesib o'tayotgan yo'ldagi piyodalarga to'liq ustunlik berishingiz shart.",
    "svgType": "turn_yield_pedestrians"
  },
  {
    "id": 52,
    "ticket": 3,
    "category": "traffic_lights",
    "categoryName": "🚥 Svetofor & Regulyator",
    "isNew2026": false,
    "q": "Qizil va sariq chiroq bir vaqtda yonishi nimani bildiradi?",
    "options": [
      "A) Harakatlanishga ruxsat beradi",
      "B) Harakatlanish taqiqlanadi va tez orada yashil signal yonishidan ogohlantiradi",
      "C) Svetofor buzilganini",
      "D) Faqat o'ngga burilish mumkinligini"
    ],
    "correct": 1,
    "rule": "YHQ 38-band: Qizil va sariq signallarning bir vaqtda yonishi harakatlanishni taqiqlaydi va tez orada yashil signal yonishi haqida axborot beradi.",
    "fine": "MJtK 128-4-modda: Qizil va sariqda harakatlanish taqiqlanadi (2 BHM).",
    "explanation": "Qizil va sariqda gazni bosib yuborish jiddiy qoidabuzarlikdir, yashil yonishini to'liq kutish shart.",
    "svgType": "red_yellow_together"
  },
  {
    "id": 53,
    "ticket": 3,
    "category": "intersections",
    "categoryName": "🚦 Chorrahalar & Aylanalar",
    "isNew2026": false,
    "q": "Ko'k miltillovchi mayoqchasi va maxsus tovushli signali (sirena) yoqilgan avtomobilga boshqa haydovchilar nima qilishi kerak?",
    "options": [
      "A) Signal chalib orqasidan ergashish",
      "B) Yo'l berishlari va to'siqsiz o'tib ketishini ta'minlashlari shart",
      "C) Faqat o'ngga burilsa yo'l berish",
      "D) Tezlikni oshirish"
    ],
    "correct": 1,
    "rule": "YHQ 25-band: Ko'k miltillovchi mayoqcha va maxsus tovushli signal yoqilgan transport vositasi yaqinlashganda haydovchilar unga yo'l berishlari shart.",
    "fine": "MJtK 128-5-modda: Maxsus transportga yo'l bermaslik — 5 BHM (1.875.000 so'm).",
    "explanation": "Tez yordam, o't o'chirish yoki YPX mashinasi sirena bilan kelayotganda darhol yo'l bo'shatib berilishi shart.",
    "svgType": "emergency_vehicle_priority"
  },
  {
    "id": 54,
    "ticket": 3,
    "category": "intersections",
    "categoryName": "🚦 Chorrahalar & Aylanalar",
    "isNew2026": false,
    "q": "T-simon chorrahada to'g'ri yo'ldan kelayotgan va tutashayotgan yo'ldan kelayotgan mashinalar o'rtasida belgi bo'lmasa, kim ustun?",
    "options": [
      "A) Tutashayotgan (oxiri berk) yo'ldagisi",
      "B) O'ng qo'l qoidasiga ko'ra o'ng tomondagi avtomobil ustun",
      "C) To'g'ri yo'ldagisi har doim birinchi o'tadi",
      "D) Katta mashina"
    ],
    "correct": 1,
    "rule": "YHQ 101-band: Belgilar bo'lmagan teng ahamiyatli har qanday (jumladan T-simon) chorrahada o'ng tomondagi transport vositasi ustundir.",
    "fine": "MJtK 128-modda.",
    "explanation": "T-simon bo'lsa ham, agar imtiyoz belgilari bo'lmasa, bu teng ahamiyatli chorraha hisoblanadi va o'ng qo'l qoidasi amal qiladi.",
    "svgType": "t_intersection_equal"
  },
  {
    "id": 55,
    "ticket": 3,
    "category": "traffic_lights",
    "categoryName": "🚥 Svetofor & Regulyator",
    "isNew2026": false,
    "q": "Temir yo'l kesishmasidagi svetoforning miltillovchi qizil chirog'i nimani bildiradi?",
    "options": [
      "A) Tezlikni oshirib o'tib ketishni",
      "B) Harakatlanish qat'iyan taqiqlanadi",
      "C) Poezd yo'qligini tekshirib o'tishni",
      "D) Faqat poyezd yaqinlashganda to'xtashni"
    ],
    "correct": 1,
    "rule": "YHQ 40-band: Temir yo'l kesishmasidagi miltillovchi qizil signal kesishma orqali harakatlanishni taqiqlaydi.",
    "fine": "MJtK 130-modda: Temir yo'l kesishmasi qoidasini buzish — 5 BHM.",
    "explanation": "Qizil miltillaganda shlagbaum tushmagan bo'lsa ham relsga kirish qat'iyan man etiladi.",
    "svgType": "railway_crossing_light"
  },
  {
    "id": 56,
    "ticket": 3,
    "category": "intersections",
    "categoryName": "🚦 Chorrahalar & Aylanalar",
    "isNew2026": false,
    "q": "Tuproq yo'ldan (gruntovka) asfalt qoplamali yo'lga chiqayotgan haydovchi kimga yo'l beradi?",
    "options": [
      "A) Faqat o'ng tomondagilarga",
      "B) Qattiq qoplamali (asfalt) yo'ldan kelayotgan barcha transport vositalariga",
      "C) Hech kimga, o'ng qo'l qoidasi amal qiladi",
      "D) Faqat yuk mashinalariga"
    ],
    "correct": 1,
    "rule": "YHQ 1-band va 103-band: Qattiq qoplamali yo'l tuproq yo'lga nisbatan bosh yo'l hisoblanadi.",
    "fine": "MJtK 128-modda: 1 BHM.",
    "explanation": "Qoplamasiz yo'ldan asfaltga chiqayotgan haydovchi doimo ikkinchi darajali hisoblanadi.",
    "svgType": "dirt_road_to_asphalt"
  },
  {
    "id": 57,
    "ticket": 3,
    "category": "traffic_lights",
    "categoryName": "🚥 Svetofor & Regulyator",
    "isNew2026": false,
    "q": "Svetoforning yashil chirog'i miltillay boshlashi nimani bildiradi?",
    "options": [
      "A) Darhol tormoz bosishni",
      "B) Harakatlanishga ruxsat berishini va tez orada taqiqlovchi signal yonishini bildiradi",
      "C) Svetofor buzilganini",
      "D) Gazni oxirigacha bosish kerakligini"
    ],
    "correct": 1,
    "rule": "YHQ 38-band: Yashil rangli miltillovchi signal harakatlanishga ruxsat beradi va uning amal qilish vaqti tugayotganidan xabar beradi.",
    "fine": "Xavfsiz to'xtash choralarini ko'rish zarur.",
    "explanation": "Yashil miltillaganda (odatda 3 soniya) chorrahaga yaqin bo'lsangiz to'xtash yoki bexatar o'tib ketishga qaror qilasiz.",
    "svgType": "green_light_flashing"
  },
  {
    "id": 58,
    "ticket": 3,
    "category": "intersections",
    "categoryName": "🚦 Chorrahalar & Aylanalar",
    "isNew2026": false,
    "q": "Qayrilib olish (razvorot) amalga oshirayotgan haydovchi kimlarga yo'l berishi kerak?",
    "options": [
      "A) Faqat orqasidan kelayotganlarga",
      "B) Qarama-qarshi yo'nalishdan to'g'riga va o'ngga harakatlanayotgan barcha mashinalarga",
      "C) Hech kimga yo'l bermaydi",
      "D) Faqat avtobuslarga"
    ],
    "correct": 1,
    "rule": "YHQ 102-band: Qayrilib olishda qarama-qarshi yo'nalishdagi barcha to'siqsiz harakatlanayotgan transportlarga yo'l beriladi.",
    "fine": "MJtK 128-modda: 1 BHM.",
    "explanation": "Qayrilib olish manyovrida qarama-qarshi oqimga xalaqit bermaslik shart.",
    "svgType": "u_turn_yield"
  },
  {
    "id": 59,
    "ticket": 3,
    "category": "traffic_lights",
    "categoryName": "🚥 Svetofor & Regulyator",
    "isNew2026": false,
    "q": "Yashil chiroq bilan bir vaqtda yoqilgan qizil asosli qo'shimcha yashil strelka yo'nalishida burilayotgan haydovchi nima qilishi shart?",
    "options": [
      "A) Hech kimga yo'l bermasdan birinchi o'tadi",
      "B) Boshqa yo'nalishlardan harakatlanayotgan transport vositalariga yo'l berishi shart",
      "C) To'xtab 1 daqiqa kutishi shart",
      "D) Faqat signal chalib o'tadi"
    ],
    "correct": 1,
    "rule": "YHQ 98-band: Qo'shimcha seksiya strelkasi bilan birga sariq yoki qizil signal yonganda, haydovchi boshqa yo'nalishdagi transport vositalariga yo'l berishi shart.",
    "fine": "MJtK 128-modda.",
    "explanation": "Asosiy qizil bilan yongan strelka — 'o'tishga ruxsat bor, lekin barcha yo'ldagilarga yo'l berib keyin o't' degan ma'noni bildiradi.",
    "svgType": "green_arrow_with_red"
  },
  {
    "id": 60,
    "ticket": 3,
    "category": "intersections",
    "categoryName": "🚦 Chorrahalar & Aylanalar",
    "isNew2026": false,
    "q": "Hovlidan yoki yoqilg'i quyish shoxobchasidan (zapravkadan) yo'lga chiqayotgan haydovchi kimga yo'l beradi?",
    "options": [
      "A) Faqat chap tomondan kelayotganlarga",
      "B) Yo'ldan harakatlanayotgan barcha transport vositalari va piyodalarga",
      "C) Hech kimga yo'l bermaydi",
      "D) Faqat yuk avtomobillariga"
    ],
    "correct": 1,
    "rule": "YHQ 56-band: Yo'lga yondosh hududdan (hovli, AYoQSh, korxona) chiqishda haydovchi yo'ldagi barcha transport vositalari va piyodalarga yo'l berishi shart.",
    "fine": "MJtK 128-modda: 1 BHM.",
    "explanation": "Yondosh hududdan chiqayotgan har qanday mashina ikkinchi darajali hisoblanadi.",
    "svgType": "leaving_gas_station"
  },
  {
    "id": 61,
    "ticket": 4,
    "category": "maneuvers",
    "categoryName": "🚗 Qayta Tizilish & Quvib O'tish",
    "isNew2026": false,
    "q": "Chorrahada quvib o'tishga qachon ruxsat beriladi?",
    "options": [
      "A) Har qanday chorrahada ruxsat beriladi",
      "B) Faqat bosh yo'l hisoblangan yo'lda harakatlanayotganda va qarama-qarshi yo'nalishga chiqmasdan",
      "C) Faqat svetofor yashil yonganda",
      "D) Quvib o'tish har doim chorrahada taqiqlanadi"
    ],
    "correct": 1,
    "rule": "YHQ 72-band: Bosh yo'l bo'lmagan yo'lda harakatlanishda, shuningdek tartibga solinadigan chorrahalarda quvib o'tish taqiqlanadi.",
    "fine": "MJtK 128-modda: Quvib o'tish qoidalarini buzish — 1 BHM.",
    "explanation": "Chorrahada faqat bosh yo'lda bo'lsangiz va qarama-qarshi polosaga chiqmasangiz quvib o'tish mumkin.",
    "svgType": "overtaking_at_intersection"
  },
  {
    "id": 62,
    "ticket": 4,
    "category": "maneuvers",
    "categoryName": "🚗 Qayta Tizilish & Quvib O'tish",
    "isNew2026": false,
    "q": "Temir yo'l kesishmasida va unga qancha masofa qolganda quvib o'tish taqiqlanadi?",
    "options": [
      "A) Kesishmada va undan oldin 50 metr masofada",
      "B) Temir yo'l kesishmasida va unga 100 metrdan kam masofa qolganda",
      "C) Faqat shlagbaum tushganda",
      "D) 200 metr masofada"
    ],
    "correct": 1,
    "rule": "YHQ 72-band: Temir yo'l kesishmalarida va ularga 100 metrdan kam masofa qolganda quvib o'tish taqiqlanadi.",
    "fine": "MJtK 130-modda: 5 BHM.",
    "explanation": "Poyezd yo'liga 100 metr qolganda quvib o'tish qat'iyan man etiladi.",
    "svgType": "overtake_railway_100m"
  },
  {
    "id": 63,
    "ticket": 4,
    "category": "maneuvers",
    "categoryName": "🚗 Qayta Tizilish & Quvib O'tish",
    "isNew2026": false,
    "q": "Ko'priklar, estakadalar va ularning ostida hamda tunnellarda quvib o'tish mumkinmi?",
    "options": [
      "A) Mumkin, agar tezlik 60 dan kam bo'lsa",
      "B) Qat'iyan taqiqlanadi",
      "C) Faqat kunduzi mumkin",
      "D) Faqat chiziq uzuq-uzuq bo'lsa mumkin"
    ],
    "correct": 1,
    "rule": "YHQ 72-band: Ko'priklarda, estakadalarda va ularning tagida, shuningdek tunnellarda quvib o'tish taqiqlanadi.",
    "fine": "MJtK 128-modda: 1 BHM.",
    "explanation": "Muhandislik inshootlarida yo'l tor bo'lgani sababli quvib o'tish halokatga olib keladi.",
    "svgType": "overtake_bridge_tunnel"
  },
  {
    "id": 64,
    "ticket": 4,
    "category": "maneuvers",
    "categoryName": "🚗 Qayta Tizilish & Quvib O'tish",
    "isNew2026": false,
    "q": "Quvib o'tilayotgan transport vositasi haydovchisiga tezlikni oshirish yoki boshqa harakatlar bilan xalaqit berish mumkinmi?",
    "options": [
      "A) Mumkin, o'z polosasi unga tegishli",
      "B) Taqiqlanadi — tezlikni oshirish yoki boshqa yo'l bilan quvib o'tishga to'sqinlik qilish man etiladi",
      "C) Faqat signal chalsa bo'ladi",
      "D) Gazni bosib o'zini ko'rsatsa bo'ladi"
    ],
    "correct": 1,
    "rule": "YHQ 71-band: Quvib o'tilayotgan transport vositasi haydovchisiga tezlikni oshirish yoki boshqa xatti-harakatlar bilan quvib o'tishga to'sqinlik qilish taqiqlanadi.",
    "fine": "MJtK 128-modda.",
    "explanation": "Sizni quvib o'tayotgan mashinaga gaz bosib xalaqit berish YTHga sabab bo'ladi.",
    "svgType": "no_speedup_when_overtaken"
  },
  {
    "id": 65,
    "ticket": 4,
    "category": "stopping_parking",
    "categoryName": "🅿️ To'xtash & To'xtab Turish",
    "isNew2026": false,
    "q": "Ikki tomonlama harakatli, o'rtada relsi bo'lmagan bir polosali yo'llarda yo'lning chap tomonida to'xtashga ruxsat etiladimi?",
    "options": [
      "A) Hech qachon ruxsat etilmaydi",
      "B) Aholi punktlarida har bir yo'nalishda bittadan polosasi bo'lgan yo'llarda chap tomonda to'xtashga ruxsat etiladi",
      "C) Faqat yakshanba kunlari ruxsat etiladi",
      "D) Faqat yuk mashinalariga"
    ],
    "correct": 1,
    "rule": "YHQ 86-band: Aholi punktlarida o'rtada tramvay yo'li bo'lmagan, har bir yo'nalish uchun bitta polosasi bo'lgan yo'llarda chap tomonda to'xtash va to'xtab turishga ruxsat etiladi.",
    "fine": "Qoidaga rioya qilinsa jarima yo'q.",
    "explanation": "Tor shahar ko'chalarida chap tomonga ham mashinani to'xtatib qo'yish mumkin.",
    "svgType": "parking_left_side_city"
  },
  {
    "id": 66,
    "ticket": 4,
    "category": "stopping_parking",
    "categoryName": "🅿️ To'xtash & To'xtab Turish",
    "isNew2026": false,
    "q": "Qatnov qismlari kesishmasidan (chorraha chetidan) qancha masofadan yaqinroqda to'xtash taqiqlanadi?",
    "options": [
      "A) 5 metr",
      "B) 15 metr",
      "C) 20 metr",
      "D) 50 metr"
    ],
    "correct": 0,
    "rule": "YHQ 89-band: Qatnov qismlari kesishmasida va kesishayotgan qatnov qismi chetiga 5 metrdan kam masofada to'xtash taqiqlanadi.",
    "fine": "MJtK 128-6-modda: 2 BHM (750.000 so'm).",
    "explanation": "Chorraha burchagiga 5 metrdan yaqin to'xtash boshqa mashinalarning burilishiga xalaqit beradi.",
    "svgType": "stop_5m_intersection"
  },
  {
    "id": 67,
    "ticket": 4,
    "category": "stopping_parking",
    "categoryName": "🅿️ To'xtash & To'xtab Turish",
    "isNew2026": false,
    "q": "Piyodalar yo'lkasi (troturlar) ustiga to'liq yoki qisman chiqib to'xtab turish mumkinmi?",
    "options": [
      "A) Agar piyodalarga xalaqit bermasa mumkin",
      "B) Qat'iyan taqiqlanadi (faqat 5.15 belgisi bilan birga maxsus 7.6.2–7.6.9 belgilari bo'lgan hollar bundan mustasno)",
      "C) Barcha yengil mashinalarga mumkin",
      "D) Faqat 10 daqiqaga mumkin"
    ],
    "correct": 1,
    "rule": "YHQ 87-band: Piyodalar yo'lkasida to'xtash taqiqlanadi, maxsus yo'l belgilari bilan ruxsat berilgan hollar bundan mustasno.",
    "fine": "MJtK 128-6-modda: 2 BHM (750.000 so'm).",
    "explanation": "Trotuarga mashina qo'yish piyodalar huquqini buzadi va jarimaga olib keladi.",
    "svgType": "no_sidewalk_parking"
  },
  {
    "id": 68,
    "ticket": 4,
    "category": "maneuvers",
    "categoryName": "🚗 Qayta Tizilish & Quvib O'tish",
    "isNew2026": false,
    "q": "Avtomobilni orqaga harakatlantirish (zadniy xod) qayerlarda qat'iyan taqiqlanadi?",
    "options": [
      "A) Faqat tor ko'chalarda",
      "B) Chorrahalarda, piyodalar o'tish joylarida, ko'priklarda, tunnellarda va avtomagistrallarda",
      "C) Hovli ichida",
      "D) Bo'sh maydonda"
    ],
    "correct": 1,
    "rule": "YHQ 63-band: Chorrahalarda va 64-bandda ko'rsatilgan joylarda (piyodalar o'tish joyi, tunnel, ko'prik, temir yo'l kesishmasi, avtomagistral) orqaga harakatlanish taqiqlanadi.",
    "fine": "MJtK 128-modda: 1 BHM.",
    "explanation": "Chorraha va xavfli zonalarda orqaga yurish to'qnashuvga olib keladi.",
    "svgType": "no_reversing_crossroad"
  },
  {
    "id": 69,
    "ticket": 4,
    "category": "maneuvers",
    "categoryName": "🚗 Qayta Tizilish & Quvib O'tish",
    "isNew2026": false,
    "q": "Moslashuvchan ulagich (arqon / tros) bilan shatakka olishda mashinalar orasidagi masofa qancha bo'lishi kerak?",
    "options": [
      "A) 1–2 metr",
      "B) 4 dan 6 metrgacha",
      "C) 8 dan 10 metrgacha",
      "D) Masofaning ahamiyati yo'q"
    ],
    "correct": 1,
    "rule": "YHQ 148-band: Moslashuvchan ulagich bilan shatakka olishda masofa 4 metrdan 6 metrgacha, qattiq ulagichda esa 4 metrdan oshmasligi kerak.",
    "fine": "Shatakka olish qoidasini buzish ma'muriy jarimaga sabab bo'ladi.",
    "explanation": "Tros 4 metrdan kalta bo'lsa urilib ketish, 6 metrdan uzun bo'lsa boshqaruvni yo'qotish xavfi tug'iladi.",
    "svgType": "towing_rope_distance"
  },
  {
    "id": 70,
    "ticket": 4,
    "category": "maneuvers",
    "categoryName": "🚗 Qayta Tizilish & Quvib O'tish",
    "isNew2026": false,
    "q": "Yaxmalak (sirpanchiq / muzlama) paytida qanday shatakka olish usuli taqiqlanadi?",
    "options": [
      "A) Qattiq ulagich (temir truba) bilan",
      "B) Moslashuvchan ulagich (tros/arqon) yordamida shatakka olish",
      "C) Qisman yuklash usulida",
      "D) Evakuator yordamida"
    ],
    "correct": 1,
    "rule": "YHQ 150-band: Yaxmalak paytida moslashuvchan ulagich bilan shatakka olish taqiqlanadi.",
    "fine": "MJtK 128-modda.",
    "explanation": "Muzda tros bilan tortilganda orqadagi mashina tormoz berolmay oldingisiga uriladi.",
    "svgType": "no_flexible_towing_ice"
  },
  {
    "id": 71,
    "ticket": 4,
    "category": "maneuvers",
    "categoryName": "🚗 Qayta Tizilish & Quvib O'tish",
    "isNew2026": false,
    "q": "Shatakka olib ketayotgan transport vositasining tezligi soatiga necha kilometrdan oshmasligi kerak?",
    "options": [
      "A) 70 km/soat",
      "B) 60 km/soat",
      "C) 50 km/soat",
      "D) 40 km/soat"
    ],
    "correct": 2,
    "rule": "YHQ 78-band: Mexanik transport vositalarini shatakka olib ketayotgan barcha transport vositalarining tezligi soatiga 50 kilometrdan oshmasligi shart.",
    "fine": "MJtK 128-3-modda.",
    "explanation": "Shatakka olishda har qanday yo'lda maksimal tezlik 50 km/soat bilan cheklangan.",
    "svgType": "towing_speed_limit_50"
  },
  {
    "id": 72,
    "ticket": 4,
    "category": "maneuvers",
    "categoryName": "🚗 Qayta Tizilish & Quvib O'tish",
    "isNew2026": false,
    "q": "Nishablikda (tog'li qiya yo'lda) qarama-qarshi o'tish qiyin bo'lgan to'siq mavjud bo'lsa, kim yo'l berishi kerak?",
    "options": [
      "A) Yuqoriga ko'tarilayotgan haydovchi",
      "B) Pastga tushayotgan haydovchi yo'l berishi shart",
      "C) Yengil mashina",
      "D) Katta yuk mashinasi"
    ],
    "correct": 1,
    "rule": "YHQ 73-band: Nishablikda pastga qarab harakatlanayotgan haydovchi yuqoriga ko'tarilayotgan transport vositasiga yo'l berishi shart.",
    "fine": "MJtK 128-modda.",
    "explanation": "Yuqoriga chiqayotgan mashina to'xtab qolsa qayta joyidan qo'zg'alishi qiyin bo'lgani uchun pastga tushuvchi unga yo'l beradi.",
    "svgType": "slope_yield_downhill"
  },
  {
    "id": 73,
    "ticket": 4,
    "category": "maneuvers",
    "categoryName": "🚗 Qayta Tizilish & Quvib O'tish",
    "isNew2026": false,
    "q": "Bir vaqtda yonma-yon ketayotgan ikkita mashina bir-biriga qarab qayta tizilayotgan (o'rnini almashtirayotgan) bo'lsa, kim ustun?",
    "options": [
      "A) Chapdagi mashina",
      "B) O'ng tomondagi transport vositasi ustunlikka ega",
      "C) Kattaroq mashina",
      "D) Tezroq ketayotgani"
    ],
    "correct": 1,
    "rule": "YHQ 58-band: Transport vositalari bir vaqtda qayta tizilayotganda haydovchi o'ng tomondagi transport vositasiga yo'l berishi shart.",
    "fine": "MJtK 128-modda.",
    "explanation": "O'zaro qayta tizilishda yana o'sha qoida: o'ng tomondagi haydovchi ustundir.",
    "svgType": "mutual_lane_change"
  },
  {
    "id": 74,
    "ticket": 4,
    "category": "stopping_parking",
    "categoryName": "🅿️ To'xtash & To'xtab Turish",
    "isNew2026": false,
    "q": "Temir yo'l kesishmasidan qancha masofada to'xtab turish (stoyanka) taqiqlanadi?",
    "options": [
      "A) 15 metr",
      "B) 50 metr",
      "C) 100 metr",
      "D) 20 metr"
    ],
    "correct": 1,
    "rule": "YHQ 90-band: Temir yo'l kesishmalariga 50 metrdan kam masofada to'xtab turish taqiqlanadi.",
    "fine": "MJtK 128-6-modda: 2 BHM.",
    "explanation": "Temir yo'lga 50 metr masofada uzoq vaqt mashinani qoldirib ketish xavfsizlik nuqtai nazaridan man etiladi.",
    "svgType": "railway_parking_50m"
  },
  {
    "id": 75,
    "ticket": 4,
    "category": "stopping_parking",
    "categoryName": "🅿️ To'xtash & To'xtab Turish",
    "isNew2026": false,
    "q": "Turar joy daxalarida dvigateli ishlab turgan holda to'xtab turishga (stoyanka qilishga) ruxsat beriladimi?",
    "options": [
      "A) Istalgancha ruxsat beriladi",
      "B) Taqiqlanadi (aholi tinchligi va havoni ifloslantirmaslik uchun)",
      "C) Faqat qishda ruxsat beriladi",
      "D) Faqat taksilarga ruxsat beriladi"
    ],
    "correct": 1,
    "rule": "YHQ 121-band: Turar joy zonalarida dvigateli ishlab turgan holda to'xtab turish taqiqlanadi.",
    "fine": "MJtK 128-modda.",
    "explanation": "Aholi yashash hududida mashinani o't oldirib uzoq vaqt qo'yib qo'yish taqiqlanadi.",
    "svgType": "engine_idling_residential"
  },
  {
    "id": 76,
    "ticket": 4,
    "category": "maneuvers",
    "categoryName": "🚗 Qayta Tizilish & Quvib O'tish",
    "isNew2026": false,
    "q": "Kechasi qarama-qarshi kelayotgan avtomobilga kamida qancha masofa qolganda uzoqni yorituvchi chiroqni (dalniy) yaqiniga (blijniy) o'tkazish shart?",
    "options": [
      "A) 50 metr",
      "B) 100 metr",
      "C) Kamida 150 metr",
      "D) 300 metr"
    ],
    "correct": 2,
    "rule": "YHQ 135-band: Uzoqni yorituvchi chiroq kamida 150 metr masofa qolganda, shuningdek qarshi haydovchining ko'zini qamashtirmaslik uchun undan ham kattaroq masofada yaqinni yorituvchiga o'tkazilishi shart.",
    "fine": "MJtK 128-modda.",
    "explanation": "Qarshingizdan kelayotgan haydovchining ko'zini qamashtirmaslik uchun 150 metr qolganda yaqin chiroqqa o'tiladi.",
    "svgType": "switch_headlights_150m"
  },
  {
    "id": 77,
    "ticket": 4,
    "category": "maneuvers",
    "categoryName": "🚗 Qayta Tizilish & Quvib O'tish",
    "isNew2026": false,
    "q": "Ko'rinarli masofa 100 metrdan kam bo'lgan yo'lning burilish qismlarida qayrilib olish mumkinmi?",
    "options": [
      "A) Signal chalib mumkin",
      "B) Qat'iyan taqiqlanadi",
      "C) Agar yo'l keng bo'lsa mumkin",
      "D) Faqat kunduzi mumkin"
    ],
    "correct": 1,
    "rule": "YHQ 62-band: Yo'lning ko'rinishi bitta yo'nalishda bo'lsa ham 100 metrdan kam bo'lgan joylarida qayrilib olish taqiqlanadi.",
    "fine": "MJtK 128-modda.",
    "explanation": "Burilishda ko'rinish cheklangan bo'lsa, to'satdan kelayotgan mashina urib ketishi xavfi bor.",
    "svgType": "no_uturn_blind_curve"
  },
  {
    "id": 78,
    "ticket": 4,
    "category": "stopping_parking",
    "categoryName": "🅿️ To'xtash & To'xtab Turish",
    "isNew2026": false,
    "q": "Ko'rinarli masofa 100 metrdan kam bo'lgan xavfli burilishlarda qatnov qismida to'xtash mumkinmi?",
    "options": [
      "A) Yo'l chetiga chiqib to'xtash mumkin, qatnov qismida taqiqlanadi",
      "B) Xohlagan joyda to'xtash mumkin",
      "C) To'xtash faqat kunduzi mumkin",
      "D) Agar avariya chirog'i yoqilsa xohlagancha mumkin"
    ],
    "correct": 0,
    "rule": "YHQ 89-band: Ko'rinishi 100 metrdan kam bo'lgan xavfli burilishlarda va tepalik cho'qqilarida qatnov qismida to'xtash taqiqlanadi.",
    "fine": "MJtK 128-6-modda: 2 BHM.",
    "explanation": "Ko'rinishi cheklangan joyda yo'l ustida qoldirilgan mashina katta halokatga sabab bo'ladi.",
    "svgType": "stop_danger_curve"
  },
  {
    "id": 79,
    "ticket": 4,
    "category": "maneuvers",
    "categoryName": "🚗 Qayta Tizilish & Quvib O'tish",
    "isNew2026": false,
    "q": "Avtomagistralda orqaga harakatlanish (zadniy xod) mumkinmi?",
    "options": [
      "A) Agar o'ng qatorda bo'lsa mumkin",
      "B) Qat'iyan taqiqlanadi",
      "C) Kechasi mumkin",
      "D) Avariya signali yoqilgan holda mumkin"
    ],
    "correct": 1,
    "rule": "YHQ 116-band: Avtomagistrallarda orqaga harakatlanish mutlaqo taqiqlanadi.",
    "fine": "MJtK 128-modda: 1 BHM.",
    "explanation": "Avtomagistralda mashinalar 110 km/soat tezlikda harakatlangani sababli orqaga yurish o'limga olib keluvchi xavf tug'diradi.",
    "svgType": "no_reverse_motorway"
  },
  {
    "id": 80,
    "ticket": 4,
    "category": "stopping_parking",
    "categoryName": "🅿️ To'xtash & To'xtab Turish",
    "isNew2026": false,
    "q": "To'xtash va to'xtab turish joyida boshqa mashinalarning eshiklarini ochishga qachon ruxsat beriladi?",
    "options": [
      "A) Mashina to'xtashi bilan tezda ochish kerak",
      "B) Boshqa harakat qatnashchilariga xalaqit va xavf tug'dirmasligiga to'liq ishonch hosil qilgandan so'ng",
      "C) Faqat haydovchi ruxsat berganda",
      "D) Faqat o'ng tomondan"
    ],
    "correct": 1,
    "rule": "YHQ 91-band: Transport vositasining eshiklarini ochish boshqa harakat qatnashchilariga xalaqit bermasligiga ishonch hosil qilingandan so'nggina ruxsat etiladi.",
    "fine": "MJtK 128-modda.",
    "explanation": "Eshikni qaramasdan ochish orqadan kelayotgan velosipedchi, skuter yoki mashinaga to'g'ridan-to'g'ri urilishga olib keladi.",
    "svgType": "open_doors_safety"
  },
  {
    "id": 81,
    "ticket": 5,
    "category": "safety_firstaid",
    "categoryName": "🩹 Xavfsizlik & Tibbiy Yordam",
    "isNew2026": false,
    "q": "Qattiq arterial qon ketishida (qon favvora bo'lib otilganda) turniket (jqut) qo'yishning yozdagi maksimal muddati qancha?",
    "options": [
      "A) 2 soat",
      "B) 1 soatdan oshmasligi kerak (qishda 30 daqiqa)",
      "C) Qon to'xtaguncha 4 soat",
      "D) 15 daqiqa"
    ],
    "correct": 1,
    "rule": "Tibbiy yordam qoidalari: Jqut qo'yilgan vaqt yoz faslida ko'pi bilan 1 soat, qish faslida 30 daqiqadan oshmasligi kerak, tagiga vaqt yozilgan qog'oz qo'yiladi.",
    "fine": "To'qimalar nobud bo'lishini (gangrena) oldini olish uchun muhim qoida.",
    "explanation": "Jqut 1 soatdan ortiq ushlansa, tana a'zosi qonsizlanib chiriy boshlaydi, shuning uchun vaqt qat'iy nazorat qilinadi.",
    "svgType": "firstaid_tourniquet"
  },
  {
    "id": 82,
    "ticket": 5,
    "category": "safety_firstaid",
    "categoryName": "🩹 Xavfsizlik & Tibbiy Yordam",
    "isNew2026": false,
    "q": "Yurak-o'pka reanimatsiyasida (sun'iy nafas va ko'krak qafasini bosish) qanday nisbatga amal qilinadi?",
    "options": [
      "A) 10 ta bosish, 5 ta nafas",
      "B) 30 ta ko'krak qafasini bosish va 2 ta nafas berish (30:2)",
      "C) 50 ta bosish va 1 ta nafas",
      "D) Faqat sun'iy nafas beriladi"
    ],
    "correct": 1,
    "rule": "Xalqaro va milliy birinchi yordam standarti: Bitta yoki ikkita qutqaruvchi bo'lishidan qat'i nazar, nisbat 30 ta ko'krak qafasi kompressiyasi va 2 ta nafas berish.",
    "fine": "Inson hayotini saqlab qolish protokoli.",
    "explanation": "30 marta chuqur va tez bosish (daqiqasiga 100-120 marta), keyin 2 marta o'pkaga nafas yuboriladi.",
    "svgType": "firstaid_cpr_30_2"
  },
  {
    "id": 83,
    "ticket": 5,
    "category": "safety_firstaid",
    "categoryName": "🩹 Xavfsizlik & Tibbiy Yordam",
    "isNew2026": false,
    "q": "Xushsiz yotgan, lekin nafasi bor jabrlanuvchini qanday holatda yotqizish shart?",
    "options": [
      "A) Chalqancha (orqasi bilan)",
      "B) Yonbosh barqaror holatda (til orqaga ketib bo'g'ilib qolmasligi va qusuq nafas yo'liga ketmasligi uchun)",
      "C) Qorni bilan",
      "D) O'tirg'izib qo'yish"
    ],
    "correct": 1,
    "rule": "Birinchi yordam standarti: Xushsiz nafas olayotgan odam qutqaruvchi yonbosh holatiga (recovery position) o'tkaziladi.",
    "fine": "Nafas yo'llari o'tkazuvchanligini ta'minlash.",
    "explanation": "Chalqancha yotsa til orqaga ketib nafas qisilib qolishi mumkin, shuning uchun yonbosh yotqiziladi.",
    "svgType": "firstaid_recovery_position"
  },
  {
    "id": 84,
    "ticket": 5,
    "category": "safety_firstaid",
    "categoryName": "🩹 Xavfsizlik & Tibbiy Yordam",
    "isNew2026": false,
    "q": "Suyak singanda shina (taxtakach) qo'yishda qaysi bo'g'imlar qimirlamaydigan qilib bog'lanishi shart?",
    "options": [
      "A) Faqat singan joy",
      "B) Singan joydan yuqoridagi va pastdagi kamida ikkita qo'shni bo'g'im",
      "C) Barcha bo'g'imlar",
      "D) Bo'g'imlarni bog'lash taqiqlanadi"
    ],
    "correct": 1,
    "rule": "Birinchi tibbiy yordam: Suyak singanda qimirlatmaslik (immobilizatsiya) uchun singan joyga tutash ikkita (son suyagi singanda uchtagacha) bo'g'im taxtakach bilan mahkamlanadi.",
    "fine": "Noto'g'ri bog'lash suyakning tomir va asabni yirtishiga olib keladi.",
    "explanation": "Kamida 2 ta bo'g'im (masalan, boldir singanda tizza va to'piq) to'liq mahkamlansa suyak qimirlamaydi.",
    "svgType": "firstaid_splint_joints"
  },
  {
    "id": 85,
    "ticket": 5,
    "category": "safety_firstaid",
    "categoryName": "🩹 Xavfsizlik & Tibbiy Yordam",
    "isNew2026": true,
    "q": "12 yoshga to'lmagan bolalarni yengil avtomobilning old o'rindig'ida qanday tashishga ruxsat beriladi?",
    "options": [
      "A) Katta odamning quchog'ida",
      "B) Faqat maxsus bolalar ushlab turuvchi moslamasi (autokreslo) o'rnatilgan holda",
      "C) Oddiy xavfsizlik kamarini taqib",
      "D) Old o'rindiqda bolalarni tashish har qanday holatda taqiqlanadi"
    ],
    "correct": 1,
    "rule": "YHQ 159-band: 12 yoshga to'lmagan bolalarni old o'rindiqda faqat bolalar ushlab turuvchi maxsus moslamasi (avtokreslo) bo'lgandagina tashishga ruxsat etiladi.",
    "fine": "MJtK 128-modda: Bolalarni tashish qoidasini buzish.",
    "explanation": "Oddiy kamar bolaning bo'yniga to'g'ri kelgani uchun halokatda jiddiy jarohat yetkazadi, shuning uchun maxsus kreslo shart.",
    "svgType": "child_carseat_front"
  },
  {
    "id": 86,
    "ticket": 5,
    "category": "technical_rules",
    "categoryName": "🔧 Texnik Xavfsizlik & Nosozliklar",
    "isNew2026": false,
    "q": "Yengil avtomobillar shinalari protektori naqshining ruxsat etilgan qoldiq balandligi kamida necha mm bo'lishi kerak?",
    "options": [
      "A) 0.8 mm",
      "B) 1.6 mm",
      "C) 2.0 mm",
      "D) 1.0 mm"
    ],
    "correct": 1,
    "rule": "YHQ 3-ilova (Foydalanishni taqiqlovchi nosozliklar): Yengil avtomobillar uchun shina protektori naqshining qoldiq balandligi 1.6 mm dan kam bo'lmasligi kerak.",
    "fine": "MJtK 125-modda: Nosoz transport vositasini boshqarish — 0.5 BHM.",
    "explanation": "1.6 mm dan yeyilgan shina yomg'irda sirpanadi va tormoz masofasini 3 barobarga uzaytirib yuboradi.",
    "svgType": "tire_tread_1_6mm"
  },
  {
    "id": 87,
    "ticket": 5,
    "category": "technical_rules",
    "categoryName": "🔧 Texnik Xavfsizlik & Nosozliklar",
    "isNew2026": false,
    "q": "Yengil avtomobillarda rul boshqaruvining umumiy lyufti (erkin burilishi) ko'pi bilan necha gradus bo'lishi mumkin?",
    "options": [
      "A) 5 gradus",
      "B) 10 gradus",
      "C) 20 gradus",
      "D) 25 gradus"
    ],
    "correct": 1,
    "rule": "YHQ 3-ilova: Yengil avtomobillarda rul boshqaruvidagi umumiy lyuft 10 gradusdan oshmasligi kerak.",
    "fine": "MJtK 125-modda: Rul boshqaruvi nosoz avtomobil jarima maydonchasiga qo'yiladi.",
    "explanation": "Rul lyufti 10 darajadan oshsa, avtomobil yo'lda o'z-o'zidan tebrana boshlaydi va boshqaruv yo'qoladi.",
    "svgType": "steering_play_10deg"
  },
  {
    "id": 88,
    "ticket": 5,
    "category": "technical_rules",
    "categoryName": "🔧 Texnik Xavfsizlik & Nosozliklar",
    "isNew2026": false,
    "q": "Yengil avtomobilda qaysi majburiy anjomlar bo'lmasa, undan foydalanish taqiqlanadi?",
    "options": [
      "A) Faqat zaxira g'ildirak",
      "B) Tibbiyot qutichasi (aptechka), yong'in o'chirgich (ognetushitel) va avariya to'xtash belgisi",
      "C) Avtomobil magnitolasi",
      "D) Videoregistrator"
    ],
    "correct": 1,
    "rule": "YHQ 3-ilova: Yengil avtomobilda tibbiyot qutichasi, yong'in o'chirgich va avariya to'xtash belgisi bo'lishi shart.",
    "fine": "MJtK 125-modda bo'yicha javobgarlik belgilanadi.",
    "explanation": "Ushbu 3 ta vosita har qanday kutilmagan YTH va yong'inda hayotni saqlab qoluvchi asosiy jihozdir.",
    "svgType": "mandatory_equipment_kit"
  },
  {
    "id": 89,
    "ticket": 5,
    "category": "technical_rules",
    "categoryName": "🔧 Texnik Xavfsizlik & Nosozliklar",
    "isNew2026": false,
    "q": "Tormoz tizimi yoki rul boshqaruvi ishlamay qolgan avtomobil bilan harakatlanishni davom ettirish mumkinmi?",
    "options": [
      "A) Avariya chirog'ini yoqib sekin ustaxonaga borsa bo'ladi",
      "B) Qat'iyan taqiqlanadi — bunday nosozlikda harakatlanish mutlaqo man etiladi",
      "C) Faqat kechasi harakatlanish mumkin",
      "D) Signal chalib harakatlanish mumkin"
    ],
    "correct": 1,
    "rule": "YHQ 2.3.1-band: Ishchi tormoz tizimi, rul boshqaruvi nosoz bo'lgan transport vositasi bilan harakatlanish qat'iyan taqiqlanadi.",
    "fine": "MJtK 125-modda: Transport vositasi jarima maydonchasiga evakuator bilan olib ketiladi.",
    "explanation": "Tormozi yoki ruli ishlamaydigan mashina qurol bilan tengdir, uni faqat evakuatorda tashish shart.",
    "svgType": "brake_failure_prohibition"
  },
  {
    "id": 90,
    "ticket": 5,
    "category": "technical_rules",
    "categoryName": "🔧 Texnik Xavfsizlik & Nosozliklar",
    "isNew2026": false,
    "q": "Avtomobilning bitta o'qiga (masalan old g'ildiraklariga) har xil turdagi yoki har xil o'lchamdagi shinalarni o'rnatish mumkinmi?",
    "options": [
      "A) Ruxsat beriladi",
      "B) Taqiqlanadi — bitta o'qqa bir xil o'lcham, konstruksiya va protektorli shinalar o'rnatilishi shart",
      "C) Faqat orqa o'qqa mumkin",
      "D) Faqat yozgi shinalarda mumkin"
    ],
    "correct": 1,
    "rule": "YHQ 3-ilova 5.5-band: Bitta o'qqa har xil o'lchamdagi, konstruksiyadagi va turli protektor naqshiga ega shinalarni o'rnatish taqiqlanadi.",
    "fine": "MJtK 125-modda.",
    "explanation": "Har xil shinalar tormoz berilganda mashinani bir tomonga keskin tortib ketishiga va ag'darilishiga olib keladi.",
    "svgType": "different_tires_axis"
  },
  {
    "id": 91,
    "ticket": 5,
    "category": "fines_mjtk",
    "categoryName": "⚖️ Jarimalar & MJtK Moddalari",
    "isNew2026": true,
    "q": "O'zbekistonda joriy etilgan qoidabuzarlik jarima ballari tizimida bir yil davomida necha ball to'plansa, haydovchi huquqidan mahrum qilinadi?",
    "options": [
      "A) 10 ball",
      "B) 12 ball",
      "C) 15 ball",
      "D) 20 ball"
    ],
    "correct": 1,
    "rule": "Qonunchilik: Bir yil davomida qoidabuzarliklar uchun 12 ball to'plagan haydovchi sud tartibida haydovchilik huquqidan mahrum qilinadi.",
    "fine": "Guvohnomadan mahrum qilish va qayta imtihon topshirish.",
    "explanation": "12 ball — bu xalqaro tajribaga asoslangan ball tizimi bo'lib, doimiy qoidabuzarlarni avtomobil boshqarishdan chetlatadi.",
    "svgType": "demerit_points_12"
  },
  {
    "id": 92,
    "ticket": 5,
    "category": "fines_mjtk",
    "categoryName": "⚖️ Jarimalar & MJtK Moddalari",
    "isNew2026": false,
    "q": "Davlat raqam belgisi o'zboshimchalik bilan yechib olingan yoki yashirilgan holda mashinani boshqarish uchun qanday jazo ko'zda tutilgan?",
    "options": [
      "A) 1 BHM",
      "B) 5 BHM (1.875.000 so'm)",
      "C) Faqat ogohlantirish",
      "D) 0.5 BHM"
    ],
    "correct": 1,
    "rule": "MJtK 125-modda 6-qism: Davlat raqam belgilari ko'rinishini cheklovchi, to'suvchi ashyolar o'rnatilgan yoki raqamsiz boshqarish — 5 BHM jarima.",
    "fine": "MJtK 125-modda: 5 BHM (1.875.000 so'm).",
    "explanation": "Raqamni yopish, bo'yash yoki yechib yurish qasddan qilingan qoidabuzarlik hisoblanadi.",
    "svgType": "license_plate_hidden"
  },
  {
    "id": 93,
    "ticket": 5,
    "category": "fines_mjtk",
    "categoryName": "⚖️ Jarimalar & MJtK Moddalari",
    "isNew2026": false,
    "q": "Ichki ishlar organi (YPX) xodimining to'xtash to'g'risidagi qonuniy talabiga bo'ysunmasdan qochish qanday jazoga sabab bo'ladi?",
    "options": [
      "A) 1 BHM",
      "B) 2 BHM",
      "C) 5 BHM (1.875.000 so'm)",
      "D) Faqat 15 sutka qamoq"
    ],
    "correct": 2,
    "rule": "MJtK 194-modda va 128-modda: Xodimning to'xtash talabiga bo'ysunmaslik — 5 BHM jarimaga sabab bo'ladi.",
    "fine": "MJtK 194-modda: 5 BHM jarima.",
    "explanation": "Inspektor jezli yoki ovozkuchaytirgich orqali to'xtashni talab qilganda darhol xavfsiz to'xtash shart.",
    "svgType": "failure_to_stop_officer"
  },
  {
    "id": 94,
    "ticket": 5,
    "category": "fines_mjtk",
    "categoryName": "⚖️ Jarimalar & MJtK Moddalari",
    "isNew2026": false,
    "q": "Piyodalarga yo'l bermaslik qoidabuzarligi bir yil davomida takroran sodir etilsa, jarima qanchaga oshadi?",
    "options": [
      "A) 1 BHM",
      "B) 2 BHM",
      "C) 3 BHM",
      "D) 5 BHM"
    ],
    "correct": 1,
    "rule": "MJtK 128-modda: Birinchi marta — 1 BHM, bir yil davomida takror sodir etilsa — 2 BHM jarima qo'llaniladi.",
    "fine": "MJtK 128-modda takroriylik: 2 BHM (750.000 so'm).",
    "explanation": "Takroriy qoidabuzarlik uchun jarima miqdori ikki baravarga oshadi.",
    "svgType": "repeat_violation_fine"
  },
  {
    "id": 95,
    "ticket": 5,
    "category": "safety_firstaid",
    "categoryName": "🩹 Xavfsizlik & Tibbiy Yordam",
    "isNew2026": false,
    "q": "YTH natijasida kiyim yonib ketganda jabrlanuvchiga qanday yordam ko'rsatiladi?",
    "options": [
      "A) Yugurishni buyurish",
      "B) Yerga yotqizib, qalin mato (odeyal yoki kurtka) bilan o'rab olovni o'chirish (kislorod kirishini to'sish)",
      "C) Suv topilmaguncha kutish",
      "D) Qum sepish"
    ],
    "correct": 1,
    "rule": "Yong'in xavfsizligi va birinchi yordam: Yonayotgan odamni darhol yerga yotqizish va havo kirmaydigan mato bilan o'rash shart. Yugursa olov yanada kuchayadi.",
    "fine": "Favqulodda yordam qoidasi.",
    "explanation": "Yugurish olovni alangalatadi, qalin mato bilan o'rash esa havoni kesib olovni tezda so'ndiradi.",
    "svgType": "firstaid_burn_fire"
  },
  {
    "id": 96,
    "ticket": 5,
    "category": "technical_rules",
    "categoryName": "🔧 Texnik Xavfsizlik & Nosozliklar",
    "isNew2026": true,
    "q": "Avtomobilning orqa va orqa yon oynalarini ruxsatnoma (to'lov) olmasdan qoraytirganlik (tonirovka) uchun jarima qancha?",
    "options": [
      "A) 5 BHM",
      "B) 25 BHM (9.375.000 so'm)",
      "C) 1 BHM",
      "D) 50 BHM"
    ],
    "correct": 1,
    "rule": "MJtK 126-modda: Tegishli ruxsatnomasiz oynalari qoraytirilgan (tonirovka qilingan) transport vositasini boshqarish — 25 BHM jarimaga sabab bo'ladi.",
    "fine": "MJtK 126-modda: 25 BHM (9.375.000 so'm).",
    "explanation": "Noqonuniy tonirovka O'zbekistondagi eng katta jarimalardan biridir.",
    "svgType": "tinted_windows_fine"
  },
  {
    "id": 97,
    "ticket": 5,
    "category": "safety_firstaid",
    "categoryName": "🩹 Xavfsizlik & Tibbiy Yordam",
    "isNew2026": false,
    "q": "Kimyoviy modda (kislota yoki ishqor) ko'zga yoki teriga sachraganda birinchi navbatda nima qilinadi?",
    "options": [
      "A) Yog' yoki spirt surtiladi",
      "B) Kamida 15-20 daqiqa davomida ko'p miqdordagi oqar toza suv bilan yuviladi",
      "C) Bint bilan mahkam bog'lab qo'yiladi",
      "D) Quruq salfetka bilan artiladi"
    ],
    "correct": 1,
    "rule": "Tibbiy yordam ko'rsatish: Kimyoviy kuyishlarda zararlangan soha darhol mo'l oqim suv ostida kamida 15-20 daqiqa yuvilishi shart.",
    "fine": "Zudlik bilan shifokorga murojaat qilish zarur.",
    "explanation": "Faqat ko'p miqdordagi toza suv kimyoviy moddani yuvib ketadi va to'qimalarning chuqur kuyishini to'xtatadi.",
    "svgType": "firstaid_chemical_wash"
  },
  {
    "id": 98,
    "ticket": 5,
    "category": "technical_rules",
    "categoryName": "🔧 Texnik Xavfsizlik & Nosozliklar",
    "isNew2026": false,
    "q": "Yomg'ir yog'ayotgan paytda haydovchi tomonidagi old oyna tozalagich (dvornik) ishlamasa, harakatlanish mumkinmi?",
    "options": [
      "A) Sekin harakatlanish mumkin",
      "B) Qat'iyan taqiqlanadi — yomg'ir yoki qor paytida haydovchi tomonidagi oyna tozalagich ishlamasa harakat man etiladi",
      "C) Faqat shahar ichida mumkin",
      "D) Ko'zoynak taqib harakatlansa bo'ladi"
    ],
    "correct": 1,
    "rule": "YHQ 2.3.1-band: Yomg'ir, qor yoqqanda haydovchi tomonidagi oyna tozalagich ishlamasa harakatlanish taqiqlanadi.",
    "fine": "MJtK 125-modda.",
    "explanation": "Oyna artgich ishlamasa ko'rish nolga tenglashadi va darhol YTH sodir bo'lishi muqarrar.",
    "svgType": "wipers_failure_rain"
  },
  {
    "id": 99,
    "ticket": 5,
    "category": "fines_mjtk",
    "categoryName": "⚖️ Jarimalar & MJtK Moddalari",
    "isNew2026": false,
    "q": "Yo'l-transport hodisasi (avariya) sodir bo'lgan joydan qochib ketgan haydovchiga qanday jazo beriladi?",
    "options": [
      "A) Faqat 1 BHM jarima",
      "B) 30 BHM jarima yoki 2 yilgacha transport boshqarish huquqidan mahrum qilish yoxud 15 sutka ma'muriy qamoq",
      "C) Faqat ogohlantirish",
      "D) Mashinani jarima maydoniga qo'yish bilan cheklanadi"
    ],
    "correct": 1,
    "rule": "MJtK 137-modda: YTH yuz bergan joydan qochib ketish — 30 BHM jarima yoki 2 yilgacha huquqdan mahrum qilish yoxud 15 sutkagacha qamoqqa sabab bo'ladi.",
    "fine": "MJtK 137-modda.",
    "explanation": "YTH sodir bo'lganda jabrlanganlarga yordam bermasdan qochib ketish o'ta og'ir ma'muriy (va jinoiy) javobgarlikdir.",
    "svgType": "leaving_accident_scene"
  },
  {
    "id": 100,
    "ticket": 5,
    "category": "technical_rules",
    "categoryName": "🔧 Texnik Xavfsizlik & Nosozliklar",
    "isNew2026": false,
    "q": "Avtomashinaning susturgich (glushitel)i teshilgan bo'lsa yoki me'yordan ortiq shovqin chiqarsa, undan foydalanish mumkinmi?",
    "options": [
      "A) Sport rejimida mumkin",
      "B) Taqiqlanadi — gaz chiqarish tizimi nosoz bo'lgan yoki shovqin me'yoridan oshgan transportdan foydalanish man etiladi",
      "C) Faqat kunduzi mumkin",
      "D) Faqat trassada mumkin"
    ],
    "correct": 1,
    "rule": "YHQ 3-ilova 6.5-band: Gaz chiqarish tizimi nosoz yoki shovqin darajasi belgilangan standartdan yuqori bo'lgan transport vositalaridan foydalanish taqiqlanadi.",
    "fine": "MJtK 125-modda: 0.5 BHM.",
    "explanation": "Haddan tashqari shovqin soluvchi yoki tutun purkovchi transport vositalaridan foydalanish qonunan man etiladi.",
    "svgType": "exhaust_noise_muffler"
  }
];

if (typeof module !== 'undefined') {
  module.exports = { YHQ_CATEGORIES, YHQ_QUESTIONS };
}
