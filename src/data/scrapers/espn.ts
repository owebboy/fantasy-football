import fs from "fs";
import path from "path";
import type { ScrapedPlayer } from "../types";
import { normalizeTeam, writeCache } from "./utils";

const INPUT_GLOB = "data/cache/espn-input.*";

/** Find the user-provided ESPN input file (any extension) */
function findInputFile(): string | null {
  const dir = path.dirname(INPUT_GLOB);
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir);
  const match = files.find((f) => f.startsWith("espn-input."));
  return match ? path.join(dir, match) : null;
}

/** Parse JSON format: array of { name, team, position, rank } or { player, ... } */
function parseJSON(content: string): ScrapedPlayer[] {
  const data = JSON.parse(content);
  const arr = Array.isArray(data) ? data : data.players || data.rankings || [];
  const players: ScrapedPlayer[] = [];

  for (const item of arr) {
    const name = item.player_name || item.playerName || item.name || item.player || "";
    const team = normalizeTeam(item.team || item.team_abbreviation || item.player_team_id || "");
    const position = (item.position || item.player_position_id || "").toUpperCase();
    const rank = parseInt(item.rank || item.rank_ecr || item.overall_rank || item.overallRank, 10);

    if (name && !isNaN(rank)) {
      players.push({ name, team, position, rank });
    }
  }
  return players;
}

/** Parse CSV/TSV format: rank,name,team,position or comma/pipe separated */
function parseCSV(content: string): ScrapedPlayer[] {
  const lines = content.trim().split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];

  const players: ScrapedPlayer[] = [];

  // Try to detect delimiter
  const firstLine = lines[0].toLowerCase();
  const delimiter = firstLine.includes("\t") ? "\t" : (firstLine.includes("|") ? "|" : ",");
  const headers = lines[0].split(delimiter).map((h) => h.trim().toLowerCase());

  // Find column indices
  const rankIdx = headers.findIndex((h) => /^(?:rank|overall)$/i.test(h));
  const nameIdx = headers.findIndex((h) => /^player|name$/i.test(h));
  const teamIdx = headers.findIndex((h) => /^team|tm$/i.test(h));
  const posIdx = headers.findIndex((h) => /^pos|position$/i.test(h));

  // If no header columns were matched, the file likely has no header row.
  // Use positional columns: rank, name, team, position.
  const hasHeader = rankIdx >= 0 || nameIdx >= 0 || teamIdx >= 0 || posIdx >= 0;
  const startRow = hasHeader ? 1 : 0;

  for (let i = startRow; i < lines.length; i++) {
    const cols = lines[i].split(delimiter).map((c) => c.trim());
    if (cols.length < 2) continue;

    let name: string, team: string, position: string, rank: number;

    if (hasHeader) {
      name = nameIdx >= 0 ? cols[nameIdx] : cols[0] || "";
      team = teamIdx >= 0 ? normalizeTeam(cols[teamIdx]) : "";
      position = posIdx >= 0 ? cols[posIdx].toUpperCase() : "";
      rank = rankIdx >= 0 ? parseInt(cols[rankIdx], 10) : i;
    } else {
      // No header: assume [rank, name, team, position] order
      rank = parseInt(cols[0], 10);
      name = cols[1] || cols[0] || "";
      team = cols.length >= 3 ? normalizeTeam(cols[2]) : "";
      position = cols.length >= 4 ? cols[3].toUpperCase() : "";
    }

    if (name && !isNaN(rank)) {
      players.push({ name, team, position, rank });
    }
  }
  return players;
}

