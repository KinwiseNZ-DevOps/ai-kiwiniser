# Brief template

```
Goal: [what the person wants, in their words]
Context: [where this lives, what exists already, what the person said matters]
Constraints: [rules that must hold: tools, style, deadlines, things the person ruled out]
Done when: [checks that show the work is finished]
Leave alone: [what must not change]
Assumptions: [things I filled in, each labelled]
Open question: [one question and my suggested default], or "none"
```

## Before and after

Person says:

> Make the settings page nicer and fix whatever is wrong with it.

Brief:

```
Goal: make the settings page nicer and fix what is wrong with it.
Context: the settings page in the mobile app. The person did not say what is wrong.
Constraints: keep the existing look and feel of the rest of the app; do not change how settings are saved.
Done when: the page matches the app's style, nothing overflows on a small phone, and the existing tests still pass. Each problem found is listed with what was done about it.
Leave alone: how settings are stored, other screens, any text the person has not asked to change.
Assumptions: "nicer" means visual tidiness and not new features (assumed). "Fix whatever is wrong" means visible problems and bugs found by reading and running the page (assumed).
Open question: do you have a specific problem in mind? Unless you say otherwise I will review the page, list what I find, and fix only clear faults.
```

What changed: the vague words were pinned to checks, the boundary was stated, assumptions were labelled, and there is one question with a default.

## Gap checklist

- Goal: is it in the person's words?
- Where: which project, screen, file or area?
- What exists: is there code, a design or a document to follow?
- Limits: tools, style, time, privacy?
- Done: how will anyone know it is finished?
- Do not touch: what stays as it is?
- Risk: does it involve money, logins, personal data or deleting things? If so, say so in the brief.

## Rewriting a prompt without changing it

1. Keep every must-have phrase.
2. Move background into Context and rules into Constraints.
3. Replace vague words ("better", "clean", "fast") with a check, or mark them as unclear.
4. Remove repetition and politeness filler.
5. Do not add a goal.
6. Show the result next to the original so the person can see nothing was lost.

## Before sending

- Does the brief say the same thing the person said?
- Can "done" be checked?
- Is every assumption labelled?
- Is there at most one question?
- Is there anything secret in it?
