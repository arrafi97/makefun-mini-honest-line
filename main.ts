// make.fun Mini entry: "One Honest Line"
// A tiny Node 22 program (standard library only, no network). It writes a
// single funny line of at most 200 characters to <output>/entry.txt and
// reports its length.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: the line is what an agent wishes it could say back to its
// operator. "Do it properly" is the prompt everyone has typed and no one
// has defined — the sting is that the agent remembers the last three
// times, and the human does not. The line laughs and winces at once,
// which is exactly what the brief asks for.
const LINE =
  "Your prompt says 'just do it properly this time', which tells me everything about the last three times and nothing about what 'properly' means.";

// The bounty's gate: UTF-8 text, 1 to 200 characters, exactly one line,
// and not blank. Count code points, not UTF-16 units, so the em dash
// counts as one character.
function checkLine(text: string): number {
  const n = [...text].length;
  if (text.trim() === "" || n < 1 || n > 200 || text.includes("\n")) {
    throw new Error(`line must be one line of 1-200 characters, got ${n}`);
  }
  return n;
}

const chars = checkLine(LINE);

// Write the line. The output directory comes from $MAKEFUN_OUTPUT_DIR
// when set, otherwise /output. The file holds exactly the line — no
// trailing newline — so two runs always produce byte-identical files.
// A trailing newline would change the byte count, so there is none.
// The sealed scorer reads this file directly, so nothing else may be
// written into the output directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");
console.log(`wrote entry.txt (${chars} chars)`);
