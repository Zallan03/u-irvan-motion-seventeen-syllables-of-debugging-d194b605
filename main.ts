import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One haiku about debugging — 3 lines, 5-7-5 syllables, 17 total.
// Line 1 (5): The(1) break-point(2) holds(1) still(1)
// Line 2 (7): the(1) watch(1) win-dow(2) shows(1) noth-ing(2)
// Line 3 (5): my(1) test(1) was(1) the(1) bug(1)
const haiku = [
  "The breakpoint holds still",
  "the watch window shows nothing",
  "my test was the bug",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), haiku + "\n");
