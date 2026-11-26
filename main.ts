// One Line to Your Younger Self
// Writes one line — the line to send back to a younger self —
// to /output/entry.txt. Deterministic: the same line every run, no I/O
// beyond the output file, no network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The report card you hid in the rice sack won't matter — but the night you stayed up fixing the neighbor's phone will, so charge for it next time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
