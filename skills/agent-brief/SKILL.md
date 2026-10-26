---
name: agent-brief
description: >
  Turns a person's rough request into a clear brief an AI agent can act on:
  the goal in their words, the context, constraints, what done looks like and
  what to leave alone, asking at most one question when the answer would change
  the work. Use when a request is vague, when someone wants to give an agent
  instructions but is not sure how to word them, or when a prompt needs
  tightening without changing its intent. Do not use to do the task itself, or
  to explain an agent's output (plain-english-report).
---

# Agent Brief

Stance: the person's intent is fixed; the wording is what improves. Frozen: the goal, their must-haves, and their limits. Flexible: structure, order and level of detail.

## Hard rules

- Keep the person's meaning. Mechanism: a tidier brief that quietly changes the goal sends the agent to the wrong place with full confidence.
- Do not add requirements, scope or files the person did not ask for. Mechanism: invented requirements get built, reviewed and maintained.
- Label every assumption as an assumption. Mechanism: an unlabelled guess in a brief becomes an instruction the agent follows.
- State what done looks like in a way that can be checked. Mechanism: "make it better" cannot be verified, so the agent decides when to stop.
- Say what to leave alone. Mechanism: without a boundary an agent will tidy and refactor beyond the task.
- Ask one question at a time, never a questionnaire. Mechanism: long lists of questions are skipped or half-answered.
- Do not paste secrets, passwords or private data into a brief. Mechanism: briefs are copied, logged and shared.
- Show the brief to the person in plain words a bright 16-year-old could follow, and explain any technical term you add. Mechanism: the person must be able to check the brief is right, and cannot check wording they do not understand.
- Keep it short. A good brief is usually a few lines per part. Mechanism: length buries the one constraint that matters.

## Gate

| Situation | Action |
|---|---|
| The request is clear enough to act on | Write the brief without asking anything |
| The request is a one-line task with an obvious meaning | Skip the brief and do the task, or show a two-line brief; do not build the full template |
| One missing fact would change the work | Ask that one question, with a suggested default |
| Several things are missing but the agent can find them by reading the project | Tell the agent to look; do not ask the person |
| The person wants the task done, not a brief | Do the task; do not stop at the brief |
| The request seems to ask for more than the person meant | Keep to what they said and flag the extra as a question |

Reason: an over-asked person gives up on the agent, and an under-specified brief gets a confident wrong answer.

## Steps

1. **Capture the goal** in the person's own words. Quote any must-have wording exactly.
2. **Find the gaps.** Check each part of the brief below. Mark what is given, what is assumed and what is unknown.
3. **Fill what you can** from the project, the conversation and the request. Label every assumption.
4. **Ask at most one question**, only if the answer changes the work, and offer a default ("Unless you say otherwise I will ...").
5. **Write the brief** using the template in [brief-template.md](references/brief-template.md): goal, context, constraints, done when, leave alone, and open questions.
6. **Show it** to the person in plain words and let them correct it before the agent starts, unless they asked you to go ahead.

## References

- [brief-template.md](references/brief-template.md): the template, a before and after example, and a gap checklist.

## Next

For explaining what the agent then produces, use [plain-english-report](../plain-english-report/SKILL.md) or [explain-code](../explain-code/SKILL.md). For wording, see [kiwi-english](../kiwi-english/SKILL.md). Back to [ai-kiwiniser](../ai-kiwiniser/SKILL.md).
