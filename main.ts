import fs from 'node:fs';
import path from 'node:path';

// Entry point for the make.fun news-image bounty.
// The entry image is committed as entry.png; at run time it is copied
// to /output/entry.png so the runner can serve it.
const src = '/bot/entry.png';
const dest = '/output/entry.png';
if (!fs.existsSync(src)) {
  throw new Error(`entry image missing: ${src}`);
}
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(src, dest);
console.log(`entry image ready: ${dest} (${fs.statSync(dest).size} bytes)`);
