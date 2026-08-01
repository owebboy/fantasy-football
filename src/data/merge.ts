import fs from 'node:fs';
import { readCache } from './scrapers/utils';
import type { CacheFile } from './types';

interface MergedEntry {
  name: string;
  team: string;
  position: string;
  matchConfidence: number;
  status: string;
  sources: string[];
  espnRank: number | null;
  espnId: string | null;
  fleaflickerRank: number | null;
  fleaflickerId: number | null;
  fantasyprosRank: number | null;
  fantasyprosId: string | null;
  averageRank: number;
  rankVariance: number;
}

function normalizeName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .replace(/jr$|sr$|iii$|ii$|iv$|v$/i, '')
    .trim();
}

function merge(): MergedEntry[] {
  const espn = readCache('espn');
  const ff = readCache('fleaflicker');
  const fp = readCache('fantasypros');

  if (!espn && !ff && !fp) {
    console.error('No cache files found. Run data:refresh first.');
    process.exit(1);
  }

  // Build a master index by normalized name
  const master: Map<string, MergedEntry> = new Map();

  function getOrCreate(key: string, name: string, team: string, position: string): MergedEntry {
    if (!master.has(key)) {
      master.set(key, {
        name,
        team,
        position,
        matchConfidence: 0,
        status: 'unmatched',
        sources: [],
        espnRank: null,
        espnId: null,
        fleaflickerRank: null,
        fleaflickerId: null,
        fantasyprosRank: null,
        fantasyprosId: null,
        averageRank: 0,
        rankVariance: 0,
      });
    }
    return master.get(key)!;
  }

  function setRankField(
    entry: MergedEntry,
    field: keyof MergedEntry,
    value: number | string | null,
  ): void {
    switch (field) {
      case 'espnRank':
        entry.espnRank = value as number | null;
        break;
      case 'fleaflickerRank':
        entry.fleaflickerRank = value as number | null;
        break;
      case 'fantasyprosRank':
        entry.fantasyprosRank = value as number | null;
        break;
      case 'espnId':
        entry.espnId = value as string | null;
        break;
      case 'fleaflickerId':
        entry.fleaflickerId = value as number | null;
        break;
      case 'fantasyprosId':
        entry.fantasyprosId = value as string | null;
        break;
      default:
        break;
    }
  }

  function addSource(
    cache: CacheFile | null,
    sourceName: string,
    rankField: 'espnRank' | 'fleaflickerRank' | 'fantasyprosRank',
    idField: 'espnId' | 'fleaflickerId' | 'fantasyprosId',
  ) {
    if (!cache) return;
    for (const p of cache.players) {
      const key = normalizeName(p.name);
      const entry = getOrCreate(key, p.name, p.team, p.position);
      setRankField(entry, rankField, p.rank);
      setRankField(entry, idField, p.id ?? null);
      if (!entry.sources.includes(sourceName)) {
        entry.sources.push(sourceName);
      }
      if (!entry.team || entry.team.length < 2) {
        entry.team = p.team;
      }
      if (!entry.position) {
        entry.position = p.position;
      }
    }
  }

  addSource(espn, 'espn', 'espnRank', 'espnId');
  addSource(ff, 'fleaflicker', 'fleaflickerRank', 'fleaflickerId');
  addSource(fp, 'fantasypros', 'fantasyprosRank', 'fantasyprosId');

  // Calculate match confidence and variance
  const entries = Array.from(master.values());
  for (const entry of entries) {
    entry.matchConfidence = entry.sources.length / 3;
    if (entry.sources.length === 3) {
      entry.status = 'matched_all';
    } else if (entry.sources.length === 2) {
      entry.status = 'matched_two';
    } else {
      entry.status = 'matched_one';
    }

    const ranks = [entry.espnRank, entry.fleaflickerRank, entry.fantasyprosRank].filter(
      (r): r is number => r !== null,
    );
    if (ranks.length > 0) {
      entry.averageRank = Math.round(ranks.reduce((a, b) => a + b, 0) / ranks.length);
      if (ranks.length > 1) {
        entry.rankVariance =
          Math.round(
            Math.sqrt(
              ranks.reduce((sum, r) => sum + (r - entry.averageRank) ** 2, 0) / ranks.length,
            ) * 100,
          ) / 100;
      }
    } else {
      entry.averageRank = 300;
    }
  }

  // Sort by Fleaflicker rank (primary), fall back to average rank
  entries.sort((a, b) => {
    const aRank = a.fleaflickerRank ?? a.averageRank ?? 999;
    const bRank = b.fleaflickerRank ?? b.averageRank ?? 999;
    return aRank - bRank;
  });

  process.stderr.write(`Merge: ${entries.length} total players\n`);
  process.stderr.write(
    `  matched_all: ${entries.filter((e) => e.status === 'matched_all').length}\n`,
  );
  process.stderr.write(
    `  matched_two: ${entries.filter((e) => e.status === 'matched_two').length}\n`,
  );
  process.stderr.write(
    `  matched_one: ${entries.filter((e) => e.status === 'matched_one').length}\n`,
  );

  return entries;
}

const merged = merge();
fs.writeFileSync('merged-all.json', JSON.stringify(merged, null, 2));
process.stderr.write(`Wrote ${merged.length} entries to merged-all.json\n`);
