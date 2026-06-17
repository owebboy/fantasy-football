import * as cheerio from 'cheerio';
import type { ScrapedPlayer } from '../types';
import { normalizeTeam, runIfMain } from './utils';

const URL = 'https://www.fantasypros.com/nfl/rankings/ppr-cheatsheets.php';

export async function scrape(): Promise<ScrapedPlayer[]> {
  console.log('[fantasypros] Fetching rankings...');
  const resp = await fetch(URL, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
    },
  });
  if (!resp.ok) throw new Error(`FantasyPros fetch failed: ${resp.status}`);

  const html = await resp.text();
  const $ = cheerio.load(html);
  const players: ScrapedPlayer[] = [];

  // FantasyPros uses a table with player rows.
  $('tr').each((_, row) => {
    const cells = $(row).find('td');
    if (cells.length < 4) return;

    const rankText = $(cells[0]).text().trim();
    const rank = parseInt(rankText, 10);
    if (Number.isNaN(rank)) return;

    // Name is typically in a player-name link
    const nameEl = $(cells[1]).find('a.player-name, a.fp-player-link');
    const name = (nameEl.length ? nameEl.text().trim() : $(cells[1]).text().trim()).replace(
      /\s+/g,
      ' ',
    );

    // Team is in a separate cell
    const teamRaw = $(cells[2]).text().trim();
    const team = normalizeTeam(teamRaw);

    // Position
    const position = $(cells[3]).text().trim().toUpperCase();

    if (name && team && position) {
      players.push({ name, team, position, rank });
    }
  });

  // Fallback: try embedded JSON if primary selector found 0 rows
  if (players.length === 0) {
    console.log('[fantasypros] Primary selector found 0 rows, trying fallback...');
    const scripts = $('script').toArray();
    for (const script of scripts) {
      const text = $(script).html() || '';
      // biome-ignore lint/suspicious/noExplicitAny: JSON extracted from page scripts
      let rawData: any[] | null = null;

      // Case 1: ecrData = {..., "players":[...], ...}
      // Extract the "players" array by bracket-counting
      const playersKey = '"players":[';
      const pIdx = text.indexOf(playersKey);
      if (pIdx > 0) {
        const start = text.indexOf('[', pIdx);
        if (start > 0) {
          let depth = 0;
          let end = start;
          for (; end < text.length; end++) {
            if (text[end] === '[') depth++;
            else if (text[end] === ']') {
              depth--;
              if (depth === 0) break;
            }
          }
          if (depth === 0) {
            try {
              rawData = JSON.parse(text.substring(start, end + 1));
            } catch {
              rawData = null;
            }
          }
        }
      }

      // Case 2: variable assigned directly to an array [...]
      if (!rawData || rawData.length === 0) {
        const arrMatch = text.match(/(?:ecrData|playerData|rankingsData)\s*=\s*(\[[\s\S]*?\]);/);
        if (arrMatch) {
          try {
            rawData = JSON.parse(arrMatch[1]);
          } catch {
            rawData = null;
          }
        }
      }

      if (rawData && Array.isArray(rawData) && rawData.length > 0) {
        for (const item of rawData) {
          if (item.player_name && item.rank_ecr) {
            players.push({
              name: item.player_name,
              team: normalizeTeam(item.player_team_id || item.team || ''),
              position: (item.player_position_id || item.position || '').toUpperCase(),
              rank: parseInt(item.rank_ecr, 10),
              id: item.player_id || item.id || undefined,
            });
          }
        }
        if (players.length > 0) break;
      }
    }
  }

  console.log(`[fantasypros] Extracted ${players.length} players`);
  return players;
}

// Run directly
runIfMain('fantasypros', 'fantasypros', scrape);
