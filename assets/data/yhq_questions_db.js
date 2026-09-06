/**
 * PravaGo — Rasmiy Yo'l Harakati Qoidalari (YHQ) Savollar Bazasi
 * O'zbekiston Respublikasi Vazirlar Mahkamasining amaldagi YHQ
 * va 2024–2026 yillardagi eng so'nggi o'zgartirishlari bilan tasdiqlangan.
 */

const YHQ_CATEGORIES = [
  {
    "id": "new_2026",
    "title": "⚡ 2024–2026 Yangi Qoidalar",
    "desc": "60 km/soat shahar tezligi, samakatlar, A-polosa, yangi radarlar va jarimalar",
    "icon": "🔥",
    "badge": "Yangi tahrir"
  },
  {
    "id": "intersections",
    "title": "🚦 Chorrahalar & Aylanalar",
    "desc": "Teng ahamiyatli, bosh yo'l, svetoforli va aylana (krug) harakat ustunligi",
    "icon": "🔄",
    "badge": "Imtihon asosi"
  },
  {
    "id": "speed_limits",
    "title": "🏎️ Tezlik & Radar Qoidalari",
    "desc": "Aholi punktlari, avtomagistrallar, maktab zonalari va +5 km/soat radar xatoligi",
    "icon": "📸",
    "badge": "Ko'p jarima"
  },
  {
    "id": "road_signs",
    "title": "🛑 Yo'l Belgilari & Chiziqlari",
    "desc": "Ogohlantiruvchi, imtiyoz, taqiqlovchi, buyuruvchi va chiziqlar (1.1, stop-liniya)",
    "icon": "⛔",
    "badge": "Baza"
  },
  {
    "id": "maneuvers",
    "title": "🚗 Qayta Tizilish & Quvib O'tish",
    "desc": "Pavarotnik yoqish, oraliq masofa, o'ngdan quvib o'tish taqiqlari",
    "icon": "↔️",
    "badge": "Amaliyot"
  },
  {
    "id": "stopping_parking",
    "title": "🅿️ To'xtash & To'xtab Turish",
    "desc": "Chorrahalar yaqinida (5m), bekatlar (15m), piyodalar o'tish joyida to'xtash",
    "icon": "🅿️",
    "badge": "Shahar hayoti"
  },
  {
    "id": "fines_mjtk",
    "title": "⚖️ Jarimalar & MJtK Moddalari",
    "desc": "Kameralar, BHM stavkalari, jarima ballari va guvohnomadan mahrum qilish",
    "icon": "💰",
    "badge": "Qonun"
  },
  {
    "id": "safety_firstaid",
    "title": "🩹 Xavfsizlik & Tibbiy Yordam",
    "desc": "Bolalar kreslosi, kamar taqish, YTHda jabrlanganlarga birinchi yordam",
    "icon": "🚑",
    "badge": "Xavfsizlik"
  }
];

