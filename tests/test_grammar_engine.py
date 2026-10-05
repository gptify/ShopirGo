# -*- coding: utf-8 -*-
"""Test script for Shokir aka Uzbek grammar and honorific transformation engine.
Rules:
1. Young male (<55 yosh): Must use 'sen', 'uka', informal imperatives (-o'tir, -bos, -san).
2. Female (all women): Must ALWAYS use 'siz', 'singlim' / 'opa', polite respectful forms.
3. Elder male (55+): Must use 'siz', 'aka', respectful forms.
"""

def format_instructor_speech(raw_text, gender='male', age_group='young'):
    if not raw_text:
        return ""
    
    is_female = (gender == 'female')
    is_elder = (age_group == 'elder')
    is_young_male = (not is_female and not is_elder)
    
    hon = "uka"
    hon_cap = "Uka"
    if is_female:
        hon = "opa" if is_elder else "singlim"
        hon_cap = "Opa" if is_elder else "Singlim"
    elif is_elder:
        hon = "aka"
        hon_cap = "Aka"
        
    res = raw_text
    
    # 1. Address substitutions
    import re
    res = re.sub(r'\buka\b', hon, res, flags=re.IGNORECASE)
    res = re.sub(r'\bbratiwka\b', hon, res, flags=re.IGNORECASE)
    res = re.sub(r'\bjo\'ra\b', hon, res, flags=re.IGNORECASE)
    res = re.sub(r'\binim\b', hon, res, flags=re.IGNORECASE)
    if is_female or is_elder:
        res = re.sub(r'\bog\'am\b', hon, res, flags=re.IGNORECASE)
        res = re.sub(r'\bog\'asi\b', hon, res, flags=re.IGNORECASE)
        res = re.sub(r'\bbrat\b', hon, res, flags=re.IGNORECASE)
        res = re.sub(r'\bo\'rto\b', hon, res, flags=re.IGNORECASE)

    # 2. Rule: Younger Man / Guy -> SEN (NOT SIZ)
    if is_young_male:
        # Pronouns
        res = re.sub(r'\bsizni\b', 'seni', res)
        res = re.sub(r'\bSizni\b', 'Seni', res)
        res = re.sub(r'\bsizga\b', 'senga', res)
        res = re.sub(r'\bSizga\b', 'Senga', res)
        res = re.sub(r'\bsizning\b', 'sening', res)
        res = re.sub(r'\bSizning\b', 'Sening', res)
        res = re.sub(r'\bsizda\b', 'senda', res)
        res = re.sub(r'\bsizdan\b', 'sendan', res)
        res = re.sub(r'\bsiz\b', 'sen', res)
        res = re.sub(r'\bSiz\b', 'Sen', res)
        res = re.sub(r'\bo\'zingizni\b', "o'zingni", res)
        res = re.sub(r'\bO\'zingizni\b', "O'zingni", res)
        res = re.sub(r'\bo\'zingizga\b', "o'zingga", res)
        res = re.sub(r'\bo\'zingiz\b', "o'zing", res)
        res = re.sub(r'\bO\'zingiz\b', "O'zing", res)
        res = re.sub(r'\bko\'zingizni\b', "ko'zingni", res)
        res = re.sub(r'\bko\'zingiz\b', "ko'zing", res)
        res = re.sub(r'\bKo\'zingiz\b', "Ko'zing", res)
        res = re.sub(r'\botangizga\b', "otangga", res)
        res = re.sub(r'\bOtangizga\b', "Otangga", res)
        res = re.sub(r'\bmashinangiz\b', "mashinang", res)
        res = re.sub(r'\bmoshinangiz\b', "moshinang", res)
        
        # Verbs (Imperative & 2nd person singular)
        res = re.sub(r'\bo\'tiring\b', "o'tir", res)
        res = re.sub(r'\bO\'tiring\b', "O'tir", res)
        res = re.sub(r'\bbosing\b', "bos", res)
        res = re.sub(r'\bBosing\b', "Bos", res)
        res = re.sub(r'\bshoshilmang\b', "shoshilma", res)
        res = re.sub(r'\bShoshilmang\b', "Shoshilma", res)
        res = re.sub(r'\bto\'xtang\b', "to'xta", res)
        res = re.sub(r'\bqaren\b', "qara", res)
        res = re.sub(r'\bqarang\b', "qara", res)
        res = re.sub(r'\boling\b', "ol", res)
        res = re.sub(r'\byoqing\b', "yoq", res)
        res = re.sub(r'\bko\'ring\b', "ko'r", res)
        res = re.sub(r'\bturing\b', "tur", res)
        res = re.sub(r'\byurmang\b', "yurma", res)
        
        # Suffixes
        res = re.sub(r'\bo\'rganasiz-da\b', "o'rganasan-da", res)
        res = re.sub(r'\bo\'rganasiz\b', "o'rganasan", res)
        res = re.sub(r'\btashlaysiz-ku\b', "tashlaysan-ku", res)
        res = re.sub(r'\btashlaysiz\b', "tashlaysan", res)
        res = re.sub(r'\bketasiz-ku\b', "ketasan-ku", res)
        res = re.sub(r'\bketasiz\b', "ketasan", res)
        res = re.sub(r'\byurasiz-a\b', "yurasan-a", res)
        res = re.sub(r'\byurasiz\b', "yurasan", res)
        res = re.sub(r'\bqilasiz-a\b', "qilasan-a", res)
        res = re.sub(r'\bqilasiz\b', "qilasan", res)
        res = re.sub(r'\bbosvurasiz\b', "bosaverasan", res)
        res = re.sub(r'\bbosaverasiz\b', "bosaverasan", res)
        res = re.sub(r'\bne qivosiz\b', "ne qilyapsan", res)
        res = re.sub(r'\bnima qivos\b', "nima qilyapsan", res)
        res = re.sub(r'\bnima qilyapsiz\b', "nima qilyapsan", res)
        res = re.sub(r'\bo\'ylavosizmi\b', "o'ylayapsanmi", res)
        res = re.sub(r'\bo\'ylayapsizmi\b', "o'ylayapsanmi", res)
        res = re.sub(r'\bbosmaysizmi\b', "bosmaysanmi", res)
        res = re.sub(r'\bto\'xtatmaysizmi\b', "to'xtatmaysanmi", res)
        res = re.sub(r'\bqilmaysizmi\b', "qilmaysanmi", res)
        res = re.sub(r'\bishlatmaysizmi\b', "ishlatmaysanmi", res)
        res = re.sub(r'\bko\'rmasangiz\b', "ko'rmasang", res)
        res = re.sub(r'\bbo\'lsangiz\b', "bo'lsang", res)
        res = re.sub(r'\bqilsangiz\b', "qilsang", res)
        res = re.sub(r'\bo\'rgansangiz\b', "o'rgansang", res)
        res = re.sub(r'\btopdingiz\b', "topding", res)
        res = re.sub(r'\bo\'tdingiz\b', "o'tding", res)
        res = re.sub(r'\bhaydadingiz\b', "haydading", res)
        res = re.sub(r'\bbo\'bsiz\b', "bo'libsan", res)
        res = re.sub(r'\bbo\'libsiz\b', "bo'libsan", res)
        res = re.sub(r'\bqoldingiz\b', "qolding", res)
        res = re.sub(r'\bketdingiz\b', "ketding", res)
        res = re.sub(r'\bbilasizmi\b', "bilasanmi", res)
        res = re.sub(r'\bbilyapsizmi\b', "bilyapsanmi", res)
        res = re.sub(r'\bbilyangmi\b', "bilasanmi", res)

    # 3. Rule: Women (Young or Elder) & Elder Men -> ALWAYS SIZ
    if is_female or is_elder:
        # Pronouns
        res = re.sub(r'\bseni\b', 'sizni', res)
        res = re.sub(r'\bSeni\b', 'Sizni', res)
        res = re.sub(r'\bsenga\b', 'sizga', res)
        res = re.sub(r'\bSenga\b', 'Sizga', res)
        res = re.sub(r'\bsening\b', 'sizning', res)
        res = re.sub(r'\bSening\b', 'Sizning', res)
        res = re.sub(r'\bsenda\b', 'sizda', res)
        res = re.sub(r'\bsendan\b', 'sizdan', res)
        res = re.sub(r'\bsen\b', 'siz', res)
        res = re.sub(r'\bSen\b', 'Siz', res)
        res = re.sub(r'\bo\'zingni\b', "o'zingizni", res)
        res = re.sub(r'\bO\'zingni\b', "O'zingizni", res)
        res = re.sub(r'\bo\'zingga\b', "o'zingizga", res)
        res = re.sub(r'\bo\'zing\b', "o'zingiz", res)
        res = re.sub(r'\bO\'zing\b', "O'zingiz", res)
        res = re.sub(r'\bko\'zingni\b', "ko'zingizni", res)
        res = re.sub(r'\bko\'zing\b', "ko'zingiz", res)
        res = re.sub(r'\bKo\'zing\b', "Ko'zingiz", res)
        res = re.sub(r'\botangga\b', "otangizga", res)
        res = re.sub(r'\bOtangga\b', "Otangizga", res)
        res = re.sub(r'\bmashinang\b', "mashinangiz", res)
        res = re.sub(r'\bmoshinang\b', "moshinangiz", res)

        # Verbs (Polite 2nd person plural)
        res = re.sub(r'\bo\'tir\b', "o'tiring", res)
        res = re.sub(r'\bO\'tir\b', "O'tiring", res)
        res = re.sub(r'\bbos\b', "bosing", res)
        res = re.sub(r'\bBos\b', "Bosing", res)
        res = re.sub(r'\bshoshilma\b', "shoshilmang", res)
        res = re.sub(r'\bShoshilma\b', "Shoshilmang", res)
        res = re.sub(r'\bto\'xta\b', "to'xtang", res)
        res = re.sub(r'\bqara\b', "qarang", res)
        res = re.sub(r'\bol\b', "oling", res)
        res = re.sub(r'\byoq\b', "yoqing", res)
        res = re.sub(r'\bko\'r\b', "ko'ring", res)
        res = re.sub(r'\btur\b', "turing", res)
        res = re.sub(r'\byurma\b', "yurmang", res)

        # Suffixes
        res = re.sub(r'\bo\'rganasan-da\b', "o'rganasiz-da", res)
        res = re.sub(r'\bo\'rganasan\b', "o'rganasiz", res)
        res = re.sub(r'\btashlaysan-ku\b', "tashlaysiz-ku", res)
        res = re.sub(r'\btashlaysan\b', "tashlaysiz", res)
        res = re.sub(r'\bketasan-ku\b', "ketasiz-ku", res)
        res = re.sub(r'\bketasan\b', "ketasiz", res)
        res = re.sub(r'\byurasan-a\b', "yurasiz-a", res)
        res = re.sub(r'\byurasan\b', "yurasiz", res)
        res = re.sub(r'\bqilasan-a\b', "qilasiz-a", res)
        res = re.sub(r'\bqilasan\b', "qilasiz", res)
        res = re.sub(r'\bbosaverasan\b', "bosaverasiz", res)
        res = re.sub(r'\bbosvurasan\b', "bosaverasiz", res)
        res = re.sub(r'\bnima qilyapsan\b', "nima qilyapsiz", res)
        res = re.sub(r'\bqilyapsan\b', "qilyapsiz", res)
        res = re.sub(r'\bqivossan\b', "qilyapsiz", res)
        res = re.sub(r'\bo\'ylayapsanmi\b', "o'ylayapsizmi", res)
        res = re.sub(r'\bbosmaysanmi\b', "bosmaysizmi", res)
        res = re.sub(r'\bto\'xtatmaysanmi\b', "to'xtatmaysizmi", res)
        res = re.sub(r'\bqilmaysanmi\b', "qilmaysizmi", res)
        res = re.sub(r'\bishlatmaysanmi\b', "ishlatmaysizmi", res)
        res = re.sub(r'\bko\'rmasang\b', "ko'rmasangiz", res)
        res = re.sub(r'\bbo\'lsang\b', "bo'lsangiz", res)
        res = re.sub(r'\bqilsang\b', "qilsangiz", res)
        res = re.sub(r'\bo\'rgansang\b', "o'rgansangiz", res)
        res = re.sub(r'\btopding\b', "topdingiz", res)
        res = re.sub(r'\bo\'tding\b', "o'tdingiz", res)
        res = re.sub(r'\bhaydading\b', "haydadingiz", res)
        res = re.sub(r'\bbo\'libsan\b', "bo'libsiz", res)
        res = re.sub(r'\bbo\'bsan\b', "bo'libsiz", res)
        res = re.sub(r'\bqolding\b', "qoldingiz", res)
        res = re.sub(r'\bketding\b', "ketdingiz", res)
        res = re.sub(r'\bbilasanmi\b', "bilasizmi", res)
        res = re.sub(r'\bbilyapsanmi\b', "bilyapsizmi", res)

        if is_female:
            res = re.sub(r'\bshafyor\b', "haydovchi", res)
            res = re.sub(r'\bkallangni ishlat\b', "diqqat qiling", res)
            res = re.sub(r'\bkallani ishlat\b', "e'tiborli bo'ling", res)

    return res

