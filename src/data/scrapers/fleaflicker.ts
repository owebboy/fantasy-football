import type { ScrapedPlayer } from '../types';
import { normalizeTeam, runIfMain } from './utils';

const API_BASE = 'https://www.fleaflicker.com/api';

// biome-ignore lint/correctness/noUnusedVariables: kept for API reference if restored
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
  console.log('[fleaflicker] Fetching player listing from API...');

  // FetchPlayerListing needs sport, and possibly league context.
  // Try with minimal params first.
  const params = new URLSearchParams({
    sport: 'NFL',
    sort: 'ECR',
  });

  const resp = await fetch(`${API_BASE}/FetchPlayerListing?${params}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
      Accept: 'application/json',
    },
  });

  if (!resp.ok) {
    // The API may require a league context — this is expected without auth.
    // FleaFlicker has no public API; the merge pipeline will use the other
    // two sources (ESPN + FantasyPros) if no cached fleaflicker.json exists.
    console.warn(`[fleaflicker] API returned ${resp.status} (expected — no league context).`);
    console.warn(
      '[fleaflicker] Skipping FleaFlicker. Rankings compass will use 2-source consensus.',
    );
    return [];
  }

  const data = await resp.json();
  const players: ScrapedPlayer[] = [];

  const listing = data.players || data.rows || data.items || [];
  let seq = 0;

  for (const item of listing) {
    seq++;
    const p = item.player || item;
    const name = p.name_full || p.name || '';
    const team = normalizeTeam(p.pro_team_abbreviation || p.pro_team?.abbreviation || '');
    const position = (p.position || '').toUpperCase();
    const ecrRank = p.rank_ecr ?? p.stats?.rank_ecr?.rank ?? seq;

    if (name && position) {
      players.push({ name, team, position, rank: ecrRank, id: p.id });
    }
  }

  console.log(`[fleaflicker] Extracted ${players.length} players via API`);
  return players;
}

runIfMain('fleaflicker', 'fleaflicker', scrape);
