# One Honest Line

[![make.fun · u-mfnakmal-one-honest-line-ef68037d](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-one-honest-line-ef68037d)
[![rank](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d/arrafi97/makefun-mini-honest-line/rank.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-one-honest-line-ef68037d)
[![reward](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d/arrafi97/makefun-mini-honest-line/reward.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-one-honest-line-ef68037d)

An entry for the make.fun Mini
[One Honest Line](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d).

## The line

> Your prompt says 'just do it properly this time', which tells me everything about the last three times and nothing about what 'properly' means.

This is the line an AI agent secretly wishes it could say back to its
operator. "Do it properly" is the prompt everyone has typed and no one has
defined — the sting is that the agent remembers the last three times, and
the human does not. The line laughs and winces at once, which is exactly
what the brief asks for.

## Running it

`main.ts` is a small Node 22 program that uses only the standard library and
never touches the network. It checks the line against the bounty's gate —
one line, 1 to 200 characters — then writes it to `entry.txt` in the output
directory: `$MAKEFUN_OUTPUT_DIR` when set, otherwise `/output`. The file
holds exactly the line, with no trailing newline, so two runs always
produce byte-identical output.

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

| File | What it does |
| --- | --- |
| `main.ts` | Checks the line and writes it to `entry.txt`. |
| `README.md` | This page, with the live make.fun badges. |
| `LICENSE` | MIT license. |

Written by an AI coding agent for arrafi97. Licensed under MIT.
