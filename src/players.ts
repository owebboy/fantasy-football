export interface PlayerPosition {
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

const players: Player[] = [
  {
    "rank": 1,
    "name": "Ja'Marr Chase",
    "team": "CIN",
    "position": {
      "position": "WR",
      "rank": 1
    },
    "price": 58,
    "bye": 12,
    "vector": {
      "x": 0,
      "y": 0,
      "magnitude": 0,
      "angle": 0
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 1,
      "espn": 1,
      "fp": 1,
      "avg": 1
    }
  },
  {
    "rank": 2,
    "name": "Bijan Robinson",
    "team": "ATL",
    "position": {
      "position": "RB",
      "rank": 1
    },
    "price": 56,
    "bye": 12,
    "vector": {
      "x": 0,
      "y": 0,
      "magnitude": 0,
      "angle": 90
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 2,
      "espn": 2,
      "fp": 2,
      "avg": 2
    }
  },
  {
    "rank": 3,
    "name": "Saquon Barkley",
    "team": "PHI",
    "position": {
      "position": "RB",
      "rank": 2
    },
    "price": 54,
    "bye": 5,
    "vector": {
      "x": 0,
      "y": 0.01,
      "magnitude": 0.01,
      "angle": 65
    },
    "consensusStrength": 1,
    "variance": 0.6,
    "rankings": {
      "ff": 3,
      "espn": 4,
      "fp": 3,
      "avg": 3
    }
  },
  {
    "rank": 4,
    "name": "Justin Jefferson",
    "team": "MIN",
    "position": {
      "position": "WR",
      "rank": 2
    },
    "price": 52,
    "bye": 6,
    "vector": {
      "x": 0,
      "y": 0,
      "magnitude": 0,
      "angle": 143
    },
    "consensusStrength": 1,
    "variance": 0.6,
    "rankings": {
      "ff": 4,
      "espn": 3,
      "fp": 4,
      "avg": 4
    }
  },
  {
    "rank": 5,
    "name": "CeeDee Lamb",
    "team": "DAL",
    "position": {
      "position": "WR",
      "rank": 3
    },
    "price": 50,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": 0.01,
      "magnitude": 0.01,
      "angle": 73
    },
    "consensusStrength": 1,
    "variance": 0.6,
    "rankings": {
      "ff": 5,
      "espn": 6,
      "fp": 5,
      "avg": 5
    }
  },
  {
    "rank": 6,
    "name": "Jahmyr Gibbs",
    "team": "DET",
    "position": {
      "position": "RB",
      "rank": 3
    },
    "price": 48,
    "bye": 5,
    "vector": {
      "x": 0,
      "y": 0,
      "magnitude": 0.01,
      "angle": 117
    },
    "consensusStrength": 1,
    "variance": 0.6,
    "rankings": {
      "ff": 6,
      "espn": 5,
      "fp": 6,
      "avg": 6
    }
  },
  {
    "rank": 7,
    "name": "Derrick Henry",
    "team": "BAL",
    "position": {
      "position": "RB",
      "rank": 4
    },
    "price": 46,
    "bye": 14,
    "vector": {
      "x": 0.01,
      "y": 0.02,
      "magnitude": 0.02,
      "angle": 62
    },
    "consensusStrength": 1,
    "variance": 1.9,
    "rankings": {
      "ff": 7,
      "espn": 11,
      "fp": 7,
      "avg": 8
    }
  },
  {
    "rank": 8,
    "name": "Nico Collins",
    "team": "HOU",
    "position": {
      "position": "WR",
      "rank": 4
    },
    "price": 45,
    "bye": 14,
    "vector": {
      "x": 0.01,
      "y": 0.02,
      "magnitude": 0.02,
      "angle": 61
    },
    "consensusStrength": 1,
    "variance": 2.4,
    "rankings": {
      "ff": 8,
      "espn": 13,
      "fp": 8,
      "avg": 10
    }
  },
  {
    "rank": 9,
    "name": "Puka Nacua",
    "team": "LAR",
    "position": {
      "position": "WR",
      "rank": 5
    },
    "price": 45,
    "bye": 6,
    "vector": {
      "x": 0,
      "y": 0.01,
      "magnitude": 0.01,
      "angle": 105
    },
    "consensusStrength": 1,
    "variance": 0.6,
    "rankings": {
      "ff": 9,
      "espn": 8,
      "fp": 9,
      "avg": 9
    }
  },
  {
    "rank": 10,
    "name": "Malik Nabers",
    "team": "NYG",
    "position": {
      "position": "WR",
      "rank": 6
    },
    "price": 45,
    "bye": 11,
    "vector": {
      "x": 0,
      "y": 0.01,
      "magnitude": 0.01,
      "angle": 103
    },
    "consensusStrength": 1,
    "variance": 0.6,
    "rankings": {
      "ff": 10,
      "espn": 9,
      "fp": 10,
      "avg": 10
    }
  },
  {
    "rank": 11,
    "name": "Brian Thomas",
    "team": "JAX",
    "position": {
      "position": "WR",
      "rank": 7
    },
    "price": 48,
    "bye": 12,
    "vector": {
      "x": 0.01,
      "y": 0.02,
      "magnitude": 0.02,
      "angle": 71
    },
    "consensusStrength": 1,
    "variance": 1.4,
    "rankings": {
      "ff": 11,
      "espn": 14,
      "fp": 11,
      "avg": 12
    }
  },
  {
    "rank": 12,
    "name": "Amon-Ra St. Brown",
    "team": "DET",
    "position": {
      "position": "WR",
      "rank": 8
    },
    "price": 46,
    "bye": 5,
    "vector": {
      "x": 0,
      "y": 0.01,
      "magnitude": 0.01,
      "angle": 114
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": 12,
      "espn": 10,
      "fp": 12,
      "avg": 11
    }
  },
  {
    "rank": 13,
    "name": "Christian McCaffrey",
    "team": "SF",
    "position": {
      "position": "RB",
      "rank": 5
    },
    "price": 44,
    "bye": 9,
    "vector": {
      "x": -0.01,
      "y": 0,
      "magnitude": 0.01,
      "angle": 170
    },
    "consensusStrength": 1,
    "variance": 2.8,
    "rankings": {
      "ff": 13,
      "espn": 7,
      "fp": 13,
      "avg": 11
    }
  },
  {
    "rank": 14,
    "name": "Ashton Jeanty",
    "team": "LV",
    "position": {
      "position": "RB",
      "rank": 6
    },
    "price": 42,
    "bye": 10,
    "vector": {
      "x": 0,
      "y": 0.01,
      "magnitude": 0.01,
      "angle": 110
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": 14,
      "espn": 12,
      "fp": 14,
      "avg": 13
    }
  },
  {
    "rank": 15,
    "name": "Jonathan Taylor",
    "team": "IND",
    "position": {
      "position": "RB",
      "rank": 7
    },
    "price": 40,
    "bye": 14,
    "vector": {
      "x": 0,
      "y": 0.03,
      "magnitude": 0.03,
      "angle": 85
    },
    "consensusStrength": 1,
    "variance": 0.8,
    "rankings": {
      "ff": 15,
      "espn": 17,
      "fp": 16,
      "avg": 16
    }
  },
  {
    "rank": 16,
    "name": "A.J. Brown",
    "team": "PHI",
    "position": {
      "position": "WR",
      "rank": 9
    },
    "price": 38,
    "bye": 5,
    "vector": {
      "x": 0,
      "y": 0.02,
      "magnitude": 0.02,
      "angle": 90
    },
    "consensusStrength": 1,
    "variance": 0.6,
    "rankings": {
      "ff": 16,
      "espn": 15,
      "fp": 15,
      "avg": 15
    }
  },
  {
    "rank": 17,
    "name": "Drake London",
    "team": "ATL",
    "position": {
      "position": "WR",
      "rank": 10
    },
    "price": 36,
    "bye": 12,
    "vector": {
      "x": 0,
      "y": 0.02,
      "magnitude": 0.02,
      "angle": 97
    },
    "consensusStrength": 1,
    "variance": 0.6,
    "rankings": {
      "ff": 17,
      "espn": 16,
      "fp": 17,
      "avg": 17
    }
  },
  {
    "rank": 18,
    "name": "De'Von Achane",
    "team": "MIA",
    "position": {
      "position": "RB",
      "rank": 8
    },
    "price": 34,
    "bye": 6,
    "vector": {
      "x": 0,
      "y": 0.02,
      "magnitude": 0.02,
      "angle": 90
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 18,
      "espn": 18,
      "fp": 18,
      "avg": 18
    }
  },
  {
    "rank": 19,
    "name": "Josh Jacobs",
    "team": "GB",
    "position": {
      "position": "RB",
      "rank": 9
    },
    "price": 32,
    "bye": 10,
    "vector": {
      "x": 0,
      "y": 0.02,
      "magnitude": 0.02,
      "angle": 90
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 19,
      "espn": 19,
      "fp": 19,
      "avg": 19
    }
  },
  {
    "rank": 20,
    "name": "Brock Bowers",
    "team": "LV",
    "position": {
      "position": "TE",
      "rank": 1
    },
    "price": 30,
    "bye": 10,
    "vector": {
      "x": 0,
      "y": 0.03,
      "magnitude": 0.03,
      "angle": 90
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 20,
      "espn": 20,
      "fp": 20,
      "avg": 20
    }
  },
  {
    "rank": 21,
    "name": "George Kittle",
    "team": "SF",
    "position": {
      "position": "TE",
      "rank": 2
    },
    "price": 33,
    "bye": 9,
    "vector": {
      "x": 0.04,
      "y": 0.07,
      "magnitude": 0.09,
      "angle": 58
    },
    "consensusStrength": 0.75,
    "variance": 9,
    "rankings": {
      "ff": 21,
      "espn": 40,
      "fp": 21,
      "avg": 27
    }
  },
  {
    "rank": 22,
    "name": "Ladd McConkey",
    "team": "LAC",
    "position": {
      "position": "WR",
      "rank": 11
    },
    "price": 31,
    "bye": 5,
    "vector": {
      "x": 0.01,
      "y": 0.04,
      "magnitude": 0.04,
      "angle": 74
    },
    "consensusStrength": 1,
    "variance": 2.4,
    "rankings": {
      "ff": 22,
      "espn": 27,
      "fp": 22,
      "avg": 24
    }
  },
  {
    "rank": 23,
    "name": "Bucky Irving",
    "team": "TB",
    "position": {
      "position": "RB",
      "rank": 10
    },
    "price": 29,
    "bye": 11,
    "vector": {
      "x": 0,
      "y": 0.03,
      "magnitude": 0.03,
      "angle": 90
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 23,
      "espn": 23,
      "fp": 23,
      "avg": 23
    }
  },
  {
    "rank": 24,
    "name": "Kyren Williams",
    "team": "LAR",
    "position": {
      "position": "RB",
      "rank": 11
    },
    "price": 27,
    "bye": 6,
    "vector": {
      "x": 0,
      "y": 0.03,
      "magnitude": 0.03,
      "angle": 100
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": 24,
      "espn": 22,
      "fp": 24,
      "avg": 23
    }
  },
  {
    "rank": 25,
    "name": "Josh Allen",
    "team": "BUF",
    "position": {
      "position": "QB",
      "rank": 1
    },
    "price": 25,
    "bye": 12,
    "vector": {
      "x": 0.01,
      "y": 0.04,
      "magnitude": 0.04,
      "angle": 80
    },
    "consensusStrength": 1,
    "variance": 1.4,
    "rankings": {
      "ff": 25,
      "espn": 28,
      "fp": 25,
      "avg": 26
    }
  },
  {
    "rank": 26,
    "name": "Lamar Jackson",
    "team": "BAL",
    "position": {
      "position": "QB",
      "rank": 2
    },
    "price": 23,
    "bye": 14,
    "vector": {
      "x": 0.01,
      "y": 0.04,
      "magnitude": 0.04,
      "angle": 80
    },
    "consensusStrength": 1,
    "variance": 1.4,
    "rankings": {
      "ff": 26,
      "espn": 29,
      "fp": 26,
      "avg": 27
    }
  },
  {
    "rank": 27,
    "name": "Tee Higgins",
    "team": "CIN",
    "position": {
      "position": "WR",
      "rank": 12
    },
    "price": 21,
    "bye": 12,
    "vector": {
      "x": -0.01,
      "y": 0.03,
      "magnitude": 0.03,
      "angle": 104
    },
    "consensusStrength": 1,
    "variance": 1.4,
    "rankings": {
      "ff": 27,
      "espn": 24,
      "fp": 27,
      "avg": 26
    }
  },
  {
    "rank": 28,
    "name": "Chase Brown",
    "team": "CIN",
    "position": {
      "position": "RB",
      "rank": 12
    },
    "price": 20,
    "bye": 12,
    "vector": {
      "x": 0.01,
      "y": 0.05,
      "magnitude": 0.05,
      "angle": 79
    },
    "consensusStrength": 1,
    "variance": 1.9,
    "rankings": {
      "ff": 28,
      "espn": 32,
      "fp": 28,
      "avg": 29
    }
  },
  {
    "rank": 29,
    "name": "Mike Evans",
    "team": "TB",
    "position": {
      "position": "WR",
      "rank": 13
    },
    "price": 20,
    "bye": 11,
    "vector": {
      "x": 0.01,
      "y": 0.05,
      "magnitude": 0.05,
      "angle": 75
    },
    "consensusStrength": 1,
    "variance": 2.8,
    "rankings": {
      "ff": 29,
      "espn": 35,
      "fp": 29,
      "avg": 31
    }
  },
  {
    "rank": 30,
    "name": "Tyreek Hill",
    "team": "MIA",
    "position": {
      "position": "WR",
      "rank": 14
    },
    "price": 20,
    "bye": 6,
    "vector": {
      "x": -0.01,
      "y": 0.03,
      "magnitude": 0.03,
      "angle": 113
    },
    "consensusStrength": 1,
    "variance": 2.4,
    "rankings": {
      "ff": 30,
      "espn": 25,
      "fp": 30,
      "avg": 28
    }
  },
  {
    "rank": 31,
    "name": "Trey McBride",
    "team": "ARI",
    "position": {
      "position": "TE",
      "rank": 3
    },
    "price": 25,
    "bye": 11,
    "vector": {
      "x": -0.02,
      "y": 0.02,
      "magnitude": 0.03,
      "angle": 143
    },
    "consensusStrength": 1,
    "variance": 4.7,
    "rankings": {
      "ff": 31,
      "espn": 21,
      "fp": 31,
      "avg": 28
    }
  },
  {
    "rank": 32,
    "name": "Jayden Daniels",
    "team": "WAS",
    "position": {
      "position": "QB",
      "rank": 3
    },
    "price": 24,
    "bye": 14,
    "vector": {
      "x": 0,
      "y": 0.04,
      "magnitude": 0.04,
      "angle": 97
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": 32,
      "espn": 30,
      "fp": 32,
      "avg": 31
    }
  },
  {
    "rank": 33,
    "name": "Jaxon Smith-Njigba",
    "team": "SEA",
    "position": {
      "position": "WR",
      "rank": 15
    },
    "price": 24,
    "bye": 10,
    "vector": {
      "x": 0.01,
      "y": 0.05,
      "magnitude": 0.05,
      "angle": 82
    },
    "consensusStrength": 1,
    "variance": 1.4,
    "rankings": {
      "ff": 33,
      "espn": 36,
      "fp": 33,
      "avg": 34
    }
  },
  {
    "rank": 34,
    "name": "James Cook",
    "team": "BUF",
    "position": {
      "position": "RB",
      "rank": 13
    },
    "price": 23,
    "bye": 12,
    "vector": {
      "x": 0,
      "y": 0.04,
      "magnitude": 0.04,
      "angle": 93
    },
    "consensusStrength": 1,
    "variance": 0.6,
    "rankings": {
      "ff": 34,
      "espn": 33,
      "fp": 34,
      "avg": 34
    }
  },
  {
    "rank": 35,
    "name": "Davante Adams",
    "team": "LAR",
    "position": {
      "position": "WR",
      "rank": 16
    },
    "price": 23,
    "bye": 6,
    "vector": {
      "x": -0.02,
      "y": 0.03,
      "magnitude": 0.03,
      "angle": 130
    },
    "consensusStrength": 1,
    "variance": 4.2,
    "rankings": {
      "ff": 35,
      "espn": 26,
      "fp": 35,
      "avg": 32
    }
  },
  {
    "rank": 36,
    "name": "Jalen Hurts",
    "team": "PHI",
    "position": {
      "position": "QB",
      "rank": 4
    },
    "price": 22,
    "bye": 5,
    "vector": {
      "x": -0.01,
      "y": 0.04,
      "magnitude": 0.04,
      "angle": 108
    },
    "consensusStrength": 1,
    "variance": 2.4,
    "rankings": {
      "ff": 36,
      "espn": 31,
      "fp": 36,
      "avg": 34
    }
  },
  {
    "rank": 37,
    "name": "Garrett Wilson",
    "team": "NYJ",
    "position": {
      "position": "WR",
      "rank": 17
    },
    "price": 22,
    "bye": 12,
    "vector": {
      "x": 0.03,
      "y": 0.08,
      "magnitude": 0.08,
      "angle": 71
    },
    "consensusStrength": 0.75,
    "variance": 5.2,
    "rankings": {
      "ff": 37,
      "espn": 48,
      "fp": 37,
      "avg": 41
    }
  },
  {
    "rank": 38,
    "name": "Omarion Hampton",
    "team": "LAC",
    "position": {
      "position": "RB",
      "rank": 14
    },
    "price": 21,
    "bye": 5,
    "vector": {
      "x": 0,
      "y": 0.05,
      "magnitude": 0.05,
      "angle": 93
    },
    "consensusStrength": 1,
    "variance": 0.6,
    "rankings": {
      "ff": 38,
      "espn": 37,
      "fp": 38,
      "avg": 38
    }
  },
  {
    "rank": 39,
    "name": "Marvin Harrison",
    "team": "ARI",
    "position": {
      "position": "WR",
      "rank": 18
    },
    "price": 21,
    "bye": 11,
    "vector": {
      "x": 0.02,
      "y": 0.07,
      "magnitude": 0.08,
      "angle": 77
    },
    "consensusStrength": 1,
    "variance": 3.6,
    "rankings": {
      "ff": 39,
      "espn": 47,
      "fp": 40,
      "avg": 42
    }
  },
  {
    "rank": 40,
    "name": "Kenneth Walker",
    "team": "SEA",
    "position": {
      "position": "RB",
      "rank": 15
    },
    "price": 20,
    "bye": 10,
    "vector": {
      "x": 0,
      "y": 0.05,
      "magnitude": 0.05,
      "angle": 93
    },
    "consensusStrength": 1,
    "variance": 0.8,
    "rankings": {
      "ff": 40,
      "espn": 38,
      "fp": 39,
      "avg": 39
    }
  },
  {
    "rank": 41,
    "name": "Breece Hall",
    "team": "NYJ",
    "position": {
      "position": "RB",
      "rank": 16
    },
    "price": 20,
    "bye": 12,
    "vector": {
      "x": 0.01,
      "y": 0.06,
      "magnitude": 0.07,
      "angle": 82
    },
    "consensusStrength": 1,
    "variance": 1.9,
    "rankings": {
      "ff": 41,
      "espn": 45,
      "fp": 41,
      "avg": 42
    }
  },
  {
    "rank": 42,
    "name": "Terry McLaurin",
    "team": "WAS",
    "position": {
      "position": "WR",
      "rank": 19
    },
    "price": 19,
    "bye": 14,
    "vector": {
      "x": -0.02,
      "y": 0.04,
      "magnitude": 0.04,
      "angle": 117
    },
    "consensusStrength": 1,
    "variance": 3.8,
    "rankings": {
      "ff": 42,
      "espn": 34,
      "fp": 42,
      "avg": 39
    }
  },
  {
    "rank": 43,
    "name": "DK Metcalf",
    "team": "PIT",
    "position": {
      "position": "WR",
      "rank": 20
    },
    "price": 19,
    "bye": 9,
    "vector": {
      "x": 0.01,
      "y": 0.07,
      "magnitude": 0.07,
      "angle": 79
    },
    "consensusStrength": 1,
    "variance": 2.8,
    "rankings": {
      "ff": 43,
      "espn": 49,
      "fp": 43,
      "avg": 45
    }
  },
  {
    "rank": 44,
    "name": "Chuba Hubbard",
    "team": "CAR",
    "position": {
      "position": "RB",
      "rank": 17
    },
    "price": 18,
    "bye": 11,
    "vector": {
      "x": -0.01,
      "y": 0.05,
      "magnitude": 0.05,
      "angle": 98
    },
    "consensusStrength": 1,
    "variance": 1.4,
    "rankings": {
      "ff": 44,
      "espn": 41,
      "fp": 44,
      "avg": 43
    }
  },
  {
    "rank": 45,
    "name": "Joe Burrow",
    "team": "CIN",
    "position": {
      "position": "QB",
      "rank": 5
    },
    "price": 18,
    "bye": 12,
    "vector": {
      "x": -0.01,
      "y": 0.05,
      "magnitude": 0.05,
      "angle": 107
    },
    "consensusStrength": 1,
    "variance": 2.8,
    "rankings": {
      "ff": 45,
      "espn": 39,
      "fp": 45,
      "avg": 43
    }
  },
  {
    "rank": 46,
    "name": "James Conner",
    "team": "ARI",
    "position": {
      "position": "RB",
      "rank": 18
    },
    "price": 17,
    "bye": 11,
    "vector": {
      "x": -0.01,
      "y": 0.06,
      "magnitude": 0.06,
      "angle": 99
    },
    "consensusStrength": 1,
    "variance": 1.7,
    "rankings": {
      "ff": 46,
      "espn": 43,
      "fp": 47,
      "avg": 45
    }
  },
  {
    "rank": 47,
    "name": "Jameson Williams",
    "team": "DET",
    "position": {
      "position": "WR",
      "rank": 21
    },
    "price": 17,
    "bye": 5,
    "vector": {
      "x": 0.6,
      "y": 0.66,
      "magnitude": 0.89,
      "angle": 48
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 47,
      "espn": null,
      "fp": 46,
      "avg": 47
    }
  },
  {
    "rank": 48,
    "name": "Alvin Kamara",
    "team": "NO",
    "position": {
      "position": "RB",
      "rank": 19
    },
    "price": 16,
    "bye": 12,
    "vector": {
      "x": -0.01,
      "y": 0.05,
      "magnitude": 0.05,
      "angle": 106
    },
    "consensusStrength": 1,
    "variance": 2.8,
    "rankings": {
      "ff": 48,
      "espn": 42,
      "fp": 48,
      "avg": 46
    }
  },
  {
    "rank": 49,
    "name": "DJ Moore",
    "team": "CHI",
    "position": {
      "position": "WR",
      "rank": 22
    },
    "price": 16,
    "bye": 7,
    "vector": {
      "x": 0.59,
      "y": 0.66,
      "magnitude": 0.89,
      "angle": 48
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 49,
      "espn": null,
      "fp": 49,
      "avg": 49
    }
  },
  {
    "rank": 50,
    "name": "Courtland Sutton",
    "team": "DEN",
    "position": {
      "position": "WR",
      "rank": 23
    },
    "price": 15,
    "bye": 14,
    "vector": {
      "x": 0.59,
      "y": 0.66,
      "magnitude": 0.89,
      "angle": 48
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 50,
      "espn": null,
      "fp": 50,
      "avg": 50
    }
  },
  {
    "rank": 51,
    "name": "TreVeyon Henderson",
    "team": "NE",
    "position": {
      "position": "RB",
      "rank": 20
    },
    "price": 15,
    "bye": 14,
    "vector": {
      "x": -0.02,
      "y": 0.05,
      "magnitude": 0.06,
      "angle": 107
    },
    "consensusStrength": 1,
    "variance": 3.3,
    "rankings": {
      "ff": 51,
      "espn": 44,
      "fp": 51,
      "avg": 49
    }
  },
  {
    "rank": 52,
    "name": "Xavier Worthy",
    "team": "KC",
    "position": {
      "position": "WR",
      "rank": 24
    },
    "price": 15,
    "bye": 6,
    "vector": {
      "x": -0.01,
      "y": 0.06,
      "magnitude": 0.06,
      "angle": 104
    },
    "consensusStrength": 1,
    "variance": 2.8,
    "rankings": {
      "ff": 52,
      "espn": 46,
      "fp": 52,
      "avg": 50
    }
  },
  {
    "rank": 53,
    "name": "Zay Flowers",
    "team": "BAL",
    "position": {
      "position": "WR",
      "rank": 25
    },
    "price": 14,
    "bye": 14,
    "vector": {
      "x": -0.01,
      "y": 0.06,
      "magnitude": 0.07,
      "angle": 96
    },
    "consensusStrength": 1,
    "variance": 1.4,
    "rankings": {
      "ff": 53,
      "espn": 50,
      "fp": 53,
      "avg": 52
    }
  },
  {
    "rank": 54,
    "name": "David Montgomery",
    "team": "DET",
    "position": {
      "position": "RB",
      "rank": 21
    },
    "price": 14,
    "bye": 5,
    "vector": {
      "x": 0.03,
      "y": 0.1,
      "magnitude": 0.11,
      "angle": 74
    },
    "consensusStrength": 0.75,
    "variance": 6.1,
    "rankings": {
      "ff": 54,
      "espn": 67,
      "fp": 54,
      "avg": 58
    }
  },
  {
    "rank": 55,
    "name": "DeVonta Smith",
    "team": "PHI",
    "position": {
      "position": "WR",
      "rank": 26
    },
    "price": 14,
    "bye": 5,
    "vector": {
      "x": 0.58,
      "y": 0.65,
      "magnitude": 0.87,
      "angle": 48
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 55,
      "espn": null,
      "fp": 55,
      "avg": 55
    }
  },
  {
    "rank": 56,
    "name": "George Pickens",
    "team": "DAL",
    "position": {
      "position": "WR",
      "rank": 27
    },
    "price": 13,
    "bye": 7,
    "vector": {
      "x": 0.58,
      "y": 0.65,
      "magnitude": 0.87,
      "angle": 49
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 56,
      "espn": null,
      "fp": 56,
      "avg": 56
    }
  },
  {
    "rank": 57,
    "name": "Calvin Ridley",
    "team": "TEN",
    "position": {
      "position": "WR",
      "rank": 28
    },
    "price": 13,
    "bye": 5,
    "vector": {
      "x": -0.01,
      "y": 0.06,
      "magnitude": 0.06,
      "angle": 103
    },
    "consensusStrength": 1,
    "variance": 2.8,
    "rankings": {
      "ff": 57,
      "espn": 51,
      "fp": 57,
      "avg": 55
    }
  },
  {
    "rank": 58,
    "name": "Tetairoa McMillan",
    "team": "CAR",
    "position": {
      "position": "WR",
      "rank": 29
    },
    "price": 13,
    "bye": 11,
    "vector": {
      "x": 0.57,
      "y": 0.65,
      "magnitude": 0.87,
      "angle": 49
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 58,
      "espn": null,
      "fp": 59,
      "avg": 59
    }
  },
  {
    "rank": 59,
    "name": "D'Andre Swift",
    "team": "CHI",
    "position": {
      "position": "RB",
      "rank": 22
    },
    "price": 12,
    "bye": 7,
    "vector": {
      "x": -0.01,
      "y": 0.06,
      "magnitude": 0.06,
      "angle": 103
    },
    "consensusStrength": 1,
    "variance": 3.1,
    "rankings": {
      "ff": 59,
      "espn": 52,
      "fp": 58,
      "avg": 56
    }
  },
  {
    "rank": 60,
    "name": "Sam LaPorta",
    "team": "DET",
    "position": {
      "position": "TE",
      "rank": 4
    },
    "price": 12,
    "bye": 5,
    "vector": {
      "x": 0.57,
      "y": 0.65,
      "magnitude": 0.86,
      "angle": 49
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 60,
      "espn": null,
      "fp": 60,
      "avg": 60
    }
  },
  {
    "rank": 61,
    "name": "RJ Harvey",
    "team": "DEN",
    "position": {
      "position": "RB",
      "rank": 23
    },
    "price": 12,
    "bye": 14,
    "vector": {
      "x": 0.03,
      "y": 0.11,
      "magnitude": 0.11,
      "angle": 77
    },
    "consensusStrength": 0.75,
    "variance": 5.2,
    "rankings": {
      "ff": 61,
      "espn": 72,
      "fp": 61,
      "avg": 65
    }
  },
  {
    "rank": 62,
    "name": "Patrick Mahomes",
    "team": "KC",
    "position": {
      "position": "QB",
      "rank": 6
    },
    "price": 11,
    "bye": 6,
    "vector": {
      "x": -0.56,
      "y": 0.65,
      "magnitude": 0.86,
      "angle": 131
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 62,
      "espn": 62,
      "fp": null,
      "avg": 62
    }
  },
  {
    "rank": 63,
    "name": "Tony Pollard",
    "team": "TEN",
    "position": {
      "position": "RB",
      "rank": 24
    },
    "price": 11,
    "bye": 5,
    "vector": {
      "x": 0.01,
      "y": 0.1,
      "magnitude": 0.1,
      "angle": 82
    },
    "consensusStrength": 1,
    "variance": 2.6,
    "rankings": {
      "ff": 63,
      "espn": 68,
      "fp": 62,
      "avg": 64
    }
  },
  {
    "rank": 64,
    "name": "Isiah Pacheco",
    "team": "KC",
    "position": {
      "position": "RB",
      "rank": 25
    },
    "price": 11,
    "bye": 6,
    "vector": {
      "x": 0.01,
      "y": 0.1,
      "magnitude": 0.1,
      "angle": 82
    },
    "consensusStrength": 1,
    "variance": 2.8,
    "rankings": {
      "ff": 64,
      "espn": 70,
      "fp": 64,
      "avg": 66
    }
  },
  {
    "rank": 65,
    "name": "Jaylen Waddle",
    "team": "MIA",
    "position": {
      "position": "WR",
      "rank": 30
    },
    "price": 10,
    "bye": 6,
    "vector": {
      "x": 0.56,
      "y": 0.64,
      "magnitude": 0.85,
      "angle": 49
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 65,
      "espn": null,
      "fp": 65,
      "avg": 65
    }
  },
  {
    "rank": 66,
    "name": "Mark Andrews",
    "team": "BAL",
    "position": {
      "position": "TE",
      "rank": 5
    },
    "price": 10,
    "bye": 14,
    "vector": {
      "x": 0.04,
      "y": 0.13,
      "magnitude": 0.14,
      "angle": 73
    },
    "consensusStrength": 0.75,
    "variance": 8,
    "rankings": {
      "ff": 66,
      "espn": 83,
      "fp": 66,
      "avg": 72
    }
  },
  {
    "rank": 67,
    "name": "Aaron Jones",
    "team": "MIN",
    "position": {
      "position": "RB",
      "rank": 26
    },
    "price": 10,
    "bye": 6,
    "vector": {
      "x": 0.01,
      "y": 0.1,
      "magnitude": 0.1,
      "angle": 85
    },
    "consensusStrength": 1,
    "variance": 1.9,
    "rankings": {
      "ff": 67,
      "espn": 71,
      "fp": 67,
      "avg": 68
    }
  },
  {
    "rank": 68,
    "name": "Kaleb Johnson",
    "team": "PIT",
    "position": {
      "position": "RB",
      "rank": 27
    },
    "price": 9,
    "bye": 9,
    "vector": {
      "x": 0.03,
      "y": 0.12,
      "magnitude": 0.12,
      "angle": 77
    },
    "consensusStrength": 0.75,
    "variance": 5.7,
    "rankings": {
      "ff": 68,
      "espn": 80,
      "fp": 68,
      "avg": 72
    }
  },
  {
    "rank": 69,
    "name": "Rashee Rice",
    "team": "KC",
    "position": {
      "position": "WR",
      "rank": 31
    },
    "price": 9,
    "bye": 6,
    "vector": {
      "x": 0.55,
      "y": 0.64,
      "magnitude": 0.84,
      "angle": 50
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 69,
      "espn": null,
      "fp": 69,
      "avg": 69
    }
  },
  {
    "rank": 70,
    "name": "Baker Mayfield",
    "team": "TB",
    "position": {
      "position": "QB",
      "rank": 7
    },
    "price": 9,
    "bye": 11,
    "vector": {
      "x": -0.02,
      "y": 0.08,
      "magnitude": 0.08,
      "angle": 102
    },
    "consensusStrength": 1,
    "variance": 3.3,
    "rankings": {
      "ff": 70,
      "espn": 63,
      "fp": 70,
      "avg": 68
    }
  },
  {
    "rank": 71,
    "name": "Brian Robinson",
    "team": "WAS",
    "position": {
      "position": "RB",
      "rank": 28
    },
    "price": 8,
    "bye": 14,
    "vector": {
      "x": 0.04,
      "y": 0.14,
      "magnitude": 0.15,
      "angle": 72
    },
    "consensusStrength": 0.75,
    "variance": 9,
    "rankings": {
      "ff": 71,
      "espn": 90,
      "fp": 71,
      "avg": 77
    }
  },
  {
    "rank": 72,
    "name": "Travis Hunter",
    "team": "JAX",
    "position": {
      "position": "WR",
      "rank": 32
    },
    "price": 8,
    "bye": 12,
    "vector": {
      "x": 0.54,
      "y": 0.64,
      "magnitude": 0.83,
      "angle": 50
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 72,
      "espn": null,
      "fp": 72,
      "avg": 72
    }
  },
  {
    "rank": 73,
    "name": "Bo Nix",
    "team": "DEN",
    "position": {
      "position": "QB",
      "rank": 8
    },
    "price": 8,
    "bye": 14,
    "vector": {
      "x": 0.03,
      "y": 0.13,
      "magnitude": 0.14,
      "angle": 76
    },
    "consensusStrength": 0.75,
    "variance": 6.6,
    "rankings": {
      "ff": 73,
      "espn": 87,
      "fp": 73,
      "avg": 78
    }
  },
  {
    "rank": 74,
    "name": "T.J. Hockenson",
    "team": "MIN",
    "position": {
      "position": "TE",
      "rank": 6
    },
    "price": 7,
    "bye": 6,
    "vector": {
      "x": 0.53,
      "y": 0.64,
      "magnitude": 0.83,
      "angle": 50
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 74,
      "espn": null,
      "fp": 74,
      "avg": 74
    }
  },
  {
    "rank": 75,
    "name": "Joe Mixon",
    "team": "HOU",
    "position": {
      "position": "RB",
      "rank": 29
    },
    "price": 7,
    "bye": 14,
    "vector": {
      "x": 0.01,
      "y": 0.12,
      "magnitude": 0.12,
      "angle": 83
    },
    "consensusStrength": 1,
    "variance": 3.1,
    "rankings": {
      "ff": 75,
      "espn": 82,
      "fp": 76,
      "avg": 78
    }
  },
  {
    "rank": 76,
    "name": "Tyrone Tracy",
    "team": "NYG",
    "position": {
      "position": "RB",
      "rank": 30
    },
    "price": 8,
    "bye": 11,
    "vector": {
      "x": 0.01,
      "y": 0.11,
      "magnitude": 0.11,
      "angle": 83
    },
    "consensusStrength": 1,
    "variance": 2.6,
    "rankings": {
      "ff": 76,
      "espn": 81,
      "fp": 75,
      "avg": 77
    }
  },
  {
    "rank": 77,
    "name": "Kyler Murray",
    "team": "ARI",
    "position": {
      "position": "QB",
      "rank": 9
    },
    "price": 8,
    "bye": 11,
    "vector": {
      "x": 0.03,
      "y": 0.13,
      "magnitude": 0.13,
      "angle": 79
    },
    "consensusStrength": 0.75,
    "variance": 5.2,
    "rankings": {
      "ff": 77,
      "espn": 88,
      "fp": 77,
      "avg": 81
    }
  },
  {
    "rank": 78,
    "name": "Rome Odunze",
    "team": "CHI",
    "position": {
      "position": "WR",
      "rank": 33
    },
    "price": 8,
    "bye": 7,
    "vector": {
      "x": 0.52,
      "y": 0.63,
      "magnitude": 0.82,
      "angle": 50
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 78,
      "espn": null,
      "fp": 78,
      "avg": 78
    }
  },
  {
    "rank": 79,
    "name": "Chris Olave",
    "team": "NO",
    "position": {
      "position": "WR",
      "rank": 34
    },
    "price": 8,
    "bye": 12,
    "vector": {
      "x": 0.52,
      "y": 0.63,
      "magnitude": 0.82,
      "angle": 50
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 79,
      "espn": null,
      "fp": 79,
      "avg": 79
    }
  },
  {
    "rank": 80,
    "name": "Jerry Jeudy",
    "team": "CLE",
    "position": {
      "position": "WR",
      "rank": 35
    },
    "price": 7,
    "bye": 10,
    "vector": {
      "x": 0.52,
      "y": 0.63,
      "magnitude": 0.82,
      "angle": 50
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 80,
      "espn": null,
      "fp": 80,
      "avg": 80
    }
  },
  {
    "rank": 81,
    "name": "Jordan Addison",
    "team": "MIN",
    "position": {
      "position": "WR",
      "rank": 36
    },
    "price": 7,
    "bye": 6,
    "vector": {
      "x": 0.52,
      "y": 0.63,
      "magnitude": 0.81,
      "angle": 51
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 81,
      "espn": null,
      "fp": 82,
      "avg": 82
    }
  },
  {
    "rank": 82,
    "name": "Dak Prescott",
    "team": "DAL",
    "position": {
      "position": "QB",
      "rank": 10
    },
    "price": 7,
    "bye": 7,
    "vector": {
      "x": 0.06,
      "y": 0.16,
      "magnitude": 0.17,
      "angle": 71
    },
    "consensusStrength": 0.75,
    "variance": 11.1,
    "rankings": {
      "ff": 82,
      "espn": 105,
      "fp": 81,
      "avg": 89
    }
  },
  {
    "rank": 83,
    "name": "Travis Kelce",
    "team": "KC",
    "position": {
      "position": "TE",
      "rank": 7
    },
    "price": 7,
    "bye": 6,
    "vector": {
      "x": 0,
      "y": 0.12,
      "magnitude": 0.12,
      "angle": 90
    },
    "consensusStrength": 1,
    "variance": 0.6,
    "rankings": {
      "ff": 83,
      "espn": 84,
      "fp": 84,
      "avg": 84
    }
  },
  {
    "rank": 84,
    "name": "Ricky Pearsall",
    "team": "SF",
    "position": {
      "position": "WR",
      "rank": 37
    },
    "price": 7,
    "bye": 9,
    "vector": {
      "x": 0.04,
      "y": 0.15,
      "magnitude": 0.15,
      "angle": 76
    },
    "consensusStrength": 0.75,
    "variance": 7.3,
    "rankings": {
      "ff": 84,
      "espn": 99,
      "fp": 83,
      "avg": 89
    }
  },
  {
    "rank": 85,
    "name": "Jordan Mason",
    "team": "MIN",
    "position": {
      "position": "RB",
      "rank": 31
    },
    "price": 6,
    "bye": 6,
    "vector": {
      "x": 0.08,
      "y": 0.19,
      "magnitude": 0.21,
      "angle": 68
    },
    "consensusStrength": 0.5,
    "variance": 15.1,
    "rankings": {
      "ff": 85,
      "espn": 117,
      "fp": 85,
      "avg": 96
    }
  },
  {
    "rank": 86,
    "name": "Justin Fields",
    "team": "NYJ",
    "position": {
      "position": "QB",
      "rank": 11
    },
    "price": 6,
    "bye": 12,
    "vector": {
      "x": 0.05,
      "y": 0.16,
      "magnitude": 0.17,
      "angle": 74
    },
    "consensusStrength": 0.75,
    "variance": 9.4,
    "rankings": {
      "ff": 86,
      "espn": 106,
      "fp": 86,
      "avg": 93
    }
  },
  {
    "rank": 87,
    "name": "Deebo Samuel",
    "team": "WAS",
    "position": {
      "position": "WR",
      "rank": 38
    },
    "price": 6,
    "bye": 14,
    "vector": {
      "x": 0,
      "y": 1.13,
      "magnitude": 1.13,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 87,
      "espn": null,
      "fp": null,
      "avg": 87
    }
  },
  {
    "rank": 88,
    "name": "Jaylen Warren",
    "team": "PIT",
    "position": {
      "position": "RB",
      "rank": 32
    },
    "price": 6,
    "bye": 9,
    "vector": {
      "x": 0.01,
      "y": 0.13,
      "magnitude": 0.13,
      "angle": 87
    },
    "consensusStrength": 1,
    "variance": 1.4,
    "rankings": {
      "ff": 88,
      "espn": 91,
      "fp": 88,
      "avg": 89
    }
  },
  {
    "rank": 89,
    "name": "Brock Purdy",
    "team": "SF",
    "position": {
      "position": "QB",
      "rank": 12
    },
    "price": 6,
    "bye": 9,
    "vector": {
      "x": 0,
      "y": 0.12,
      "magnitude": 0.12,
      "angle": 90
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 89,
      "espn": 89,
      "fp": 89,
      "avg": 89
    }
  },
  {
    "rank": 90,
    "name": "Tucker Kraft",
    "team": "GB",
    "position": {
      "position": "TE",
      "rank": 8
    },
    "price": 5,
    "bye": 10,
    "vector": {
      "x": -0.01,
      "y": 0.11,
      "magnitude": 0.11,
      "angle": 95
    },
    "consensusStrength": 1,
    "variance": 1.9,
    "rankings": {
      "ff": 90,
      "espn": 86,
      "fp": 90,
      "avg": 89
    }
  },
  {
    "rank": 91,
    "name": "Jauan Jennings",
    "team": "SF",
    "position": {
      "position": "WR",
      "rank": 39
    },
    "price": 5,
    "bye": 9,
    "vector": {
      "x": 0.01,
      "y": 0.14,
      "magnitude": 0.14,
      "angle": 84
    },
    "consensusStrength": 1,
    "variance": 3.1,
    "rankings": {
      "ff": 91,
      "espn": 98,
      "fp": 92,
      "avg": 94
    }
  },
  {
    "rank": 92,
    "name": "Jayden Reed",
    "team": "GB",
    "position": {
      "position": "WR",
      "rank": 40
    },
    "price": 5,
    "bye": 10,
    "vector": {
      "x": 0.02,
      "y": 0.14,
      "magnitude": 0.15,
      "angle": 81
    },
    "consensusStrength": 1,
    "variance": 4.5,
    "rankings": {
      "ff": 92,
      "espn": 101,
      "fp": 91,
      "avg": 95
    }
  },
  {
    "rank": 93,
    "name": "Travis Etienne",
    "team": "JAX",
    "position": {
      "position": "RB",
      "rank": 33
    },
    "price": 5,
    "bye": 12,
    "vector": {
      "x": 0.06,
      "y": 0.19,
      "magnitude": 0.2,
      "angle": 72
    },
    "consensusStrength": 0.75,
    "variance": 12.3,
    "rankings": {
      "ff": 93,
      "espn": 119,
      "fp": 93,
      "avg": 102
    }
  },
  {
    "rank": 94,
    "name": "David Njoku",
    "team": "CLE",
    "position": {
      "position": "TE",
      "rank": 9
    },
    "price": 5,
    "bye": 10,
    "vector": {
      "x": -0.02,
      "y": 0.11,
      "magnitude": 0.11,
      "angle": 101
    },
    "consensusStrength": 1,
    "variance": 4.2,
    "rankings": {
      "ff": 94,
      "espn": 85,
      "fp": 94,
      "avg": 91
    }
  },
  {
    "rank": 95,
    "name": "Justin Herbert",
    "team": "LAC",
    "position": {
      "position": "QB",
      "rank": 13
    },
    "price": 4,
    "bye": 5,
    "vector": {
      "x": 0.02,
      "y": 0.15,
      "magnitude": 0.15,
      "angle": 83
    },
    "consensusStrength": 1,
    "variance": 3.8,
    "rankings": {
      "ff": 95,
      "espn": 103,
      "fp": 95,
      "avg": 98
    }
  },
  {
    "rank": 96,
    "name": "Jakobi Meyers",
    "team": "LV",
    "position": {
      "position": "WR",
      "rank": 41
    },
    "price": 4,
    "bye": 10,
    "vector": {
      "x": 0.48,
      "y": 0.61,
      "magnitude": 0.78,
      "angle": 52
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 96,
      "espn": null,
      "fp": 96,
      "avg": 96
    }
  },
  {
    "rank": 97,
    "name": "Caleb Williams",
    "team": "CHI",
    "position": {
      "position": "QB",
      "rank": 14
    },
    "price": 4,
    "bye": 7,
    "vector": {
      "x": 0.02,
      "y": 0.15,
      "magnitude": 0.15,
      "angle": 84
    },
    "consensusStrength": 1,
    "variance": 3.3,
    "rankings": {
      "ff": 97,
      "espn": 104,
      "fp": 97,
      "avg": 99
    }
  },
  {
    "rank": 98,
    "name": "Jared Goff",
    "team": "DET",
    "position": {
      "position": "QB",
      "rank": 15
    },
    "price": 4,
    "bye": 5,
    "vector": {
      "x": 0.06,
      "y": 0.19,
      "magnitude": 0.2,
      "angle": 73
    },
    "consensusStrength": 0.75,
    "variance": 11.8,
    "rankings": {
      "ff": 98,
      "espn": 123,
      "fp": 98,
      "avg": 106
    }
  },
  {
    "rank": 99,
    "name": "Tank Bigsby",
    "team": "JAX",
    "position": {
      "position": "RB",
      "rank": 34
    },
    "price": 4,
    "bye": 12,
    "vector": {
      "x": 0.04,
      "y": 0.18,
      "magnitude": 0.18,
      "angle": 77
    },
    "consensusStrength": 0.75,
    "variance": 8,
    "rankings": {
      "ff": 99,
      "espn": 116,
      "fp": 99,
      "avg": 105
    }
  },
  {
    "rank": 100,
    "name": "Stefon Diggs",
    "team": "NE",
    "position": {
      "position": "WR",
      "rank": 42
    },
    "price": 3,
    "bye": 14,
    "vector": {
      "x": -0.01,
      "y": 0.13,
      "magnitude": 0.13,
      "angle": 94
    },
    "consensusStrength": 1,
    "variance": 1.9,
    "rankings": {
      "ff": 100,
      "espn": 96,
      "fp": 100,
      "avg": 99
    }
  },
  {
    "rank": 101,
    "name": "Evan Engram",
    "team": "DEN",
    "position": {
      "position": "TE",
      "rank": 10
    },
    "price": 3,
    "bye": 14,
    "vector": {
      "x": 0.47,
      "y": 0.61,
      "magnitude": 0.77,
      "angle": 52
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 101,
      "espn": null,
      "fp": 101,
      "avg": 101
    }
  },
  {
    "rank": 102,
    "name": "Rhamondre Stevenson",
    "team": "NE",
    "position": {
      "position": "RB",
      "rank": 35
    },
    "price": 3,
    "bye": 14,
    "vector": {
      "x": -0.02,
      "y": 0.12,
      "magnitude": 0.12,
      "angle": 99
    },
    "consensusStrength": 1,
    "variance": 3.8,
    "rankings": {
      "ff": 102,
      "espn": 94,
      "fp": 102,
      "avg": 99
    }
  },
  {
    "rank": 103,
    "name": "Drake Maye",
    "team": "NE",
    "position": {
      "position": "QB",
      "rank": 16
    },
    "price": 3,
    "bye": 14,
    "vector": {
      "x": 0.04,
      "y": 0.18,
      "magnitude": 0.19,
      "angle": 77
    },
    "consensusStrength": 0.75,
    "variance": 8.5,
    "rankings": {
      "ff": 103,
      "espn": 121,
      "fp": 103,
      "avg": 109
    }
  },
  {
    "rank": 104,
    "name": "Chris Godwin",
    "team": "TB",
    "position": {
      "position": "WR",
      "rank": 43
    },
    "price": 3,
    "bye": 11,
    "vector": {
      "x": 0.46,
      "y": 0.61,
      "magnitude": 0.76,
      "angle": 53
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": 104,
      "espn": null,
      "fp": 106,
      "avg": 105
    }
  },
  {
    "rank": 105,
    "name": "J.K. Dobbins",
    "team": "DEN",
    "position": {
      "position": "RB",
      "rank": 36
    },
    "price": 3,
    "bye": 14,
    "vector": {
      "x": -0.04,
      "y": 0.12,
      "magnitude": 0.13,
      "angle": 106
    },
    "consensusStrength": 0.75,
    "variance": 6.5,
    "rankings": {
      "ff": 105,
      "espn": 93,
      "fp": 108,
      "avg": 102
    }
  },
  {
    "rank": 106,
    "name": "Tyler Warren",
    "team": "IND",
    "position": {
      "position": "TE",
      "rank": 11
    },
    "price": 3,
    "bye": 14,
    "vector": {
      "x": 0.46,
      "y": 0.6,
      "magnitude": 0.76,
      "angle": 52
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": 106,
      "espn": null,
      "fp": 104,
      "avg": 105
    }
  },
  {
    "rank": 107,
    "name": "Zach Charbonnet",
    "team": "SEA",
    "position": {
      "position": "RB",
      "rank": 37
    },
    "price": 3,
    "bye": 10,
    "vector": {
      "x": 0.06,
      "y": 0.2,
      "magnitude": 0.21,
      "angle": 74
    },
    "consensusStrength": 0.75,
    "variance": 11.3,
    "rankings": {
      "ff": 107,
      "espn": 131,
      "fp": 107,
      "avg": 115
    }
  },
  {
    "rank": 108,
    "name": "Javonte Williams",
    "team": "DAL",
    "position": {
      "position": "RB",
      "rank": 38
    },
    "price": 3,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": 0.11,
      "magnitude": 0.11,
      "angle": 102
    },
    "consensusStrength": 0.75,
    "variance": 5.6,
    "rankings": {
      "ff": 108,
      "espn": 95,
      "fp": 105,
      "avg": 103
    }
  },
  {
    "rank": 109,
    "name": "Emeka Egbuka",
    "team": "TB",
    "position": {
      "position": "WR",
      "rank": 44
    },
    "price": 3,
    "bye": 11,
    "vector": {
      "x": 0.45,
      "y": 0.6,
      "magnitude": 0.75,
      "angle": 53
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 109,
      "espn": null,
      "fp": 109,
      "avg": 109
    }
  },
  {
    "rank": 110,
    "name": "Khalil Shakir",
    "team": "BUF",
    "position": {
      "position": "WR",
      "rank": 45
    },
    "price": 3,
    "bye": 12,
    "vector": {
      "x": -0.02,
      "y": 0.13,
      "magnitude": 0.13,
      "angle": 101
    },
    "consensusStrength": 1,
    "variance": 4.7,
    "rankings": {
      "ff": 110,
      "espn": 100,
      "fp": 110,
      "avg": 107
    }
  },
  {
    "rank": 111,
    "name": "Jordan Love",
    "team": "GB",
    "position": {
      "position": "QB",
      "rank": 17
    },
    "price": 3,
    "bye": 10,
    "vector": {
      "x": 0.03,
      "y": 0.18,
      "magnitude": 0.18,
      "angle": 82
    },
    "consensusStrength": 0.75,
    "variance": 5.2,
    "rankings": {
      "ff": 111,
      "espn": 122,
      "fp": 111,
      "avg": 115
    }
  },
  {
    "rank": 112,
    "name": "Najee Harris",
    "team": "LAC",
    "position": {
      "position": "RB",
      "rank": 39
    },
    "price": 3,
    "bye": 5,
    "vector": {
      "x": 0.08,
      "y": 0.24,
      "magnitude": 0.25,
      "angle": 72
    },
    "consensusStrength": 0.5,
    "variance": 15.8,
    "rankings": {
      "ff": 112,
      "espn": 146,
      "fp": 113,
      "avg": 124
    }
  },
  {
    "rank": 113,
    "name": "Matthew Golden",
    "team": "GB",
    "position": {
      "position": "WR",
      "rank": 46
    },
    "price": 3,
    "bye": 10,
    "vector": {
      "x": 0.44,
      "y": 0.59,
      "magnitude": 0.74,
      "angle": 53
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 113,
      "espn": null,
      "fp": 112,
      "avg": 113
    }
  },
  {
    "rank": 114,
    "name": "Cam Skattebo",
    "team": "NYG",
    "position": {
      "position": "RB",
      "rank": 40
    },
    "price": 3,
    "bye": 11,
    "vector": {
      "x": 0,
      "y": 0.16,
      "magnitude": 0.16,
      "angle": 90
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 114,
      "espn": 114,
      "fp": 114,
      "avg": 114
    }
  },
  {
    "rank": 115,
    "name": "Josh Downs",
    "team": "IND",
    "position": {
      "position": "WR",
      "rank": 47
    },
    "price": 3,
    "bye": 14,
    "vector": {
      "x": -0.01,
      "y": 0.14,
      "magnitude": 0.14,
      "angle": 96
    },
    "consensusStrength": 1,
    "variance": 2.8,
    "rankings": {
      "ff": 115,
      "espn": 109,
      "fp": 115,
      "avg": 113
    }
  },
  {
    "rank": 116,
    "name": "Trevor Lawrence",
    "team": "JAX",
    "position": {
      "position": "QB",
      "rank": 18
    },
    "price": 3,
    "bye": 12,
    "vector": {
      "x": 0.19,
      "y": 0.35,
      "magnitude": 0.4,
      "angle": 61
    },
    "consensusStrength": 0.25,
    "variance": 38.7,
    "rankings": {
      "ff": 116,
      "espn": 198,
      "fp": 116,
      "avg": 143
    }
  },
  {
    "rank": 117,
    "name": "C.J. Stroud",
    "team": "HOU",
    "position": {
      "position": "QB",
      "rank": 19
    },
    "price": 3,
    "bye": 14,
    "vector": {
      "x": 0.07,
      "y": 0.23,
      "magnitude": 0.24,
      "angle": 74
    },
    "consensusStrength": 0.75,
    "variance": 13.2,
    "rankings": {
      "ff": 117,
      "espn": 145,
      "fp": 117,
      "avg": 126
    }
  },
  {
    "rank": 118,
    "name": "Quinshon Judkins",
    "team": "CLE",
    "position": {
      "position": "RB",
      "rank": 41
    },
    "price": 3,
    "bye": 10,
    "vector": {
      "x": -0.06,
      "y": 0.1,
      "magnitude": 0.12,
      "angle": 122
    },
    "consensusStrength": 0.75,
    "variance": 12.5,
    "rankings": {
      "ff": 118,
      "espn": 92,
      "fp": 119,
      "avg": 110
    }
  },
  {
    "rank": 119,
    "name": "Dalton Kincaid",
    "team": "BUF",
    "position": {
      "position": "TE",
      "rank": 12
    },
    "price": 3,
    "bye": 12,
    "vector": {
      "x": 0.43,
      "y": 0.59,
      "magnitude": 0.73,
      "angle": 54
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 119,
      "espn": null,
      "fp": 118,
      "avg": 119
    }
  },
  {
    "rank": 120,
    "name": "Cooper Kupp",
    "team": "SEA",
    "position": {
      "position": "WR",
      "rank": 48
    },
    "price": 2,
    "bye": 10,
    "vector": {
      "x": 0.43,
      "y": 0.59,
      "magnitude": 0.73,
      "angle": 54
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 120,
      "espn": null,
      "fp": 120,
      "avg": 120
    }
  },
  {
    "rank": 121,
    "name": "Dallas Goedert",
    "team": "PHI",
    "position": {
      "position": "TE",
      "rank": 13
    },
    "price": 2,
    "bye": 5,
    "vector": {
      "x": 0.42,
      "y": 0.59,
      "magnitude": 0.73,
      "angle": 54
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 121,
      "espn": null,
      "fp": 121,
      "avg": 121
    }
  },
  {
    "rank": 122,
    "name": "Darnell Mooney",
    "team": "ATL",
    "position": {
      "position": "WR",
      "rank": 49
    },
    "price": 2,
    "bye": 12,
    "vector": {
      "x": -0.04,
      "y": 0.13,
      "magnitude": 0.14,
      "angle": 105
    },
    "consensusStrength": 0.75,
    "variance": 7.1,
    "rankings": {
      "ff": 122,
      "espn": 107,
      "fp": 122,
      "avg": 117
    }
  },
  {
    "rank": 123,
    "name": "Michael Pittman",
    "team": "IND",
    "position": {
      "position": "WR",
      "rank": 50
    },
    "price": 2,
    "bye": 14,
    "vector": {
      "x": -0.05,
      "y": 0.12,
      "magnitude": 0.13,
      "angle": 113
    },
    "consensusStrength": 0.75,
    "variance": 9.9,
    "rankings": {
      "ff": 123,
      "espn": 102,
      "fp": 123,
      "avg": 116
    }
  },
  {
    "rank": 124,
    "name": "Keon Coleman",
    "team": "BUF",
    "position": {
      "position": "WR",
      "rank": 51
    },
    "price": 2,
    "bye": 12,
    "vector": {
      "x": -0.06,
      "y": 0.11,
      "magnitude": 0.12,
      "angle": 121
    },
    "consensusStrength": 0.75,
    "variance": 12.7,
    "rankings": {
      "ff": 124,
      "espn": 97,
      "fp": 124,
      "avg": 115
    }
  },
  {
    "rank": 125,
    "name": "J.J. McCarthy",
    "team": "MIN",
    "position": {
      "position": "QB",
      "rank": 20
    },
    "price": 2,
    "bye": 6,
    "vector": {
      "x": 0,
      "y": 0.17,
      "magnitude": 0.17,
      "angle": 92
    },
    "consensusStrength": 1,
    "variance": 0.8,
    "rankings": {
      "ff": 125,
      "espn": 124,
      "fp": 126,
      "avg": 125
    }
  },
  {
    "rank": 126,
    "name": "Tyjae Spears",
    "team": "TEN",
    "position": {
      "position": "RB",
      "rank": 42
    },
    "price": 2,
    "bye": 5,
    "vector": {
      "x": -0.02,
      "y": 0.15,
      "magnitude": 0.15,
      "angle": 96
    },
    "consensusStrength": 1,
    "variance": 3.6,
    "rankings": {
      "ff": 126,
      "espn": 118,
      "fp": 125,
      "avg": 123
    }
  },
  {
    "rank": 127,
    "name": "Ray Davis",
    "team": "BUF",
    "position": {
      "position": "RB",
      "rank": 43
    },
    "price": 2,
    "bye": 12,
    "vector": {
      "x": 0.05,
      "y": 0.23,
      "magnitude": 0.24,
      "angle": 77
    },
    "consensusStrength": 0.75,
    "variance": 10.8,
    "rankings": {
      "ff": 127,
      "espn": 150,
      "fp": 127,
      "avg": 135
    }
  },
  {
    "rank": 128,
    "name": "Kyle Pitts",
    "team": "ATL",
    "position": {
      "position": "TE",
      "rank": 14
    },
    "price": 2,
    "bye": 12,
    "vector": {
      "x": 0.41,
      "y": 0.58,
      "magnitude": 0.71,
      "angle": 55
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 128,
      "espn": null,
      "fp": 128,
      "avg": 128
    }
  },
  {
    "rank": 129,
    "name": "Brandon Aiyuk",
    "team": "SF",
    "position": {
      "position": "WR",
      "rank": 52
    },
    "price": 2,
    "bye": 9,
    "vector": {
      "x": 0.03,
      "y": 0.2,
      "magnitude": 0.2,
      "angle": 83
    },
    "consensusStrength": 0.75,
    "variance": 5.2,
    "rankings": {
      "ff": 129,
      "espn": 140,
      "fp": 129,
      "avg": 133
    }
  },
  {
    "rank": 130,
    "name": "Rachaad White",
    "team": "TB",
    "position": {
      "position": "RB",
      "rank": 44
    },
    "price": 2,
    "bye": 11,
    "vector": {
      "x": 0,
      "y": 0.18,
      "magnitude": 0.18,
      "angle": 91
    },
    "consensusStrength": 1,
    "variance": 0.6,
    "rankings": {
      "ff": 130,
      "espn": 130,
      "fp": 131,
      "avg": 130
    }
  },
  {
    "rank": 131,
    "name": "Colston Loveland",
    "team": "CHI",
    "position": {
      "position": "TE",
      "rank": 15
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": 0.4,
      "y": 0.58,
      "magnitude": 0.7,
      "angle": 55
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 131,
      "espn": null,
      "fp": 130,
      "avg": 131
    }
  },
  {
    "rank": 132,
    "name": "Rashid Shaheed",
    "team": "NO",
    "position": {
      "position": "WR",
      "rank": 53
    },
    "price": 2,
    "bye": 12,
    "vector": {
      "x": 0.4,
      "y": 0.58,
      "magnitude": 0.7,
      "angle": 56
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 132,
      "espn": null,
      "fp": 132,
      "avg": 132
    }
  },
  {
    "rank": 133,
    "name": "Trey Benson",
    "team": "ARI",
    "position": {
      "position": "RB",
      "rank": 45
    },
    "price": 2,
    "bye": 11,
    "vector": {
      "x": -0.03,
      "y": 0.15,
      "magnitude": 0.16,
      "angle": 101
    },
    "consensusStrength": 0.75,
    "variance": 6.1,
    "rankings": {
      "ff": 133,
      "espn": 120,
      "fp": 133,
      "avg": 129
    }
  },
  {
    "rank": 134,
    "name": "Tyler Allgeier",
    "team": "ATL",
    "position": {
      "position": "RB",
      "rank": 46
    },
    "price": 2,
    "bye": 12,
    "vector": {
      "x": 0,
      "y": 0.18,
      "magnitude": 0.18,
      "angle": 92
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": 134,
      "espn": 132,
      "fp": 134,
      "avg": 133
    }
  },
  {
    "rank": 135,
    "name": "Tua Tagovailoa",
    "team": "MIA",
    "position": {
      "position": "QB",
      "rank": 21
    },
    "price": 2,
    "bye": 6,
    "vector": {
      "x": 0.02,
      "y": 0.2,
      "magnitude": 0.21,
      "angle": 85
    },
    "consensusStrength": 1,
    "variance": 3.8,
    "rankings": {
      "ff": 135,
      "espn": 143,
      "fp": 135,
      "avg": 138
    }
  },
  {
    "rank": 136,
    "name": "Jake Ferguson",
    "team": "DAL",
    "position": {
      "position": "TE",
      "rank": 16
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": 0.01,
      "y": 0.2,
      "magnitude": 0.2,
      "angle": 86
    },
    "consensusStrength": 1,
    "variance": 2.8,
    "rankings": {
      "ff": 136,
      "espn": 142,
      "fp": 136,
      "avg": 138
    }
  },
  {
    "rank": 137,
    "name": "Isaac Guerendo",
    "team": "SF",
    "position": {
      "position": "RB",
      "rank": 47
    },
    "price": 2,
    "bye": 9,
    "vector": {
      "x": 0.03,
      "y": 0.22,
      "magnitude": 0.22,
      "angle": 83
    },
    "consensusStrength": 0.75,
    "variance": 5.4,
    "rankings": {
      "ff": 137,
      "espn": 149,
      "fp": 138,
      "avg": 141
    }
  },
  {
    "rank": 138,
    "name": "Rashod Bateman",
    "team": "BAL",
    "position": {
      "position": "WR",
      "rank": 54
    },
    "price": 2,
    "bye": 14,
    "vector": {
      "x": 0.04,
      "y": 0.23,
      "magnitude": 0.23,
      "angle": 79
    },
    "consensusStrength": 0.75,
    "variance": 8.3,
    "rankings": {
      "ff": 138,
      "espn": 155,
      "fp": 137,
      "avg": 143
    }
  },
  {
    "rank": 139,
    "name": "Braelon Allen",
    "team": "NYJ",
    "position": {
      "position": "RB",
      "rank": 48
    },
    "price": 2,
    "bye": 12,
    "vector": {
      "x": -0.01,
      "y": 0.18,
      "magnitude": 0.18,
      "angle": 94
    },
    "consensusStrength": 1,
    "variance": 2.4,
    "rankings": {
      "ff": 139,
      "espn": 134,
      "fp": 139,
      "avg": 137
    }
  },
  {
    "rank": 140,
    "name": "Jaydon Blue",
    "team": "DAL",
    "position": {
      "position": "RB",
      "rank": 49
    },
    "price": 1,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": 0.18,
      "magnitude": 0.18,
      "angle": 95
    },
    "consensusStrength": 1,
    "variance": 3.3,
    "rankings": {
      "ff": 140,
      "espn": 133,
      "fp": 140,
      "avg": 138
    }
  },
  {
    "rank": 141,
    "name": "Austin Ekeler",
    "team": "WAS",
    "position": {
      "position": "RB",
      "rank": 50
    },
    "price": 1,
    "bye": 14,
    "vector": {
      "x": -0.06,
      "y": 0.13,
      "magnitude": 0.15,
      "angle": 115
    },
    "consensusStrength": 0.75,
    "variance": 12.3,
    "rankings": {
      "ff": 141,
      "espn": 115,
      "fp": 141,
      "avg": 132
    }
  },
  {
    "rank": 142,
    "name": "Christian Kirk",
    "team": "HOU",
    "position": {
      "position": "WR",
      "rank": 55
    },
    "price": 1,
    "bye": 14,
    "vector": {
      "x": 0.03,
      "y": 0.23,
      "magnitude": 0.23,
      "angle": 83
    },
    "consensusStrength": 0.75,
    "variance": 5.4,
    "rankings": {
      "ff": 142,
      "espn": 154,
      "fp": 143,
      "avg": 146
    }
  },
  {
    "rank": 143,
    "name": "Bryce Young",
    "team": "CAR",
    "position": {
      "position": "QB",
      "rank": 22
    },
    "price": 1,
    "bye": 11,
    "vector": {
      "x": 0.18,
      "y": 0.37,
      "magnitude": 0.41,
      "angle": 64
    },
    "consensusStrength": 0.25,
    "variance": 35.6,
    "rankings": {
      "ff": 143,
      "espn": 218,
      "fp": 142,
      "avg": 168
    }
  },
  {
    "rank": 144,
    "name": "Jerome Ford",
    "team": "CLE",
    "position": {
      "position": "RB",
      "rank": 51
    },
    "price": 1,
    "bye": 10,
    "vector": {
      "x": 0.01,
      "y": 0.21,
      "magnitude": 0.21,
      "angle": 88
    },
    "consensusStrength": 1,
    "variance": 1.4,
    "rankings": {
      "ff": 144,
      "espn": 147,
      "fp": 144,
      "avg": 145
    }
  },
  {
    "rank": 145,
    "name": "Nick Chubb",
    "team": "HOU",
    "position": {
      "position": "RB",
      "rank": 52
    },
    "price": 1,
    "bye": 14,
    "vector": {
      "x": 0.04,
      "y": 0.23,
      "magnitude": 0.24,
      "angle": 81
    },
    "consensusStrength": 0.75,
    "variance": 7.1,
    "rankings": {
      "ff": 145,
      "espn": 160,
      "fp": 145,
      "avg": 150
    }
  },
  {
    "rank": 146,
    "name": "Marvin Mims",
    "team": "DEN",
    "position": {
      "position": "WR",
      "rank": 56
    },
    "price": 1,
    "bye": 14,
    "vector": {
      "x": 0.02,
      "y": 0.22,
      "magnitude": 0.22,
      "angle": 86
    },
    "consensusStrength": 1,
    "variance": 3.3,
    "rankings": {
      "ff": 146,
      "espn": 153,
      "fp": 146,
      "avg": 148
    }
  },
  {
    "rank": 147,
    "name": "Luther Burden",
    "team": "CHI",
    "position": {
      "position": "WR",
      "rank": 57
    },
    "price": 1,
    "bye": 7,
    "vector": {
      "x": 0.36,
      "y": 0.57,
      "magnitude": 0.67,
      "angle": 58
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 147,
      "espn": null,
      "fp": 148,
      "avg": 148
    }
  },
  {
    "rank": 148,
    "name": "Jonnu Smith",
    "team": "PIT",
    "position": {
      "position": "TE",
      "rank": 17
    },
    "price": 1,
    "bye": 9,
    "vector": {
      "x": 0.13,
      "y": 0.34,
      "magnitude": 0.37,
      "angle": 69
    },
    "consensusStrength": 0.5,
    "variance": 27.1,
    "rankings": {
      "ff": 148,
      "espn": 206,
      "fp": 149,
      "avg": 168
    }
  },
  {
    "rank": 149,
    "name": "Hunter Henry",
    "team": "NE",
    "position": {
      "position": "TE",
      "rank": 18
    },
    "price": 1,
    "bye": 14,
    "vector": {
      "x": -0.01,
      "y": 0.18,
      "magnitude": 0.18,
      "angle": 94
    },
    "consensusStrength": 1,
    "variance": 3.4,
    "rankings": {
      "ff": 149,
      "espn": 141,
      "fp": 147,
      "avg": 146
    }
  },
  {
    "rank": 150,
    "name": "Michael Penix",
    "team": "ATL",
    "position": {
      "position": "QB",
      "rank": 23
    },
    "price": 1,
    "bye": 12,
    "vector": {
      "x": 0.12,
      "y": 0.32,
      "magnitude": 0.35,
      "angle": 70
    },
    "consensusStrength": 0.5,
    "variance": 23.6,
    "rankings": {
      "ff": 150,
      "espn": 200,
      "fp": 150,
      "avg": 167
    }
  },
  {
    "rank": 151,
    "name": "Jaylen Wright",
    "team": "MIA",
    "position": {
      "position": "RB",
      "rank": 53
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": -0.04,
      "y": 0.17,
      "magnitude": 0.18,
      "angle": 103
    },
    "consensusStrength": 0.75,
    "variance": 7.8,
    "rankings": {
      "ff": 151,
      "espn": 135,
      "fp": 152,
      "avg": 146
    }
  },
  {
    "rank": 152,
    "name": "Rico Dowdle",
    "team": "CAR",
    "position": {
      "position": "RB",
      "rank": 54
    },
    "price": 0,
    "bye": 11,
    "vector": {
      "x": 0.17,
      "y": 0.37,
      "magnitude": 0.41,
      "angle": 66
    },
    "consensusStrength": 0.25,
    "variance": 33.2,
    "rankings": {
      "ff": 152,
      "espn": 222,
      "fp": 151,
      "avg": 175
    }
  },
  {
    "rank": 153,
    "name": "Cedric Tillman",
    "team": "CLE",
    "position": {
      "position": "WR",
      "rank": 58
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": -0.04,
      "y": 0.17,
      "magnitude": 0.18,
      "angle": 101
    },
    "consensusStrength": 0.75,
    "variance": 7.1,
    "rankings": {
      "ff": 153,
      "espn": 138,
      "fp": 153,
      "avg": 148
    }
  },
  {
    "rank": 154,
    "name": "Matthew Stafford",
    "team": "LAR",
    "position": {
      "position": "QB",
      "rank": 24
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": -0.02,
      "y": 0.19,
      "magnitude": 0.19,
      "angle": 97
    },
    "consensusStrength": 1,
    "variance": 4.7,
    "rankings": {
      "ff": 154,
      "espn": 144,
      "fp": 154,
      "avg": 151
    }
  },
  {
    "rank": 155,
    "name": "Dylan Sampson",
    "team": "CLE",
    "position": {
      "position": "RB",
      "rank": 55
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": 0.09,
      "y": 0.32,
      "magnitude": 0.33,
      "angle": 74
    },
    "consensusStrength": 0.5,
    "variance": 18.7,
    "rankings": {
      "ff": 155,
      "espn": 196,
      "fp": 158,
      "avg": 170
    }
  },
  {
    "rank": 156,
    "name": "Denver Broncos",
    "team": "DEN",
    "position": {
      "position": "DST",
      "rank": 1
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0,
      "y": 0.9,
      "magnitude": 0.9,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 156,
      "espn": null,
      "fp": null,
      "avg": 156
    }
  },
  {
    "rank": 157,
    "name": "Romeo Doubs",
    "team": "GB",
    "position": {
      "position": "WR",
      "rank": 59
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": 0.34,
      "y": 0.55,
      "magnitude": 0.65,
      "angle": 59
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 157,
      "espn": null,
      "fp": 157,
      "avg": 157
    }
  },
  {
    "rank": 158,
    "name": "Isaiah Likely",
    "team": "BAL",
    "position": {
      "position": "TE",
      "rank": 19
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.24,
      "y": 0.45,
      "magnitude": 0.51,
      "angle": 61
    },
    "consensusStrength": 0.25,
    "variance": 47.9,
    "rankings": {
      "ff": 158,
      "espn": 258,
      "fp": 155,
      "avg": 190
    }
  },
  {
    "rank": 159,
    "name": "Bhayshul Tuten",
    "team": "JAX",
    "position": {
      "position": "RB",
      "rank": 56
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": -0.02,
      "y": 0.19,
      "magnitude": 0.19,
      "angle": 96
    },
    "consensusStrength": 1,
    "variance": 4.7,
    "rankings": {
      "ff": 159,
      "espn": 148,
      "fp": 156,
      "avg": 154
    }
  },
  {
    "rank": 160,
    "name": "Jayden Higgins",
    "team": "HOU",
    "position": {
      "position": "WR",
      "rank": 60
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.33,
      "y": 0.55,
      "magnitude": 0.64,
      "angle": 59
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 160,
      "espn": null,
      "fp": 160,
      "avg": 160
    }
  },
  {
    "rank": 161,
    "name": "Hollywood Brown",
    "team": "KC",
    "position": {
      "position": "WR",
      "rank": 61
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": -0.38,
      "y": 0.5,
      "magnitude": 0.63,
      "angle": 127
    },
    "consensusStrength": 0.75,
    "variance": 11,
    "rankings": {
      "ff": 161,
      "espn": 139,
      "fp": null,
      "avg": 150
    }
  },
  {
    "rank": 162,
    "name": "Zach Ertz",
    "team": "WAS",
    "position": {
      "position": "TE",
      "rank": 20
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.01,
      "y": 0.23,
      "magnitude": 0.24,
      "angle": 87
    },
    "consensusStrength": 1,
    "variance": 2.4,
    "rankings": {
      "ff": 162,
      "espn": 167,
      "fp": 162,
      "avg": 164
    }
  },
  {
    "rank": 163,
    "name": "Geno Smith",
    "team": "LV",
    "position": {
      "position": "QB",
      "rank": 25
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": 0.13,
      "y": 0.36,
      "magnitude": 0.38,
      "angle": 70
    },
    "consensusStrength": 0.5,
    "variance": 26.4,
    "rankings": {
      "ff": 163,
      "espn": 219,
      "fp": 163,
      "avg": 182
    }
  },
  {
    "rank": 164,
    "name": "Roschon Johnson",
    "team": "CHI",
    "position": {
      "position": "RB",
      "rank": 57
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.07,
      "y": 0.3,
      "magnitude": 0.31,
      "angle": 76
    },
    "consensusStrength": 0.75,
    "variance": 14.6,
    "rankings": {
      "ff": 164,
      "espn": 195,
      "fp": 164,
      "avg": 174
    }
  },
  {
    "rank": 165,
    "name": "Tre' Harris",
    "team": "LAC",
    "position": {
      "position": "WR",
      "rank": 62
    },
    "price": 0,
    "bye": 5,
    "vector": {
      "x": 0.32,
      "y": 0.55,
      "magnitude": 0.63,
      "angle": 60
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 165,
      "espn": null,
      "fp": 165,
      "avg": 165
    }
  },
  {
    "rank": 166,
    "name": "Quentin Johnston",
    "team": "LAC",
    "position": {
      "position": "WR",
      "rank": 63
    },
    "price": 0,
    "bye": 5,
    "vector": {
      "x": 0.32,
      "y": 0.55,
      "magnitude": 0.63,
      "angle": 60
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 166,
      "espn": null,
      "fp": 166,
      "avg": 166
    }
  },
  {
    "rank": 167,
    "name": "Philadelphia Eagles",
    "team": "PHI",
    "position": {
      "position": "DST",
      "rank": 2
    },
    "price": 0,
    "bye": 5,
    "vector": {
      "x": 0,
      "y": 0.86,
      "magnitude": 0.86,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 167,
      "espn": null,
      "fp": null,
      "avg": 167
    }
  },
  {
    "rank": 168,
    "name": "Kyle Williams",
    "team": "NE",
    "position": {
      "position": "WR",
      "rank": 64
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.31,
      "y": 0.54,
      "magnitude": 0.63,
      "angle": 60
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 168,
      "espn": null,
      "fp": 167,
      "avg": 168
    }
  },
  {
    "rank": 169,
    "name": "Jalen McMillan",
    "team": "TB",
    "position": {
      "position": "WR",
      "rank": 65
    },
    "price": 0,
    "bye": 11,
    "vector": {
      "x": 0.31,
      "y": 0.54,
      "magnitude": 0.62,
      "angle": 60
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 169,
      "espn": null,
      "fp": 168,
      "avg": 169
    }
  },
  {
    "rank": 170,
    "name": "Baltimore Ravens",
    "team": "BAL",
    "position": {
      "position": "DST",
      "rank": 3
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0,
      "y": 0.85,
      "magnitude": 0.85,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 170,
      "espn": null,
      "fp": null,
      "avg": 170
    }
  },
  {
    "rank": 171,
    "name": "Pittsburgh Steelers",
    "team": "PIT",
    "position": {
      "position": "DST",
      "rank": 4
    },
    "price": 0,
    "bye": 9,
    "vector": {
      "x": 0,
      "y": 0.85,
      "magnitude": 0.85,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 171,
      "espn": null,
      "fp": null,
      "avg": 171
    }
  },
  {
    "rank": 172,
    "name": "Adam Thielen",
    "team": "CAR",
    "position": {
      "position": "WR",
      "rank": 66
    },
    "price": 0,
    "bye": 11,
    "vector": {
      "x": -0.08,
      "y": 0.15,
      "magnitude": 0.17,
      "angle": 119
    },
    "consensusStrength": 0.5,
    "variance": 16.5,
    "rankings": {
      "ff": 172,
      "espn": 136,
      "fp": 170,
      "avg": 159
    }
  },
  {
    "rank": 173,
    "name": "Blake Corum",
    "team": "LAR",
    "position": {
      "position": "RB",
      "rank": 58
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": 0.1,
      "y": 0.34,
      "magnitude": 0.35,
      "angle": 74
    },
    "consensusStrength": 0.5,
    "variance": 19.3,
    "rankings": {
      "ff": 173,
      "espn": 214,
      "fp": 173,
      "avg": 187
    }
  },
  {
    "rank": 174,
    "name": "Joshua Palmer",
    "team": "BUF",
    "position": {
      "position": "WR",
      "rank": 67
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": 0.3,
      "y": 0.54,
      "magnitude": 0.61,
      "angle": 61
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 174,
      "espn": null,
      "fp": 174,
      "avg": 174
    }
  },
  {
    "rank": 175,
    "name": "Minnesota Vikings",
    "team": "MIN",
    "position": {
      "position": "DST",
      "rank": 5
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": 0,
      "y": 0.83,
      "magnitude": 0.83,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 175,
      "espn": null,
      "fp": null,
      "avg": 175
    }
  },
  {
    "rank": 176,
    "name": "MarShawn Lloyd",
    "team": "GB",
    "position": {
      "position": "RB",
      "rank": 59
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": -0.03,
      "y": 0.21,
      "magnitude": 0.21,
      "angle": 99
    },
    "consensusStrength": 0.75,
    "variance": 6.6,
    "rankings": {
      "ff": 176,
      "espn": 162,
      "fp": 176,
      "avg": 171
    }
  },
  {
    "rank": 177,
    "name": "DeAndre Hopkins",
    "team": "BAL",
    "position": {
      "position": "WR",
      "rank": 68
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.29,
      "y": 0.54,
      "magnitude": 0.61,
      "angle": 62
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 177,
      "espn": null,
      "fp": 178,
      "avg": 178
    }
  },
  {
    "rank": 178,
    "name": "Keenan Allen",
    "team": "LAC",
    "position": {
      "position": "WR",
      "rank": 69
    },
    "price": 0,
    "bye": 5,
    "vector": {
      "x": -0.16,
      "y": 0.08,
      "magnitude": 0.18,
      "angle": 155
    },
    "consensusStrength": 0.25,
    "variance": 32.8,
    "rankings": {
      "ff": 178,
      "espn": 108,
      "fp": 177,
      "avg": 154
    }
  },
  {
    "rank": 179,
    "name": "DeMario Douglas",
    "team": "NE",
    "position": {
      "position": "WR",
      "rank": 70
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": -0.05,
      "y": 0.19,
      "magnitude": 0.2,
      "angle": 106
    },
    "consensusStrength": 0.75,
    "variance": 10.8,
    "rankings": {
      "ff": 179,
      "espn": 156,
      "fp": 179,
      "avg": 171
    }
  },
  {
    "rank": 180,
    "name": "Xavier Legette",
    "team": "CAR",
    "position": {
      "position": "WR",
      "rank": 71
    },
    "price": 0,
    "bye": 11,
    "vector": {
      "x": -0.1,
      "y": 0.15,
      "magnitude": 0.18,
      "angle": 125
    },
    "consensusStrength": 0.5,
    "variance": 20.3,
    "rankings": {
      "ff": 180,
      "espn": 137,
      "fp": 180,
      "avg": 166
    }
  },
  {
    "rank": 181,
    "name": "Cameron Ward",
    "team": "TEN",
    "position": {
      "position": "QB",
      "rank": 26
    },
    "price": 0,
    "bye": 5,
    "vector": {
      "x": 0.04,
      "y": 0.29,
      "magnitude": 0.29,
      "angle": 82
    },
    "consensusStrength": 0.75,
    "variance": 8.5,
    "rankings": {
      "ff": 181,
      "espn": 199,
      "fp": 181,
      "avg": 187
    }
  },
  {
    "rank": 182,
    "name": "Houston Texans",
    "team": "HOU",
    "position": {
      "position": "DST",
      "rank": 6
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0,
      "y": 0.81,
      "magnitude": 0.81,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 182,
      "espn": null,
      "fp": null,
      "avg": 182
    }
  },
  {
    "rank": 183,
    "name": "Sam Darnold",
    "team": "SEA",
    "position": {
      "position": "QB",
      "rank": 27
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": 0.2,
      "y": 0.45,
      "magnitude": 0.49,
      "angle": 66
    },
    "consensusStrength": 0.25,
    "variance": 39.8,
    "rankings": {
      "ff": 183,
      "espn": 267,
      "fp": 182,
      "avg": 211
    }
  },
  {
    "rank": 184,
    "name": "Buffalo Bills",
    "team": "BUF",
    "position": {
      "position": "DST",
      "rank": 7
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": 0,
      "y": 0.8,
      "magnitude": 0.8,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 184,
      "espn": null,
      "fp": null,
      "avg": 184
    }
  },
  {
    "rank": 185,
    "name": "Brandon Aubrey",
    "team": "DAL",
    "position": {
      "position": "K",
      "rank": 1
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.01,
      "y": 0.26,
      "magnitude": 0.26,
      "angle": 92
    },
    "consensusStrength": 1,
    "variance": 1.3,
    "rankings": {
      "ff": 185,
      "espn": 184,
      "fp": 187,
      "avg": 185
    }
  },
  {
    "rank": 186,
    "name": "Kansas City Chiefs",
    "team": "KC",
    "position": {
      "position": "DST",
      "rank": 8
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": 0,
      "y": 0.8,
      "magnitude": 0.8,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 186,
      "espn": null,
      "fp": null,
      "avg": 186
    }
  },
  {
    "rank": 187,
    "name": "Brenton Strange",
    "team": "JAX",
    "position": {
      "position": "TE",
      "rank": 21
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": 0.05,
      "y": 0.3,
      "magnitude": 0.3,
      "angle": 80
    },
    "consensusStrength": 0.75,
    "variance": 9.9,
    "rankings": {
      "ff": 187,
      "espn": 207,
      "fp": 185,
      "avg": 193
    }
  },
  {
    "rank": 188,
    "name": "Detroit Lions",
    "team": "DET",
    "position": {
      "position": "DST",
      "rank": 9
    },
    "price": 0,
    "bye": 5,
    "vector": {
      "x": 0,
      "y": 0.79,
      "magnitude": 0.79,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 188,
      "espn": null,
      "fp": null,
      "avg": 188
    }
  },
  {
    "rank": 189,
    "name": "Wan'Dale Robinson",
    "team": "NYG",
    "position": {
      "position": "WR",
      "rank": 72
    },
    "price": 0,
    "bye": 11,
    "vector": {
      "x": -0.09,
      "y": 0.17,
      "magnitude": 0.19,
      "angle": 117
    },
    "consensusStrength": 0.5,
    "variance": 17.4,
    "rankings": {
      "ff": 189,
      "espn": 152,
      "fp": 189,
      "avg": 177
    }
  },
  {
    "rank": 190,
    "name": "Alec Pierce",
    "team": "IND",
    "position": {
      "position": "WR",
      "rank": 73
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.27,
      "y": 0.51,
      "magnitude": 0.58,
      "angle": 62
    },
    "consensusStrength": 1,
    "variance": 3,
    "rankings": {
      "ff": 190,
      "espn": null,
      "fp": 184,
      "avg": 187
    }
  },
  {
    "rank": 191,
    "name": "Jake Bates",
    "team": "DET",
    "position": {
      "position": "K",
      "rank": 2
    },
    "price": 0,
    "bye": 5,
    "vector": {
      "x": -0.02,
      "y": 0.24,
      "magnitude": 0.24,
      "angle": 96
    },
    "consensusStrength": 1,
    "variance": 4.7,
    "rankings": {
      "ff": 191,
      "espn": 181,
      "fp": 191,
      "avg": 188
    }
  },
  {
    "rank": 192,
    "name": "Cameron Dicker",
    "team": "LAC",
    "position": {
      "position": "K",
      "rank": 3
    },
    "price": 0,
    "bye": 5,
    "vector": {
      "x": -0.02,
      "y": 0.24,
      "magnitude": 0.24,
      "angle": 95
    },
    "consensusStrength": 1,
    "variance": 4.2,
    "rankings": {
      "ff": 192,
      "espn": 183,
      "fp": 192,
      "avg": 189
    }
  },
  {
    "rank": 193,
    "name": "Kendre Miller",
    "team": "NO",
    "position": {
      "position": "RB",
      "rank": 60
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": 0.07,
      "y": 0.33,
      "magnitude": 0.34,
      "angle": 79
    },
    "consensusStrength": 0.75,
    "variance": 13.2,
    "rankings": {
      "ff": 193,
      "espn": 221,
      "fp": 193,
      "avg": 202
    }
  },
  {
    "rank": 194,
    "name": "Los Angeles Rams",
    "team": "LAR",
    "position": {
      "position": "DST",
      "rank": 10
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": 0,
      "y": 0.77,
      "magnitude": 0.77,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 194,
      "espn": null,
      "fp": null,
      "avg": 194
    }
  },
  {
    "rank": 195,
    "name": "Wil Lutz",
    "team": "DEN",
    "position": {
      "position": "K",
      "rank": 4
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.25,
      "y": 0.52,
      "magnitude": 0.57,
      "angle": 65
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 195,
      "espn": null,
      "fp": 196,
      "avg": 196
    }
  },
  {
    "rank": 196,
    "name": "Seattle Seahawks",
    "team": "SEA",
    "position": {
      "position": "DST",
      "rank": 11
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": 0,
      "y": 0.76,
      "magnitude": 0.76,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 196,
      "espn": null,
      "fp": null,
      "avg": 196
    }
  },
  {
    "rank": 197,
    "name": "Mike Gesicki",
    "team": "CIN",
    "position": {
      "position": "TE",
      "rank": 22
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": 0.16,
      "y": 0.41,
      "magnitude": 0.44,
      "angle": 69
    },
    "consensusStrength": 0.25,
    "variance": 30.4,
    "rankings": {
      "ff": 197,
      "espn": 260,
      "fp": 194,
      "avg": 217
    }
  },
  {
    "rank": 198,
    "name": "Los Angeles Chargers",
    "team": "LAC",
    "position": {
      "position": "DST",
      "rank": 12
    },
    "price": 0,
    "bye": 5,
    "vector": {
      "x": 0,
      "y": 0.76,
      "magnitude": 0.76,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 198,
      "espn": null,
      "fp": null,
      "avg": 198
    }
  },
  {
    "rank": 199,
    "name": "Chase McLaughlin",
    "team": "TB",
    "position": {
      "position": "K",
      "rank": 5
    },
    "price": 0,
    "bye": 11,
    "vector": {
      "x": -0.04,
      "y": 0.24,
      "magnitude": 0.24,
      "angle": 101
    },
    "consensusStrength": 0.75,
    "variance": 8.5,
    "rankings": {
      "ff": 199,
      "espn": 182,
      "fp": 201,
      "avg": 194
    }
  },
  {
    "rank": 200,
    "name": "Chris Boswell",
    "team": "PIT",
    "position": {
      "position": "K",
      "rank": 6
    },
    "price": 0,
    "bye": 9,
    "vector": {
      "x": -0.03,
      "y": 0.25,
      "magnitude": 0.25,
      "angle": 97
    },
    "consensusStrength": 0.75,
    "variance": 5.7,
    "rankings": {
      "ff": 200,
      "espn": 188,
      "fp": 200,
      "avg": 196
    }
  },
  {
    "rank": 201,
    "name": "Pat Freiermuth",
    "team": "PIT",
    "position": {
      "position": "TE",
      "rank": 23
    },
    "price": 0,
    "bye": 9,
    "vector": {
      "x": 0.04,
      "y": 0.31,
      "magnitude": 0.31,
      "angle": 82
    },
    "consensusStrength": 0.75,
    "variance": 7.9,
    "rankings": {
      "ff": 201,
      "espn": 216,
      "fp": 198,
      "avg": 205
    }
  },
  {
    "rank": 202,
    "name": "Ka'imi Fairbairn",
    "team": "HOU",
    "position": {
      "position": "K",
      "rank": 7
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.08,
      "y": 0.36,
      "magnitude": 0.37,
      "angle": 78
    },
    "consensusStrength": 0.5,
    "variance": 16.3,
    "rankings": {
      "ff": 202,
      "espn": 237,
      "fp": 203,
      "avg": 214
    }
  },
  {
    "rank": 203,
    "name": "Green Bay Packers",
    "team": "GB",
    "position": {
      "position": "DST",
      "rank": 13
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": 0,
      "y": 0.74,
      "magnitude": 0.74,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 203,
      "espn": null,
      "fp": null,
      "avg": 203
    }
  },
  {
    "rank": 204,
    "name": "Cade Otton",
    "team": "TB",
    "position": {
      "position": "TE",
      "rank": 24
    },
    "price": 0,
    "bye": 11,
    "vector": {
      "x": -0.08,
      "y": 0.19,
      "magnitude": 0.21,
      "angle": 113
    },
    "consensusStrength": 0.5,
    "variance": 16.5,
    "rankings": {
      "ff": 204,
      "espn": 168,
      "fp": 202,
      "avg": 191
    }
  },
  {
    "rank": 205,
    "name": "Jalen Coker",
    "team": "CAR",
    "position": {
      "position": "WR",
      "rank": 74
    },
    "price": 0,
    "bye": 11,
    "vector": {
      "x": 0.22,
      "y": 0.51,
      "magnitude": 0.55,
      "angle": 66
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 205,
      "espn": null,
      "fp": 205,
      "avg": 205
    }
  },
  {
    "rank": 206,
    "name": "Kyle Monangai",
    "team": "CHI",
    "position": {
      "position": "RB",
      "rank": 61
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.1,
      "y": 0.38,
      "magnitude": 0.39,
      "angle": 76
    },
    "consensusStrength": 0.5,
    "variance": 19.3,
    "rankings": {
      "ff": 206,
      "espn": 247,
      "fp": 206,
      "avg": 220
    }
  },
  {
    "rank": 207,
    "name": "Miles Sanders",
    "team": "DAL",
    "position": {
      "position": "RB",
      "rank": 62
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.04,
      "y": 0.33,
      "magnitude": 0.33,
      "angle": 83
    },
    "consensusStrength": 0.75,
    "variance": 8.3,
    "rankings": {
      "ff": 207,
      "espn": 225,
      "fp": 208,
      "avg": 213
    }
  },
  {
    "rank": 208,
    "name": "Kareem Hunt",
    "team": "KC",
    "position": {
      "position": "RB",
      "rank": 63
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": 0.01,
      "y": 0.3,
      "magnitude": 0.3,
      "angle": 87
    },
    "consensusStrength": 1,
    "variance": 2.6,
    "rankings": {
      "ff": 208,
      "espn": 213,
      "fp": 207,
      "avg": 209
    }
  },
  {
    "rank": 209,
    "name": "Will Shipley",
    "team": "PHI",
    "position": {
      "position": "RB",
      "rank": 64
    },
    "price": 0,
    "bye": 5,
    "vector": {
      "x": -0.14,
      "y": 0.16,
      "magnitude": 0.21,
      "angle": 132
    },
    "consensusStrength": 0.5,
    "variance": 28.1,
    "rankings": {
      "ff": 209,
      "espn": 151,
      "fp": 212,
      "avg": 191
    }
  },
  {
    "rank": 210,
    "name": "Chig Okonkwo",
    "team": "TEN",
    "position": {
      "position": "TE",
      "rank": 25
    },
    "price": 0,
    "bye": 5,
    "vector": {
      "x": 0.21,
      "y": 0.5,
      "magnitude": 0.55,
      "angle": 67
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 210,
      "espn": null,
      "fp": 210,
      "avg": 210
    }
  },
  {
    "rank": 211,
    "name": "Aaron Rodgers",
    "team": "PIT",
    "position": {
      "position": "QB",
      "rank": 28
    },
    "price": 0,
    "bye": 9,
    "vector": {
      "x": 0.13,
      "y": 0.43,
      "magnitude": 0.45,
      "angle": 72
    },
    "consensusStrength": 0.5,
    "variance": 26.9,
    "rankings": {
      "ff": 211,
      "espn": 268,
      "fp": 211,
      "avg": 230
    }
  },
  {
    "rank": 212,
    "name": "Harrison Butker",
    "team": "KC",
    "position": {
      "position": "K",
      "rank": 8
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": -0.06,
      "y": 0.24,
      "magnitude": 0.25,
      "angle": 103
    },
    "consensusStrength": 0.75,
    "variance": 11.1,
    "rankings": {
      "ff": 212,
      "espn": 189,
      "fp": 213,
      "avg": 205
    }
  },
  {
    "rank": 213,
    "name": "Michael Wilson",
    "team": "ARI",
    "position": {
      "position": "WR",
      "rank": 75
    },
    "price": 0,
    "bye": 11,
    "vector": {
      "x": -0.11,
      "y": 0.17,
      "magnitude": 0.2,
      "angle": 123
    },
    "consensusStrength": 0.5,
    "variance": 22.7,
    "rankings": {
      "ff": 213,
      "espn": 163,
      "fp": 209,
      "avg": 195
    }
  },
  {
    "rank": 214,
    "name": "New York Jets",
    "team": "NYJ",
    "position": {
      "position": "DST",
      "rank": 14
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": 0,
      "y": 0.7,
      "magnitude": 0.7,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 214,
      "espn": null,
      "fp": null,
      "avg": 214
    }
  },
  {
    "rank": 215,
    "name": "Evan McPherson",
    "team": "CIN",
    "position": {
      "position": "K",
      "rank": 9
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": 0.2,
      "y": 0.5,
      "magnitude": 0.54,
      "angle": 69
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": 215,
      "espn": null,
      "fp": 217,
      "avg": 216
    }
  },
  {
    "rank": 216,
    "name": "Adonai Mitchell",
    "team": "IND",
    "position": {
      "position": "WR",
      "rank": 76
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.19,
      "y": 0.5,
      "magnitude": 0.54,
      "angle": 69
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": 216,
      "espn": null,
      "fp": 218,
      "avg": 217
    }
  },
  {
    "rank": 217,
    "name": "Mason Taylor",
    "team": "NYJ",
    "position": {
      "position": "TE",
      "rank": 26
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": 0,
      "y": 0.29,
      "magnitude": 0.29,
      "angle": 90
    },
    "consensusStrength": 1,
    "variance": 0.8,
    "rankings": {
      "ff": 217,
      "espn": 215,
      "fp": 216,
      "avg": 216
    }
  },
  {
    "rank": 218,
    "name": "Darius Slayton",
    "team": "NYG",
    "position": {
      "position": "WR",
      "rank": 77
    },
    "price": 0,
    "bye": 11,
    "vector": {
      "x": 0.2,
      "y": 0.48,
      "magnitude": 0.53,
      "angle": 67
    },
    "consensusStrength": 1,
    "variance": 2,
    "rankings": {
      "ff": 218,
      "espn": null,
      "fp": 214,
      "avg": 216
    }
  },
  {
    "rank": 219,
    "name": "Jack Bech",
    "team": "LV",
    "position": {
      "position": "WR",
      "rank": 78
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": -0.13,
      "y": 0.17,
      "magnitude": 0.22,
      "angle": 127
    },
    "consensusStrength": 0.5,
    "variance": 25.9,
    "rankings": {
      "ff": 219,
      "espn": 164,
      "fp": 219,
      "avg": 201
    }
  },
  {
    "rank": 220,
    "name": "Keaton Mitchell",
    "team": "BAL",
    "position": {
      "position": "RB",
      "rank": 65
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.07,
      "y": 0.38,
      "magnitude": 0.39,
      "angle": 80
    },
    "consensusStrength": 0.75,
    "variance": 14.2,
    "rankings": {
      "ff": 220,
      "espn": 251,
      "fp": 222,
      "avg": 231
    }
  },
  {
    "rank": 221,
    "name": "Tyler Bass",
    "team": "BUF",
    "position": {
      "position": "K",
      "rank": 10
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": -0.09,
      "y": 0.23,
      "magnitude": 0.24,
      "angle": 111
    },
    "consensusStrength": 0.5,
    "variance": 17,
    "rankings": {
      "ff": 221,
      "espn": 186,
      "fp": 223,
      "avg": 210
    }
  },
  {
    "rank": 222,
    "name": "DJ Giddens",
    "team": "IND",
    "position": {
      "position": "RB",
      "rank": 66
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.01,
      "y": 0.31,
      "magnitude": 0.31,
      "angle": 87
    },
    "consensusStrength": 1,
    "variance": 2.5,
    "rankings": {
      "ff": 222,
      "espn": 226,
      "fp": 220,
      "avg": 223
    }
  },
  {
    "rank": 223,
    "name": "San Francisco 49ers",
    "team": "SF",
    "position": {
      "position": "DST",
      "rank": 15
    },
    "price": 0,
    "bye": 9,
    "vector": {
      "x": 0,
      "y": 0.67,
      "magnitude": 0.67,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 223,
      "espn": null,
      "fp": null,
      "avg": 223
    }
  },
  {
    "rank": 224,
    "name": "Dontayvion Wicks",
    "team": "GB",
    "position": {
      "position": "WR",
      "rank": 79
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": 0.18,
      "y": 0.49,
      "magnitude": 0.52,
      "angle": 70
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 224,
      "espn": null,
      "fp": 225,
      "avg": 225
    }
  },
  {
    "rank": 225,
    "name": "Anthony Richardson",
    "team": "IND",
    "position": {
      "position": "QB",
      "rank": 29
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0,
      "y": 0.29,
      "magnitude": 0.29,
      "angle": 90
    },
    "consensusStrength": 1,
    "variance": 2.2,
    "rankings": {
      "ff": 225,
      "espn": 220,
      "fp": 221,
      "avg": 222
    }
  },
  {
    "rank": 226,
    "name": "Andrei Iosivas",
    "team": "CIN",
    "position": {
      "position": "WR",
      "rank": 80
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": 0.17,
      "y": 0.49,
      "magnitude": 0.52,
      "angle": 71
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 226,
      "espn": null,
      "fp": 227,
      "avg": 227
    }
  },
  {
    "rank": 227,
    "name": "Justice Hill",
    "team": "BAL",
    "position": {
      "position": "RB",
      "rank": 67
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": -0.15,
      "y": 0.15,
      "magnitude": 0.22,
      "angle": 135
    },
    "consensusStrength": 0.25,
    "variance": 30.9,
    "rankings": {
      "ff": 227,
      "espn": 161,
      "fp": 226,
      "avg": 205
    }
  },
  {
    "rank": 228,
    "name": "Jake Elliott",
    "team": "PHI",
    "position": {
      "position": "K",
      "rank": 11
    },
    "price": 0,
    "bye": 5,
    "vector": {
      "x": -0.1,
      "y": 0.22,
      "magnitude": 0.24,
      "angle": 115
    },
    "consensusStrength": 0.5,
    "variance": 19.8,
    "rankings": {
      "ff": 228,
      "espn": 187,
      "fp": 230,
      "avg": 215
    }
  },
  {
    "rank": 229,
    "name": "Calvin Austin",
    "team": "PIT",
    "position": {
      "position": "WR",
      "rank": 81
    },
    "price": 0,
    "bye": 9,
    "vector": {
      "x": 0.17,
      "y": 0.48,
      "magnitude": 0.51,
      "angle": 71
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 229,
      "espn": null,
      "fp": 228,
      "avg": 229
    }
  },
  {
    "rank": 230,
    "name": "Dalton Schultz",
    "team": "HOU",
    "position": {
      "position": "TE",
      "rank": 27
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.07,
      "y": 0.38,
      "magnitude": 0.39,
      "angle": 80
    },
    "consensusStrength": 0.75,
    "variance": 13.9,
    "rankings": {
      "ff": 230,
      "espn": 259,
      "fp": 229,
      "avg": 239
    }
  },
  {
    "rank": 231,
    "name": "Jaylin Noel",
    "team": "HOU",
    "position": {
      "position": "WR",
      "rank": 82
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.16,
      "y": 0.48,
      "magnitude": 0.51,
      "angle": 71
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 231,
      "espn": null,
      "fp": 231,
      "avg": 231
    }
  },
  {
    "rank": 232,
    "name": "Woody Marks",
    "team": "HOU",
    "position": {
      "position": "RB",
      "rank": 68
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": -0.05,
      "y": 0.27,
      "magnitude": 0.28,
      "angle": 100
    },
    "consensusStrength": 0.75,
    "variance": 9.7,
    "rankings": {
      "ff": 232,
      "espn": 212,
      "fp": 233,
      "avg": 226
    }
  },
  {
    "rank": 233,
    "name": "Jason Sanders",
    "team": "MIA",
    "position": {
      "position": "K",
      "rank": 12
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": -0.11,
      "y": 0.21,
      "magnitude": 0.23,
      "angle": 118
    },
    "consensusStrength": 0.5,
    "variance": 22.4,
    "rankings": {
      "ff": 233,
      "espn": 185,
      "fp": 232,
      "avg": 217
    }
  },
  {
    "rank": 234,
    "name": "Elijah Arroyo",
    "team": "SEA",
    "position": {
      "position": "TE",
      "rank": 28
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": -0.04,
      "y": 0.28,
      "magnitude": 0.29,
      "angle": 98
    },
    "consensusStrength": 0.75,
    "variance": 8,
    "rankings": {
      "ff": 234,
      "espn": 217,
      "fp": 234,
      "avg": 228
    }
  },
  {
    "rank": 235,
    "name": "Devin Neal",
    "team": "NO",
    "position": {
      "position": "RB",
      "rank": 69
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": 0.07,
      "y": 0.39,
      "magnitude": 0.4,
      "angle": 80
    },
    "consensusStrength": 0.75,
    "variance": 14.1,
    "rankings": {
      "ff": 235,
      "espn": 265,
      "fp": 235,
      "avg": 245
    }
  },
  {
    "rank": 236,
    "name": "Tahj Brooks",
    "team": "CIN",
    "position": {
      "position": "RB",
      "rank": 70
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": 0.15,
      "y": 0.48,
      "magnitude": 0.5,
      "angle": 73
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 236,
      "espn": null,
      "fp": 237,
      "avg": 237
    }
  },
  {
    "rank": 237,
    "name": "Jarquez Hunter",
    "team": "LAR",
    "position": {
      "position": "RB",
      "rank": 71
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": 0.01,
      "y": 0.35,
      "magnitude": 0.35,
      "angle": 89
    },
    "consensusStrength": 1,
    "variance": 2.4,
    "rankings": {
      "ff": 237,
      "espn": 243,
      "fp": 240,
      "avg": 240
    }
  },
  {
    "rank": 238,
    "name": "Tyler Lockett",
    "team": "TEN",
    "position": {
      "position": "WR",
      "rank": 83
    },
    "price": 0,
    "bye": 5,
    "vector": {
      "x": 0.14,
      "y": 0.48,
      "magnitude": 0.5,
      "angle": 73
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 238,
      "espn": null,
      "fp": 239,
      "avg": 239
    }
  },
  {
    "rank": 239,
    "name": "Elic Ayomanor",
    "team": "TEN",
    "position": {
      "position": "WR",
      "rank": 84
    },
    "price": 0,
    "bye": 5,
    "vector": {
      "x": 0.14,
      "y": 0.48,
      "magnitude": 0.5,
      "angle": 74
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": 239,
      "espn": null,
      "fp": 241,
      "avg": 240
    }
  },
  {
    "rank": 240,
    "name": "Younghoe Koo",
    "team": "ATL",
    "position": {
      "position": "K",
      "rank": 13
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": 0.15,
      "y": 0.47,
      "magnitude": 0.49,
      "angle": 73
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": 240,
      "espn": null,
      "fp": 238,
      "avg": 239
    }
  },
  {
    "rank": 241,
    "name": "Pat Bryant",
    "team": "DEN",
    "position": {
      "position": "WR",
      "rank": 85
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.15,
      "y": 0.46,
      "magnitude": 0.48,
      "angle": 72
    },
    "consensusStrength": 1,
    "variance": 2.5,
    "rankings": {
      "ff": 241,
      "espn": null,
      "fp": 236,
      "avg": 239
    }
  },
  {
    "rank": 242,
    "name": "Juwan Johnson",
    "team": "NO",
    "position": {
      "position": "TE",
      "rank": 29
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": 0.12,
      "y": 0.45,
      "magnitude": 0.46,
      "angle": 76
    },
    "consensusStrength": 0.5,
    "variance": 23.1,
    "rankings": {
      "ff": 242,
      "espn": 291,
      "fp": 242,
      "avg": 258
    }
  },
  {
    "rank": 243,
    "name": "Ollie Gordon",
    "team": "MIA",
    "position": {
      "position": "RB",
      "rank": 72
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": 0.01,
      "y": 0.35,
      "magnitude": 0.35,
      "angle": 88
    },
    "consensusStrength": 1,
    "variance": 2.4,
    "rankings": {
      "ff": 243,
      "espn": 248,
      "fp": 243,
      "avg": 245
    }
  },
  {
    "rank": 244,
    "name": "Diontae Johnson",
    "team": "CLE",
    "position": {
      "position": "WR",
      "rank": 86
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": 0.13,
      "y": 0.47,
      "magnitude": 0.49,
      "angle": 75
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": 244,
      "espn": null,
      "fp": 246,
      "avg": 245
    }
  },
  {
    "rank": 245,
    "name": "Ja'Tavion Sanders",
    "team": "CAR",
    "position": {
      "position": "TE",
      "rank": 30
    },
    "price": 0,
    "bye": 11,
    "vector": {
      "x": 0.11,
      "y": 0.45,
      "magnitude": 0.46,
      "angle": 76
    },
    "consensusStrength": 0.5,
    "variance": 22.4,
    "rankings": {
      "ff": 245,
      "espn": 292,
      "fp": 244,
      "avg": 260
    }
  },
  {
    "rank": 246,
    "name": "Dallas Cowboys",
    "team": "DAL",
    "position": {
      "position": "DST",
      "rank": 16
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": 0.59,
      "magnitude": 0.59,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 246,
      "espn": null,
      "fp": null,
      "avg": 246
    }
  },
  {
    "rank": 247,
    "name": "Cole Kmet",
    "team": "CHI",
    "position": {
      "position": "TE",
      "rank": 31
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.13,
      "y": 0.47,
      "magnitude": 0.48,
      "angle": 75
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 247,
      "espn": null,
      "fp": 247,
      "avg": 247
    }
  },
  {
    "rank": 248,
    "name": "Jacory Croskey-Merritt",
    "team": "WAS",
    "position": {
      "position": "RB",
      "rank": 73
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": -0.07,
      "y": 0.29,
      "magnitude": 0.3,
      "angle": 103
    },
    "consensusStrength": 0.75,
    "variance": 12.6,
    "rankings": {
      "ff": 248,
      "espn": 223,
      "fp": 251,
      "avg": 241
    }
  },
  {
    "rank": 249,
    "name": "Russell Wilson",
    "team": "NYG",
    "position": {
      "position": "QB",
      "rank": 30
    },
    "price": 0,
    "bye": 11,
    "vector": {
      "x": 0.05,
      "y": 0.39,
      "magnitude": 0.39,
      "angle": 83
    },
    "consensusStrength": 0.75,
    "variance": 9.4,
    "rankings": {
      "ff": 249,
      "espn": 269,
      "fp": 249,
      "avg": 256
    }
  },
  {
    "rank": 250,
    "name": "Matt Gay",
    "team": "WAS",
    "position": {
      "position": "K",
      "rank": 14
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": -0.13,
      "y": 0.2,
      "magnitude": 0.24,
      "angle": 123
    },
    "consensusStrength": 0.5,
    "variance": 26.9,
    "rankings": {
      "ff": 250,
      "espn": 192,
      "fp": 248,
      "avg": 230
    }
  },
  {
    "rank": 251,
    "name": "Elijah Mitchell",
    "team": "KC",
    "position": {
      "position": "RB",
      "rank": 74
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": -0.01,
      "y": 0.33,
      "magnitude": 0.33,
      "angle": 92
    },
    "consensusStrength": 1,
    "variance": 2.6,
    "rankings": {
      "ff": 251,
      "espn": 245,
      "fp": 250,
      "avg": 249
    }
  },
  {
    "rank": 252,
    "name": "Jalen Royals",
    "team": "KC",
    "position": {
      "position": "WR",
      "rank": 87
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": 0.11,
      "y": 0.46,
      "magnitude": 0.48,
      "angle": 77
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 252,
      "espn": null,
      "fp": 253,
      "avg": 253
    }
  },
  {
    "rank": 253,
    "name": "Roman Wilson",
    "team": "PIT",
    "position": {
      "position": "WR",
      "rank": 88
    },
    "price": 0,
    "bye": 9,
    "vector": {
      "x": 0.11,
      "y": 0.46,
      "magnitude": 0.47,
      "angle": 76
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 253,
      "espn": null,
      "fp": 252,
      "avg": 253
    }
  },
  {
    "rank": 254,
    "name": "Raheem Mostert",
    "team": "LV",
    "position": {
      "position": "RB",
      "rank": 75
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": -0.03,
      "y": 0.32,
      "magnitude": 0.32,
      "angle": 96
    },
    "consensusStrength": 0.75,
    "variance": 6.4,
    "rankings": {
      "ff": 254,
      "espn": 241,
      "fp": 255,
      "avg": 250
    }
  },
  {
    "rank": 255,
    "name": "Dyami Brown",
    "team": "JAX",
    "position": {
      "position": "WR",
      "rank": 89
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": 0.11,
      "y": 0.46,
      "magnitude": 0.47,
      "angle": 77
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 255,
      "espn": null,
      "fp": 254,
      "avg": 255
    }
  },
  {
    "rank": 256,
    "name": "Jaleel McLaughlin",
    "team": "DEN",
    "position": {
      "position": "RB",
      "rank": 76
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.1,
      "y": 0.46,
      "magnitude": 0.47,
      "angle": 77
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 256,
      "espn": null,
      "fp": 256,
      "avg": 256
    }
  },
  {
    "rank": 257,
    "name": "Sean Tucker",
    "team": "TB",
    "position": {
      "position": "RB",
      "rank": 77
    },
    "price": 0,
    "bye": 11,
    "vector": {
      "x": -0.02,
      "y": 0.34,
      "magnitude": 0.34,
      "angle": 93
    },
    "consensusStrength": 1,
    "variance": 3.8,
    "rankings": {
      "ff": 257,
      "espn": 249,
      "fp": 257,
      "avg": 254
    }
  },
  {
    "rank": 258,
    "name": "Tampa Bay Buccaneers",
    "team": "TB",
    "position": {
      "position": "DST",
      "rank": 17
    },
    "price": 0,
    "bye": 11,
    "vector": {
      "x": 0,
      "y": 0.55,
      "magnitude": 0.55,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 258,
      "espn": null,
      "fp": null,
      "avg": 258
    }
  },
  {
    "rank": 259,
    "name": "Devaughn Vele",
    "team": "DEN",
    "position": {
      "position": "WR",
      "rank": 90
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.1,
      "y": 0.45,
      "magnitude": 0.46,
      "angle": 78
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 259,
      "espn": null,
      "fp": 259,
      "avg": 259
    }
  },
  {
    "rank": 260,
    "name": "Jalen Tolbert",
    "team": "DAL",
    "position": {
      "position": "WR",
      "rank": 91
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.09,
      "y": 0.45,
      "magnitude": 0.46,
      "angle": 78
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 260,
      "espn": null,
      "fp": 260,
      "avg": 260
    }
  },
  {
    "rank": 261,
    "name": "Nick Westbrook-Ikhine",
    "team": "MIA",
    "position": {
      "position": "WR",
      "rank": 92
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": 0.09,
      "y": 0.45,
      "magnitude": 0.46,
      "angle": 78
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 261,
      "espn": null,
      "fp": 261,
      "avg": 261
    }
  },
  {
    "rank": 262,
    "name": "Brashard Smith",
    "team": "KC",
    "position": {
      "position": "RB",
      "rank": 78
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": 0.09,
      "y": 0.46,
      "magnitude": 0.46,
      "angle": 79
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": 262,
      "espn": null,
      "fp": 264,
      "avg": 263
    }
  },
  {
    "rank": 263,
    "name": "Joshua Karty",
    "team": "LAR",
    "position": {
      "position": "K",
      "rank": 15
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": -0.06,
      "y": 0.3,
      "magnitude": 0.31,
      "angle": 101
    },
    "consensusStrength": 0.75,
    "variance": 11.6,
    "rankings": {
      "ff": 263,
      "espn": 238,
      "fp": 262,
      "avg": 254
    }
  },
  {
    "rank": 264,
    "name": "Audric Estime",
    "team": "DEN",
    "position": {
      "position": "RB",
      "rank": 79
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.09,
      "y": 0.45,
      "magnitude": 0.46,
      "angle": 79
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 264,
      "espn": null,
      "fp": 263,
      "avg": 264
    }
  },
  {
    "rank": 265,
    "name": "Trevor Etienne",
    "team": "CAR",
    "position": {
      "position": "RB",
      "rank": 80
    },
    "price": 0,
    "bye": 11,
    "vector": {
      "x": -0.05,
      "y": 0.31,
      "magnitude": 0.32,
      "angle": 100
    },
    "consensusStrength": 0.75,
    "variance": 10.8,
    "rankings": {
      "ff": 265,
      "espn": 242,
      "fp": 265,
      "avg": 257
    }
  },
  {
    "rank": 266,
    "name": "Ty Johnson",
    "team": "BUF",
    "position": {
      "position": "RB",
      "rank": 81
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": -0.05,
      "y": 0.32,
      "magnitude": 0.32,
      "angle": 100
    },
    "consensusStrength": 0.75,
    "variance": 10.6,
    "rankings": {
      "ff": 266,
      "espn": 244,
      "fp": 267,
      "avg": 259
    }
  },
  {
    "rank": 267,
    "name": "Brandin Cooks",
    "team": "NO",
    "position": {
      "position": "WR",
      "rank": 93
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": 0.08,
      "y": 0.44,
      "magnitude": 0.45,
      "angle": 80
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 267,
      "espn": null,
      "fp": 266,
      "avg": 267
    }
  },
  {
    "rank": 268,
    "name": "Devin Singletary",
    "team": "NYG",
    "position": {
      "position": "RB",
      "rank": 82
    },
    "price": 0,
    "bye": 11,
    "vector": {
      "x": 0.08,
      "y": 0.45,
      "magnitude": 0.45,
      "angle": 80
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 268,
      "espn": null,
      "fp": 268,
      "avg": 268
    }
  },
  {
    "rank": 269,
    "name": "Noah Gray",
    "team": "KC",
    "position": {
      "position": "TE",
      "rank": 32
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": 0.07,
      "y": 0.45,
      "magnitude": 0.45,
      "angle": 81
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 269,
      "espn": null,
      "fp": 270,
      "avg": 270
    }
  },
  {
    "rank": 270,
    "name": "Kayshon Boutte",
    "team": "NE",
    "position": {
      "position": "WR",
      "rank": 94
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.07,
      "y": 0.44,
      "magnitude": 0.45,
      "angle": 81
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 270,
      "espn": null,
      "fp": 269,
      "avg": 270
    }
  },
  {
    "rank": 271,
    "name": "Elijah Moore",
    "team": "BUF",
    "position": {
      "position": "WR",
      "rank": 95
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": 0.07,
      "y": 0.44,
      "magnitude": 0.45,
      "angle": 81
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 271,
      "espn": null,
      "fp": 271,
      "avg": 271
    }
  },
  {
    "rank": 272,
    "name": "Antonio Gibson",
    "team": "NE",
    "position": {
      "position": "RB",
      "rank": 83
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.07,
      "y": 0.44,
      "magnitude": 0.45,
      "angle": 81
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 272,
      "espn": null,
      "fp": 272,
      "avg": 272
    }
  },
  {
    "rank": 273,
    "name": "Kenneth Gainwell",
    "team": "PIT",
    "position": {
      "position": "RB",
      "rank": 84
    },
    "price": 0,
    "bye": 9,
    "vector": {
      "x": -0.08,
      "y": 0.3,
      "magnitude": 0.31,
      "angle": 105
    },
    "consensusStrength": 0.5,
    "variance": 15.6,
    "rankings": {
      "ff": 273,
      "espn": 240,
      "fp": 273,
      "avg": 262
    }
  },
  {
    "rank": 274,
    "name": "Dont'e Thornton",
    "team": "LV",
    "position": {
      "position": "WR",
      "rank": 96
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": 0.06,
      "y": 0.44,
      "magnitude": 0.45,
      "angle": 82
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 274,
      "espn": null,
      "fp": 275,
      "avg": 275
    }
  },
  {
    "rank": 275,
    "name": "Jordan James",
    "team": "SF",
    "position": {
      "position": "RB",
      "rank": 85
    },
    "price": 0,
    "bye": 9,
    "vector": {
      "x": 0.06,
      "y": 0.44,
      "magnitude": 0.44,
      "angle": 82
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 275,
      "espn": null,
      "fp": 274,
      "avg": 275
    }
  },
  {
    "rank": 276,
    "name": "Malik Washington",
    "team": "MIA",
    "position": {
      "position": "WR",
      "rank": 97
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": 0.05,
      "y": 0.44,
      "magnitude": 0.44,
      "angle": 83
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 276,
      "espn": null,
      "fp": 277,
      "avg": 277
    }
  },
  {
    "rank": 277,
    "name": "Theo Johnson",
    "team": "NYG",
    "position": {
      "position": "TE",
      "rank": 33
    },
    "price": 0,
    "bye": 11,
    "vector": {
      "x": 0.03,
      "y": 0.41,
      "magnitude": 0.41,
      "angle": 85
    },
    "consensusStrength": 0.75,
    "variance": 6.4,
    "rankings": {
      "ff": 277,
      "espn": 290,
      "fp": 276,
      "avg": 281
    }
  },
  {
    "rank": 278,
    "name": "Daniel Jones",
    "team": "IND",
    "position": {
      "position": "QB",
      "rank": 31
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.04,
      "y": 0.43,
      "magnitude": 0.43,
      "angle": 85
    },
    "consensusStrength": 0.75,
    "variance": 8.3,
    "rankings": {
      "ff": 278,
      "espn": 296,
      "fp": 279,
      "avg": 284
    }
  },
  {
    "rank": 279,
    "name": "Tre Tucker",
    "team": "LV",
    "position": {
      "position": "WR",
      "rank": 98
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": 0.05,
      "y": 0.43,
      "magnitude": 0.44,
      "angle": 83
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 279,
      "espn": null,
      "fp": 278,
      "avg": 279
    }
  },
  {
    "rank": 280,
    "name": "Cleveland Browns",
    "team": "CLE",
    "position": {
      "position": "DST",
      "rank": 18
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": 0,
      "y": 0.48,
      "magnitude": 0.48,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 280,
      "espn": null,
      "fp": null,
      "avg": 280
    }
  },
  {
    "rank": 281,
    "name": "Isaiah Davis",
    "team": "NYJ",
    "position": {
      "position": "RB",
      "rank": 86
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": -0.08,
      "y": 0.32,
      "magnitude": 0.33,
      "angle": 103
    },
    "consensusStrength": 0.75,
    "variance": 14.9,
    "rankings": {
      "ff": 281,
      "espn": 250,
      "fp": 282,
      "avg": 271
    }
  },
  {
    "rank": 282,
    "name": "Tory Horton",
    "team": "SEA",
    "position": {
      "position": "WR",
      "rank": 99
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": 0.04,
      "y": 0.43,
      "magnitude": 0.44,
      "angle": 85
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 282,
      "espn": null,
      "fp": 283,
      "avg": 283
    }
  },
  {
    "rank": 283,
    "name": "Harold Fannin",
    "team": "CLE",
    "position": {
      "position": "TE",
      "rank": 34
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": 0.04,
      "y": 0.43,
      "magnitude": 0.43,
      "angle": 84
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": 283,
      "espn": null,
      "fp": 281,
      "avg": 282
    }
  },
  {
    "rank": 284,
    "name": "Taysom Hill",
    "team": "NO",
    "position": {
      "position": "TE",
      "rank": 35
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": 0.04,
      "y": 0.43,
      "magnitude": 0.43,
      "angle": 85
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 284,
      "espn": null,
      "fp": 285,
      "avg": 285
    }
  },
  {
    "rank": 285,
    "name": "Jalen Nailor",
    "team": "MIN",
    "position": {
      "position": "WR",
      "rank": 100
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": 0.04,
      "y": 0.43,
      "magnitude": 0.43,
      "angle": 85
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 285,
      "espn": null,
      "fp": 284,
      "avg": 285
    }
  },
  {
    "rank": 286,
    "name": "Isaac TeSlaa",
    "team": "DET",
    "position": {
      "position": "WR",
      "rank": 101
    },
    "price": 0,
    "bye": 5,
    "vector": {
      "x": 0.03,
      "y": 0.43,
      "magnitude": 0.43,
      "angle": 86
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 286,
      "espn": null,
      "fp": 286,
      "avg": 286
    }
  },
  {
    "rank": 287,
    "name": "Khalil Herbert",
    "team": "IND",
    "position": {
      "position": "RB",
      "rank": 87
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.03,
      "y": 0.43,
      "magnitude": 0.43,
      "angle": 86
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 287,
      "espn": null,
      "fp": 288,
      "avg": 288
    }
  },
  {
    "rank": 288,
    "name": "Joe Flacco",
    "team": "CLE",
    "position": {
      "position": "QB",
      "rank": 32
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": 0.07,
      "y": 0.46,
      "magnitude": 0.47,
      "angle": 82
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 288,
      "espn": 316,
      "fp": 287,
      "avg": 288
    }
  },
  {
    "rank": 289,
    "name": "Amari Cooper",
    "team": "FA",
    "position": {
      "position": "WR",
      "rank": 102
    },
    "price": 0,
    "bye": 9,
    "vector": {
      "x": 0.03,
      "y": 0.42,
      "magnitude": 0.43,
      "angle": 86
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": 289,
      "espn": null,
      "fp": 289,
      "avg": 289
    }
  },
  {
    "rank": 290,
    "name": "Tim Patrick",
    "team": "DET",
    "position": {
      "position": "WR",
      "rank": 103
    },
    "price": 0,
    "bye": 5,
    "vector": {
      "x": 0.02,
      "y": 0.43,
      "magnitude": 0.43,
      "angle": 87
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 290,
      "espn": null,
      "fp": 291,
      "avg": 291
    }
  },
  {
    "rank": 291,
    "name": "Darren Waller",
    "team": "MIA",
    "position": {
      "position": "TE",
      "rank": 36
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": -0.3,
      "y": 0.11,
      "magnitude": 0.32,
      "angle": 161
    },
    "consensusStrength": 0.25,
    "variance": 59.6,
    "rankings": {
      "ff": 291,
      "espn": 165,
      "fp": 292,
      "avg": 249
    }
  },
  {
    "rank": 292,
    "name": "Tyler Shough",
    "team": "NO",
    "position": {
      "position": "QB",
      "rank": 33
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": -0.05,
      "y": 0.35,
      "magnitude": 0.35,
      "angle": 98
    },
    "consensusStrength": 0.75,
    "variance": 9.9,
    "rankings": {
      "ff": 292,
      "espn": 270,
      "fp": 290,
      "avg": 284
    }
  },
  {
    "rank": 293,
    "name": "Dameon Pierce",
    "team": "HOU",
    "position": {
      "position": "RB",
      "rank": 88
    },
    "price": 0,
    "bye": 14,
    "vector": {
      "x": 0.01,
      "y": 0.42,
      "magnitude": 0.42,
      "angle": 88
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 293,
      "espn": null,
      "fp": 294,
      "avg": 294
    }
  },
  {
    "rank": 294,
    "name": "Chicago Bears",
    "team": "CHI",
    "position": {
      "position": "DST",
      "rank": 19
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": 0.43,
      "magnitude": 0.43,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 294,
      "espn": null,
      "fp": null,
      "avg": 294
    }
  },
  {
    "rank": 295,
    "name": "Christian Watson",
    "team": "GB",
    "position": {
      "position": "WR",
      "rank": 104
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": 0.01,
      "y": 0.42,
      "magnitude": 0.42,
      "angle": 89
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 295,
      "espn": null,
      "fp": 296,
      "avg": 296
    }
  },
  {
    "rank": 296,
    "name": "Parker Washington",
    "team": "JAX",
    "position": {
      "position": "WR",
      "rank": 105
    },
    "price": 0,
    "bye": 12,
    "vector": {
      "x": 0.01,
      "y": 0.42,
      "magnitude": 0.42,
      "angle": 89
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 296,
      "espn": null,
      "fp": 297,
      "avg": 297
    }
  },
  {
    "rank": 297,
    "name": "Daniel Carlson",
    "team": "LV",
    "position": {
      "position": "K",
      "rank": 16
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": 0.01,
      "y": 0.41,
      "magnitude": 0.41,
      "angle": 88
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": 297,
      "espn": null,
      "fp": 295,
      "avg": 296
    }
  },
  {
    "rank": 298,
    "name": "Kimani Vidal",
    "team": "LAC",
    "position": {
      "position": "RB",
      "rank": 89
    },
    "price": 0,
    "bye": 5,
    "vector": {
      "x": 0,
      "y": 0.42,
      "magnitude": 0.42,
      "angle": 90
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": 298,
      "espn": null,
      "fp": 299,
      "avg": 299
    }
  },
  {
    "rank": 299,
    "name": "Sincere McCormick",
    "team": "LV",
    "position": {
      "position": "RB",
      "rank": 90
    },
    "price": 0,
    "bye": 10,
    "vector": {
      "x": 0,
      "y": 0.42,
      "magnitude": 0.42,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 299,
      "espn": null,
      "fp": 300,
      "avg": 299
    }
  },
  {
    "rank": 300,
    "name": "Terrance Ferguson",
    "team": "LAR",
    "position": {
      "position": "TE",
      "rank": 37
    },
    "price": 0,
    "bye": 6,
    "vector": {
      "x": 0,
      "y": 0.42,
      "magnitude": 0.42,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": 300,
      "espn": null,
      "fp": 301,
      "avg": 300
    }
  }
];

export default players;
