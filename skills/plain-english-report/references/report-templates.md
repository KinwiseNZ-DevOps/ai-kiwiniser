# Report templates

## Standard report

```
What happened: [one or two sentences, outcome first]
What it means: [what changes for the reader]
Checked: [what was run or read, and the result]
Not checked: [what was skipped or could not be run, and why]
Watch for: [real risks and limits]
What I need from you: [one question and my pick], or "nothing needed"
```

Keep each line to a sentence or two. Drop a line if it has nothing true to say, except "Not checked", which stays even when it reads "nothing skipped".

## Before and after

Before (agent talk):

> Refactored the auth middleware to use a context manager, updated 14 call sites, fixed a race in the token refresh path, and all unit tests pass. Pushed to the feature branch; CI is green.

After:

> What happened: I changed how the app handles login sessions so two requests cannot refresh a session at the same moment, which was a real bug.
> What it means: people should stop being signed out at random.
> Checked: the automated tests passed, and the automatic checks on the shared copy passed.
> Not checked: I did not try it on a real phone, and I did not test heavy use.
> Watch for: this touches logins, so test signing in and out before release.
> What I need from you: should I merge it now, or wait until you have tried it on a phone? I suggest waiting.

Note what changed: the outcome comes first, "context manager" and "race" became their effect, "14 call sites" was cut, and what was not checked is stated.

## Commit message

```
[Short summary of the change in plain words, under about 50 characters]

[Why the change was needed, in one or two sentences.]
[What changed, in plain terms, only if it is not obvious.]
```

Example:

```
Stop random sign-outs

Two requests could refresh a login at the same time and cancel each
other. Refreshes now happen one at a time.
```

Rules: the first line says what, the body says why, and no secret values appear. Do not add attribution lines unless the project asks for them.

## Pull request description

1. Why: the problem or goal, in plain words.
2. What changed: grouped by purpose.
3. How it was checked, and what was not.
4. Risks and how to roll back.
5. What the reviewer should look at first.

## Hand-over note

1. Where things stand now, in two sentences.
2. What is done and what is left.
3. What is blocked, and who can unblock it.
4. The first thing to do next.
5. Where to find the details (file or link), without repeating them.

## Status update during long work

One line: what is finished, what is under way now, and whether anything needs the reader. Example: "Step 3 of 5 done: the settings screen is updated. Now testing it. Nothing needed from you yet."

## Before sending

- Is the outcome in the first line?
- Is every claim backed by something you saw?
- Is "not checked" stated?
- Is there at most one question, with a recommendation?
- Are new terms explained once?
