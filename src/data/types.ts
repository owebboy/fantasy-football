export interface ScrapedPlayer {
  name: string;
  team: string;
  position: string;
  rank: number;
  id?: string | number;
}

export interface CacheFile {
  source: string;
  scrapedAt: string;
  players: ScrapedPlayer[];
}
