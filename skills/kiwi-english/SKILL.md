---
name: kiwi-english
description: >
  Applies plain-language writing and New Zealand English conventions to text:
  everyday word choice, short sentences, spelling, dates, numbers, currency,
  te reo Māori words and macrons, and acronym handling. Use when writing or
  checking text for New Zealand readers, simplifying wording, or deciding how to
  write a date, an amount or a Māori word. Do not use to explain code
  (explain-code) or to change the meaning of the text.
---

# Kiwi English

Stance: meaning is fixed; wording and conventions change. Frozen: the facts in the text and any official name. Flexible: sentence shape, word choice and level of formality, which follow the reader.

## Gate

| Situation | Action |
|---|---|
| Writing for New Zealand readers or following this repository's rules | Apply this skill |
| The organisation has its own style guide | Follow it where it differs, and say so |
| A quoted name, title or code identifier | Leave it exactly as written |
| The reader is an expert who prefers precise terms | Keep the precise term, explain it once |
| The question is one word, date or macron | Answer that one point; do not rewrite or review the whole text |
| A rule here is uncertain (marked in the reference) | Say it is uncertain and suggest checking the audience's guide |

Reason: rewriting an official name or an identifier to look tidier breaks searches and references.

## The 16-year-old test

Before sending, ask whether a bright 16-year-old with no coding background could read the text once and act on it. Check each part:

1. **Point first.** The first sentence says what this is or what to do.
2. **Words explained.** Every technical term has a plain meaning given before it is used. No acronym is left unexplained.
3. **Context.** The text says what the thing is part of and why it matters here, so the reader is not dropped into the middle.
4. **Steps in order.** Things are described in the order they happen, and each step is one action.
5. **Nothing to guess.** No hidden assumption, no "obviously", no step the reader must infer.
6. **One next step.** The text ends with the single thing to do next, or says nothing is needed.

If any part fails, fix the text and not the reader. The reference gives worked rewrites.

## Steps

1. **Check the meaning first.** Do not edit anything until you know what the text must say.
2. **Simplify.** Short sentences, active voice, present tense, everyday words, strong verbs. Swap formal words for plain ones using the list in [nz-english-and-plain-words.md](references/nz-english-and-plain-words.md).
3. **Apply New Zealand conventions.** Spelling, dates, numbers, currency, acronyms, and te reo Māori words with macrons. Details are in the same reference.
4. **Re-read for meaning.** Confirm nothing true was lost and no risk was removed.
5. **Report only the changes that matter** if you were asked to review, not every tweak.

## Hard rules

- Use New Zealand English spelling: -ise endings, colour, behaviour, centre. Mechanism: mixed spellings in one text look careless to the reader, and this repository's policy requires -ise.
- Use a plain hyphen, never an em dash or en dash. Mechanism: a single, checkable rule is easier to hold than a style judgement.
- Write dates as day, month, year with the month in words (18 October 2026), and the numeric form as dd/mm/yyyy. Mechanism: month-first dates are read differently by New Zealand readers, so 03/04 could be misread.
- Spell out an abbreviation the first time, unless the reader certainly knows it. Mechanism: an unexplained abbreviation stops a non-expert at the first line.
- Write te reo Māori words with correct macrons, do not italicise them, and do not add an "s" for a plural. Mechanism: a missing macron can change the word (keke and kēkē differ), and an added "s" is an English ending on a Māori word.
- Leave personal, family, hapū and iwi names, and the titles of existing publications, as their owners wrote them. Mechanism: those spellings belong to their owners and are not ours to correct.
- Avoid negative contractions in warnings and instructions: write "do not" and "cannot". Mechanism: a reader can misread "can't" as "can", and the cost of that mistake is highest in an instruction.
- Do not use idioms or metaphors that hide the meaning (for example "going forward" or "hub"). Mechanism: figurative words need decoding, and readers with English as a second language lose the point.
- Never change a number, a name or a quoted error message to make text read better. Mechanism: those are the facts the reader may search or act on.

## References

- [nz-english-and-plain-words.md](references/nz-english-and-plain-words.md): spelling, dates, numbers, currency, macrons, plain-word swaps, sources and what is unverified.

## Next

To explain code in plain words see [explain-code](../explain-code/SKILL.md). To tidy an agent's report see [plain-english-report](../plain-english-report/SKILL.md). Back to [ai-kiwiniser](../ai-kiwiniser/SKILL.md).