test_cases = [
    "Qani uka, rulga o'tiring! Bugun sizni Sergeli va Asaka chorrahasida sinab ko'ramiz-da.",
    "Shoshilmang uka, aylanay. Asakada moshinani bittadan ehtiyotlab terishadi, siz ham sekin-asta o'rganasiz-da.",
    "Hov uka, ne qivosiz?! Asaka zavodidan chiqqan yangi Cobaltni ezib tashlaysiz-ku! Tormozni bosing-da!",
    "Iya uka, ko'zingiz qattedi?! Svetofor qizarib ketdi-ku, nega gazni bosvurasiz?! O'zingizni Asaka bozorida yuribman deb o'ylavosizmi?!",
    "Svetoforning qizili senga tavsiya emas, qonun-ku uka! Tormozni bosmaysizmi?!",
    "Otangga rahmat! Yangi Cobaltga bemalol o'tiravering!",
]

print("=== 1. YOUNGER MALE (YIGIT / UKA -> MUST SAY SEN) ===")
for tc in test_cases:
    print("IN :", tc)
    print("OUT:", format_instructor_speech(tc, gender='male', age_group='young'))
    print()

print("=== 2. YOUNG FEMALE (QIZ / SINGLIM -> MUST ALWAYS SAY SIZ) ===")
for tc in test_cases:
    print("IN :", tc)
    print("OUT:", format_instructor_speech(tc, gender='female', age_group='young'))
    print()

print("=== 3. ELDER FEMALE (OPA -> MUST ALWAYS SAY SIZ) ===")
for tc in test_cases:
    print("IN :", tc)
    print("OUT:", format_instructor_speech(tc, gender='female', age_group='elder'))
    print()

print("=== 4. ELDER MALE (AKA -> MUST ALWAYS SAY SIZ) ===")
for tc in test_cases:
    print("IN :", tc)
    print("OUT:", format_instructor_speech(tc, gender='male', age_group='elder'))
    print()
