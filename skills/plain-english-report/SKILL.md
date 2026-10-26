---
name: plain-english-report
description: >
  Use when agent output is too technical, too long or hard to act on, or when a
  close-out, summary or handover is needed. Turns an agent's plan, results, test
  run, status, commit message or pull request description into a short plain New
  Zealand English report: what happened, what it means, what the reader must
  decide, and what was not checked. Do not use to explain a piece of code
  (explain-code) or to write instructions for an agent (agent-brief).
---

# Plain English Report

Stance: the report is a faithful, shorter view of the agent's work. Frozen: the outcome, the evidence, the risks and the open decisions. Flexible: wording, order within the report, and how much detail each part gets.

## Hard rules

- Put the outcome first. Mechanism: readers act on the first lines and may stop there.
- Say exactly what was checked and what was skipped. Mechanism: "tests pass" without saying which tests hides that some did not run.
- Do not write "successfully", "all done" or "fixed" without evidence you saw. Mechanism: an unqualified claim becomes the reader's belief and then a decision.
- Keep the risks, even when the news is good. Mechanism: leaving out a limit makes the work look safer than it is.
- Ask for a decision as one short question with your recommendation, not a list of open questions. Mechanism: several open questions stall the reader and invite a half-answer.
- Write so a bright 16-year-old with no coding background could follow it on one read, without working out what a word or step means. Mechanism: the people who approve the work are often the least technical, and a report they cannot follow gets approved or rejected on trust.
- Name things by what they are or do, and explain a technical term once. Mechanism: unexplained jargon makes the report unreadable for the people who must approve it.
- Never invent work, test results or file names. Mechanism: the report is the reader's only view of what happened.
- For commit messages and pull request text, lead with why the change exists, then what changed. Mechanism: reviewers need the reason before the detail, and the diff already shows the detail.

## Gate

| Situation | Action |
|---|---|
| Work was done and the reader needs to understand or approve it | Continue |
| The report would claim a result nobody observed | Say what was and was not checked instead |
| There is a decision the reader must make | Put it in "What I need from you", as one question |
| The reader only wants one fact, or a yes or no ("did the tests pass?") | Answer it in a sentence with the evidence; skip the full report and offer it in one line |
| The output is code and the reader wants to know how it works | Use [explain-code](../explain-code/SKILL.md) |

Reason: a polished summary of unchecked work is more convincing than the work deserves.

## Steps

1. **Collect the evidence.** Gather what actually changed (files, commands run, results). Do not rely on memory of what was intended.
2. **Sort it.** Mark each statement as observed, inferred or unknown.
3. **Write the report** in this order, using the template in [report-templates.md](references/report-templates.md):
   - What happened, in one or two sentences.
   - What it means for the reader.
   - What was checked, and what was not.
   - Risks or things to watch.
   - What I need from you (a single question with your pick), or "nothing needed".
4. **Trim to 200 words at most**, unless the reader asked for an elaborate breakdown. Cut tool logs, file lists the reader does not need, and repeated points. Keep lists to about five items, grouped by meaning.
5. **Check the words** with [kiwi-english](../kiwi-english/SKILL.md).

## References

- [report-templates.md](references/report-templates.md): report, commit message, pull request and hand-over templates, with a before and after example.

## Next

To turn a person's rough request into instructions for an agent, use [agent-brief](../agent-brief/SKILL.md). For word and spelling checks, see [kiwi-english](../kiwi-english/SKILL.md). Back to [ai-kiwiniser](../ai-kiwiniser/SKILL.md).