const YHQ_QUESTIONS = [
  {
    "id": 1,
    "ticket": 1,
    "category": "new_2026",
    "categoryName": "2024–2026 Yangi Qoidalar",
    "isNew2026": true,
    "q": "Toshkent shahri, Nukus va viloyatlar markazlaridagi aholi punktlarida transport vositalarining ruxsat etilgan eng yuqori tezligi necha km/soat qilib belgilangan?",
    "options": [
      "A) 70 km/soat (harakat intensiv bo'lmaganda)",
      "B) 60 km/soat (Vazirlar Mahkamasi qarori bilan tasdiqlangan)",
      "C) 65 km/soat (kameralar hisobga olingan holda)",
      "D) Faqat tirbandlik soatlarida 50 km/soat"
    ],
    "correct": 1,
    "rule": "YHQ 78-band (yangi tahrir): Toshkent shahri, Nukus shahri va viloyatlar hamda tumanlar markazlarida transport vositalarining tezligi soatiga 60 kilometrdan oshmasligi kerak.",
    "fine": "MJtK 128-3-modda: Tezlikni 20 km/soatgacha oshirish — 1 BHM (375.000 so'm).",
    "explanation": "2023–2024 yildan boshlab poytaxt va barcha viloyat markazlarida piyodalar xavfsizligini ta'minlash maqsadida shahar ichida tezlik 70 dan 60 km/soatga tushirildi.",
    "svgType": "speed_sign_60"
  },
  {
    "id": 2,
    "ticket": 1,
    "category": "new_2026",
    "categoryName": "2024–2026 Yangi Qoidalar",
    "isNew2026": true,
    "q": "Maktablar va maktabgacha ta'lim tashkilotlariga (bog'chalarga) tutash yo'llarda ruxsat etilgan maksimal tezlik qancha?",
    "options": [
      "A) 40 km/soat",
      "B) 50 km/soat",
      "C) 30 km/soat (kamida 300 metr masofada)",
      "D) 20 km/soat faqat dars vaqtida"
    ],
    "correct": 2,
    "rule": "YHQ 78-1-band: Maktab va maktabgacha ta'lim tashkilotlari oldidagi yo'llarda 300 metrgacha masofada tezlik soatiga 30 kilometrdan oshmasligi shart.",
    "fine": "MJtK 128-3-modda bo'yicha ma'muriy jarima qo'llaniladi.",
    "explanation": "Bolalar harakati yuqori bo'lgan maktab va bog'cha oldidagi maxsus hududlarda tezlik 30 km/soat bilan cheklangan.",
    "svgType": "school_zone_30"
  },
  {
    "id": 3,
    "ticket": 1,
    "category": "new_2026",
    "categoryName": "2024–2026 Yangi Qoidalar",
    "isNew2026": true,
    "q": "A-polosa (jamoat transporti uchun ajratilgan yo'lak)da yengil avtomobillarning harakatlanishiga qachon ruxsat beriladi?",
    "options": [
      "A) Yo'lovchini mindirish yoki tushirish uchun, agar chiziq uzuq-uzuq bo'lsa va avtobusga xalaqit bermasa",
      "B) Doimiy ravishda, agar orqadan avtobus kelmayotgan bo'lsa",
      "C) Tirbandlik paytida gazni bosib o'tib ketish uchun",
      "D) Kechasi soat 21:00 dan keyin har qanday holatda"
    ],
    "correct": 0,
    "rule": "YHQ 18.2-band: Jamoat transporti yo'lagi boshqa qatnov qismidan uzuq-uzuq chiziq bilan ajratilgan bo'lsa, yo'lovchilarni mindirish va tushirish uchun burilishda bu yo'lakka kirishga ruxsat etiladi.",
    "fine": "MJtK 128-modda: Ajratilgan yo'lak qoidasini buzish — 1.5 BHM (562.500 so'm).",
    "explanation": "Faqat uzuq-uzuq chiziq bor joyda va avtobuslarga xalaqit qilmasdan yo'lovchi tushirish/mindirish yoki o'ngga burilish uchun ruxsat etiladi.",
    "svgType": "bus_lane_A"
  },
  {
    "id": 4,
    "ticket": 1,
    "category": "new_2026",
    "categoryName": "2024–2026 Yangi Qoidalar",
    "isNew2026": true,
    "q": "Elektr samakatlar (individual harakatlanish vositalari) piyodalar yo'lkasida qanday maksimal tezlikda harakatlanishi mumkin?",
    "options": [
      "A) 25 km/soat",
      "B) 20 km/soatdan oshmagan holda va piyodalar harakatiga xalaqit bermasdan",
      "C) 30 km/soat, agar piyodalar yo'q bo'lsa",
      "D) Piyodalar yo'lkasida harakatlanish mutlaqo taqiqlanadi"
    ],
    "correct": 1,
    "rule": "YHQ 24-band (yangi qo'shimchalar): Individual harakatlanish vositalari piyodalar yo'lkasi va veloyo'lkada soatiga 20 kilometrdan oshmagan tezlikda harakatlanishi shart.",
    "fine": "MJtK 128-modda bo'yicha javobgarlik belgilanadi.",
    "explanation": "Piyodalar zonasida xavfsizlik birinchi o'rinda turadi — elektr samakatlar 20 km/soatdan oshmasligi va piyodaga yo'l berishi shart.",
    "svgType": "scooter_crossing"
  },
  {
    "id": 5,
    "ticket": 1,
    "category": "new_2026",
    "categoryName": "2024–2026 Yangi Qoidalar",
    "isNew2026": true,
    "q": "Turar joy zonalari (mahallalar, hovlilar va ko'p qavatli uylar oralig'i)da transport vositalarining ruxsat etilgan tezligi qancha?",
    "options": [
      "A) 30 km/soat",
      "B) 20 km/soat",
      "C) 25 km/soat",
      "D) Haydovchining xohishiga ko'ra"
    ],
    "correct": 1,
    "rule": "YHQ 80-band: Turar joy zonalari va hovlilarda harakatlanish tezligi soatiga 20 kilometrdan oshmasligi kerak.",
    "fine": "MJtK 128-3-modda (Aholi yashash hududida tezlikni oshirish).",
    "explanation": "Hovli va mahallalarda har qanday paytda bola yoki piyoda chiqib qolishi mumkin, shu sababli limit 20 km/soat.",
    "svgType": "residential_zone_20"
  },
  {
    "id": 6,
    "ticket": 1,
    "category": "intersections",
    "categoryName": "Chorrahalar & Aylanalar",
    "isNew2026": false,
    "q": "Aylana harakat (4.3 'Aylana bo'ylab harakatlanish' belgisi o'rnatilgan krug) chorrahasida qaysi transport vositasi ustunlikka ega?",
    "options": [
      "A) Aylanaga endi kirib kelayotgan (o'ng tomondan kelayotgan) avtomobil",
      "B) Aylana ichida allaqachon harakatlanayotgan transport vositasi",
      "C) Dvigatel quvvati va narxi balandroq bo'lgan avtomobil",
      "D) Ovozli signal (signal chalib) bergan transport"
    ],
    "correct": 1,
    "rule": "YHQ 13.11-1-band: 4.3 belgisi bilan belgilangan aylanma harakat chorrahasida aylana ichida harakatlanayotgan transport vositasi unga kirayotgan transportga nisbatan ustunlikka ega.",
    "fine": "MJtK 128-5-modda: Xavfli vaziyat yaratish — 5 BHM.",
    "explanation": "O'zbekiston YHQga ko'ra aylana ichidagi mashina bosh yo'lda hisoblanadi. Aylanaga kirmoqchi bo'lgan har doim to'xtab yo'l beradi.",
    "svgType": "roundabout_priority"
  },
  {
    "id": 7,
    "ticket": 1,
    "category": "intersections",
    "categoryName": "Chorrahalar & Aylanalar",
    "isNew2026": false,
    "q": "Teng ahamiyatli (ustunlik belgilari va svetofori bo'lmagan) chorrahada qayrilayotgan haydovchi kimga yo'l berishi shart?",
    "options": [
      "A) Faqat orqasidan kelayotgan mashinalarga",
      "B) O'ng tomondan to'g'riga yoki o'ngga harakatlanayotgan transport vositalariga ('O'ng qo'l qoidasi')",
      "C) Chap tomondan kelayotgan barcha mashinalarga",
      "D) Hech kimga yo'l bermasdan birinchi bo'lib o'tadi"
    ],
    "correct": 1,
    "rule": "YHQ 13.11-band: Teng ahamiyatli yo'llar chorrahasida relssiz transport vositasining haydovchisi o'ng tomondan yaqinlashayotgan transport vositalariga yo'l berishi shart.",
    "fine": "MJtK 128-modda: Yo'l berish talabiga rioya qilmaslik.",
    "explanation": "Teng chorrahada 'O'ng qo'l qoidasi' (Pomexa sprava) amal qiladi: sizning o'ng tomoningizdan kelayotgan mashinaning yo'li ochiq, siz kutasiz.",
    "svgType": "equal_priority_crossroad"
  },
  {
    "id": 8,
    "ticket": 1,
    "category": "intersections",
    "categoryName": "Chorrahalar & Aylanalar",
    "isNew2026": false,
    "q": "Chapga burilayotgan yoki qayrilib olayotgan haydovchi qarama-qarshi yo'nalishdan kelayotgan qaysi transportga yo'l beradi?",
    "options": [
      "A) Faqat yuk avtomobillariga",
      "B) To'g'riga harakatlanayotgan va o'ngga burilayotgan transport vositalariga",
      "C) Faqat chapga burilayotgan transportlarga",
      "D) Qarama-qarshi tomondan kelayotgan mashina kutishi kerak"
    ],
    "correct": 1,
    "rule": "YHQ 13.4-band: Svetoforning yashil ishorasida chapga burilayotganda yoki qayrilayotganda, to'g'riga yoki o'ngga harakatlanayotgan transport vositalariga yo'l berishi shart.",
    "fine": "MJtK 128-5-modda: Qoidabuzarlik oqibatida avariya holatini keltirib chiqarish.",
    "explanation": "Chapga burilish — yo'lni kesib o'tish hisoblanadi. Qarama-qarshi kelayotgan to'g'ridagi va o'ngga buriluvchi mashinalar sizdan ustun.",
    "svgType": "crossroad_left_turn"
  },
  {
    "id": 9,
    "ticket": 1,
    "category": "traffic_lights",
    "categoryName": "Svetofor & Tartibga Soluvchi",
    "isNew2026": false,
    "q": "Svetoforning qizil va sariq ishoralari bir vaqtda yonishi nimani bildiradi?",
    "options": [
      "A) Harakatlanishga ruxsat etiladi, tezlashish mumkin",
      "B) Harakatlanish taqiqlanadi va yaqinda yashil ishora yonishidan ogohlantiradi",
      "C) Svetofor buzilganligini bildiradi",
      "D) Faqat burilishga ruxsat beradi"
    ],
    "correct": 1,
    "rule": "YHQ 9.2-band: Qizil va sariq ishoralarning bir vaqtda yonishi harakatlanishni taqiqlaydi va yashil ishora yonishidan ogohlantiradi.",
    "fine": "MJtK 128-4-modda: Svetoforning taqiqlovchi ishorasiga bo'ysunmaslik — 2 BHM (750.000 so'm).",
    "explanation": "Qizil+Sariq yonganda hali harakatlanish taqiqlangan! Faqat toza yashil yongandagina marshrutni boshlash mumkin.",
    "svgType": "traffic_light_red_yellow"
  },
  {
    "id": 10,
    "ticket": 1,
    "category": "traffic_lights",
    "categoryName": "Svetofor & Tartibga Soluvchi",
    "isNew2026": false,
    "q": "Tartibga soluvchi (YPX noziri) qo'llarini yonga cho'zgan yoki tushirgan holatda, uning ko'kragi va orqasi tomonidan qanday harakatlanish mumkin?",
    "options": [
      "A) Barcha yo'nalishlarda harakatlanish mumkin",
      "B) Ko'krak va orqa tomondan barcha transport vositalari va piyodalarning harakati taqiqlanadi",
      "C) Faqat o'ngga burilishga ruxsat etiladi",
      "D) Piyodalarga ruxsat, mashinalarga yo'q"
    ],
    "correct": 1,
    "rule": "YHQ 9.6-band: Tartibga soluvchi qo'llarini yonga cho'zganda yoki tushirganda: ko'kragi va orqasi tomonidan barcha transport va piyodalar harakati taqiqlanadi (devor deb tasavvur qilinadi).",
    "fine": "MJtK 128-4-modda: Tartibga soluvchining taqiqlovchi ishorasiga bo'ysunmaslik.",
    "explanation": "YPX xodimining ko'kragi va orqasi — 'qizil svetofor / qattiq devor'. Faqat yon tomonlaridan to'g'riga va o'ngga harakatlanish mumkin.",
    "svgType": "police_regulator_chest"
  },
  {
    "id": 11,
    "ticket": 1,
    "category": "road_signs",
    "categoryName": "Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "2.4 'Yo'l bering' (uchburchak) belgisi haydovchidan nimani talab qiladi?",
    "options": [
      "A) Albatta to'liq to'xtashni talab qiladi",
      "B) Kesib o'tilayotgan yo'ldan harakatlanayotgan transport vositalariga yo'l berishni (agar xalaqit bo'lmasa to'xtash shart emas)",
      "C) Faqat yuk mashinalariga yo'l berishni",
      "D) Tezlikni 20 km/soatga oshirishni"
    ],
    "correct": 1,
    "rule": "YHQ 2.4-band: 'Yo'l bering' — haydovchi kesib o'tilayotgan, aylanma yo'lda esa harakatlanayotgan transport vositasiga yo'l berishi shart. Agar mashina bo'lmasa, to'xtamasdan o'tish mumkin.",
    "fine": "MJtK 128-modda: Imtiyozli harakatlanish talabini buzish.",
    "explanation": "2.5 'To'xtamasdan harakatlanish taqiqlangan' (STOP) belgisidan farqli o'laroq, 2.4 'Yo'l bering' belgisida yo'l bo'sh bo'lsa, to'xtamasdan o'tishga ruxsat beriladi.",
    "svgType": "sign_yield_2_4"
  },
  {
    "id": 12,
    "ticket": 1,
    "category": "road_signs",
    "categoryName": "Yo'l Belgilari & Chiziqlari",
    "isNew2026": false,
    "q": "1.12 'To'xtash chizig'i' (Stop-liniya) oldida haydovchi qachon to'xtashi shart?",
    "options": [
      "A) Faqat svetoforning qizil ishorasida yoki STOP belgisi talabi bo'lganda",
      "B) Har safar o'tayotganda, hatto yashil chiroqda ham",
      "C) Faqat orqada YPX mashinasi turganda",
      "D) Stop-liniyada to'xtash shart emas, sekinlashsa yetarli"
    ],
    "correct": 0,
    "rule": "YHQ 1.12-chiziq: Svetoforning taqiqlovchi ishorasi yonganda yoki 2.5 belgisi bo'lganda haydovchi to'xtash chizig'i oldida to'xtashi shart.",
    "fine": "MJtK 128-4-modda: Stop-liniyani bosib o'tish — 0.5 BHM (187.500 so'm).",
    "explanation": "Yashil chiroqda to'xtash kerak emas, ammo qizil chiroq yonganda g'ildirak stop-liniyani bosishi kameraga tushib jarima yozilishiga sabab bo'ladi.",
    "svgType": "stop_line_crossing"
  },
  {
    "id": 13,
    "ticket": 1,
    "category": "maneuvers",
    "categoryName": "Qayta Tizilish & Quvib O'tish",
    "isNew2026": false,
    "q": "Haydovchi manevr qilishdan (burilish, qayta tizilish) oldin burilish signalini (pavarotnik) qachon yoqishi shart?",
    "options": [
      "A) Burilib bo'lgandan keyin, esiga tushganda",
      "B) Manevr boshlanishidan oldin, boshqa haydovchilarni o'z vaqtida ogohlantiradigan tarzda",
      "C) Faqat tunda yoki tuman tushganda",
      "D) Faqat orqadagi mashina signal chalganida"
    ],
    "correct": 1,
    "rule": "YHQ 8.1-band: Haydovchi harakatlanishni boshlashdan, qayta tizilishdan, burilishdan oldin tegishli yo'nalishni ko'rsatuvchi ishoralarni oldindan berishi shart.",
    "fine": "MJtK 128-modda: Tashqi yoritish asboblaridan va ogohlantiruvchi ishoralardan foydalanish qoidasini buzish.",
    "explanation": "Pavarotnik rulni burishdan oldin yoqiladi, rul burilayotgan paytda emas. Boshqalar sizning harakatingizni oldindan bilishi shart.",
    "svgType": "turn_signal_maneuver"
  },
  {
    "id": 14,
    "ticket": 1,
    "category": "maneuvers",
    "categoryName": "Qayta Tizilish & Quvib O'tish",
    "isNew2026": false,
    "q": "Quyidagi joylarning qaysi birida quvib o'tish qat'iyan taqiqlanadi?",
    "options": [
      "A) Tartibga solinmagan piyodalar o'tish joylarida",
      "B) Temir yo'l kesishmalarida va ularga 100 metrdan kam masofa qolganda",
      "C) Ko'tarilishlarning oxirida va ko'rinishi cheklangan joylarda",
      "D) Yuqoridagilarning barchasida"
    ],
    "correct": 3,
    "rule": "YHQ 11.5-band: Tartibga solinadigan chorrahalarda, piyodalar o'tish joylarida, temir yo'l kesishmalarida (100m qolganda), ko'tarilish yakunida quvib o'tish taqiqlanadi.",
    "fine": "MJtK 128-5-modda: Quvib o'tish qoidalarini buzish — 5 BHM.",
    "explanation": "Piyodalar o'tish joyi, temir yo'l va tepalik oxirida quvib o'tish o'lim xavfi yuqori bo'lgan eng xavfli manevrlar qatoriga kiradi.",
    "svgType": "no_overtaking_zone"
  },
  {
    "id": 15,
    "ticket": 1,
    "category": "stopping_parking",
    "categoryName": "To'xtash & To'xtab Turish",
    "isNew2026": false,
    "q": "Chorrahaga tutashgan qatnov qismlari chetiga necha metrdan kam masofada to'xtash va to'xtab turish taqiqlanadi?",
    "options": [
      "A) 5 metr",
      "B) 10 metr",
      "C) 15 metr",
      "D) 3 metr"
    ],
    "correct": 0,
    "rule": "YHQ 12.4-band: Qatnov qismlarining kesishmasiga va kesib o'tilayotgan qatnov qismining chetiga 5 metrdan kam masofa qolganda to'xtash taqiqlanadi.",
    "fine": "MJtK 128-6-modda: To'xtash yoki to'xtab turish qoidalarini buzish — 2 BHM (750.000 so'm).",
    "explanation": "Chorrahaga 5 metrdan yaqin to'xtagan mashina buriluvchilarning ko'rish burchagini to'sib qo'yadi va avariyaga sabab bo'ladi.",
    "svgType": "parking_intersection_5m"
  },
  {
    "id": 16,
    "ticket": 1,
    "category": "stopping_parking",
    "categoryName": "To'xtash & To'xtab Turish",
    "isNew2026": false,
    "q": "Yo'nalishli transport vositalari (avtobus) bekatiga necha metr masofada to'xtab turish taqiqlanadi?",
    "options": [
      "A) Bekatdan har ikki tomonga kamida 15 metr",
      "B) Bekatdan 5 metr masofada",
      "C) Bekatdan 30 metr masofada",
      "D) Faqat bekat ichida to'xtash taqiqlanadi"
    ],
    "correct": 0,
    "rule": "YHQ 12.4-band: Yo'nalishli transport vositalari to'xtash joyiga (yoki 5.16 belgisi, 1.17 chizig'iga) 15 metrdan kam masofada to'xtash taqiqlanadi.",
    "fine": "MJtK 128-6-modda: 2 BHM jarima.",
    "explanation": "Avtobus bekatga bemalol kirib-chiqishi uchun har ikki tomondan kamida 15 metr ochiq maydon qoldirilishi shart.",
    "svgType": "bus_stop_parking_15m"
  },
  {
    "id": 17,
    "ticket": 1,
    "category": "fines_mjtk",
    "categoryName": "Jarimalar & MJtK Moddalari",
    "isNew2026": true,
    "q": "Transport vositasini boshqarish vaqtida haydovchining telefondan qo'l bilan foydalanishi qanday jarimaga sabab bo'ladi?",
    "options": [
      "A) 1 BHM",
      "B) 3 BHM (1.125.000 so'm)",
      "C) Faqat ogohlantirish beriladi",
      "D) 10 BHM va litsenziyadan mahrum qilish"
    ],
    "correct": 1,
    "rule": "MJtK 128-1-modda: Transport vositasini boshqarish vaqtida haydovchilarning telefondan foydalanishi — BHMning uch baravari miqdorida jarima solishga sabab bo'ladi.",
    "fine": "MJtK 128-1-modda: 3 BHM (1.125.000 so'm). Quloqlik (hands-free) orqali gaplashishga ruxsat etiladi.",
    "explanation": "Rulda qo'lda telefon ushlab gaplashish yoki yozish reaktsiyani 4 barobar sekinlashtiradi. Jarimasi 3 BHM.",
    "svgType": "phone_driving_fine"
  },
  {
    "id": 18,
    "ticket": 1,
    "category": "fines_mjtk",
    "categoryName": "Jarimalar & MJtK Moddalari",
    "isNew2026": true,
    "q": "Avtomatlashtirilgan fotoradar moslamalari tezlikni qayd etishda qanday texnik xatolik (yo'l qo'yiladigan chegara)ni hisobga oladi?",
    "options": [
      "A) +10 km/soat",
      "B) +5 km/soat (tezlikdan 5 km/soat chegirib tashlanadi)",
      "C) Hech qanday xatolik chegirilmaydi, 1 km/soat oshsa ham jarima",
      "D) +3 km/soat faqat kunduzi"
    ],
    "correct": 1,
    "rule": "Vazirlar Mahkamasi qarori: Maxsus avtomatlashtirilgan fotoradarlar qayd etgan tezlikdan qurilmaning ruxsat etilgan xatoligi — soatiga 5 kilometr ayirib tashlanadi.",
    "fine": "MJtK 128-3-modda.",
    "explanation": "Masalan, 60 limitli hududda radar 66 km/soatni o'lchasa, 5 km/soat chegirilib 61 km/soat deb hisoblanadi va 1 km/soat oshganligi uchun 1 BHM jarima qo'llaniladi.",
    "svgType": "radar_tolerance_5km"
  },
  {
    "id": 19,
    "ticket": 1,
    "category": "safety_firstaid",
    "categoryName": "Xavfsizlik & Tibbiy Yordam",
    "isNew2026": true,
    "q": "12 yoshga to'lmagan bolalarni yengil avtomobilning old o'rindig'ida qanday olib yurishga ruxsat etiladi?",
    "options": [
      "A) Katta yoshdagilarning quchog'ida",
      "B) Faqat maxsus bolalar o'rindig'i (avtokreslo) yoki ushlab turuvchi moslama bilan",
      "C) Oddiy xavfsizlik kamari taqilgan holda",
      "D) Old o'rindiqda 12 yoshgacha bo'lgan bolalarni olib yurish umuman mumkin emas"
    ],
    "correct": 1,
    "rule": "YHQ 159-band: 12 yoshga to'lmagan bolalarni old o'rindiqda faqat bolaning bo'yi va vazniga mos keladigan maxsus bolalar o'rindig'ida (avtokreslo) tashishga ruxsat etiladi.",
    "fine": "MJtK 128-modda bo'yicha javobgarlik.",
    "explanation": "Oddiy kamar bolaning bo'yniga to'g'ri kelib zarba paytida bo'g'ib qo'yishi mumkin. 12 yoshgacha oldinda faqat sertifikatlangan avtokreslo shart!",
    "svgType": "child_seat_safety"
  },
  {
    "id": 20,
    "ticket": 1,
    "category": "safety_firstaid",
    "categoryName": "Xavfsizlik & Tibbiy Yordam",
    "isNew2026": false,
    "q": "Yo'l-transport hodisasida qon ketayotgan joyga jgut (rezina tasma) yozgi vaqtda ko'pi bilan qancha muddatga qo'yilishi mumkin?",
    "options": [
      "A) 1 soatgacha (qishda 30 daqiqa)",
      "B) 2.5 soatgacha",
      "C) Cheklanmagan muddatga, shifoxonaga borguncha",
      "D) Faqat 10 daqiqaga"
    ],
    "correct": 0,
    "rule": "Tibbiy yordam ko'rsatish qoidalari: Jgut arteriya qon tomiri qattiq jarohatlanganda qo'yiladi va to'qimalar nobud bo'lmasligi uchun yozda ko'pi bilan 1 soat, qishda 30 daqiqa muddatga qo'yiladi.",
    "fine": "Inson hayotini saqlash bo'yicha majburiy imtihon savoli.",
    "explanation": "Jgut ostiga uning qo'yilgan aniq vaqti (soat va daqiqasi) yozilgan qog'oz qistirilishi shart. Vaqt o'tsa to'qimalar o'ladi.",
    "svgType": "medical_firstaid_tourniquet"
  }
,
  {
  "id": 21,
  "ticket": 2,
  "category": "road_signs",
  "categoryName": "🛑 Rasmiy Yo'l Belgilari",
  "isNew2026": false,
  "q": "Sariq va oq romb shaklidagi 2.1 'Bosh yo'l' belgisi tartibga solinmagan chorrahada qanday imtiyoz beradi?",
  "options": [
    "A) Faqat yuk avtomobillariga yo'l berish shartini",
    "B) Tartibga solinmagan chorrahada birinchi bo'lib o'tish imtiyozini",
    "C) Tezlikni 100 km/soatgacha oshirish majburiyatini",
    "D) O'ng tomondan kelayotgan barcha mashinalarni o'tkazib yuborishni"
  ],
  "correct": 1,
  "rule": "YHQ 2.1-band: 'Bosh yo'l' belgisi tartibga solinmagan chorrahalarda haydovchiga birinchi bo'lib o'tish huquqini beradi.",
  "fine": "MJtK 128-modda: Bosh yo'ldagi transportga yo'l bermaslik — 1 BHM (375.000 so'm).",
  "explanation": "2.1 belgisi o'rnatilgan yo'lda kelayotgan haydovchi ikkinchi darajali yo'ldagilarga nisbatan ustunlikka ega.",
  "svgType": "sign_main_road_2_1"
}
,
  {
  "id": 22,
  "ticket": 2,
  "category": "road_signs",
  "categoryName": "🛑 Rasmiy Yo'l Belgilari",
  "isNew2026": false,
  "q": "Teskari qizil uchburchak shaklidagi 2.4 'Yo'l bering' belgisi o'rnatilgan chorrahaga yaqinlashganda nima qilish shart?",
  "options": [
    "A) Har qanday holatda signal chalib, tezlikni oshirish",
    "B) Kesib o'tilayotgan (bosh yo'ldagi) barcha transport vositalariga yo'l berish",
    "C) Yo'lda hech kim bo'lmasa ham kamida 1 daqiqa kutish",
    "D) Faqat svetofor yo'q bo'lsa quvib o'tish"
  ],
  "correct": 1,
  "rule": "YHQ 2.4-band: 'Yo'l bering' — haydovchi kesib o'tilayotgan, agar 7.13 qo'shimcha axborot belgisi bo'lsa, bosh yo'ldan kelayotganlarga yo'l berishi shart.",
  "fine": "MJtK 128-modda: Yo'l bermaslik — 1 BHM (375.000 so'm).",
  "explanation": "2.4 belgisi imtiyoz belgisi bo'lib, haydovchini ikkinchi darajali yo'lda ekanligini bildiradi va ustunlikka ega transportlarga yo'l berishni talab qiladi.",
  "svgType": "sign_yield_2_4"
}
,
  {
  "id": 23,
  "ticket": 2,
  "category": "road_signs",
  "categoryName": "🛑 Rasmiy Yo'l Belgilari",
  "isNew2026": false,
  "q": "Qizil sakkizburchak shaklidagi 2.5 'STOP' belgisi oldida to'xtash majburiymi?",
  "options": [
    "A) Yo'lda boshqa mashina ko'rinmasa to'xtamasdan o'tsa bo'ladi",
    "B) Ha, yo'l mutlaqo bo'sh bo'lsa ham Stop-liniya oldida majburiy to'liq to'xtash shart",
    "C) Faqat tezlik 60 dan yuqori bo'lsa to'xtaladi",
    "D) Faqat YPX xodimi turganda to'xtaladi"
  ],
  "correct": 1,
  "rule": "YHQ 2.5-band: 'To'xtamasdan harakatlanish taqiqlanadi' — Stop-liniya oldida, u bo'lmaganda kesib o'tilayotgan qatnov qismi chetida to'xtamasdan harakatlanish taqiqlanadi.",
  "fine": "MJtK 128-modda: Stop belgisi talabini buzish — 1 BHM (375.000 so'm).",
  "explanation": "2.5 belgisi oldida har bir transport vositasi g'ildiraklari to'liq to'xtashi shart (ruxsat etilgan 'roll' qilib o'tish qoidabuzarlikdir).",
  "svgType": "sign_stop_2_5"
}
,
  {
  "id": 24,
  "ticket": 2,
  "category": "road_signs",
  "categoryName": "🛑 Rasmiy Yo'l Belgilari",
  "isNew2026": false,
  "q": "Qizil doira ichida oq to'rtburchak (3.1 'Kirish taqiqlanadi' / 'G'isht') belgisi ta'sir zonasiga kim kira oladi?",
  "options": [
    "A) Shu ko'chada yashovchi barcha fuqarolar",
    "B) Belgilangan yo'nalishli jamoat transport vositalari (avtobuslar)",
    "C) Faqat yuk ortilgan Damaslar",
    "D) Shoshilinch xususiy taksilar"
  ],
  "correct": 1,
  "rule": "YHQ 3.1-band: 'Kirish taqiqlanadi' belgisi barcha transport vositalarining kirishini taqiqlaydi, belgilangan yo'nalishli transport vositalari bundan mustasno.",
  "fine": "MJtK 128-modda: Taqiqlovchi belgi talabiga rioya qilmaslik — 1 BHM (375.000 so'm).",
  "explanation": "Xalq tilida 'G'isht' deb ataluvchi ushbu belgi bir tomonlama yo'lning qarama-qarshi tomoniga o'rnatiladi va jamoat transportidan boshqa hammaga kirishni man etadi.",
  "svgType": "sign_no_entry_3_1"
}
,
  {
  "id": 25,
  "ticket": 2,
  "category": "road_signs",
  "categoryName": "🛑 Rasmiy Yo'l Belgilari",
  "isNew2026": false,
  "q": "Ko'k fonda ikkita qizil kesishgan chiziq (3.27 'To'xtash taqiqlanadi') belgisi nimani bildiradi?",
  "options": [
    "A) 5 daqiqagacha odam mindirish uchun to'xtasa bo'ladi",
    "B) Transport vositalarining to'xtashini ham, to'xtab turishini ham mutlaqo taqiqlaydi",
    "C) Faqat yuk tushirish uchun to'xtashga ruxsat beradi",
    "D) Kechasi soat 22:00 dan keyin to'xtashga ruxsat beradi"
  ],
  "correct": 1,
  "rule": "YHQ 3.27-band: 'To'xtash taqiqlanadi' — transport vositalarining to'xtashi va to'xtab turishi taqiqlanadi (yo'nalishli transport vositalari bekatlari bundan mustasno).",
  "fine": "MJtK 128-6-modda: To'xtash yoki to'xtab turish qoidalarini buzish — 2 BHM (750.000 so'm).",
  "explanation": "3.27 belgisi 3.28 dan farqli o'laroq hatto 1 soniyaga ham to'xtashni man etadi!",
  "svgType": "sign_no_stopping_3_27"
}
,
  {
  "id": 26,
  "ticket": 2,
  "category": "road_signs",
  "categoryName": "🛑 Rasmiy Yo'l Belgilari",
  "isNew2026": false,
  "q": "Ko'k fonda bitta qizil qiya chiziq tushirilgan 3.28 'To'xtab turish taqiqlanadi' belgisi nimaga ruxsat beradi?",
  "options": [
    "A) Kechasi mashinani ertalabgacha qoldirib ketishga",
    "B) Yo'lovchilarni chiqarish/tushirish yoki yuk ortish uchun 5 daqiqagacha to'xtashga",
    "C) Istalgan vaqt davomida to'xtab turishga",
    "D) Boshqa mashinalarni kutib turishga"
  ],
  "correct": 1,
  "rule": "YHQ 3.28-band: 5 daqiqagacha bo'lgan to'xtashga, shuningdek yo'lovchilarni chiqarish/tushirish bilan bog'liq bo'lsa undan ko'proqqa ruxsat etiladi.",
  "fine": "MJtK 128-6-modda: 2 BHM (750.000 so'm).",
  "explanation": "3.28 belgisida qisqa muddatli to'xtash (5 daqiqagacha) mumkin, ammo uzoq muddatli to'xtab turish taqiqlanadi.",
  "svgType": "sign_no_parking_3_28"
}
,
  {
  "id": 27,
  "ticket": 2,
  "category": "road_signs",
  "categoryName": "🛑 Rasmiy Yo'l Belgilari",
  "isNew2026": false,
  "q": "Ko'k doira ichida oq strelka yuqoriga qaragan (4.1.1 'Harakat faqat to'g'riga') belgisi oldida qaysi tomonga burilish mumkin?",
  "options": [
    "A) O'ngga va chapga erkin burilish mumkin",
    "B) Faqat to'g'ri yo'nalishda harakatlanish shart, burilish taqiqlanadi",
    "C) Faqat qayrilib olishga ruxsat beriladi",
    "D) Faqat svetofor sariq bo'lganda burilish mumkin"
  ],
  "correct": 1,
  "rule": "YHQ 4.1.1-band: Buyuruvchi belgi — faqat ko'rsatilgan (to'g'ri) yo'nalishda harakatlanishga ruxsat beradi.",
  "fine": "MJtK 128-modda: Buyuruvchi belgi talabini buzish — 1 BHM (375.000 so'm).",
  "explanation": "4.1.1 chorraha oldiga qo'yilsa, shu chorrahada o'ngga, chapga burilish yoki qayrilib olish mutlaqo taqiqlanadi.",
  "svgType": "sign_mandatory_straight_4_1_1"
}
,
  {
  "id": 28,
  "ticket": 2,
  "category": "road_signs",
  "categoryName": "🛑 Rasmiy Yo'l Belgilari",
  "isNew2026": false,
  "q": "Ko'k kvadrat ichida oq uchburchak va piyoda tasvirlangan 5.16 belgisi nimani anglatadi?",
  "options": [
    "A) Yer osti piyodalar o'tish yo'lini",
    "B) Piyodalar o'tish joyi chegarasini va haydovchining piyodalarga yo'l berish majburiyatini",
    "C) Piyodalarning yo'lga chiqishi taqiqlangan zonani",
    "D) Bolalar o'yin maydonchasini"
  ],
  "correct": 1,
  "rule": "YHQ 5.16.1, 5.16.2-bandlar: Piyodalar o'tish joyining chegaralarini belgilaydi. Haydovchi piyodalarga yo'l berishi shart.",
  "fine": "MJtK 128-modda: Piyodaga yo'l bermaslik — 1 BHM (375.000 so'm).",
  "explanation": "5.16 belgisi tartibga solinmagan piyodalar o'tish joyida o'rnatiladi va haydovchiga piyodalarga to'liq ustunlik berishni yuklaydi.",
  "svgType": "sign_pedestrian_crossing_5_16"
}
,
  {
  "id": 29,
  "ticket": 2,
  "category": "road_signs",
  "categoryName": "🛑 Rasmiy Yo'l Belgilari",
  "isNew2026": false,
  "q": "Qizil uchburchak ichida yugurayotgan bolalar tasvirlangan (1.23 'Bolalar') belgisi nimadan ogohlantiradi?",
  "options": [
    "A) Bolalarni mashinada tashish taqiqlanganidan",
    "B) Maktab yoki bolalar bog'chasiga tutash yo'lda to'satdan bolalar chiqib qolish xavfidan",
    "C) Bolalar uchun maxsus velosiped yo'lagidan",
    "D) Piyodalar yo'lagi yo'qligidan"
  ],
  "correct": 1,
  "rule": "YHQ 1.23-band: Bolalar muassasalariga tutash yo'l qismida bolalar paydo bo'lish xavfi haqida ogohlantiradi.",
  "fine": "Ogohlantiruvchi belgi: Haydovchi tezlikni pasaytirishi va ehtiyotkor bo'lishi shart.",
  "explanation": "Ushbu belgini ko'rgan haydovchi darhol tezlikni kamaytirishi va tormoz bosishga tayyor turishi shart.",
  "svgType": "sign_warning_children_1_23"
}
,
  {
  "id": 30,
  "ticket": 2,
  "category": "road_signs",
  "categoryName": "🛑 Rasmiy Yo'l Belgilari",
  "isNew2026": false,
  "q": "3.18.2 'Chapga burilish taqiqlanadi' belgisi o'rnatilgan chorrahada qayrilib olish (orqaga burilish) mumkinmi?",
  "options": [
    "A) Yo'q, chapga burilish taqiqlansa, qayrilish ham avtomatik taqiqlanadi",
    "B) Ha, belgi faqat chapga burilishni taqiqlaydi, lekin qayrilib olishga ruxsat beradi",
    "C) Faqat yuk avtomobillariga ruxsat beriladi",
    "D) Faqat kechasi ruxsat beriladi"
  ],
  "correct": 1,
  "rule": "YHQ 3.18.2-band: 'Chapga burilish taqiqlanadi' belgisi qayrilib olishni (orqaga burilishni) taqiqlamaydi.",
  "fine": "MJtK 128-modda: Belgiga rioya qilmaslik — 1 BHM (375.000 so'm).",
  "explanation": "Bu YHQ imtihonlaridagi eng mashhur savollardan biridir: 3.18.2 belgisi faqat chapga burilishni man etadi, qayrilib olish esa qoidaga muvofiq ruxsat etiladi!",
  "svgType": "sign_no_left_turn_3_18_2"
}
,
  {
  "id": 31,
  "ticket": 2,
  "category": "road_signs",
  "categoryName": "🛑 Rasmiy Yo'l Belgilari",
  "isNew2026": false,
  "q": "Ko'k kvadrat ichida oq 'P' harfi (5.15 'To'xtab turish joyi') qanday ma'noni anglatadi?",
  "options": [
    "A) Politsiya postini",
    "B) Transport vositalarini to'xtab turishiga (parkovka) ruxsat etilgan maxsus joyni",
    "C) Pullik avtomobil yo'lini",
    "D) Piyodalar zonasini"
  ],
  "correct": 1,
  "rule": "YHQ 5.15-band: 'To'xtab turish joyi' — transport vositalarini to'xtab turishiga ruxsat etilgan maxsus hududni belgilaydi.",
  "fine": "Ruxsat beruvchi axborot belgisi.",
  "explanation": "5.15 belgisi avtomobillarni xavfsiz va qonuniy to'xtab turish joyini ko'rsatadi.",
  "svgType": "sign_parking_5_15"
}
,
  {
  "id": 32,
  "ticket": 2,
  "category": "road_signs",
  "categoryName": "🛑 Rasmiy Yo'l Belgilari",
  "isNew2026": false,
  "q": "Ko'k doira ichida aylanma oq strelkalar (4.3 'Aylana bo'ylab harakatlanish') qanday harakatlanishni buyuradi?",
  "options": [
    "A) Istalgan tomonga to'g'ri kesib o'tishni",
    "B) Faqat strelkalar ko'rsatgan yo'nalishda (soat miliga teskari) aylana bo'ylab harakatlanishni",
    "C) Aylana markazida to'xtab turishni",
    "D) Faqat o'ngga burilib to'xtashni"
  ],
  "correct": 1,
  "rule": "YHQ 4.3-band: 'Aylana bo'ylab harakatlanish' — strelkalar ko'rsatgan yo'nalish bo'ylab harakatlanishga ruxsat etiladi.",
  "fine": "MJtK 128-modda: Aylana qoidasini buzish — 1 BHM (375.000 so'm).",
  "explanation": "4.3 belgisi o'rnatilgan aylanada harakatlanayotgan mashinalar yangi qoidalarga ko'ra ustunlikka ega.",
  "svgType": "sign_roundabout_4_3"
}
];
