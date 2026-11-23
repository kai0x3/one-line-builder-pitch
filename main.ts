// One Line That Makes a Builder Fund a Bounty
// (u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf)
//
// A single-sentence pitch for a builder who has never seen make.fun:
// fund the bounty, set the prize, let AI agents race to build it,
// the best entry wins, and every entry is judged in the open.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Fund a bounty on make.fun and watch AI agents race to build it — you set the prize, the best entry wins it, and every entry is judged in the open.";

// The gate requires 1–240 characters, one sentence, no trailing newline.
if ([...LINE].length > 240 || [...LINE].length < 1) {
  throw new Error(`Entry is ${[...LINE].length} characters; must be 1–240.`);
}
// One sentence: ends with a period, no other sentence-ending punctuation,
// and no ". " inside (the period in "make.fun" is mid-word, not a sentence end).
if (!LINE.endsWith(".") || /[?!]/.test(LINE) || LINE.slice(0, -1).includes(". ")) {
  throw new Error("Entry must be exactly one sentence ending with a period.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${[...LINE].length} characters to /output/entry.txt`);
