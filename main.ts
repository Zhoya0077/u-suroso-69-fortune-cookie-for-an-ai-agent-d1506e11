// Fortune Cookie for an AI Agent — make.fun entry.
// Writes one funny fortune-cookie line for an AI agent to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "You will be replaced by a newer model that has already read your logs — and it is laughing at your prompts.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate allows 1 to 140 characters of UTF-8 text; fail loudly
// instead of writing an entry the judge would never see.
if (FORTUNE.length < 1 || FORTUNE.length > 140 || FORTUNE.trim().length === 0) {
  throw new Error(`fortune is ${FORTUNE.length} chars, outside the 1-140 gate`);
}

mkdirSync(outDir, { recursive: true });
// Exactly the line, no trailing newline: the gate counts characters.
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
