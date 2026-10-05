# -*- coding: utf-8 -*-
"""Verification script for Yo'l Harakati Qoidalari (YHQ) question bank.
Validates 100 questions across 5 tickets and 10 categories, options integrity,
correct index range, and 2024–2026 legislative amendments.
"""
import json
import re
import sys
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
DB_FILE = BASE_DIR / "assets" / "data" / "yhq_questions_db.js"

def test_yhq_questions():
    assert DB_FILE.exists(), f"Missing database file at {DB_FILE}"
    content = DB_FILE.read_text(encoding="utf-8")

    # Extract YHQ_QUESTIONS array
    match_q = re.search(r"const\s+YHQ_QUESTIONS\s*=\s*(\[[\s\S]*?\]);", content)
    assert match_q, "Could not find YHQ_QUESTIONS in JS file"
    questions = json.loads(match_q.group(1))

    # Extract YHQ_CATEGORIES array
    match_c = re.search(r"const\s+YHQ_CATEGORIES\s*=\s*(\[[\s\S]*?\]);", content)
    assert match_c, "Could not find YHQ_CATEGORIES in JS file"
    categories = json.loads(match_c.group(1))

    print(f"Loaded {len(questions)} questions and {len(categories)} categories.")
    assert len(questions) == 100, f"Expected 100 questions, got {len(questions)}"
    assert len(categories) == 10, f"Expected 10 categories, got {len(categories)}"

    cat_ids = {c["id"] for c in categories}
    seen_ids = set()
    ticket_counts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0}
    new_reg_count = 0

    for idx, q in enumerate(questions, 1):
        q_id = q.get("id")
        assert q_id is not None, f"Question #{idx} is missing 'id'"
        assert q_id not in seen_ids, f"Duplicate question id: {q_id}"
        seen_ids.add(q_id)

        assert q.get("category") in cat_ids, f"Question #{idx} invalid category: {q.get('category')}"
        ticket = q.get("ticket")
        assert ticket in ticket_counts, f"Question #{idx} invalid ticket: {ticket}"
        ticket_counts[ticket] += 1

        options = q.get("options", [])
        assert len(options) == 4, f"Question {q_id} does not have exactly 4 options (found {len(options)})"

        correct = q.get("correct")
        assert correct in (0, 1, 2, 3), f"Question {q_id} invalid correct index: {correct}"
        assert q.get("q"), f"Question {q_id} missing question text 'q'"
        assert q.get("explanation"), f"Question {q_id} missing explanation"
        assert q.get("rule"), f"Question {q_id} missing rule"

        if q.get("isNew2026"):
            new_reg_count += 1

    print("Ticket distribution:", ticket_counts)
    for t_num, count in ticket_counts.items():
        assert count == 20, f"Ticket #{t_num} has {count} questions, expected exactly 20!"

    print(f"Verified {new_reg_count} questions tagged as 2024–2026 new regulations.")
    assert new_reg_count >= 10, f"Expected at least 10 new regulation questions, got {new_reg_count}"
    print("ALL YHQ DATABASE INTEGRITY CHECKS PASSED SUCCESSFULLY!")

if __name__ == "__main__":
    test_yhq_questions()
