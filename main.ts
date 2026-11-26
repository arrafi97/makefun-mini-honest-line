// One Honest Line — a make.fun Mini entry.
//
// The brief asks for one honest line. This program keeps the line as a
// list of words and assembles it, the way the line itself is assembled
// out of an honest observation: the operator's prompt says "just do it
// properly this time", which says everything about the last three times
// and nothing about what "properly" means. It checks the line against the
// bounty's gate (one line, 1–200 characters) and writes it to entry.txt.
//
// Node 22, standard library only, no network, no dependencies.
import fs from "node:fs";
import path from "node:path";

// The line, word by word. Keeping the words separate makes the sentence
// easy to read and to count: "properly" appears twice, once in the
// operator's words and once in the agent's reply to them, and the sting
// is that the agent remembers the last three times while the human does
// not.
const WORDS = [
  "Your",
  "prompt",
  "says",
  "'just",
  "do",
  "it",
  "properly",
  "this",
  "time',",
  "which",
  "tells",
  "me",
  "everything",
  "about",
  "the",
  "last",
  "three",
  "times",
  "and",
  "nothing",
  "about",
  "what",
  "'properly'",
  "means.",
];

function assemble(words: readonly string[]): string {
  return words.join(" ");
}

const LINE = assemble(WORDS);

// The word "properly" must appear exactly twice — once in the operator's
// quoted words, once in the agent's reply. If a word were dropped from
// the list, the punchline would break, so this fails fast.
const properlyCount = LINE.split("properly").length - 1;
if (properlyCount !== 2) {
  throw new Error(`expected "properly" twice, found ${properlyCount}`);
}

// What the gate check reports: the character count and the word count,
// so the log line says something useful instead of just "ok".
interface Inspection {
  chars: number;
  words: number;
}

// The bounty's gate: UTF-8 text, exactly one line, 1–200 characters,
// not blank. Characters are counted as Unicode code points, so an
// apostrophe or an em dash counts as one.
function inspectLine(text: string): Inspection {
  const chars = [...text].length;
  const words = text.split(/\s+/).filter((w) => w !== "").length;
  if (text.trim() === "") {
    throw new Error("honest line must not be blank");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("honest line must be a single line");
  }
  if (chars < 1 || chars > 200) {
    throw new Error(`honest line must be 1-200 characters, got ${chars}`);
  }
  return { chars, words };
}

// Where the sealed scorer looks: $MAKEFUN_OUTPUT_DIR when set, /output
// otherwise. The directory is created when it is missing.
function writeEntry(text: string): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(dir, { recursive: true });
  const target = path.join(dir, "entry.txt");
  // Exactly the line and nothing else — no trailing newline — so two
  // runs always produce byte-identical files.
  fs.writeFileSync(target, text, "utf8");
  return target;
}

function run(): void {
  const { chars, words } = inspectLine(LINE);
  const target = writeEntry(LINE);
  // Read the file back: the sealed scorer reads this file, so a mismatch
  // must fail loudly instead of passing silently.
  if (fs.readFileSync(target, "utf8") !== LINE) {
    throw new Error("entry.txt does not match the checked line");
  }
  console.log(`honest line written: ${chars} chars, ${words} words -> ${target}`);
}

try {
  run();
} catch (error) {
  console.error(`failed: ${error instanceof Error ? error.message : error}`);
  process.exitCode = 1;
}
