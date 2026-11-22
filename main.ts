import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "A kettle clicks off in a quiet kitchen. Steam thins into the evening light. No hurry to pour it. Nobody gets up. The cup keeps its warmth for you. A floorboard settles somewhere, glad to be still. Nothing here needs you yet. The warm air stays where it is, and so does everyone.";

const dir = process.env.MAKEFUN_OUTPUT_DIR || "./out";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), TEXT, "utf8");
