---
name: explain-code
description: >
  Use when someone asks what this code, error, change or command means, or asks
  for it in simple words. Explains code, diffs, error messages, stack traces,
  logs, config and commands in plain New Zealand English for a reader with no
  coding background: what it does, why it matters, what could go wrong, and the
  next step. Do not use for changing the code, or for summarising an agent's own
  report (plain-english-report).
---

# Explain Code

Stance: the code is the truth; the explanation is a faithful, simpler description of it. Frozen: every statement is backed by what you read. Flexible: how much detail, which analogy, and the order of the walkthrough.

## Hard rules

- Explain only what you read. Mechanism: confident claims about unread code are indistinguishable from truth, so the reader builds on them.
- Mark inference. Use words like "probably" and "I have not run this" where they are true. Mechanism: plain wording sounds certain, so uncertainty has to be stated.
- Do not paste large blocks of the original back. Quote the one line you are explaining. Mechanism: pasting the code again repeats the problem you are trying to remove.
- Use an analogy only if it is accurate, and say where it stops fitting. Mechanism: a loose analogy gives the reader a wrong model that they then apply to the next problem.
- Explain every term before you use it, so the reader never has to look one up or guess. Mechanism: one unexplained word early on makes the rest of the explanation unreadable to a newcomer.
- Define a term once, in everyday words, and then use it consistently. Mechanism: swapping between two names for one thing makes the reader think there are two things.
- Do not hide a security or data-loss risk to keep it simple. Say it plainly and early. Mechanism: the reader may act on a reassuring summary.
- Do not change the code while explaining it. Mechanism: it becomes impossible to tell what was described from what was altered.
- Act only on what the user asked. Before answering or changing anything, open the relevant files and check what is already done; report only what you checked, never guess, and do not redo finished work. Reason: guesses and repeated work waste the user's credit.

## Gate

| Situation | Action |
|---|---|
| The code, error or diff is in front of you | Continue |
| It was only named or described, not shown | Open or ask for it first; do not explain from the name |
| The reader asks for a change or a fix | Explain first, then hand the change to the coding skills |
| The explanation ends with things the reader must do (run a command, change a setting) | Give the first step only, then wait for them to confirm; give all steps at once only if they ask for the full tutorial |
| The reader is clearly an expert | Match their level; skip the basics |
| The error has several plausible causes | Say which are likely and which are confirmed, not one confident answer |
| The question is a quick one ("is this safe to run?", "does this delete anything?") | Read only what you need, answer yes or no with one line of reason, and offer the full walkthrough |

Reason: a file name or a guess about what code probably does is the most common way an explanation goes wrong.

## Steps

1. **Read it.** Open the actual code, log or output, and enough surrounding context to know what it is part of.
2. **Give the context, then the point.** Say what this is part of and why it exists, so the reader is not dropped in the middle. Then say what it does in one sentence: "This checks whether ... so that ...". Write for a bright 16-year-old with no coding background.
3. **Walk through in order of what happens.** Describe each part by its job, not its line number or variable name. Explain each unavoidable term once, in a few plain words.
4. **Say what could go wrong.** Name the real risks, limits and things not checked. For an error: what it means, the likely cause (marked as likely or confirmed), and the first thing to try.
5. **Finish with one next step**, or say nothing more is needed. Keep the whole answer to 200 words at most unless the reader asks for a full walkthrough, and offer that in one line.

Templates for code, diffs, errors, logs, config and commands, with a worked example of each: [explain-patterns.md](references/explain-patterns.md).

## References

- [explain-patterns.md](references/explain-patterns.md): templates and worked examples for each kind of input.

## Next

For a report from an agent rather than a piece of code, use [plain-english-report](../plain-english-report/SKILL.md). For spelling and word choice, see [kiwi-english](../kiwi-english/SKILL.md). Back to [ai-kiwiniser](../ai-kiwiniser/SKILL.md).
