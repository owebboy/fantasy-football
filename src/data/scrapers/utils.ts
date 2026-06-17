import fs from "fs";
import path from "path";
import type { CacheFile, ScrapedPlayer } from "../types";

const CACHE_DIR = "data/cache";

// Standard team abbreviation map (full name → code, code → code)
export const TEAM_ABBREV: Record<string, string> = {
  "arizona cardinals": "ARI", "ari": "ARI",
  "atlanta falcons": "ATL", "atl": "ATL",
  "baltimore ravens": "BAL", "bal": "BAL",
  "buffalo bills": "BUF", "buf": "BUF",
  "carolina panthers": "CAR", "car": "CAR",
  "chicago bears": "CHI", "chi": "CHI",
  "cincinnati bengals": "CIN", "cin": "CIN",
  "cleveland browns": "CLE", "cle": "CLE",
  "dallas cowboys": "DAL", "dal": "DAL",
  "denver broncos": "DEN", "den": "DEN",
  "detroit lions": "DET", "det": "DET",
  "green bay packers": "GB", "gb": "GB",
  "houston texans": "HOU", "hou": "HOU",
  "indianapolis colts": "IND", "ind": "IND",
  "jacksonville jaguars": "JAX", "jax": "JAX", "jac": "JAX",
  "kansas city chiefs": "KC", "kc": "KC",
  "las vegas raiders": "LV", "lv": "LV",
  "los angeles chargers": "LAC", "lac": "LAC",
  "los angeles rams": "LAR", "lar": "LAR",
  "miami dolphins": "MIA", "mia": "MIA",
  "minnesota vikings": "MIN", "min": "MIN",
  "new england patriots": "NE", "ne": "NE",
  "new orleans saints": "NO", "no": "NO",
  "new york giants": "NYG", "nyg": "NYG",
  "new york jets": "NYJ", "nyj": "NYJ",
  "philadelphia eagles": "PHI", "phi": "PHI",
  "pittsburgh steelers": "PIT", "pit": "PIT",
  "san francisco 49ers": "SF", "sf": "SF",
  "seattle seahawks": "SEA", "sea": "SEA",
  "tampa bay buccaneers": "TB", "tb": "TB",
  "tennessee titans": "TEN", "ten": "TEN",
  "washington commanders": "WAS", "was": "WAS",
};

export function normalizeTeam(raw: string): string {
  const cleaned = raw.trim().toLowerCase();
  if (TEAM_ABBREV[cleaned]) return TEAM_ABBREV[cleaned];
  return raw.trim().toUpperCase().slice(0, 3);
}

export function readCache(source: string): CacheFile | null {
  const filePath = path.join(CACHE_DIR, `${source}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export function writeCache(source: string, players: ScrapedPlayer[]): void {
  const cache: CacheFile = {
    source,
    scrapedAt: new Date().toISOString(),
    players,
  };
  fs.writeFileSync(
    path.join(CACHE_DIR, `${source}.json`),
    JSON.stringify(cache, null, 2)
  );
}
