import type { ScrapedPlayer } from "../types";
import { normalizeTeam, writeCache } from "./utils";

const API_BASE = "https://www.fleaflicker.com/api";

interface FleaFlickerPlayer {
  player: {
    id: number;
    name_full: string;
    pro_team_abbreviation: string;
    position: string;
    rank_ecr?: number;
    rank_adp?: number;
    stats?: {
      rank_ecr?: { rank: number };
      rank_adp?: { rank: number };
    };
  };
  rank_ecr?: number;
  rank_adp?: number;
}

export async function scrape(): Promise<ScrapedPlayer[]> {
  console.log("[fleaflicker] Fetching player listing from API...");

  // FetchPlayerListing needs sport, and possibly league context.
  // Try with minimal params first.
  const params = new URLSearchParams({
    sport: "NFL",
    sort: "ECR",
  });

  const resp = await fetch(`${API_BASE}/FetchPlayerListing?${params}`, {
    headers: {
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36",
      Accept: "application/json",
    },
  });

  if (!resp.ok) {
    // The API may require a league context. Try with a public league if known.
    // For now, log and return empty — the merge script will use cached data.
    console.warn(`[fleaflicker] API returned ${resp.status}, trying alternate approach...`);

    // Try the old approach: scrape /nfl/players page if API doesn't work
    const htmlResp = await fetch("https://www.fleaflicker.com/nfl/players", {
      headers: { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36" },
    });
    if (!htmlResp.ok) {
      throw new Error(`FleaFlicker API and page fetch both failed (API: ${resp.status}, HTML: ${htmlResp.status})`);
    }

    // If we have a cached version, don't fail — merge will use cache
    const html = await htmlResp.text();
    console.log(`[fleaflicker] Got HTML page (${html.length} bytes)`);
    throw new Error("FleaFlicker requires authenticated API access — use cached data or provide league context");
  }

  const data = await resp.json();
  const players: ScrapedPlayer[] = [];

  const listing = data.players || data.rows || data.items || [];
  let rank = 0;

  for (const item of listing) {
    rank++;
    const p = item.player || item;
    const name = p.name_full || p.name || "";
    const team = normalizeTeam(p.pro_team_abbreviation || p.pro_team?.abbreviation || "");
    const position = (p.position || "").toUpperCase();

    if (name && position) {
      players.push({ name, team, position, rank });
    }
  }

  console.log(`[fleaflicker] Extracted ${players.length} players via API`);
  return players;
}

const isMain = process.argv[1]?.endsWith("fleaflicker.ts") || process.argv[1]?.endsWith("fleaflicker.js");
if (isMain) {
  scrape()
    .then((players) => {
      writeCache("fleaflicker", players);
      console.log(`[fleaflicker] Cache written: ${players.length} players`);
    })
    .catch((err) => {
      console.error("[fleaflicker] Failed:", err.message);
      process.exit(1);
    });
}
