# -*- coding: utf-8 -*-
"""ShopirGo Official Telegram Bot (@ShopirGoBot)

Handles user commands, provides Telegram WebApp launch buttons, and manages viral duel links.
"""
import logging
import time
import os
import requests

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

TOKEN = os.getenv("TELEGRAM_BOT_TOKEN", "8860852821:AAH_rDL4s4pSsF7sd57FoNOjHacZqcMBhIc")
BASE_URL = f"https://api.telegram.org/bot{TOKEN}"
WEBAPP_URL = "https://gptify.github.io/ShopirGo/?v=3.0"


def send_message(chat_id, text, reply_markup=None):
    payload = {
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "HTML",
    }
    if reply_markup:
        payload["reply_markup"] = reply_markup
    try:
        r = requests.post(f"{BASE_URL}/sendMessage", json=payload, timeout=10)
        return r.json()
    except Exception as e:
        logger.error(f"Error sending message: {e}")
        return None


def handle_start(chat_id, user_first_name="Shopir", start_param=""):
    if start_param.startswith("duel_"):
        duel_id = start_param
        duel_app_url = f"{WEBAPP_URL}&start_param={duel_id}"
        duel_text = f"""🏎️ <b>1v1 YHQ POYGA DUELI CHAQIRUVI!</b>

Salom, {user_first_name}! Do‘stingiz sizni <b>ShopirGo</b> poygasiga chaqirdi.
⚡ 3 ta vaziyatli qoidalar savoli, maksimal tezlik va Shokir akaning haqiqiy bahosi!

Kim yutsa — prava olishga tayyor, kim yutqazsa — 6 oy piyoda yuradi! 😂
Poygani hoziroq boshlash uchun quyidagi tugmani bosing: 👇"""

        keyboard = {
            "inline_keyboard": [
                [
                    {
                        "text": "🔥 Duelni Qabul Qilish (Poygaga!)",
                        "web_app": {"url": duel_app_url}
                    }
                ],
                [
                    {
                        "text": "🚗 Asosiy Ilovaga Kirish",
                        "web_app": {"url": WEBAPP_URL}
                    }
                ]
            ]
        }
        send_message(chat_id, duel_text, keyboard)
        return

    elif start_param.startswith("ref_"):
        ref_id = start_param
        ref_app_url = f"{WEBAPP_URL}&start_param={ref_id}"
        ref_text = f"""🎁 <b>Do‘stingiz sizga 50,000 UZS Start Bonusi ulashdi!</b>

Salom, {user_first_name}!
ShopirGo ilovasida sizga Matiz taqdim etildi va hisobingizga dastlabki balans yuklandi.
55 yoshli Asaka ustozi Shokir aka bilan yangi 2026 YHQ qoidalarini birga o'rganing! 👇"""

        keyboard = {
            "inline_keyboard": [
                [
                    {
                        "text": "🚗 Bonusni Olish & Boshlash",
                        "web_app": {"url": ref_app_url}
                    }
                ]
            ]
        }
        send_message(chat_id, ref_text, keyboard)
        return

    welcome_text = f"""👋 <b>Assalomu alaykum, {user_first_name}!</b>

🚗 <b>ShopirGo</b> — O‘zbekiston YHQ 2026 yangi qoidalari va rasmiy imtihon simulyatoriga xush kelibsiz!

👨‍🏫 <b>55 yoshli Asaka ustozi Shokir aka sizni kutmoqda:</b>
<i>"Uka, o‘tir! Qani gazni bos, Asaka Cobaltini birgalikda sinab ko‘ramiz!"</i>

⚡ <b>Asosiy imkoniyatlar:</b>
• 2024–2026 yangi qoidalari (60 km/s, elektr samakatlar, fotoradarlar)
• 20 daqiqalik rasmiy DYP imtihoni (max 2 ta xato)
• Yagona bosh ustoz: 55 yoshli Asaka afsonasi Shokir aka (Andijon)
• Erkaklarga "Uka" (sen), ayollarga "Singlim" (siz) muomalasi
• Rasmiy yo'l belgilari va chorraha qoidalari
• "Moshin Berilmasin!" qoidabuzarlik bayonnomasi va PNG sertifikatlar
• 1v1 do‘stlar o‘rtasida poyga va duellar!

Quyidagi tugmani bosing va to‘g‘ridan-to‘g‘ri ilovaga kiring! 👇"""

    keyboard = {
        "inline_keyboard": [
            [
                {
                    "text": "🚗 Testni Boshlash (Mini App)",
                    "web_app": {"url": WEBAPP_URL}
                }
            ],
            [
                {
                    "text": "⚔️ Do‘st bilan Duelga Kirish",
                    "url": "https://t.me/share/url?url=https://t.me/ShopirGoBot&text=" + requests.utils.quote("🏎️ Seni ShopirGo'da 1v1 YHQ poygasiga chaqiraman! 3 ta tezkor savol. Kim yutsa, ikkinchisi ustidan kuladi 😂 Gazni bos:")
                }
            ],
            [
                {
                    "text": "⚖️ Qonunchilik Manbalari (Lex.uz)",
                    "url": "https://lex.uz/docs/-5953883"
                }
            ]
        ]
    }
    send_message(chat_id, welcome_text, keyboard)


