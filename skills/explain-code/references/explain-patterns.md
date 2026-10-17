# Explain patterns

Short templates for each kind of input. Fill them from what you actually read. Keep each answer short and offer more in one line.

## Code (a function or file)

1. One sentence: what it does and why it exists.
2. The steps in the order they happen, each named by its job.
3. What it depends on or changes outside itself (a database, a file, the network, the screen).
4. What could go wrong, and what is not covered.
5. One next step, or none.

Example. Source: a function that loads a user's saved budgets, sorts them and shows them.

> This loads the budgets a person has saved and shows them newest first. It asks the server for the list, puts the newest at the top, and hands the list to the screen. If the server cannot be reached it shows a message instead of an empty list. I have not run it, so I cannot say how it behaves with hundreds of budgets.

## Diff (a change)

1. One sentence: what the change does for the user or the system.
2. Group the edits by purpose, not by file order ("fixes the bug", "adds the setting", "renames things").
3. What behaves differently afterwards, and what stays the same.
4. Risks: anything that touches money, logins, data deletion or other people's data.
5. What was or was not tested.

## Error message or stack trace

1. What it means, in one sentence, without the error's own jargon.
2. Where it came from: the first line of your own code in the trace, not the library lines.
3. The likely cause, marked "likely" unless you confirmed it, and what else it could be.
4. The first thing to try, and how to tell if it worked.

Example. Source: a message saying a database column does not exist.

> The app asked the database for a piece of information that the database does not have yet. This usually happens when the code was updated but the database changes (called migrations) were not applied. That is likely, not confirmed. Next step: run the migrations, then try again. If the message stays, tell me and I will look at which column it names.

## Log

1. What the log shows happened, in time order, in two or three sentences.
2. The one line that matters, quoted.
3. What is normal noise and can be ignored.
4. What is missing from the log that would help.

## Config or settings file

1. What the file controls, in one sentence.
2. Only the settings that matter for the question, each named by its effect.
3. Which values are secret and must never be shared or committed.
4. What happens if a value is missing or wrong.

## Command (terminal)

1. What it does, in one sentence, including what it changes.
2. What each part does, only the parts that matter.
3. Whether it can be undone, and what it deletes or overwrites. Say this early for anything destructive.
4. Whether it is safe to run now.

## SQL or data query

1. The question the query answers, in the reader's words.
2. Which tables or lists it looks at.
3. How it filters and groups.
4. Whether it only reads or also changes data.

## Words to explain on first use

Give a plain definition once, then reuse the word. Examples: API ("a way for one program to ask another for information"), database ("where the app keeps its information"), migration ("a saved set of changes to the database"), commit ("a saved snapshot of changes"), branch ("a separate copy of the work to try changes safely"), test ("a small check that something still works"), dependency ("another piece of software this one relies on"), environment variable ("a setting kept outside the code, often for secrets").

## Before sending

- Did you read the thing you are describing?
- Is the first sentence the point?
- Is every new term explained once?
- Are guesses marked as guesses?
- Are risks and unchecked parts stated?
- Is there one next step?
