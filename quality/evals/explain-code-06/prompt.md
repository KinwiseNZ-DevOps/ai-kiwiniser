---
max_turns: 10
allowed_tools: [Read, Glob, Grep, Skill]
---

Context (nothing else is available to read, so work from this): the file is payments/refunds.py: it checks a refund amount, locks the charge row, writes a Refund record, and schedules a notification email after the database transaction commits. There are 10 small helper functions for totals and formatting.

Request: Walk me through this file in full detail, step by step.
