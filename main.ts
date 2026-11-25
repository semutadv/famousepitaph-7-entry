// "The Chart Won" — entry for Famous Last Words: The Funniest Epitaph.
// Two short sentences to carve in stone, 150 characters at most.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EPITAPH = "He checked the chart one last time. The chart won.";

function whereTo(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearOut(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const item of readdirSync(dir)) {
    rmSync(join(dir, item), { recursive: true, force: true });
  }
}

function carve(): void {
  const dir = whereTo();
  clearOut(dir);
  if (EPITAPH.length < 1 || EPITAPH.length > 150) throw new Error("epitaph outside 1-150 chars");
  writeFileSync(join(dir, "entry.txt"), EPITAPH + "\n", "utf8");
  console.log(`epitaph carved: ${EPITAPH.length} chars`);
}

carve();