def handle_sources(chat_id):
    sources_text = """⚖️ <b>ShopirGo — Rasmiy Qonunchilik Manbalari:</b>

Ushbu ilova mustaqil ta'limiy simulyator bo‘lib, O‘zbekiston Respublikasining rasmiy ochiq qonunchilik hujjatlariga asoslangan:

1. <b>YHQ Asosiy Matni:</b> Vazirlar Mahkamasining 2022-yil 12-apreldagi 172-son qarori.
2. <b>60 km/soat Tezlik Rejimi:</b> Vazirlar Mahkamasining 2023-yil 3-apreldagi 140-son qarori.
3. <b>Elektr Samakatlar (20 km/s):</b> Vazirlar Mahkamasining 2024-yil 19-yanvardagi qarori.
4. <b>Jarimalar va +5 km/s Chegirma:</b> Ma’muriy javobgarlik to‘g‘risidagi kodeks (MJtK).

🔗 <i>Rasmiy qonunlar milliy bazasi: https://lex.uz</i>

⚠️ <b>Ogohlantirish:</b> Ilova IIV YHXX yoki davlat organlari bilan bevosita bog‘liq emas va faqat mustaqil bilim olishga mo‘ljallangan."""
    send_message(chat_id, sources_text)


def run_polling():
    logger.info("ShopirGoBot polling started...")
    offset = 0
    while True:
        try:
            r = requests.get(f"{BASE_URL}/getUpdates", params={"offset": offset, "timeout": 25}, timeout=30)
            data = r.json()
            if not data.get("ok"):
                time.sleep(2)
                continue

            for update in data.get("result", []):
                offset = update["update_id"] + 1
                msg = update.get("message")
                if not msg or "text" not in msg:
                    continue

                chat_id = msg["chat"]["id"]
                text = msg["text"].strip()
                user_first_name = msg.get("from", {}).get("first_name", "Shopir")

                if text.startswith("/start"):
                    parts = text.split(maxsplit=1)
                    param = parts[1].strip() if len(parts) > 1 else ""
                    handle_start(chat_id, user_first_name, start_param=param)
                elif text.startswith("/sources"):
                    handle_sources(chat_id)
                elif text.startswith("/duel"):
                    parts = text.split(maxsplit=1)
                    param = parts[1].strip() if len(parts) > 1 else ""
                    handle_start(chat_id, user_first_name, start_param=param or "duel_quick")
                elif text.startswith("/help"):
                    send_message(chat_id, "Savollar va qo'llab-quvvatlash: @ShopirGoSupportBot\nRasmiy bot: @ShopirGoBot")
                else:
                    handle_start(chat_id, user_first_name)
        except Exception as e:
            logger.error(f"Polling loop error: {e}")
            time.sleep(3)


if __name__ == "__main__":
    run_polling()
