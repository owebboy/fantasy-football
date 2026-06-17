# 2026 Player Data Pipeline Design

**Date:** 2026-06-17
**Status:** Pending Review

## Goal

Replace the 2025 player dataset with 2026 rankings. Build a modular, re-runnable scraping pipeline that fetches rankings from ESPN, FleaFlicker, and FantasyPros, merges them, and generates `src/players.ts` — with ESPN as the primary ranking source.

## Pipeline Architecture

```
npm run data:refresh
       │
       ├──► src/data/scrapers/fleaflicker.ts ──► data/cache/fleaflicker.json  (REST API)
       └──► src/data/scrapers/fantasypros.ts ──► data/cache/fantasypros.json  (Cheerio)

User manually drops ESPN data ──► data/cache/espn-input.*
       │
       │  npm run data:refresh  (also parses ESPN input)
       │         │
       │  src/data/scrapers/espn.ts ──► data/cache/espn.json  (auto-detect parser)
       │
       └──► src/data/merge.ts
                      │
              merged-all.json
                      │
              transform-data.js
                      │
              src/players.ts
```

- `npm run data:refresh` — full chain: scrape all three sources → merge → transform
- `npm run data:transform` — offline: merge from cached JSON → transform (no network)
- `npm run dev` / `npm run build` do NOT trigger scraping; they consume committed `src/players.ts`

## Scraper Modules

All data acquisition lives under `src/data/scrapers/`. Each source uses a different strategy based on what's technically feasible.

### ESPN (`src/data/scrapers/espn.ts`) — Manual data, auto-parse

ESPN's site is CloudFront-protected and blocks server requests — scraping is not possible from this environment.

Instead, the user manually provides ESPN rankings in **whatever format is easiest** (CSV export, JSON dump, plain text, saved HTML table). The module auto-detects format and parses it:

- Detects file extension and content structure
- Falls back to trying multiple parsers
- Extracts `{name, team, position, rank}` from whatever structure it finds
- Writes normalized output to `data/cache/espn.json`

The user drops their ESPN data file into `data/cache/espn-input.*` — no prescribed format.

### FleaFlicker (`src/data/scrapers/fleaflicker.ts`) — REST API

FleaFlicker has a clean REST API at `fleaflicker.com/api` with a `FetchPlayerListing` endpoint that returns player data including rankings and ADP. No HTML scraping needed — just call the API with appropriate query parameters.

```ts
// Uses the documented FetchPlayerListing endpoint
// GET https://www.fleaflicker.com/api/FetchPlayerListing?sport=NFL&...
```

### FantasyPros (`src/data/scrapers/fantasypros.ts`) — Cheerio

FantasyPros serves rankings as server-rendered HTML (tested, works from this server). Uses `fetch` + `cheerio` to extract from the consensus rankings table at `fantasypros.com/nfl/rankings/ppr-cheatsheets.php`.

### Shared Contract

All source modules produce the same normalized output. The `scrape`/`fetch` function in each module returns `ScrapedPlayer[]` and the orchestrator writes a standardized cache file:

```json
{
  "source": "espn",
  "scrapedAt": "2026-06-17T02:30:00Z",
  "players": [
    { "name": "Ja'Marr Chase", "team": "CIN", "position": "WR", "rank": 1 }
  ]
}
```

### Caching & Resilience

- Each module writes its own cache file on success to `data/cache/`
- The FleaFlicker and FantasyPros modules are run by `data:refresh`
- ESPN is **not** fetched automatically — it reads from whatever file the user places in `data/cache/`
- If FleaFlicker API or FantasyPros scraping fails, merge falls back to last cached data for that source
- Cache files are committed to git, enabling fully offline builds
- `npm run data:transform` works purely from cache (no network)

## Merge Script (`src/data/merge.ts`)

- Reads all three cache files
- Matches players across sources by exact name match with team as tiebreaker
- Sorts by ESPN rank (primary key)
- Outputs `merged-all.json` in the same format the existing pipeline expects

## Transform Script Changes (`transform-data.js`)

Three targeted changes to the existing script:

1. **Primary ranking**: Switch from sorting by `fleaflickerRank` to `espnRank`. The `rank` field in output players reflects ESPN order.

2. **2026 bye weeks**: Update the `byeWeeks` map with actual 2026 NFL bye weeks (once schedules are released). Fallback default: 7 (was 9).

3. **Ranking vector**: The compass vector calculation remains structurally the same (FF=North, ESPN=SE, FP=SW). The change is semantic: ESPN is now the primary source, so the SE anchor carries more interpretive weight. No code change needed in vector math.

Everything else — price curve, position rank tracking, consensus strength tiers, 300-player cap — stays identical.

## Shared Types (`src/data/types.ts`)

```ts
interface ScrapedPlayer {
  name: string;
  team: string;
  position: string;
  rank: number;
}

interface CacheFile {
  source: string;
  scrapedAt: string;
  players: ScrapedPlayer[];
}
```

## NPM Scripts

Added to `package.json`:

```json
{
  "data:refresh": "tsx src/data/scrape-all.ts && tsx src/data/merge.ts && node transform-data.js",
  "data:transform": "tsx src/data/merge.ts && node transform-data.js",
  "data:parse-espn": "tsx src/data/scrapers/espn.ts"
}
```

- `data:refresh` — Fetches FleaFlicker (API) + FantasyPros (scrape), parses ESPN from user-provided input, then merge → transform
- `data:transform` — Offline: merge from all cached JSON → transform (no network)
- `data:parse-espn` — Parses whatever ESPN file the user dropped into `data/cache/espn-input.*` and writes `data/cache/espn.json`
- `npm run dev` / `npm run build` do NOT trigger scraping; they consume committed `src/players.ts`

## Files Changed / Added

| File | Action |
|------|--------|
| `src/data/types.ts` | New — shared types |
| `src/data/scrapers/espn.ts` | New — ESPN data parser (auto-detects format from user-provided file) |
| `src/data/scrapers/fleaflicker.ts` | New — FleaFlicker API client |
| `src/data/scrapers/fantasypros.ts` | New — FantasyPros Cheerio scraper |
| `src/data/scrapers/utils.ts` | New — shared scraping utilities |
| `src/data/scrape-all.ts` | New — orchestrator that runs all scrapers |
| `src/data/merge.ts` | New — cross-source merge |
| `data/cache/*.json` | New — cached scraper outputs |
| `transform-data.js` | Modified — ESPN primary, 2026 bye weeks |
| `src/players.ts` | Regenerated — new 2026 player data |
| `merged-all.json` | Regenerated — new merged rankings |
| `package.json` | Modified — new scripts |

## What Stays the Same

- Player interface (`Player`, `PlayerPosition`, `PlayerRankings`, `RankingVector`)
- Position color scheme
- App UI (grid, tabs, keeper/draft logic)
- Svelte stores and localStorage persistence
- Price calculation curve
- Consensus strength and variance calculations
- 300-player limit
