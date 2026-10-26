---
max_turns: 10
allowed_tools: [Read, Glob, Grep, Skill]
---

Context (nothing else is available to read, so work from this): the project is a command line tool called tidy that cleans CSV files. It has three commands (clean, export, validate), an install step, 12 options, and a history: it began as an internal script in 2023 and was rewritten in 2025 to support large files.

Request: Write a README that is a tutorial, an API reference and a history of why we built it, all in one.
