# -*- coding: utf-8 -*-
"""Sanity test for ShopirGo Telegram Bot (@ShopirGoBot) logic and payloads.
"""
import sys
from pathlib import Path
from unittest.mock import patch, MagicMock

BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BASE_DIR))

import shopirgo_bot

def test_bot_markup_and_handlers():
    print("Testing shopirgo_bot endpoints and buttons...")
    with patch("shopirgo_bot.requests.post") as mock_post:
        mock_post.return_value.json.return_value = {"ok": True}

        # 1. Test /start handler
        shopirgo_bot.handle_start(123456, "Ali")
        assert mock_post.called
        call_args = mock_post.call_args[1]["json"]
        assert call_args["chat_id"] == 123456
        assert "Ali" in call_args["text"]
        assert "Shokir aka" in call_args["text"]
        
        # Verify WebApp URL button
        kb = call_args["reply_markup"]["inline_keyboard"]
        web_app_btn = kb[0][0]
        assert "Mini App" in web_app_btn["text"]
        assert "web_app" in web_app_btn
        assert "https://gptify.github.io/ShopirGo" in web_app_btn["web_app"]["url"]

        # Verify 1v1 duel button
        duel_btn = kb[1][0]
        assert "Duel" in duel_btn["text"]
        assert "t.me/share/url" in duel_btn["url"]

        # 2. Test /sources legal handler
        mock_post.reset_mock()
        shopirgo_bot.handle_sources(123456)
        assert mock_post.called
        sources_payload = mock_post.call_args[1]["json"]
        assert "lex.uz" in sources_payload["text"].lower()
        assert "172-son" in sources_payload["text"]
        assert "60 km/soat" in sources_payload["text"]
        print("ALL BOT SANITY CHECKS PASSED SUCCESSFULLY!")

if __name__ == "__main__":
    test_bot_markup_and_handlers()