/** Parse PDF: lines like "1. (RB1) Jahmyr Gibbs, DET $57 6" */
async function parsePDF(filePath: string): Promise<ScrapedPlayer[]> {
  const { PDFParse } = await import("pdf-parse");
  const buf = fs.readFileSync(filePath);
  const pdf = new PDFParse({ data: buf });
  const result = await pdf.getText();
  const text = result.text;

  const players: ScrapedPlayer[] = [];
  // Each PDF line contains up to 4 player entries, e.g.:
  // "1. (RB1) Jahmyr Gibbs, DET $57 6 81. (WR40) Jakobi Meyers, JAC $4 7"
  const playerRegex = /(\d+)\.\s+\(([A-Z]{1,4})(\d+)\)\s+(.+?),\s*([A-Z]{2,4})\s+\$\d+/g;

  for (const line of text.split("\n")) {
    const matches = line.matchAll(playerRegex);
    for (const match of matches) {
      const rank = parseInt(match[1], 10);
      const position = match[2]; // e.g., "RB", "WR", "DST"
      const name = match[4].trim();
      const team = normalizeTeam(match[5]);

      if (name && rank > 0 && rank <= 300) {
        players.push({ name, team, position, rank });
      }
    }
  }

  console.log(`[espn] Parsed ${players.length} players from PDF`);
  return players;
}

/** Parse plain text: lines like "1. Player Name - Team - QB" */
function parseText(content: string): ScrapedPlayer[] {
  const lines = content.trim().split(/\r?\n/).filter(Boolean);
  const players: ScrapedPlayer[] = [];

  for (const line of lines) {
    // Try patterns: "1. Player Name - Team - QB" or "1  Player Name  Team  QB"
    const rankMatch = line.match(/^\s*(\d+)\.?\s+/);
    if (!rankMatch) continue;
    const rank = parseInt(rankMatch[1], 10);

    let rest = line.slice(rankMatch[0].length).trim();
    let name = rest;
    let team = "";
    let position = "";

    // Try " - " separator
    const dashParts = rest.split(" - ");
    if (dashParts.length >= 3) {
      name = dashParts[0].trim();
      team = dashParts[1].trim();
      position = dashParts[2].trim().split(/\s+/)[0]; // take first word of position
    } else {
      // Try multi-space separation
      const spaceMatch = rest.match(/^(.+?)\s{2,}(.+?)\s{2,}(.+)$/);
      if (spaceMatch) {
        name = spaceMatch[1].trim();
        team = spaceMatch[2];
        position = spaceMatch[3];
      }
    }

    if (name) {
      players.push({
        rank,
        name,
        team: normalizeTeam(team),
        position: position.toUpperCase(),
      });
    }
  }
  return players;
}

export async function scrape(): Promise<ScrapedPlayer[]> {
  console.log("[espn] Looking for user-provided input file...");
  const inputPath = findInputFile();

  if (!inputPath) {
    console.warn("[espn] No input file found at data/cache/espn-input.*");
    console.warn("[espn] Drop your ESPN rankings file there (any format) and re-run.");
    return [];
  }

  console.log(`[espn] Reading ${inputPath}...`);
  const ext = path.extname(inputPath).toLowerCase();

  let players: ScrapedPlayer[] = [];

  // Auto-detect format and parse
  if (ext === ".pdf") {
    players = await parsePDF(inputPath);
  } else if (ext === ".json") {
    const content = fs.readFileSync(inputPath, "utf8");
    players = parseJSON(content);
  } else if (ext === ".csv" || ext === ".tsv") {
    const content = fs.readFileSync(inputPath, "utf8");
    players = parseCSV(content);
  } else if (ext === ".txt" || ext === ".html") {
    const content = fs.readFileSync(inputPath, "utf8");
    // Try text first, fall back to CSV
    players = parseText(content);
    if (players.length === 0) {
      players = parseCSV(content);
    }
  } else {
    // Unknown extension — try all parsers
    const content = fs.readFileSync(inputPath, "utf8");
    players = parseCSV(content);
    if (players.length === 0) players = parseText(content);
    if (players.length === 0) {
      try { players = parseJSON(content); } catch {}
    }
  }

  console.log(`[espn] Parsed ${players.length} players from user input`);
  return players;
}

const isMain = process.argv[1]?.endsWith("espn.ts") || process.argv[1]?.endsWith("espn.js");
if (isMain) {
  scrape()
    .then((players) => {
      if (players.length > 0) {
        writeCache("espn", players);
        console.log(`[espn] Cache written: ${players.length} players`);
      } else {
        console.log("[espn] No players to write. Provide input file at data/cache/espn-input.*");
      }
    })
    .catch((err) => {
      console.error("[espn] Failed:", err.message);
      process.exit(1);
    });
}
