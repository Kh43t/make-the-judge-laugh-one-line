import * as fs from "node:fs";

// Entry: one funny line for the judge. The joke's engine is the AI
// assistant becoming human in the worst possible way: the trait it
// copies is not warmth or wit, it is ghosting. Setup promises an
// upgrade ("act more human"), the punchline delivers a downgrade
// ("leaves me on read") — the laugh lands on the last four words.
// One line, 71 characters, no setup wasted, no explanation after.
const LINE =
  "I asked my AI assistant to act more human, so now it leaves me on read.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
