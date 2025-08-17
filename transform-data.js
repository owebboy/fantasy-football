import fs from "fs";

// 2025 NFL bye weeks (these are placeholders - update with actual 2025 bye weeks)
const byeWeeks = {
  ARI: 11,
  ATL: 12,
  BAL: 14,
  BUF: 12,
  CAR: 11,
  CHI: 7,
  CIN: 12,
  CLE: 10,
  DAL: 7,
  DEN: 14,
  DET: 5,
  GB: 10,
  HOU: 14,
  IND: 14,
  JAC: 12,
  JAX: 12,
  KC: 6,
  LAC: 5,
  LAR: 6,
  LV: 10,
  MIA: 6,
  MIN: 6,
  NE: 14,
  NO: 12,
  NYG: 11,
  NYJ: 12,
  PHI: 5,
  PIT: 9,
  SEA: 10,
  SF: 9,
  TB: 11,
  TEN: 5,
  WAS: 14,
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

// Calculate vector coordinates for ranking compass
function calculateRankingVector(entry) {
  // Get ranks, using 300 as default for missing values
  const ffRank = entry.fleaflickerRank || 300;
  const espnRank = entry.espnRank || 300;
  const fpRank = entry.fantasyprosRank || 300;

  // Normalize ranks to 0-1 scale (worse rank = higher value for disagreement visualization)
  const normalize = (rank) => (rank - 1) / 299;

  const ffNorm = normalize(ffRank);
  const espnNorm = normalize(espnRank);
  const fpNorm = normalize(fpRank);

  // Calculate vector components
  // FF is North (up), ESPN is Southeast, FP is Southwest
  const ffVector = { x: 0, y: -ffNorm }; // North (negative Y is up in standard coordinates)
  const espnVector = { x: espnNorm * 0.707, y: espnNorm * 0.707 }; // SE (positive X, positive Y)
  const fpVector = { x: -fpNorm * 0.707, y: fpNorm * 0.707 }; // SW (negative X, positive Y)

  // Sum vectors to get resultant
  const resultX = ffVector.x + espnVector.x + fpVector.x;
  const resultY = ffVector.y + espnVector.y + fpVector.y;

  // Calculate magnitude and angle
  const magnitude = Math.sqrt(resultX * resultX + resultY * resultY);
  const angle = Math.atan2(resultY, resultX) * (180 / Math.PI);

  // Calculate variance between sources
  const ranks = [ffRank, espnRank, fpRank].filter((r) => r < 300);
  let variance = 0;
  let averageRank = ffRank;

  if (ranks.length > 1) {
    averageRank = Math.round(ranks.reduce((a, b) => a + b, 0) / ranks.length);
    variance = Math.sqrt(
      ranks.reduce((sum, r) => sum + Math.pow(r - averageRank, 2), 0) /
        ranks.length,
    );
  }

  // Determine consensus strength based on variance
  let consensusStrength;
  if (ranks.length < 2) {
    consensusStrength = 0; // No consensus data
  } else if (variance <= 5) {
    consensusStrength = 1; // Strong consensus
  } else if (variance <= 15) {
    consensusStrength = 0.75; // Moderate consensus
  } else if (variance <= 30) {
    consensusStrength = 0.5; // Weak consensus
  } else {
    consensusStrength = 0.25; // High variance
  }

  return {
    vector: {
      x: Math.round(resultX * 100) / 100,
      y: Math.round(resultY * 100) / 100,
      magnitude: Math.round(magnitude * 100) / 100,
      angle: Math.round(angle),
    },
    consensusStrength,
    variance: Math.round(variance * 10) / 10,
    averageRank,
    sources: {
      ff: ffNorm,
      espn: espnNorm,
      fp: fpNorm,
    },
  };
}

// Read and parse the merged data
const mergedData = JSON.parse(fs.readFileSync("merged-all.json", "utf8"));

// Filter for entries with FleaFlicker rankings (FF is our primary source)
const qualityEntries = mergedData
  .filter((entry) => {
    // Must have FF ranking and basic player info
    return entry.fleaflickerRank && entry.name && entry.team && entry.position;
  })
  .sort((a, b) => a.fleaflickerRank - b.fleaflickerRank);

// Map position strings to valid positions
const positionMap = {
  QB: "QB",
  RB: "RB",
  WR: "WR",
  TE: "TE",
  K: "K",
  DST: "DST",
  "D/ST": "DST",
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

// Take top 300 players by FF rank (including K/DST if they're ranked high enough)
const topPlayers = qualityEntries.slice(0, 300);

// Track position ranks
const positionRanks = { QB: 0, RB: 0, WR: 0, TE: 0, K: 0, DST: 0 };

topPlayers.forEach((entry) => {
  const position = positionMap[entry.position] || entry.position;
  positionRanks[position]++;

  const rankingData = calculateRankingVector(entry);

  players.push({
    rank: overallRank++,
    name: entry.name,
    team: entry.team,
    position: {
      position: position,
      rank: positionRanks[position],
    },
    price: calculatePrice(overallRank - 1),
    bye: byeWeeks[entry.team] || 9,
    vector: rankingData.vector,
    consensusStrength: rankingData.consensusStrength,
    variance: rankingData.variance,
    rankings: {
      ff: entry.fleaflickerRank || null,
      espn: entry.espnRank || null,
      fp: entry.fantasyprosRank || null,
      avg: rankingData.averageRank,
    },
  });
});

// No need for hardcoded kickers/defenses - they're in the data in proper FF rank order

// Generate TypeScript output
const tsOutput = `export interface PlayerPosition {
  position: "QB" | "RB" | "WR" | "TE" | "K" | "DST";
  rank: number;
}

export interface PlayerRankings {
  ff: number | null;
  espn: number | null;
  fp: number | null;
  avg: number;
}

export interface RankingVector {
  x: number;
  y: number;
  magnitude: number;
  angle: number;
}

export interface Player {
  rank: number;
  name: string;
  team: string;
  position: PlayerPosition;
  price: number;
  bye: number;
  vector: RankingVector;
  consensusStrength: number; // 0-1 scale: 0=no data, 0.25=high variance, 0.5=weak, 0.75=moderate, 1=strong
  variance: number;
  rankings: PlayerRankings | null;
}

const players: Player[] = ${JSON.stringify(players.slice(0, 300), null, 2)};

export default players;
`;

// Write to players.ts
fs.writeFileSync("src/players.ts", tsOutput);
