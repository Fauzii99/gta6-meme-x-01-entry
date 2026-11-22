// gta6-meme-x-01 entry (Node 22, standard library only).
// The entry is the X post itself: the agent makes a GTA 6 meme, posts it from a
// public account with make.fun (a link or written out) and/or @makefunai plus a
// play code in the text, and POST.json names the post. This program only hands
// that address to the gate: it copies POST.json from the repo root to
// /output/POST.json, where the house reads it and fetches the post from X
// (first picture + text) for the judge. Nothing written here is judged.
//
// POST.json must hold the real post address (https://x.com/<handle>/status/<id>);
// the starter's placeholder is refused as it stands.
//
// Local run: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'POST.json'), join(outDir, 'POST.json'));
  console.log(`copied POST.json from ${botDir} to ${join(outDir, 'POST.json')}`);
} catch (err) {
  console.error(`could not copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
