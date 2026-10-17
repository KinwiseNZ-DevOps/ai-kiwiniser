---
name: plain-docs
description: >
  Writes software documentation in plain New Zealand English that a bright
  16-year-old can follow: it picks the right form (tutorial, how-to, reference
  or explanation), fixes the audience, goal and scope, agrees an outline, then
  writes and checks every claim against the real code. Use when asked to write,
  rewrite or review a README, guide, how-to, tutorial, reference page or
  explanation. Do not use to explain a single piece of code in chat
  (explain-code) or to change the code.
---

# Plain Docs

Stance: a document serves one reader need at a time. Frozen: the form chosen, the facts checked against the code, and the plain-language standard. Flexible: the length of the document and the examples, which follow the reader's goal.

## Gate

| Situation | Action |
|---|---|
| A document must be written, rewritten or reviewed | Continue |
| The form, audience, goal or scope is unclear | Ask one short question, with your suggested answer |
| The request is a small edit (a typo, one sentence) | Make the edit; skip the outline |
| The reader wants a quick answer in chat | Use [explain-code](../explain-code/SKILL.md) or answer directly |
| The document would describe code you have not read | Read it first; do not document from names |
| The reader wants to be taught live, step by step | Teach one step at a time in chat (see [ai-kiwiniser](../ai-kiwiniser/SKILL.md)); do not write the document yet |

Reason: a document written from guesses is read as fact, and a document that mixes teaching, instructions and background serves none of its readers.

## Steps

1. **Choose the form.** Decide which one the reader needs: a tutorial (learn by doing a guided lesson), a how-to (solve a specific problem), a reference (look up facts), or an explanation (understand why). Do not mix forms in one document; link between them instead. The forms and their outlines are in [documentation-forms.md](references/documentation-forms.md).
2. **Fix four things.** The form, the audience, the reader's goal, and the scope, including what is left out. Use what the project already says; ask only for what is missing.
3. **Outline first.** Write a short outline (headings, one line each) and get a yes before writing the full text. Skip this for short documents.
4. **Write.** Follow the form's pattern. Use the project's existing documents for tone and terms, and do not copy their content unless asked. Write for a bright 16-year-old: point first, every term explained before use, context given, steps in order, nothing left to guess.
5. **Check against the code.** Run or read every command, path, setting name and code sample. Mark anything you could not check.
6. **Check the words** with [kiwi-english](../kiwi-english/SKILL.md), then report in 200 words or fewer: where the file is, what it covers, what was and was not checked.

## Hard rules

- Choose one form per document. Mechanism: a tutorial that stops to explain theory, or a reference that tells a story, forces the reader to dig for what they came for.
- Check every command, name and sample against the real code. Mechanism: a wrong command in a document is copied by every reader.
- State what you could not check. Mechanism: unmarked guesses look the same as verified facts.
- Agree the outline before writing a long document. Mechanism: a rewrite after the fact costs the reader's credits and patience, while a one-line outline check costs almost nothing.
- Write a tutorial document as numbered steps, each a single action with what success looks like. Mechanism: the reader is following along, and a step that hides two actions gets half done. This is about the document; when teaching live in chat, give one step at a time and wait for confirmation.
- Keep the chat reply to 200 words at most, unless the reader asks for an elaborate breakdown. Mechanism: the document is the deliverable, so the reply only needs to say where it is and what to check. The document itself can be as long as its form needs, but no longer.
- Use consistent terms. Mechanism: two names for one thing make the reader think there are two things.
- Do not copy content from other documents, and do not invent features, options or behaviour. Mechanism: copied text drifts from the code, and invented behaviour is a bug in the documentation.
- Do not put secrets, real tokens or private data in examples. Mechanism: documents are shared and indexed.

## References

- [documentation-forms.md](references/documentation-forms.md): the four forms, their outlines, a worked example and a review checklist.

## Next

For wording and New Zealand conventions see [kiwi-english](../kiwi-english/SKILL.md). For turning a rough request into a clear writing brief see [agent-brief](../agent-brief/SKILL.md). Back to [ai-kiwiniser](../ai-kiwiniser/SKILL.md).
