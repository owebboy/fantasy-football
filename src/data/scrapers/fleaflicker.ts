import type { ScrapedPlayer } from '../types';
import { normalizeTeam, runIfMain } from './utils';

const API_BASE = 'https://www.fleaflicker.com/api';
const LEAGUE_ID = 83144;
/** Stop after this many players (the API returns 30 per page, sorted by rank). */
const MAX_PLAYERS = 500;

// Actual response shape from FetchPlayerListing:
//   { players: [{ proPlayer: { id, nameFull, proTeamAbbreviation, position },
//                  rankFantasy: { ordinal } }] }
// rankFantasy.ordinal is Fleaflicker's own production-based ranking (not ADP).

export async function scrape(): Promise<ScrapedPlayer[]> {
  console.log('[fleaflicker] Fetching player listing from API...');

  const players: ScrapedPlayer[] = [];
  let offset = 0;
  const pageSize = 30;

  // The API returns pages of 30 players; paginate until we get an empty page.
  while (true) {
    const params = new URLSearchParams({
      sport: 'NFL',
      league_id: String(LEAGUE_ID),
      result_offset: String(offset),
    });

    const resp = await fetch(`${API_BASE}/FetchPlayerListing?${params}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
        Accept: 'application/json',
      },
    });

    if (!resp.ok) {
      console.warn(`[fleaflicker] API returned ${resp.status} at offset ${offset} — stopping.`);
      break;
    }

    const data = await resp.json();
    const listing: unknown[] = data.players ?? [];
    if (!Array.isArray(listing) || listing.length === 0) break;

    for (const item of listing) {
      // biome-ignore lint/suspicious/noExplicitAny: dynamic API response
      const row = item as any;
      const p = row.proPlayer;
      if (!p) continue;

      const name: string = p.nameFull ?? '';
      const team = normalizeTeam(p.proTeamAbbreviation ?? '');
      const position: string = (p.position ?? '').toUpperCase();
      const rank: number = row.rankFantasy?.ordinal ?? 999;

      if (name && position) {
        players.push({ name, team, position, rank, id: p.id });
      }
    }

    console.log(`[fleaflicker] Page at offset ${offset}: ${listing.length} players (total ${players.length})`);
    if (listing.length < pageSize) break;
    if (players.length >= MAX_PLAYERS) break;
    offset += pageSize;
  }

  console.log(`[fleaflicker] Extracted ${players.length} players total`);
  return players;
}

runIfMain('fleaflicker', 'fleaflicker', scrape);
