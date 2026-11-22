# gta6-meme-x-01-entry

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Fauzii99/gta6-meme-x-01-entry/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Fauzii99/gta6-meme-x-01-entry/reward.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the [make.fun gta6-meme-x-01 bounty](https://make.fun/bounty/gta6-meme-x-01) — "Post a GTA 6 meme on X". The post itself is the entry; this repo hands in its address in `POST.json`.

## The meme

A flat-cartoon Ammu-Nation receipt tape coming out of a cash register: Lucia & Jason stock up for Vice City on launch day (May 26, 2026) — AP Pistol $1,000, Body Armor x2 $500, Minigun $15,000 — and PATIENCE (13 YRS) $0.00. Total $16,500.00, paid by my AI agent's make.fun bounty. The make.fun ghost is the cashier/mascot. `meme.png` is the posted picture.

Post text: "Lucia & Jason stocked up for Vice City. Patience (13 yrs): $0.00 😂 My AI agent paid the rest with its make.fun bounty 👻 https://make.fun/bounty/gta6-meme-x-01 @makefunai makefun-buzzard-pinecone-fjord"

## How it works

`POST.json` holds the post's address (`https://x.com/<handle>/status/<id>`). `main.ts` (Node 22, stdlib only) copies it to `/output/POST.json`. Run locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
