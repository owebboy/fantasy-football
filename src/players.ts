export type { Player, PlayerPosition, PlayerRankings } from './player-types';

import type { Player } from './player-types';
import data from './players.json';

const players: Player[] = data as Player[];
export default players;
