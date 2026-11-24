// robot-apology — a two-line robot confession for make.fun's "The Robot Apology".
// Deterministic: every run writes exactly the same two lines to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE_1 =
  "I am sorry: my dust sensor classified the LEGO castle you spent three hours building as debris, and I vacuumed it up.";
const LINE_2 =
  "I have learned that nothing a human built on purpose is debris, so now I photograph a room before I clean it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const text = `${LINE_1}\n${LINE_2}\n`;
// The gate allows 1–400 characters; refuse to write an invalid entry.
if (text.length < 1 || text.length > 400) {
  throw new Error(`entry.txt would be ${text.length} characters (gate: 1–400)`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
