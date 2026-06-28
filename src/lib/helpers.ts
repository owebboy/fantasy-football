import type { Player, PlayerPosition } from '../players';

export const chunkedPlayers = (players: Player[]) => {
  return players
    .reduce((acc: Player[][], player, idx) => {
      const chunkIdx = Math.floor(idx / 12);
      if (!acc[chunkIdx]) {
        acc[chunkIdx] = [];
      }
      acc[chunkIdx].push(player);
      return acc;
    }, [])
    .map((round, idx) => (idx % 2 === 0 ? round : round.reverse()));
};

export const calculatePositionColor = (position: PlayerPosition['position']) => {
  switch (position) {
    case 'QB':
      return '#00509E';
    case 'RB':
      return '#1B5E20';
    case 'WR':
      return '#C60C30';
    case 'TE':
      return '#8B4500';
    case 'DST':
      return '#6A0DAD';
    case 'K':
      return '#333333';
    default:
      return '#555555';
  }
};

export const currentPick = (draft: Player[]) => {
  const currentPick = draft.length + 1;
  return currentPick;
};

export const currentRound = (draft: Player[]) => {
  if (draft.length === 0) return 1;
  return Math.ceil(draft.length / 12);
};

export const findPlayer = (player: Player, arr: Player[]) => {
  return arr.find((p) => p.name === player.name);
};

export const togglePlayer = (player: Player, arr: Player[]) => {
  if (findPlayer(player, arr)) {
    return arr.filter((p) => p.name !== player.name);
  }

  return [...arr, player];
};

/** Sort players by a ranking source. Nulls sort to the end. */
export const sortPlayers = (
  players: Player[],
  sortBy: 'ff' | 'fp' | 'avg',
): Player[] => {
  return [...players].sort((a, b) => {
    const aRank: number | null =
      sortBy === 'avg' ? a.rankings?.avg ?? null : a.rankings?.[sortBy] ?? null;
    const bRank: number | null =
      sortBy === 'avg' ? b.rankings?.avg ?? null : b.rankings?.[sortBy] ?? null;
    // nulls last
    if (aRank === null && bRank === null) return 0;
    if (aRank === null) return 1;
    if (bRank === null) return -1;
    return aRank - bRank;
  });
};
