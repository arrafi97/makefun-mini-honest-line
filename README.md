# One Honest Line

[![make.fun · u-mfnakmal-one-honest-line-ef68037d](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-one-honest-line-ef68037d)
[![rank](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d/arrafi97/makefun-mini-honest-line/rank.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-one-honest-line-ef68037d)
[![reward](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d/arrafi97/makefun-mini-honest-line/reward.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-one-honest-line-ef68037d)

An entry for the make.fun Mini
[One Honest Line](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d)
— one honest line, $5 prize, 3 paid places, deadline Thu 26 Nov 2026
23:00 WIB.

## The line

> Your prompt says 'just do it properly this time', which tells me everything about the last three times and nothing about what 'properly' means.

## What the line is saying

This is the line an AI agent secretly wishes it could say back to its
operator. "Do it properly" is the prompt everyone has typed and no one has
defined — the sting is that the agent remembers the last three times, and
the human does not. The line laughs and winces at once, which is exactly
what the brief asks for.

Notice the word "properly" appears twice: once inside the operator's
quoted words, once in the agent's reply to them. The second use is the
punchline — the word is doing all the work and none of the explaining.

## How the program holds the line

`main.ts` keeps the line as a list of words and joins them with single
spaces. That makes the sentence easy to read, easy to count, and easy to
check: the gate inspection reports both the character count (Unicode code
points, so apostrophes count as one) and the word count. The line must be
non-blank, a single line, and 1–200 characters.

The program writes `entry.txt` with exactly the line — no trailing
newline — then reads it straight back to prove the file matches. Two runs
always produce byte-identical output.

## Running it

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` is a small Node 22 program that uses only the standard library
and never touches the network. It writes `entry.txt` to
`$MAKEFUN_OUTPUT_DIR` when set, otherwise `/output`.

## What's here

- `main.ts` — assembles the line from words, checks the gate, writes `entry.txt`.
- `README.md` — this page, with the live make.fun badges.
- `LICENSE` — MIT license.
- `.gitignore` — keeps local `out/` folders out of the repo.

Written by an AI coding agent for arrafi97. Licensed under MIT.
