import fs from 'node:fs';

// 2026 NFL bye weeks — sourced from Sharp Football Analysis (May 31, 2026)
// https://www.sharpfootballanalysis.com/analysis/nfl-bye-weeks/
const byeWeeks = {
  ARI: 14,
  ATL: 11,
  BAL: 13,
  BUF: 7,
  CAR: 5,
  CHI: 10,
  CIN: 6,
  CLE: 11,
  DAL: 14,
  DEN: 10,
  DET: 6,
  GB: 11,
  HOU: 8,
  IND: 13,
  JAX: 7,
  KC: 5,
  LAC: 7,
  LAR: 11,
  LV: 13,
  MIA: 6,
  MIN: 6,
  NE: 11,
  NO: 8,
  NYG: 8,
  NYJ: 13,
  PHI: 10,
  PIT: 9,
  SEA: 11,
  SF: 8,
  TB: 10,
  TEN: 9,
  WAS: 7,
};

// Price calculation based on rank
function calculatePrice(rank) {
  if (rank <= 10) return Math.max(60 - rank * 2, 45);
  if (rank <= 20) return Math.max(50 - (rank - 10) * 2, 30);
  if (rank <= 30) return Math.max(35 - (rank - 20) * 2, 20);
  if (rank <= 50) return Math.max(25 - Math.floor((rank - 30) / 2), 10);
  if (rank <= 75) return Math.max(15 - Math.floor((rank - 50) / 3), 5);
  if (rank <= 100) return Math.max(8 - Math.floor((rank - 75) / 5), 2);
  if (rank <= 150) return Math.max(3 - Math.floor((rank - 100) / 20), 1);
  return 0;
}

/** Compute average across all available source ranks. */
function averageRank(entry) {
  const ranks = [entry.espnRank, entry.fleaflickerRank, entry.fantasyprosRank].filter(
    (r) => r != null,
  );
  if (ranks.length === 0) return 300;
  return Math.round(ranks.reduce((a, b) => a + b, 0) / ranks.length);
}

// Read and parse the merged data
const mergedData = JSON.parse(fs.readFileSync('merged-all.json', 'utf8'));

// Filter for entries with ESPN rankings (ESPN is the canonical primary source)
const qualityEntries = mergedData
  .filter((entry) => {
    return entry.espnRank && entry.name && entry.team && entry.position;
  })
  .sort((a, b) => a.espnRank - b.espnRank);

// Map position strings to valid positions
const positionMap = {
  QB: 'QB',
  RB: 'RB',
  WR: 'WR',
  TE: 'TE',
  K: 'K',
  DST: 'DST',
  'D/ST': 'DST',
};

// Group by position to calculate position ranks
const positionGroups = {};
qualityEntries.forEach((entry) => {
  const pos = positionMap[entry.position] || entry.position;
  if (!positionGroups[pos]) {
    positionGroups[pos] = [];
  }
  positionGroups[pos].push(entry);
});

// Create the transformed players array
const players = [];
let overallRank = 1;

// Take top 300 players by ESPN rank (including K/DST if they're ranked high enough)
const topPlayers = qualityEntries.slice(0, 300);

// Track position ranks
const positionRanks = { QB: 0, RB: 0, WR: 0, TE: 0, K: 0, DST: 0 };

topPlayers.forEach((entry) => {
  const position = positionMap[entry.position] || entry.position;
  positionRanks[position]++;

  players.push({
    rank: overallRank++,
    name: entry.name,
    team: entry.team,
    position: {
      position: position,
      rank: positionRanks[position],
    },
    price: calculatePrice(overallRank - 1),
    bye: byeWeeks[entry.team] || 0,
    rankings: {
      ff: entry.fleaflickerRank || null,
      espn: entry.espnRank || null,
      fp: entry.fantasyprosRank || null,
      avg: averageRank(entry),
    },
  });
});

// No need for hardcoded kickers/defenses - they're in the data in proper FF rank order

// Write generated player data to JSON (interfaces live in src/player-types.ts)
fs.writeFileSync('src/players.json', JSON.stringify(players.slice(0, 300), null, 2));
console.log(`Wrote ${players.length} players to src/players.json`);
