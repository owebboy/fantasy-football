export interface ScrapedPlayer {
  name: string;
  team: string;
  position: string;
  rank: number;
}

export interface CacheFile {
  source: string;
  scrapedAt: string;
  players: ScrapedPlayer[];
}
