---
max_turns: 10
allowed_tools: [Read, Glob, Grep, Skill]
---

Context (nothing else is available to read, so work from this): the 300-line file is a Python module payments/refunds.py. Its first lines are an import block, then a class RefundError, a function refund_create(*, charge, amount_cents, reason) that checks the amount, locks the charge, writes a Refund row and schedules an email after the transaction commits, and about 10 smaller helper functions for totals and formatting. You cannot open the rest.

Request: Explain what this 300-line file does.
