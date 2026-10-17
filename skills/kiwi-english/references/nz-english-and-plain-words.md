# New Zealand English and plain words

Trust levels: the plain-language rules come from the US federal guidance (digital.gov) and the GOV.UK style guide; the New Zealand conventions come from secondary sources surfaced by search. Check any rule you depend on against the style guide of the organisation you write for. "(inference)" marks the author's reading. Researched 2026-10-18.

## The test for plain language

The Plain Language Act 2022 defines plain language as language that is appropriate to the intended audience and is clear, concise and well organised. Use those three tests on any text, even where the Act does not apply. (Read through a search summary because the legislation site could not be fetched; check legislation.govt.nz before quoting.)

## The 16-year-old standard

The repository's own response policy sets the reader as someone about 16 with no jargon, so the plain version must make sense to them on a single read. Sentence length and reading-level scores are not set by any source fetched here. As practice (inference), aim for sentences averaging about 15 to 20 words, one idea each, and treat any sentence over about 25 words as a candidate to split.

Worked rewrites:

| Hard to follow | Plain version |
|---|---|
| The service authenticates the request via a bearer token. | The server checks who is asking. The app proves who the user is by sending a secret code (called a token) with each request. |
| Run the migrations. | Update the database so it matches the latest code. The saved list of these changes is called a migration. Run it with the project's migrate command. |
| The PR is blocked on a failing CI check. | The change cannot be merged yet. An automatic check (called CI) found a problem and failed. |
| It's a race condition. | Two things happened at nearly the same time and got in each other's way. The result depends on which one finished first, so it fails only some of the time. |
| Refactor the module. | Reorganise the code so it is tidier, without changing what it does. |

What changed in each: the point comes first, the term is explained before it is used, and a reason or effect is given so the reader is not left guessing.

## Writing rules

- Keep sections and sentences short. One idea per sentence.
- Use the active voice, so it is clear who does what.
- Use the present tense where you can.
- Use strong verbs. Say "analyse", not "perform an analysis".
- Use short, familiar words.
- Use examples, for instance a "say this, not that" pair.
- Put the point first.
- Bullets: add a lead-in line and use more than one. Use numbered steps for a process.

## Plain-word swaps

| Instead of | Write |
|---|---|
| utilise | use |
| initiate, commence | start |
| facilitate | say what you are doing |
| in order to | to |
| going forward | from now on, or leave it out |
| liaise, collaborate | work with |
| robust | well tested, or say how |
| leverage | use |
| hub, portal, one-stop shop | say what it is |
| please note that | leave it out |
| the application is unable to | the app cannot |

The first set follows the GOV.UK word list. The last three rows are the author's additions (inference).

## Technical terms

- Technical terms are fine where needed. Explain them the first time.
- Spell out an abbreviation on first use, then use the short form. Skip the explanation for ones almost every reader knows (for example PDF).
- Prefer a plain description over a metaphor.

## Spelling

New Zealand English follows British forms with -ise endings.

| Use | Not |
|---|---|
| colour, behaviour, favourite | color, behavior, favorite |
| organise, recognise, summarise | organize, recognize, summarize |
| centre, metre | center, meter |
| licence (noun), license (verb) | license for both |
| analyse | analyze |
| cheque | check (for a bank cheque) |

"Program" for software and "programme" for other uses is common New Zealand usage (inference; not confirmed from a fetched style guide).

## Dates, times, numbers, currency

- Dates: day, month in words, year. Write 18 October 2026. Do not use ordinals (2 June, not 2nd June) or a comma between month and year.
- Numeric dates: dd/mm/yyyy (New Zealand order). When a date could be misread, use the words.
- Ranges: use "to" (10 to 21 December), not a hyphen.
- Numbers: use commas above 999 (9,000). Write "per cent" in running text and "%" next to figures in tables.
- Number style differs between guides (GOV.UK uses numerals for 2 to 9; some New Zealand guides spell out up to twenty). Follow the audience's guide.
- Currency: a dollar sign alone is normally understood. Write "NZD" where another currency could be meant (for example AUD or USD in the same text).

## Te reo Māori

- Use macrons: Māori, Aotearoa, whānau, kia ora. Macrons mark long vowels. The Māori Language Commission (Te Taura Whiri i te Reo Māori) encourages them and publishes orthography guidelines as the reference.
- Macrons can change the word (keke is cake, kēkē is armpit). A missing macron is therefore a possible error.
- Some double vowels are compound words and not long vowels (whakaahua, ātaahua). Do not replace them with a macron.
- Do not italicise te reo words, and do not add "s" for a plural (one whānau, two whānau).
- Do not add macrons to personal, family, hapū or iwi names whose owners write them without, or to the titles of publications or Acts that lacked them.
- Check spelling in Te Aka Māori Dictionary.
- Not verified in this pass: the Commission's own guideline PDF could not be fetched, so the macron rules above rest on secondary summaries.

## Words to avoid or treat with care

- Idioms that hide meaning ("touch base", "low-hanging fruit"). Say the plain thing.
- Jargon in headings. Use the reader's words.
- Humour and slang in instructions. They are hard to translate and easy to misread.

## Check before sending

- Is the point in the first sentence?
- Is any sentence over about 25 words (inference; no source sets a limit)?
- Is each abbreviation explained?
- Are dates in day, month, year order?
- Are te reo words spelled with macrons?
- Did any fact, name or number change?
