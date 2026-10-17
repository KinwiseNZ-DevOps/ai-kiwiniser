# Documentation forms

Diátaxis (https://diataxis.fr/) names four forms of technical documentation: tutorials, how-to guides, technical reference and explanation. The needs each one serves, as described below, are the author's reading of the framework and common practice (inference); the fetched Diátaxis page confirmed the four forms and not the finer detail. Choose one form per document.

| Form | The reader wants to | The document is like | Success is |
|---|---|---|---|
| Tutorial | learn by doing a guided lesson | a lesson | the reader finishes with a working result and some confidence |
| How-to | solve one specific problem | a recipe | the problem is solved |
| Reference | look up a fact | a dictionary | the fact is found fast and is correct |
| Explanation | understand why | a discussion | the reader understands the idea and its context |

## Tutorial

Outline:

1. What you will make or learn, and what you need first (short).
2. Numbered steps. Each is one action, says what to expect, and has a visible check ("You should see ...").
3. What you have now, and where to go next.

Rules: no choices and no side trips, keep the path short and safe, explain only what is needed to do the next step, and link to explanations instead of writing them. Every step must have been run.

## How-to guide

Outline:

1. The problem, in the reader's words (title: "How to ...").
2. What you need before you start.
3. Numbered steps to the result.
4. How to check it worked, and what to do if it did not.

Rules: assume the reader knows the basics, do not teach, do not explain background, handle the common variation in a short note, and link to reference and explanation.

## Reference

Outline: a consistent structure for every item (name, what it does, inputs, outputs or values, an example, limits). Order it the way the reader will look things up (alphabetical or by area).

Rules: describe, do not instruct; be complete and exact; no opinions or stories; state defaults and limits; keep examples short and correct.

## Explanation

Outline:

1. The idea and why it matters here (context).
2. How it works, in plain words and an accurate example.
3. Why it was done this way, and the alternatives and trade-offs.
4. Where it stops working, and what to read next.

Rules: give the bigger picture, explain choices and reasons, admit limits, and avoid steps and commands (put those in how-to guides).

## Worked example

Request: "Write something so new team members can run the app on their laptop."

- Form: tutorial (new people, learning by doing). Audience: a new developer. Goal: see the app running. Scope: one operating system, local only; deployment and troubleshooting left out and linked.
- Outline sent for approval: Before you start, Get the code, Install the tools, Start the app, Check it works, Next steps.
- Written as numbered single-action steps, each with "You should see ...".
- Every command was run in a clean folder; the one that could not be run (needs a paid account) was marked "not checked".
- Chat reply: where the file is, what it covers, what was and was not run. Under 200 words.

## Review checklist

- One form, and it matches the reader's need.
- Audience, goal and scope are clear in the first lines.
- A bright 16-year-old could follow it on one read: terms explained before use, context given, steps in order, nothing to guess.
- Every command, name and sample checked against the code, or marked not checked.
- Terms used consistently.
- No secrets or private data.
- Links work, and other forms are linked and not copied.
- New Zealand English spelling, dates and macrons.
- No em dashes or en dashes.
