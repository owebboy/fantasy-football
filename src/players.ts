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
    "name": "Jahmyr Gibbs",
    "team": "DET",
    "position": {
      "position": "RB",
      "rank": 1
    },
    "price": 58,
    "bye": 7,
    "vector": {
      "x": -0.01,
      "y": -0.99,
      "magnitude": 0.99,
      "angle": -91
    },
    "consensusStrength": 1,
    "variance": 2,
    "rankings": {
      "ff": null,
      "espn": 1,
      "fp": 5,
      "avg": 3
    }
  },
  {
    "rank": 2,
    "name": "Bijan Robinson",
    "team": "ATL",
    "position": {
      "position": "RB",
      "rank": 2
    },
    "price": 56,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -1,
      "magnitude": 1,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 2,
      "fp": 2,
      "avg": 2
    }
  },
  {
    "rank": 3,
    "name": "Puka Nacua",
    "team": "LAR",
    "position": {
      "position": "WR",
      "rank": 1
    },
    "price": 54,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.99,
      "magnitude": 0.99,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 3,
      "fp": 3,
      "avg": 3
    }
  },
  {
    "rank": 4,
    "name": "Ja'Marr Chase",
    "team": "CIN",
    "position": {
      "position": "WR",
      "rank": 2
    },
    "price": 52,
    "bye": 7,
    "vector": {
      "x": 0.01,
      "y": -0.99,
      "magnitude": 0.99,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 1.6,
    "rankings": {
      "ff": null,
      "espn": 4,
      "fp": 1,
      "avg": 3
    }
  },
  {
    "rank": 5,
    "name": "Jaxon Smith-Njigba",
    "team": "SEA",
    "position": {
      "position": "WR",
      "rank": 3
    },
    "price": 50,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.98,
      "magnitude": 0.98,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": null,
      "espn": 5,
      "fp": 4,
      "avg": 5
    }
  },
  {
    "rank": 6,
    "name": "Christian McCaffrey",
    "team": "SF",
    "position": {
      "position": "RB",
      "rank": 3
    },
    "price": 48,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.97,
      "magnitude": 0.97,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": null,
      "espn": 6,
      "fp": 7,
      "avg": 7
    }
  },
  {
    "rank": 7,
    "name": "Jonathan Taylor",
    "team": "IND",
    "position": {
      "position": "RB",
      "rank": 4
    },
    "price": 46,
    "bye": 7,
    "vector": {
      "x": -0.01,
      "y": -0.96,
      "magnitude": 0.96,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 1.6,
    "rankings": {
      "ff": null,
      "espn": 7,
      "fp": 10,
      "avg": 9
    }
  },
  {
    "rank": 8,
    "name": "Amon-Ra St. Brown",
    "team": "DET",
    "position": {
      "position": "WR",
      "rank": 4
    },
    "price": 45,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.97,
      "magnitude": 0.97,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": null,
      "espn": 8,
      "fp": 6,
      "avg": 7
    }
  },
  {
    "rank": 9,
    "name": "CeeDee Lamb",
    "team": "DAL",
    "position": {
      "position": "WR",
      "rank": 5
    },
    "price": 45,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.96,
      "magnitude": 0.96,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": null,
      "espn": 9,
      "fp": 8,
      "avg": 9
    }
  },
  {
    "rank": 10,
    "name": "Derrick Henry",
    "team": "BAL",
    "position": {
      "position": "RB",
      "rank": 5
    },
    "price": 45,
    "bye": 7,
    "vector": {
      "x": -0.07,
      "y": -0.89,
      "magnitude": 0.89,
      "angle": -94
    },
    "consensusStrength": 0.75,
    "variance": 14.5,
    "rankings": {
      "ff": null,
      "espn": 10,
      "fp": 39,
      "avg": 25
    }
  },
  {
    "rank": 11,
    "name": "Justin Jefferson",
    "team": "MIN",
    "position": {
      "position": "WR",
      "rank": 6
    },
    "price": 48,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.96,
      "magnitude": 0.96,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": null,
      "espn": 11,
      "fp": 9,
      "avg": 10
    }
  },
  {
    "rank": 12,
    "name": "James Cook III",
    "team": "BUF",
    "position": {
      "position": "RB",
      "rank": 6
    },
    "price": 46,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": -0.93,
      "magnitude": 0.93,
      "angle": -91
    },
    "consensusStrength": 1,
    "variance": 3.5,
    "rankings": {
      "ff": null,
      "espn": 12,
      "fp": 19,
      "avg": 16
    }
  },
  {
    "rank": 13,
    "name": "Drake London",
    "team": "ATL",
    "position": {
      "position": "WR",
      "rank": 7
    },
    "price": 44,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.95,
      "magnitude": 0.95,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": null,
      "espn": 13,
      "fp": 11,
      "avg": 12
    }
  },
  {
    "rank": 14,
    "name": "Rashee Rice",
    "team": "KC",
    "position": {
      "position": "WR",
      "rank": 8
    },
    "price": 42,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": -0.92,
      "magnitude": 0.92,
      "angle": -91
    },
    "consensusStrength": 1,
    "variance": 4,
    "rankings": {
      "ff": null,
      "espn": 14,
      "fp": 22,
      "avg": 18
    }
  },
  {
    "rank": 15,
    "name": "De'Von Achane",
    "team": "MIA",
    "position": {
      "position": "RB",
      "rank": 7
    },
    "price": 40,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.94,
      "magnitude": 0.94,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": null,
      "espn": 15,
      "fp": 13,
      "avg": 14
    }
  },
  {
    "rank": 16,
    "name": "Trey McBride",
    "team": "ARI",
    "position": {
      "position": "TE",
      "rank": 1
    },
    "price": 38,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.93,
      "magnitude": 0.93,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": null,
      "espn": 16,
      "fp": 17,
      "avg": 17
    }
  },
  {
    "rank": 17,
    "name": "Jeremiyah Love",
    "team": "ARI",
    "position": {
      "position": "RB",
      "rank": 8
    },
    "price": 36,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": -0.88,
      "magnitude": 0.88,
      "angle": -93
    },
    "consensusStrength": 0.75,
    "variance": 9,
    "rankings": {
      "ff": null,
      "espn": 17,
      "fp": 35,
      "avg": 26
    }
  },
  {
    "rank": 18,
    "name": "Ashton Jeanty",
    "team": "LV",
    "position": {
      "position": "RB",
      "rank": 9
    },
    "price": 34,
    "bye": 7,
    "vector": {
      "x": 0.01,
      "y": -0.93,
      "magnitude": 0.93,
      "angle": -89
    },
    "consensusStrength": 1,
    "variance": 2,
    "rankings": {
      "ff": null,
      "espn": 18,
      "fp": 14,
      "avg": 16
    }
  },
  {
    "rank": 19,
    "name": "Omarion Hampton",
    "team": "LAC",
    "position": {
      "position": "RB",
      "rank": 10
    },
    "price": 32,
    "bye": 7,
    "vector": {
      "x": -0.01,
      "y": -0.9,
      "magnitude": 0.9,
      "angle": -91
    },
    "consensusStrength": 1,
    "variance": 2.5,
    "rankings": {
      "ff": null,
      "espn": 19,
      "fp": 24,
      "avg": 22
    }
  },
  {
    "rank": 20,
    "name": "Saquon Barkley",
    "team": "PHI",
    "position": {
      "position": "RB",
      "rank": 11
    },
    "price": 30,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": -0.89,
      "magnitude": 0.89,
      "angle": -91
    },
    "consensusStrength": 1,
    "variance": 3.5,
    "rankings": {
      "ff": null,
      "espn": 20,
      "fp": 27,
      "avg": 24
    }
  },
  {
    "rank": 21,
    "name": "Josh Jacobs",
    "team": "GB",
    "position": {
      "position": "RB",
      "rank": 12
    },
    "price": 33,
    "bye": 7,
    "vector": {
      "x": -0.06,
      "y": -0.85,
      "magnitude": 0.85,
      "angle": -94
    },
    "consensusStrength": 0.75,
    "variance": 12,
    "rankings": {
      "ff": null,
      "espn": 21,
      "fp": 45,
      "avg": 33
    }
  },
  {
    "rank": 22,
    "name": "Breece Hall",
    "team": "NYJ",
    "position": {
      "position": "RB",
      "rank": 13
    },
    "price": 31,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": -0.86,
      "magnitude": 0.86,
      "angle": -93
    },
    "consensusStrength": 0.75,
    "variance": 9,
    "rankings": {
      "ff": null,
      "espn": 22,
      "fp": 40,
      "avg": 31
    }
  },
  {
    "rank": 23,
    "name": "Kenneth Walker III",
    "team": "KC",
    "position": {
      "position": "RB",
      "rank": 14
    },
    "price": 29,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": -0.88,
      "magnitude": 0.88,
      "angle": -91
    },
    "consensusStrength": 1,
    "variance": 4,
    "rankings": {
      "ff": null,
      "espn": 23,
      "fp": 31,
      "avg": 27
    }
  },
  {
    "rank": 24,
    "name": "Brock Bowers",
    "team": "LV",
    "position": {
      "position": "TE",
      "rank": 2
    },
    "price": 27,
    "bye": 7,
    "vector": {
      "x": 0.01,
      "y": -0.9,
      "magnitude": 0.9,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 1.6,
    "rankings": {
      "ff": null,
      "espn": 24,
      "fp": 21,
      "avg": 23
    }
  },
  {
    "rank": 25,
    "name": "Nico Collins",
    "team": "HOU",
    "position": {
      "position": "WR",
      "rank": 9
    },
    "price": 25,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.92,
      "magnitude": 0.92,
      "angle": -88
    },
    "consensusStrength": 0.75,
    "variance": 6.5,
    "rankings": {
      "ff": null,
      "espn": 25,
      "fp": 12,
      "avg": 19
    }
  },
  {
    "rank": 26,
    "name": "A.J. Brown",
    "team": "NE",
    "position": {
      "position": "WR",
      "rank": 10
    },
    "price": 23,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.91,
      "magnitude": 0.91,
      "angle": -88
    },
    "consensusStrength": 0.75,
    "variance": 5.5,
    "rankings": {
      "ff": null,
      "espn": 26,
      "fp": 15,
      "avg": 21
    }
  },
  {
    "rank": 27,
    "name": "George Pickens",
    "team": "DAL",
    "position": {
      "position": "WR",
      "rank": 11
    },
    "price": 21,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.9,
      "magnitude": 0.9,
      "angle": -88
    },
    "consensusStrength": 0.75,
    "variance": 5.5,
    "rankings": {
      "ff": null,
      "espn": 27,
      "fp": 16,
      "avg": 22
    }
  },
  {
    "rank": 28,
    "name": "Tetairoa McMillan",
    "team": "CAR",
    "position": {
      "position": "WR",
      "rank": 12
    },
    "price": 20,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.88,
      "magnitude": 0.88,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": null,
      "espn": 28,
      "fp": 26,
      "avg": 27
    }
  },
  {
    "rank": 29,
    "name": "Chris Olave",
    "team": "NO",
    "position": {
      "position": "WR",
      "rank": 13
    },
    "price": 20,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.89,
      "magnitude": 0.89,
      "angle": -88
    },
    "consensusStrength": 0.75,
    "variance": 5.5,
    "rankings": {
      "ff": null,
      "espn": 29,
      "fp": 18,
      "avg": 24
    }
  },
  {
    "rank": 30,
    "name": "Chase Brown",
    "team": "CIN",
    "position": {
      "position": "RB",
      "rank": 15
    },
    "price": 20,
    "bye": 7,
    "vector": {
      "x": 0.02,
      "y": -0.89,
      "magnitude": 0.89,
      "angle": -88
    },
    "consensusStrength": 1,
    "variance": 5,
    "rankings": {
      "ff": null,
      "espn": 30,
      "fp": 20,
      "avg": 25
    }
  },
  {
    "rank": 31,
    "name": "Kyren Williams",
    "team": "LAR",
    "position": {
      "position": "RB",
      "rank": 16
    },
    "price": 25,
    "bye": 7,
    "vector": {
      "x": -0.03,
      "y": -0.83,
      "magnitude": 0.83,
      "angle": -92
    },
    "consensusStrength": 0.75,
    "variance": 6.5,
    "rankings": {
      "ff": null,
      "espn": 31,
      "fp": 44,
      "avg": 38
    }
  },
  {
    "rank": 32,
    "name": "Garrett Wilson",
    "team": "NYJ",
    "position": {
      "position": "WR",
      "rank": 14
    },
    "price": 24,
    "bye": 7,
    "vector": {
      "x": 0.01,
      "y": -0.86,
      "magnitude": 0.86,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 1.6,
    "rankings": {
      "ff": null,
      "espn": 32,
      "fp": 29,
      "avg": 31
    }
  },
  {
    "rank": 33,
    "name": "Davante Adams",
    "team": "LAR",
    "position": {
      "position": "WR",
      "rank": 15
    },
    "price": 24,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": -0.81,
      "magnitude": 0.81,
      "angle": -93
    },
    "consensusStrength": 0.75,
    "variance": 8,
    "rankings": {
      "ff": null,
      "espn": 33,
      "fp": 49,
      "avg": 41
    }
  },
  {
    "rank": 34,
    "name": "Malik Nabers",
    "team": "NYG",
    "position": {
      "position": "WR",
      "rank": 16
    },
    "price": 23,
    "bye": 7,
    "vector": {
      "x": 0.02,
      "y": -0.87,
      "magnitude": 0.87,
      "angle": -89
    },
    "consensusStrength": 1,
    "variance": 4.5,
    "rankings": {
      "ff": null,
      "espn": 34,
      "fp": 25,
      "avg": 30
    }
  },
  {
    "rank": 35,
    "name": "Zay Flowers",
    "team": "BAL",
    "position": {
      "position": "WR",
      "rank": 17
    },
    "price": 23,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.83,
      "magnitude": 0.83,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": null,
      "espn": 35,
      "fp": 37,
      "avg": 36
    }
  },
  {
    "rank": 36,
    "name": "Josh Allen",
    "team": "BUF",
    "position": {
      "position": "QB",
      "rank": 1
    },
    "price": 22,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.87,
      "magnitude": 0.87,
      "angle": -88
    },
    "consensusStrength": 0.75,
    "variance": 6.5,
    "rankings": {
      "ff": null,
      "espn": 36,
      "fp": 23,
      "avg": 30
    }
  },
  {
    "rank": 37,
    "name": "Javonte Williams",
    "team": "DAL",
    "position": {
      "position": "RB",
      "rank": 17
    },
    "price": 22,
    "bye": 7,
    "vector": {
      "x": -0.03,
      "y": -0.8,
      "magnitude": 0.8,
      "angle": -92
    },
    "consensusStrength": 0.75,
    "variance": 5.5,
    "rankings": {
      "ff": null,
      "espn": 37,
      "fp": 48,
      "avg": 43
    }
  },
  {
    "rank": 38,
    "name": "Travis Etienne Jr.",
    "team": "NO",
    "position": {
      "position": "RB",
      "rank": 18
    },
    "price": 21,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": -0.8,
      "magnitude": 0.8,
      "angle": -92
    },
    "consensusStrength": 1,
    "variance": 4.5,
    "rankings": {
      "ff": null,
      "espn": 38,
      "fp": 47,
      "avg": 43
    }
  },
  {
    "rank": 39,
    "name": "Quinshon Judkins",
    "team": "CLE",
    "position": {
      "position": "RB",
      "rank": 19
    },
    "price": 21,
    "bye": 7,
    "vector": {
      "x": -0.05,
      "y": -0.77,
      "magnitude": 0.77,
      "angle": -94
    },
    "consensusStrength": 0.75,
    "variance": 11,
    "rankings": {
      "ff": null,
      "espn": 39,
      "fp": 61,
      "avg": 50
    }
  },
  {
    "rank": 40,
    "name": "Cam Skattebo",
    "team": "NYG",
    "position": {
      "position": "RB",
      "rank": 20
    },
    "price": 20,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": -0.78,
      "magnitude": 0.78,
      "angle": -93
    },
    "consensusStrength": 0.75,
    "variance": 7.5,
    "rankings": {
      "ff": null,
      "espn": 40,
      "fp": 55,
      "avg": 48
    }
  },
  {
    "rank": 41,
    "name": "Bucky Irving",
    "team": "TB",
    "position": {
      "position": "RB",
      "rank": 21
    },
    "price": 20,
    "bye": 7,
    "vector": {
      "x": -0.03,
      "y": -0.78,
      "magnitude": 0.78,
      "angle": -92
    },
    "consensusStrength": 0.75,
    "variance": 6.5,
    "rankings": {
      "ff": null,
      "espn": 41,
      "fp": 54,
      "avg": 48
    }
  },
  {
    "rank": 42,
    "name": "DeVonta Smith",
    "team": "PHI",
    "position": {
      "position": "WR",
      "rank": 18
    },
    "price": 19,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.84,
      "magnitude": 0.84,
      "angle": -88
    },
    "consensusStrength": 0.75,
    "variance": 7,
    "rankings": {
      "ff": null,
      "espn": 42,
      "fp": 28,
      "avg": 35
    }
  },
  {
    "rank": 43,
    "name": "Emeka Egbuka",
    "team": "TB",
    "position": {
      "position": "WR",
      "rank": 19
    },
    "price": 19,
    "bye": 7,
    "vector": {
      "x": -0.01,
      "y": -0.79,
      "magnitude": 0.79,
      "angle": -91
    },
    "consensusStrength": 1,
    "variance": 1.6,
    "rankings": {
      "ff": null,
      "espn": 43,
      "fp": 46,
      "avg": 45
    }
  },
  {
    "rank": 44,
    "name": "Jameson Williams",
    "team": "DET",
    "position": {
      "position": "WR",
      "rank": 20
    },
    "price": 18,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": -0.78,
      "magnitude": 0.78,
      "angle": -91
    },
    "consensusStrength": 1,
    "variance": 3.5,
    "rankings": {
      "ff": null,
      "espn": 44,
      "fp": 51,
      "avg": 48
    }
  },
  {
    "rank": 45,
    "name": "Tee Higgins",
    "team": "CIN",
    "position": {
      "position": "WR",
      "rank": 21
    },
    "price": 18,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.82,
      "magnitude": 0.82,
      "angle": -88
    },
    "consensusStrength": 0.75,
    "variance": 6.5,
    "rankings": {
      "ff": null,
      "espn": 45,
      "fp": 32,
      "avg": 39
    }
  },
  {
    "rank": 46,
    "name": "Rome Odunze",
    "team": "CHI",
    "position": {
      "position": "WR",
      "rank": 22
    },
    "price": 17,
    "bye": 7,
    "vector": {
      "x": -0.03,
      "y": -0.75,
      "magnitude": 0.75,
      "angle": -93
    },
    "consensusStrength": 0.75,
    "variance": 7,
    "rankings": {
      "ff": null,
      "espn": 46,
      "fp": 60,
      "avg": 53
    }
  },
  {
    "rank": 47,
    "name": "Ladd McConkey",
    "team": "LAC",
    "position": {
      "position": "WR",
      "rank": 23
    },
    "price": 17,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.81,
      "magnitude": 0.81,
      "angle": -88
    },
    "consensusStrength": 0.75,
    "variance": 6.5,
    "rankings": {
      "ff": null,
      "espn": 47,
      "fp": 34,
      "avg": 41
    }
  },
  {
    "rank": 48,
    "name": "Terry McLaurin",
    "team": "WAS",
    "position": {
      "position": "WR",
      "rank": 24
    },
    "price": 16,
    "bye": 7,
    "vector": {
      "x": 0.02,
      "y": -0.79,
      "magnitude": 0.79,
      "angle": -89
    },
    "consensusStrength": 1,
    "variance": 3.5,
    "rankings": {
      "ff": null,
      "espn": 48,
      "fp": 41,
      "avg": 45
    }
  },
  {
    "rank": 49,
    "name": "Colston Loveland",
    "team": "CHI",
    "position": {
      "position": "TE",
      "rank": 3
    },
    "price": 16,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.8,
      "magnitude": 0.8,
      "angle": -88
    },
    "consensusStrength": 0.75,
    "variance": 6.5,
    "rankings": {
      "ff": null,
      "espn": 49,
      "fp": 36,
      "avg": 43
    }
  },
  {
    "rank": 50,
    "name": "Tyler Warren",
    "team": "IND",
    "position": {
      "position": "TE",
      "rank": 4
    },
    "price": 15,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.76,
      "magnitude": 0.76,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": null,
      "espn": 50,
      "fp": 52,
      "avg": 51
    }
  },
  {
    "rank": 51,
    "name": "Jaylen Waddle",
    "team": "DEN",
    "position": {
      "position": "WR",
      "rank": 25
    },
    "price": 15,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.79,
      "magnitude": 0.79,
      "angle": -88
    },
    "consensusStrength": 0.75,
    "variance": 6.5,
    "rankings": {
      "ff": null,
      "espn": 51,
      "fp": 38,
      "avg": 45
    }
  },
  {
    "rank": 52,
    "name": "DJ Moore",
    "team": "BUF",
    "position": {
      "position": "WR",
      "rank": 26
    },
    "price": 15,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.76,
      "magnitude": 0.76,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": null,
      "espn": 52,
      "fp": 53,
      "avg": 53
    }
  },
  {
    "rank": 53,
    "name": "Carnell Tate",
    "team": "TEN",
    "position": {
      "position": "WR",
      "rank": 27
    },
    "price": 14,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": -0.73,
      "magnitude": 0.73,
      "angle": -92
    },
    "consensusStrength": 1,
    "variance": 5,
    "rankings": {
      "ff": null,
      "espn": 53,
      "fp": 63,
      "avg": 58
    }
  },
  {
    "rank": 54,
    "name": "Luther Burden III",
    "team": "CHI",
    "position": {
      "position": "WR",
      "rank": 28
    },
    "price": 14,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.78,
      "magnitude": 0.78,
      "angle": -88
    },
    "consensusStrength": 0.75,
    "variance": 6,
    "rankings": {
      "ff": null,
      "espn": 54,
      "fp": 42,
      "avg": 48
    }
  },
  {
    "rank": 55,
    "name": "Jayden Daniels",
    "team": "WAS",
    "position": {
      "position": "QB",
      "rank": 2
    },
    "price": 14,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.74,
      "magnitude": 0.74,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": null,
      "espn": 55,
      "fp": 56,
      "avg": 56
    }
  },
  {
    "rank": 56,
    "name": "Lamar Jackson",
    "team": "BAL",
    "position": {
      "position": "QB",
      "rank": 3
    },
    "price": 13,
    "bye": 7,
    "vector": {
      "x": 0.06,
      "y": -0.8,
      "magnitude": 0.8,
      "angle": -86
    },
    "consensusStrength": 0.75,
    "variance": 13,
    "rankings": {
      "ff": null,
      "espn": 56,
      "fp": 30,
      "avg": 43
    }
  },
  {
    "rank": 57,
    "name": "Drake Maye",
    "team": "NE",
    "position": {
      "position": "QB",
      "rank": 4
    },
    "price": 13,
    "bye": 7,
    "vector": {
      "x": 0.06,
      "y": -0.79,
      "magnitude": 0.79,
      "angle": -86
    },
    "consensusStrength": 0.75,
    "variance": 12,
    "rankings": {
      "ff": null,
      "espn": 57,
      "fp": 33,
      "avg": 45
    }
  },
  {
    "rank": 58,
    "name": "Jalen Hurts",
    "team": "PHI",
    "position": {
      "position": "QB",
      "rank": 5
    },
    "price": 13,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.73,
      "magnitude": 0.73,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": null,
      "espn": 58,
      "fp": 57,
      "avg": 58
    }
  },
  {
    "rank": 59,
    "name": "Bhayshul Tuten",
    "team": "JAX",
    "position": {
      "position": "RB",
      "rank": 22
    },
    "price": 12,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": -0.69,
      "magnitude": 0.69,
      "angle": -93
    },
    "consensusStrength": 0.75,
    "variance": 7.5,
    "rankings": {
      "ff": null,
      "espn": 59,
      "fp": 74,
      "avg": 67
    }
  },
  {
    "rank": 60,
    "name": "TreVeyon Henderson",
    "team": "NE",
    "position": {
      "position": "RB",
      "rank": 23
    },
    "price": 12,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.72,
      "magnitude": 0.72,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": null,
      "espn": 60,
      "fp": 59,
      "avg": 60
    }
  },
  {
    "rank": 61,
    "name": "Jadarian Price",
    "team": "SEA",
    "position": {
      "position": "RB",
      "rank": 24
    },
    "price": 12,
    "bye": 7,
    "vector": {
      "x": -0.05,
      "y": -0.67,
      "magnitude": 0.67,
      "angle": -94
    },
    "consensusStrength": 0.75,
    "variance": 10,
    "rankings": {
      "ff": null,
      "espn": 61,
      "fp": 81,
      "avg": 71
    }
  },
  {
    "rank": 62,
    "name": "D'Andre Swift",
    "team": "CHI",
    "position": {
      "position": "RB",
      "rank": 25
    },
    "price": 11,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.71,
      "magnitude": 0.71,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 62,
      "fp": 62,
      "avg": 62
    }
  },
  {
    "rank": 63,
    "name": "Tony Pollard",
    "team": "TEN",
    "position": {
      "position": "RB",
      "rank": 26
    },
    "price": 11,
    "bye": 7,
    "vector": {
      "x": -0.06,
      "y": -0.65,
      "magnitude": 0.65,
      "angle": -95
    },
    "consensusStrength": 0.75,
    "variance": 12,
    "rankings": {
      "ff": null,
      "espn": 63,
      "fp": 87,
      "avg": 75
    }
  },
  {
    "rank": 64,
    "name": "David Montgomery",
    "team": "HOU",
    "position": {
      "position": "RB",
      "rank": 27
    },
    "price": 11,
    "bye": 7,
    "vector": {
      "x": -0.01,
      "y": -0.69,
      "magnitude": 0.69,
      "angle": -91
    },
    "consensusStrength": 1,
    "variance": 2,
    "rankings": {
      "ff": null,
      "espn": 64,
      "fp": 68,
      "avg": 66
    }
  },
  {
    "rank": 65,
    "name": "Marvin Harrison Jr.",
    "team": "ARI",
    "position": {
      "position": "WR",
      "rank": 29
    },
    "price": 10,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.69,
      "magnitude": 0.69,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": null,
      "espn": 65,
      "fp": 66,
      "avg": 66
    }
  },
  {
    "rank": 66,
    "name": "Courtland Sutton",
    "team": "DEN",
    "position": {
      "position": "WR",
      "rank": 30
    },
    "price": 10,
    "bye": 7,
    "vector": {
      "x": -0.01,
      "y": -0.68,
      "magnitude": 0.68,
      "angle": -91
    },
    "consensusStrength": 1,
    "variance": 2.5,
    "rankings": {
      "ff": null,
      "espn": 66,
      "fp": 71,
      "avg": 69
    }
  },
  {
    "rank": 67,
    "name": "Alec Pierce",
    "team": "IND",
    "position": {
      "position": "WR",
      "rank": 31
    },
    "price": 10,
    "bye": 7,
    "vector": {
      "x": -0.01,
      "y": -0.67,
      "magnitude": 0.67,
      "angle": -91
    },
    "consensusStrength": 1,
    "variance": 3,
    "rankings": {
      "ff": null,
      "espn": 67,
      "fp": 73,
      "avg": 70
    }
  },
  {
    "rank": 68,
    "name": "DK Metcalf",
    "team": "PIT",
    "position": {
      "position": "WR",
      "rank": 32
    },
    "price": 9,
    "bye": 7,
    "vector": {
      "x": -0.01,
      "y": -0.67,
      "magnitude": 0.67,
      "angle": -91
    },
    "consensusStrength": 1,
    "variance": 2,
    "rankings": {
      "ff": null,
      "espn": 68,
      "fp": 72,
      "avg": 70
    }
  },
  {
    "rank": 69,
    "name": "Christian Watson",
    "team": "GB",
    "position": {
      "position": "WR",
      "rank": 33
    },
    "price": 9,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.7,
      "magnitude": 0.7,
      "angle": -88
    },
    "consensusStrength": 0.75,
    "variance": 5.5,
    "rankings": {
      "ff": null,
      "espn": 69,
      "fp": 58,
      "avg": 64
    }
  },
  {
    "rank": 70,
    "name": "Jordyn Tyson",
    "team": "NO",
    "position": {
      "position": "WR",
      "rank": 34
    },
    "price": 9,
    "bye": 7,
    "vector": {
      "x": -0.05,
      "y": -0.63,
      "magnitude": 0.63,
      "angle": -94
    },
    "consensusStrength": 0.75,
    "variance": 10,
    "rankings": {
      "ff": null,
      "espn": 70,
      "fp": 90,
      "avg": 80
    }
  },
  {
    "rank": 71,
    "name": "Kyle Pitts Sr.",
    "team": "ATL",
    "position": {
      "position": "TE",
      "rank": 5
    },
    "price": 8,
    "bye": 7,
    "vector": {
      "x": -0.03,
      "y": -0.64,
      "magnitude": 0.64,
      "angle": -92
    },
    "consensusStrength": 0.75,
    "variance": 5.5,
    "rankings": {
      "ff": null,
      "espn": 71,
      "fp": 82,
      "avg": 77
    }
  },
  {
    "rank": 72,
    "name": "Harold Fannin Jr.",
    "team": "CLE",
    "position": {
      "position": "TE",
      "rank": 6
    },
    "price": 8,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.67,
      "magnitude": 0.67,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": null,
      "espn": 72,
      "fp": 70,
      "avg": 71
    }
  },
  {
    "rank": 73,
    "name": "Sam LaPorta",
    "team": "DET",
    "position": {
      "position": "TE",
      "rank": 7
    },
    "price": 8,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": -0.62,
      "magnitude": 0.62,
      "angle": -94
    },
    "consensusStrength": 0.75,
    "variance": 9,
    "rankings": {
      "ff": null,
      "espn": 73,
      "fp": 91,
      "avg": 82
    }
  },
  {
    "rank": 74,
    "name": "Joe Burrow",
    "team": "CIN",
    "position": {
      "position": "QB",
      "rank": 6
    },
    "price": 7,
    "bye": 7,
    "vector": {
      "x": 0.07,
      "y": -0.73,
      "magnitude": 0.73,
      "angle": -84
    },
    "consensusStrength": 0.5,
    "variance": 15.5,
    "rankings": {
      "ff": null,
      "espn": 74,
      "fp": 43,
      "avg": 59
    }
  },
  {
    "rank": 75,
    "name": "Jaxson Dart",
    "team": "NYG",
    "position": {
      "position": "QB",
      "rank": 7
    },
    "price": 7,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.65,
      "magnitude": 0.65,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": null,
      "espn": 75,
      "fp": 76,
      "avg": 76
    }
  },
  {
    "rank": 76,
    "name": "Parker Washington",
    "team": "JAX",
    "position": {
      "position": "WR",
      "rank": 35
    },
    "price": 8,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": -0.6,
      "magnitude": 0.6,
      "angle": -94
    },
    "consensusStrength": 0.75,
    "variance": 9.5,
    "rankings": {
      "ff": null,
      "espn": 76,
      "fp": 95,
      "avg": 86
    }
  },
  {
    "rank": 77,
    "name": "Mike Evans",
    "team": "SF",
    "position": {
      "position": "WR",
      "rank": 36
    },
    "price": 8,
    "bye": 7,
    "vector": {
      "x": 0.06,
      "y": -0.7,
      "magnitude": 0.71,
      "angle": -85
    },
    "consensusStrength": 0.75,
    "variance": 13.5,
    "rankings": {
      "ff": null,
      "espn": 77,
      "fp": 50,
      "avg": 64
    }
  },
  {
    "rank": 78,
    "name": "Michael Pittman Jr.",
    "team": "PIT",
    "position": {
      "position": "WR",
      "rank": 37
    },
    "price": 8,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": -0.62,
      "magnitude": 0.62,
      "angle": -92
    },
    "consensusStrength": 1,
    "variance": 3.5,
    "rankings": {
      "ff": null,
      "espn": 78,
      "fp": 85,
      "avg": 82
    }
  },
  {
    "rank": 79,
    "name": "Brian Thomas Jr.",
    "team": "JAX",
    "position": {
      "position": "WR",
      "rank": 38
    },
    "price": 8,
    "bye": 7,
    "vector": {
      "x": -0.03,
      "y": -0.6,
      "magnitude": 0.6,
      "angle": -93
    },
    "consensusStrength": 0.75,
    "variance": 6.5,
    "rankings": {
      "ff": null,
      "espn": 79,
      "fp": 92,
      "avg": 86
    }
  },
  {
    "rank": 80,
    "name": "Matthew Golden",
    "team": "GB",
    "position": {
      "position": "WR",
      "rank": 39
    },
    "price": 7,
    "bye": 7,
    "vector": {
      "x": -0.13,
      "y": -0.49,
      "magnitude": 0.51,
      "angle": -105
    },
    "consensusStrength": 0.5,
    "variance": 28,
    "rankings": {
      "ff": null,
      "espn": 80,
      "fp": 136,
      "avg": 108
    }
  },
  {
    "rank": 81,
    "name": "Jakobi Meyers",
    "team": "JAX",
    "position": {
      "position": "WR",
      "rank": 40
    },
    "price": 7,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": -0.61,
      "magnitude": 0.61,
      "angle": -92
    },
    "consensusStrength": 1,
    "variance": 3.5,
    "rankings": {
      "ff": null,
      "espn": 81,
      "fp": 88,
      "avg": 85
    }
  },
  {
    "rank": 82,
    "name": "Trevor Lawrence",
    "team": "JAX",
    "position": {
      "position": "QB",
      "rank": 8
    },
    "price": 7,
    "bye": 7,
    "vector": {
      "x": 0.01,
      "y": -0.62,
      "magnitude": 0.62,
      "angle": -89
    },
    "consensusStrength": 1,
    "variance": 1.6,
    "rankings": {
      "ff": null,
      "espn": 82,
      "fp": 79,
      "avg": 81
    }
  },
  {
    "rank": 83,
    "name": "Dak Prescott",
    "team": "DAL",
    "position": {
      "position": "QB",
      "rank": 9
    },
    "price": 7,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.61,
      "magnitude": 0.61,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 83,
      "fp": 83,
      "avg": 83
    }
  },
  {
    "rank": 84,
    "name": "Bo Nix",
    "team": "DEN",
    "position": {
      "position": "QB",
      "rank": 10
    },
    "price": 7,
    "bye": 7,
    "vector": {
      "x": -0.05,
      "y": -0.56,
      "magnitude": 0.56,
      "angle": -95
    },
    "consensusStrength": 0.75,
    "variance": 10,
    "rankings": {
      "ff": null,
      "espn": 84,
      "fp": 104,
      "avg": 94
    }
  },
  {
    "rank": 85,
    "name": "Brock Purdy",
    "team": "SF",
    "position": {
      "position": "QB",
      "rank": 11
    },
    "price": 6,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": -0.58,
      "magnitude": 0.58,
      "angle": -92
    },
    "consensusStrength": 1,
    "variance": 4,
    "rankings": {
      "ff": null,
      "espn": 85,
      "fp": 93,
      "avg": 89
    }
  },
  {
    "rank": 86,
    "name": "Matthew Stafford",
    "team": "LAR",
    "position": {
      "position": "QB",
      "rank": 12
    },
    "price": 6,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": -0.55,
      "magnitude": 0.55,
      "angle": -95
    },
    "consensusStrength": 0.75,
    "variance": 9.5,
    "rankings": {
      "ff": null,
      "espn": 86,
      "fp": 105,
      "avg": 96
    }
  },
  {
    "rank": 87,
    "name": "Caleb Williams",
    "team": "CHI",
    "position": {
      "position": "QB",
      "rank": 13
    },
    "price": 6,
    "bye": 7,
    "vector": {
      "x": 0.05,
      "y": -0.64,
      "magnitude": 0.64,
      "angle": -86
    },
    "consensusStrength": 0.75,
    "variance": 10,
    "rankings": {
      "ff": null,
      "espn": 87,
      "fp": 67,
      "avg": 77
    }
  },
  {
    "rank": 88,
    "name": "Makai Lemon",
    "team": "PHI",
    "position": {
      "position": "WR",
      "rank": 41
    },
    "price": 6,
    "bye": 7,
    "vector": {
      "x": -0.01,
      "y": -0.57,
      "magnitude": 0.57,
      "angle": -91
    },
    "consensusStrength": 1,
    "variance": 3,
    "rankings": {
      "ff": null,
      "espn": 88,
      "fp": 94,
      "avg": 91
    }
  },
  {
    "rank": 89,
    "name": "Ricky Pearsall",
    "team": "SF",
    "position": {
      "position": "WR",
      "rank": 42
    },
    "price": 6,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": -0.56,
      "magnitude": 0.57,
      "angle": -92
    },
    "consensusStrength": 1,
    "variance": 4,
    "rankings": {
      "ff": null,
      "espn": 89,
      "fp": 97,
      "avg": 93
    }
  },
  {
    "rank": 90,
    "name": "Jordan Addison",
    "team": "MIN",
    "position": {
      "position": "WR",
      "rank": 43
    },
    "price": 5,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": -0.54,
      "magnitude": 0.54,
      "angle": -94
    },
    "consensusStrength": 0.75,
    "variance": 8,
    "rankings": {
      "ff": null,
      "espn": 90,
      "fp": 106,
      "avg": 98
    }
  },
  {
    "rank": 91,
    "name": "Michael Wilson",
    "team": "ARI",
    "position": {
      "position": "WR",
      "rank": 44
    },
    "price": 5,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.61,
      "magnitude": 0.61,
      "angle": -87
    },
    "consensusStrength": 0.75,
    "variance": 6.5,
    "rankings": {
      "ff": null,
      "espn": 91,
      "fp": 78,
      "avg": 85
    }
  },
  {
    "rank": 92,
    "name": "KC Concepcion",
    "team": "CLE",
    "position": {
      "position": "WR",
      "rank": 45
    },
    "price": 5,
    "bye": 7,
    "vector": {
      "x": -0.09,
      "y": -0.48,
      "magnitude": 0.49,
      "angle": -100
    },
    "consensusStrength": 0.5,
    "variance": 18.5,
    "rankings": {
      "ff": null,
      "espn": 92,
      "fp": 129,
      "avg": 111
    }
  },
  {
    "rank": 93,
    "name": "Justin Herbert",
    "team": "LAC",
    "position": {
      "position": "QB",
      "rank": 14
    },
    "price": 5,
    "bye": 7,
    "vector": {
      "x": 0.06,
      "y": -0.62,
      "magnitude": 0.62,
      "angle": -85
    },
    "consensusStrength": 0.75,
    "variance": 12,
    "rankings": {
      "ff": null,
      "espn": 93,
      "fp": 69,
      "avg": 81
    }
  },
  {
    "rank": 94,
    "name": "Patrick Mahomes",
    "team": "KC",
    "position": {
      "position": "QB",
      "rank": 15
    },
    "price": 5,
    "bye": 7,
    "vector": {
      "x": -0.01,
      "y": -0.55,
      "magnitude": 0.55,
      "angle": -91
    },
    "consensusStrength": 1,
    "variance": 2.5,
    "rankings": {
      "ff": null,
      "espn": 94,
      "fp": 99,
      "avg": 97
    }
  },
  {
    "rank": 95,
    "name": "Rico Dowdle",
    "team": "PIT",
    "position": {
      "position": "RB",
      "rank": 28
    },
    "price": 4,
    "bye": 7,
    "vector": {
      "x": 0.02,
      "y": -0.58,
      "magnitude": 0.58,
      "angle": -88
    },
    "consensusStrength": 1,
    "variance": 4.5,
    "rankings": {
      "ff": null,
      "espn": 95,
      "fp": 86,
      "avg": 91
    }
  },
  {
    "rank": 96,
    "name": "Rhamondre Stevenson",
    "team": "NE",
    "position": {
      "position": "RB",
      "rank": 29
    },
    "price": 4,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.58,
      "magnitude": 0.58,
      "angle": -87
    },
    "consensusStrength": 0.75,
    "variance": 6,
    "rankings": {
      "ff": null,
      "espn": 96,
      "fp": 84,
      "avg": 90
    }
  },
  {
    "rank": 97,
    "name": "Jaylen Warren",
    "team": "PIT",
    "position": {
      "position": "RB",
      "rank": 30
    },
    "price": 4,
    "bye": 7,
    "vector": {
      "x": 0.08,
      "y": -0.62,
      "magnitude": 0.63,
      "angle": -83
    },
    "consensusStrength": 0.5,
    "variance": 16.5,
    "rankings": {
      "ff": null,
      "espn": 97,
      "fp": 64,
      "avg": 81
    }
  },
  {
    "rank": 98,
    "name": "Chuba Hubbard",
    "team": "CAR",
    "position": {
      "position": "RB",
      "rank": 31
    },
    "price": 4,
    "bye": 7,
    "vector": {
      "x": 0.04,
      "y": -0.58,
      "magnitude": 0.59,
      "angle": -86
    },
    "consensusStrength": 0.75,
    "variance": 9,
    "rankings": {
      "ff": null,
      "espn": 98,
      "fp": 80,
      "avg": 89
    }
  },
  {
    "rank": 99,
    "name": "J.K. Dobbins",
    "team": "DEN",
    "position": {
      "position": "RB",
      "rank": 32
    },
    "price": 4,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": -0.52,
      "magnitude": 0.52,
      "angle": -92
    },
    "consensusStrength": 1,
    "variance": 4.5,
    "rankings": {
      "ff": null,
      "espn": 99,
      "fp": 108,
      "avg": 104
    }
  },
  {
    "rank": 100,
    "name": "Aaron Jones Sr.",
    "team": "MIN",
    "position": {
      "position": "RB",
      "rank": 33
    },
    "price": 3,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.53,
      "magnitude": 0.53,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": null,
      "espn": 100,
      "fp": 101,
      "avg": 101
    }
  },
  {
    "rank": 101,
    "name": "Dallas Goedert",
    "team": "PHI",
    "position": {
      "position": "TE",
      "rank": 8
    },
    "price": 3,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": -0.48,
      "magnitude": 0.48,
      "angle": -95
    },
    "consensusStrength": 0.75,
    "variance": 9.5,
    "rankings": {
      "ff": null,
      "espn": 101,
      "fp": 120,
      "avg": 111
    }
  },
  {
    "rank": 102,
    "name": "George Kittle",
    "team": "SF",
    "position": {
      "position": "TE",
      "rank": 9
    },
    "price": 3,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": -0.49,
      "magnitude": 0.49,
      "angle": -94
    },
    "consensusStrength": 0.75,
    "variance": 7.5,
    "rankings": {
      "ff": null,
      "espn": 102,
      "fp": 117,
      "avg": 110
    }
  },
  {
    "rank": 103,
    "name": "Mark Andrews",
    "team": "BAL",
    "position": {
      "position": "TE",
      "rank": 10
    },
    "price": 3,
    "bye": 7,
    "vector": {
      "x": -0.07,
      "y": -0.44,
      "magnitude": 0.45,
      "angle": -99
    },
    "consensusStrength": 0.5,
    "variance": 15.5,
    "rankings": {
      "ff": null,
      "espn": 103,
      "fp": 134,
      "avg": 119
    }
  },
  {
    "rank": 104,
    "name": "Travis Kelce",
    "team": "KC",
    "position": {
      "position": "TE",
      "rank": 11
    },
    "price": 3,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.52,
      "magnitude": 0.52,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": null,
      "espn": 104,
      "fp": 103,
      "avg": 104
    }
  },
  {
    "rank": 105,
    "name": "Kenneth Gainwell",
    "team": "TB",
    "position": {
      "position": "RB",
      "rank": 34
    },
    "price": 3,
    "bye": 7,
    "vector": {
      "x": 0.01,
      "y": -0.52,
      "magnitude": 0.52,
      "angle": -89
    },
    "consensusStrength": 1,
    "variance": 2.5,
    "rankings": {
      "ff": null,
      "espn": 105,
      "fp": 100,
      "avg": 103
    }
  },
  {
    "rank": 106,
    "name": "Rachaad White",
    "team": "WAS",
    "position": {
      "position": "RB",
      "rank": 35
    },
    "price": 3,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": -0.48,
      "magnitude": 0.48,
      "angle": -93
    },
    "consensusStrength": 1,
    "variance": 4.5,
    "rankings": {
      "ff": null,
      "espn": 106,
      "fp": 115,
      "avg": 111
    }
  },
  {
    "rank": 107,
    "name": "Kyle Monangai",
    "team": "CHI",
    "position": {
      "position": "RB",
      "rank": 36
    },
    "price": 3,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.52,
      "magnitude": 0.53,
      "angle": -87
    },
    "consensusStrength": 0.75,
    "variance": 5.5,
    "rankings": {
      "ff": null,
      "espn": 107,
      "fp": 96,
      "avg": 102
    }
  },
  {
    "rank": 108,
    "name": "RJ Harvey",
    "team": "DEN",
    "position": {
      "position": "RB",
      "rank": 37
    },
    "price": 3,
    "bye": 7,
    "vector": {
      "x": 0.08,
      "y": -0.57,
      "magnitude": 0.58,
      "angle": -82
    },
    "consensusStrength": 0.5,
    "variance": 16.5,
    "rankings": {
      "ff": null,
      "espn": 108,
      "fp": 75,
      "avg": 92
    }
  },
  {
    "rank": 109,
    "name": "Tucker Kraft",
    "team": "GB",
    "position": {
      "position": "TE",
      "rank": 12
    },
    "price": 3,
    "bye": 7,
    "vector": {
      "x": 0.1,
      "y": -0.59,
      "magnitude": 0.6,
      "angle": -80
    },
    "consensusStrength": 0.5,
    "variance": 22,
    "rankings": {
      "ff": null,
      "espn": 109,
      "fp": 65,
      "avg": 87
    }
  },
  {
    "rank": 110,
    "name": "Jake Ferguson",
    "team": "DAL",
    "position": {
      "position": "TE",
      "rank": 13
    },
    "price": 3,
    "bye": 7,
    "vector": {
      "x": 0.02,
      "y": -0.5,
      "magnitude": 0.5,
      "angle": -88
    },
    "consensusStrength": 1,
    "variance": 4,
    "rankings": {
      "ff": null,
      "espn": 110,
      "fp": 102,
      "avg": 106
    }
  },
  {
    "rank": 111,
    "name": "Dalton Kincaid",
    "team": "BUF",
    "position": {
      "position": "TE",
      "rank": 14
    },
    "price": 3,
    "bye": 7,
    "vector": {
      "x": 0.01,
      "y": -0.49,
      "magnitude": 0.49,
      "angle": -89
    },
    "consensusStrength": 1,
    "variance": 2,
    "rankings": {
      "ff": null,
      "espn": 111,
      "fp": 107,
      "avg": 109
    }
  },
  {
    "rank": 112,
    "name": "Wan'Dale Robinson",
    "team": "TEN",
    "position": {
      "position": "WR",
      "rank": 46
    },
    "price": 3,
    "bye": 7,
    "vector": {
      "x": 0.05,
      "y": -0.53,
      "magnitude": 0.53,
      "angle": -84
    },
    "consensusStrength": 0.75,
    "variance": 11.5,
    "rankings": {
      "ff": null,
      "espn": 112,
      "fp": 89,
      "avg": 101
    }
  },
  {
    "rank": 113,
    "name": "Chris Godwin Jr.",
    "team": "TB",
    "position": {
      "position": "WR",
      "rank": 47
    },
    "price": 3,
    "bye": 7,
    "vector": {
      "x": 0.09,
      "y": -0.56,
      "magnitude": 0.56,
      "angle": -81
    },
    "consensusStrength": 0.5,
    "variance": 18,
    "rankings": {
      "ff": null,
      "espn": 113,
      "fp": 77,
      "avg": 95
    }
  },
  {
    "rank": 114,
    "name": "Jayden Reed",
    "team": "GB",
    "position": {
      "position": "WR",
      "rank": 48
    },
    "price": 3,
    "bye": 7,
    "vector": {
      "x": 0.01,
      "y": -0.47,
      "magnitude": 0.47,
      "angle": -89
    },
    "consensusStrength": 1,
    "variance": 1.6,
    "rankings": {
      "ff": null,
      "espn": 114,
      "fp": 111,
      "avg": 113
    }
  },
  {
    "rank": 115,
    "name": "Jacory Croskey-Merritt",
    "team": "WAS",
    "position": {
      "position": "RB",
      "rank": 38
    },
    "price": 3,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": -0.44,
      "magnitude": 0.44,
      "angle": -92
    },
    "consensusStrength": 1,
    "variance": 4,
    "rankings": {
      "ff": null,
      "espn": 115,
      "fp": 123,
      "avg": 119
    }
  },
  {
    "rank": 116,
    "name": "Kenyon Sadiq",
    "team": "NYJ",
    "position": {
      "position": "TE",
      "rank": 15
    },
    "price": 3,
    "bye": 7,
    "vector": {
      "x": -0.17,
      "y": -0.29,
      "magnitude": 0.33,
      "angle": -121
    },
    "consensusStrength": 0.25,
    "variance": 36,
    "rankings": {
      "ff": null,
      "espn": 116,
      "fp": 188,
      "avg": 152
    }
  },
  {
    "rank": 117,
    "name": "Isaiah Likely",
    "team": "NYG",
    "position": {
      "position": "TE",
      "rank": 16
    },
    "price": 3,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": -0.43,
      "magnitude": 0.44,
      "angle": -92
    },
    "consensusStrength": 1,
    "variance": 3.5,
    "rankings": {
      "ff": null,
      "espn": 117,
      "fp": 124,
      "avg": 121
    }
  },
  {
    "rank": 118,
    "name": "Hunter Henry",
    "team": "NE",
    "position": {
      "position": "TE",
      "rank": 17
    },
    "price": 3,
    "bye": 7,
    "vector": {
      "x": -0.09,
      "y": -0.36,
      "magnitude": 0.37,
      "angle": -103
    },
    "consensusStrength": 0.5,
    "variance": 18,
    "rankings": {
      "ff": null,
      "espn": 118,
      "fp": 154,
      "avg": 136
    }
  },
  {
    "rank": 119,
    "name": "T.J. Hockenson",
    "team": "MIN",
    "position": {
      "position": "TE",
      "rank": 18
    },
    "price": 3,
    "bye": 7,
    "vector": {
      "x": -0.14,
      "y": -0.3,
      "magnitude": 0.33,
      "angle": -114
    },
    "consensusStrength": 0.5,
    "variance": 29,
    "rankings": {
      "ff": null,
      "espn": 119,
      "fp": 177,
      "avg": 148
    }
  },
  {
    "rank": 120,
    "name": "Jonathon Brooks",
    "team": "CAR",
    "position": {
      "position": "RB",
      "rank": 39
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": -0.06,
      "y": -0.38,
      "magnitude": 0.38,
      "angle": -99
    },
    "consensusStrength": 0.75,
    "variance": 12.5,
    "rankings": {
      "ff": null,
      "espn": 120,
      "fp": 145,
      "avg": 133
    }
  },
  {
    "rank": 121,
    "name": "Blake Corum",
    "team": "LAR",
    "position": {
      "position": "RB",
      "rank": 40
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.46,
      "magnitude": 0.46,
      "angle": -86
    },
    "consensusStrength": 0.75,
    "variance": 6,
    "rankings": {
      "ff": null,
      "espn": 121,
      "fp": 109,
      "avg": 115
    }
  },
  {
    "rank": 122,
    "name": "Woody Marks",
    "team": "HOU",
    "position": {
      "position": "RB",
      "rank": 41
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": -0.4,
      "magnitude": 0.4,
      "angle": -93
    },
    "consensusStrength": 1,
    "variance": 5,
    "rankings": {
      "ff": null,
      "espn": 122,
      "fp": 132,
      "avg": 127
    }
  },
  {
    "rank": 123,
    "name": "Jordan Mason",
    "team": "MIN",
    "position": {
      "position": "RB",
      "rank": 42
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": -0.01,
      "y": -0.41,
      "magnitude": 0.41,
      "angle": -92
    },
    "consensusStrength": 1,
    "variance": 2.5,
    "rankings": {
      "ff": null,
      "espn": 123,
      "fp": 128,
      "avg": 126
    }
  },
  {
    "rank": 124,
    "name": "Khalil Shakir",
    "team": "BUF",
    "position": {
      "position": "WR",
      "rank": 49
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.45,
      "magnitude": 0.45,
      "angle": -86
    },
    "consensusStrength": 0.75,
    "variance": 6,
    "rankings": {
      "ff": null,
      "espn": 124,
      "fp": 112,
      "avg": 118
    }
  },
  {
    "rank": 125,
    "name": "Josh Downs",
    "team": "IND",
    "position": {
      "position": "WR",
      "rank": 50
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": 0.06,
      "y": -0.48,
      "magnitude": 0.48,
      "angle": -82
    },
    "consensusStrength": 0.75,
    "variance": 13.5,
    "rankings": {
      "ff": null,
      "espn": 125,
      "fp": 98,
      "avg": 112
    }
  },
  {
    "rank": 126,
    "name": "Romeo Doubs",
    "team": "NE",
    "position": {
      "position": "WR",
      "rank": 51
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.41,
      "magnitude": 0.41,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 126,
      "fp": 126,
      "avg": 126
    }
  },
  {
    "rank": 127,
    "name": "Xavier Worthy",
    "team": "KC",
    "position": {
      "position": "WR",
      "rank": 52
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": 0.01,
      "y": -0.42,
      "magnitude": 0.42,
      "angle": -88
    },
    "consensusStrength": 1,
    "variance": 2.5,
    "rankings": {
      "ff": null,
      "espn": 127,
      "fp": 122,
      "avg": 125
    }
  },
  {
    "rank": 128,
    "name": "Quentin Johnston",
    "team": "LAC",
    "position": {
      "position": "WR",
      "rank": 53
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.43,
      "magnitude": 0.43,
      "angle": -86
    },
    "consensusStrength": 0.75,
    "variance": 7,
    "rankings": {
      "ff": null,
      "espn": 128,
      "fp": 114,
      "avg": 121
    }
  },
  {
    "rank": 129,
    "name": "Jayden Higgins",
    "team": "HOU",
    "position": {
      "position": "WR",
      "rank": 54
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.42,
      "magnitude": 0.42,
      "angle": -86
    },
    "consensusStrength": 0.75,
    "variance": 5.5,
    "rankings": {
      "ff": null,
      "espn": 129,
      "fp": 118,
      "avg": 124
    }
  },
  {
    "rank": 130,
    "name": "Jerry Jeudy",
    "team": "CLE",
    "position": {
      "position": "WR",
      "rank": 55
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": -0.35,
      "magnitude": 0.35,
      "angle": -97
    },
    "consensusStrength": 0.75,
    "variance": 9,
    "rankings": {
      "ff": null,
      "espn": 130,
      "fp": 148,
      "avg": 139
    }
  },
  {
    "rank": 131,
    "name": "Jalen Coker",
    "team": "CAR",
    "position": {
      "position": "WR",
      "rank": 56
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.39,
      "magnitude": 0.39,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 131,
      "fp": 131,
      "avg": 131
    }
  },
  {
    "rank": 132,
    "name": "Rashid Shaheed",
    "team": "SEA",
    "position": {
      "position": "WR",
      "rank": 57
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": -0.34,
      "magnitude": 0.34,
      "angle": -97
    },
    "consensusStrength": 0.75,
    "variance": 8.5,
    "rankings": {
      "ff": null,
      "espn": 132,
      "fp": 149,
      "avg": 141
    }
  },
  {
    "rank": 133,
    "name": "Kyler Murray",
    "team": "MIN",
    "position": {
      "position": "QB",
      "rank": 16
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": 0.05,
      "y": -0.42,
      "magnitude": 0.43,
      "angle": -84
    },
    "consensusStrength": 0.75,
    "variance": 10,
    "rankings": {
      "ff": null,
      "espn": 133,
      "fp": 113,
      "avg": 123
    }
  },
  {
    "rank": 134,
    "name": "Tyler Shough",
    "team": "NO",
    "position": {
      "position": "QB",
      "rank": 17
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.4,
      "magnitude": 0.4,
      "angle": -86
    },
    "consensusStrength": 0.75,
    "variance": 6.5,
    "rankings": {
      "ff": null,
      "espn": 134,
      "fp": 121,
      "avg": 128
    }
  },
  {
    "rank": 135,
    "name": "Daniel Jones",
    "team": "IND",
    "position": {
      "position": "QB",
      "rank": 18
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": -0.05,
      "y": -0.31,
      "magnitude": 0.32,
      "angle": -100
    },
    "consensusStrength": 0.75,
    "variance": 11.5,
    "rankings": {
      "ff": null,
      "espn": 135,
      "fp": 158,
      "avg": 147
    }
  },
  {
    "rank": 136,
    "name": "Jared Goff",
    "team": "DET",
    "position": {
      "position": "QB",
      "rank": 19
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": 0.06,
      "y": -0.42,
      "magnitude": 0.43,
      "angle": -82
    },
    "consensusStrength": 0.75,
    "variance": 13,
    "rankings": {
      "ff": null,
      "espn": 136,
      "fp": 110,
      "avg": 123
    }
  },
  {
    "rank": 137,
    "name": "Zach Charbonnet",
    "team": "SEA",
    "position": {
      "position": "RB",
      "rank": 43
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.36,
      "magnitude": 0.36,
      "angle": -89
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": null,
      "espn": 137,
      "fp": 135,
      "avg": 136
    }
  },
  {
    "rank": 138,
    "name": "Isiah Pacheco",
    "team": "DET",
    "position": {
      "position": "RB",
      "rank": 44
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": -0.33,
      "magnitude": 0.33,
      "angle": -94
    },
    "consensusStrength": 1,
    "variance": 4.5,
    "rankings": {
      "ff": null,
      "espn": 138,
      "fp": 147,
      "avg": 143
    }
  },
  {
    "rank": 139,
    "name": "Alvin Kamara",
    "team": "NO",
    "position": {
      "position": "RB",
      "rank": 45
    },
    "price": 2,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": -0.35,
      "magnitude": 0.35,
      "angle": -90
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": null,
      "espn": 139,
      "fp": 140,
      "avg": 140
    }
  },
  {
    "rank": 140,
    "name": "Chris Rodriguez Jr.",
    "team": "JAX",
    "position": {
      "position": "RB",
      "rank": 46
    },
    "price": 1,
    "bye": 7,
    "vector": {
      "x": -0.01,
      "y": -0.33,
      "magnitude": 0.33,
      "angle": -92
    },
    "consensusStrength": 1,
    "variance": 3,
    "rankings": {
      "ff": null,
      "espn": 140,
      "fp": 146,
      "avg": 143
    }
  },
  {
    "rank": 141,
    "name": "Braelon Allen",
    "team": "NYJ",
    "position": {
      "position": "RB",
      "rank": 47
    },
    "price": 1,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": -0.3,
      "magnitude": 0.3,
      "angle": -98
    },
    "consensusStrength": 0.75,
    "variance": 9,
    "rankings": {
      "ff": null,
      "espn": 141,
      "fp": 159,
      "avg": 150
    }
  },
  {
    "rank": 142,
    "name": "Tank Bigsby",
    "team": "PHI",
    "position": {
      "position": "RB",
      "rank": 48
    },
    "price": 1,
    "bye": 7,
    "vector": {
      "x": -0.08,
      "y": -0.26,
      "magnitude": 0.27,
      "angle": -106
    },
    "consensusStrength": 0.5,
    "variance": 16,
    "rankings": {
      "ff": null,
      "espn": 142,
      "fp": 174,
      "avg": 158
    }
  },
  {
    "rank": 143,
    "name": "Jalen McMillan",
    "team": "TB",
    "position": {
      "position": "WR",
      "rank": 58
    },
    "price": 1,
    "bye": 7,
    "vector": {
      "x": -0.05,
      "y": -0.28,
      "magnitude": 0.28,
      "angle": -101
    },
    "consensusStrength": 0.75,
    "variance": 11,
    "rankings": {
      "ff": null,
      "espn": 143,
      "fp": 165,
      "avg": 154
    }
  },
  {
    "rank": 144,
    "name": "Calvin Ridley",
    "team": "TEN",
    "position": {
      "position": "WR",
      "rank": 59
    },
    "price": 1,
    "bye": 7,
    "vector": {
      "x": -0.1,
      "y": -0.22,
      "magnitude": 0.25,
      "angle": -114
    },
    "consensusStrength": 0.5,
    "variance": 21,
    "rankings": {
      "ff": null,
      "espn": 144,
      "fp": 186,
      "avg": 165
    }
  },
  {
    "rank": 145,
    "name": "Denzel Boston",
    "team": "CLE",
    "position": {
      "position": "WR",
      "rank": 60
    },
    "price": 1,
    "bye": 7,
    "vector": {
      "x": -0.01,
      "y": -0.3,
      "magnitude": 0.31,
      "angle": -93
    },
    "consensusStrength": 1,
    "variance": 3,
    "rankings": {
      "ff": null,
      "espn": 145,
      "fp": 151,
      "avg": 148
    }
  },
  {
    "rank": 146,
    "name": "Travis Hunter",
    "team": "JAX",
    "position": {
      "position": "WR",
      "rank": 61
    },
    "price": 1,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": -0.29,
      "magnitude": 0.29,
      "angle": -94
    },
    "consensusStrength": 1,
    "variance": 4.5,
    "rankings": {
      "ff": null,
      "espn": 146,
      "fp": 155,
      "avg": 151
    }
  },
  {
    "rank": 147,
    "name": "Germie Bernard",
    "team": "PIT",
    "position": {
      "position": "WR",
      "rank": 62
    },
    "price": 1,
    "bye": 7,
    "vector": {
      "x": -0.23,
      "y": -0.08,
      "magnitude": 0.24,
      "angle": -161
    },
    "consensusStrength": 0.25,
    "variance": 48.5,
    "rankings": {
      "ff": null,
      "espn": 147,
      "fp": 244,
      "avg": 196
    }
  },
  {
    "rank": 148,
    "name": "Antonio Williams",
    "team": "WAS",
    "position": {
      "position": "WR",
      "rank": 63
    },
    "price": 1,
    "bye": 7,
    "vector": {
      "x": -0.15,
      "y": -0.15,
      "magnitude": 0.22,
      "angle": -135
    },
    "consensusStrength": 0.25,
    "variance": 32.5,
    "rankings": {
      "ff": null,
      "espn": 148,
      "fp": 213,
      "avg": 181
    }
  },
  {
    "rank": 149,
    "name": "Baker Mayfield",
    "team": "TB",
    "position": {
      "position": "QB",
      "rank": 20
    },
    "price": 1,
    "bye": 7,
    "vector": {
      "x": 0.07,
      "y": -0.37,
      "magnitude": 0.38,
      "angle": -79
    },
    "consensusStrength": 0.75,
    "variance": 15,
    "rankings": {
      "ff": null,
      "espn": 149,
      "fp": 119,
      "avg": 134
    }
  },
  {
    "rank": 150,
    "name": "Malik Willis",
    "team": "MIA",
    "position": {
      "position": "QB",
      "rank": 21
    },
    "price": 1,
    "bye": 7,
    "vector": {
      "x": 0.05,
      "y": -0.35,
      "magnitude": 0.35,
      "angle": -81
    },
    "consensusStrength": 0.75,
    "variance": 11.5,
    "rankings": {
      "ff": null,
      "espn": 150,
      "fp": 127,
      "avg": 139
    }
  },
  {
    "rank": 151,
    "name": "Darnell Mooney",
    "team": "NYG",
    "position": {
      "position": "WR",
      "rank": 64
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.11,
      "y": -0.18,
      "magnitude": 0.21,
      "angle": -122
    },
    "consensusStrength": 0.5,
    "variance": 23.5,
    "rankings": {
      "ff": null,
      "espn": 151,
      "fp": 198,
      "avg": 175
    }
  },
  {
    "rank": 152,
    "name": "Omar Cooper Jr.",
    "team": "NYJ",
    "position": {
      "position": "WR",
      "rank": 65
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.01,
      "y": -0.28,
      "magnitude": 0.28,
      "angle": -92
    },
    "consensusStrength": 1,
    "variance": 2,
    "rankings": {
      "ff": null,
      "espn": 152,
      "fp": 156,
      "avg": 154
    }
  },
  {
    "rank": 153,
    "name": "Adonai Mitchell",
    "team": "NYJ",
    "position": {
      "position": "WR",
      "rank": 66
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": -0.26,
      "magnitude": 0.26,
      "angle": -94
    },
    "consensusStrength": 1,
    "variance": 4,
    "rankings": {
      "ff": null,
      "espn": 153,
      "fp": 161,
      "avg": 157
    }
  },
  {
    "rank": 154,
    "name": "Mike Washington Jr.",
    "team": "LV",
    "position": {
      "position": "RB",
      "rank": 49
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.11,
      "y": -0.16,
      "magnitude": 0.2,
      "angle": -125
    },
    "consensusStrength": 0.5,
    "variance": 24,
    "rankings": {
      "ff": null,
      "espn": 154,
      "fp": 202,
      "avg": 178
    }
  },
  {
    "rank": 155,
    "name": "Ray Davis",
    "team": "BUF",
    "position": {
      "position": "RB",
      "rank": 50
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.1,
      "y": -0.17,
      "magnitude": 0.2,
      "angle": -122
    },
    "consensusStrength": 0.5,
    "variance": 22,
    "rankings": {
      "ff": null,
      "espn": 155,
      "fp": 199,
      "avg": 177
    }
  },
  {
    "rank": 156,
    "name": "Tyrone Tracy Jr.",
    "team": "NYG",
    "position": {
      "position": "RB",
      "rank": 51
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.07,
      "y": -0.34,
      "magnitude": 0.35,
      "angle": -78
    },
    "consensusStrength": 0.5,
    "variance": 15.5,
    "rankings": {
      "ff": null,
      "espn": 156,
      "fp": 125,
      "avg": 141
    }
  },
  {
    "rank": 157,
    "name": "Brian Robinson Jr.",
    "team": "ATL",
    "position": {
      "position": "RB",
      "rank": 52
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.01,
      "y": -0.26,
      "magnitude": 0.26,
      "angle": -92
    },
    "consensusStrength": 1,
    "variance": 1.6,
    "rankings": {
      "ff": null,
      "espn": 157,
      "fp": 160,
      "avg": 159
    }
  },
  {
    "rank": 158,
    "name": "Tyjae Spears",
    "team": "TEN",
    "position": {
      "position": "RB",
      "rank": 53
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.04,
      "y": -0.3,
      "magnitude": 0.31,
      "angle": -82
    },
    "consensusStrength": 0.75,
    "variance": 9.5,
    "rankings": {
      "ff": null,
      "espn": 158,
      "fp": 139,
      "avg": 149
    }
  },
  {
    "rank": 159,
    "name": "Brenton Strange",
    "team": "JAX",
    "position": {
      "position": "TE",
      "rank": 19
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.04,
      "y": -0.29,
      "magnitude": 0.3,
      "angle": -82
    },
    "consensusStrength": 0.75,
    "variance": 8.5,
    "rankings": {
      "ff": null,
      "espn": 159,
      "fp": 142,
      "avg": 151
    }
  },
  {
    "rank": 160,
    "name": "Terrance Ferguson",
    "team": "LAR",
    "position": {
      "position": "TE",
      "rank": 20
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.17,
      "y": -0.07,
      "magnitude": 0.19,
      "angle": -157
    },
    "consensusStrength": 0.25,
    "variance": 37,
    "rankings": {
      "ff": null,
      "espn": 160,
      "fp": 234,
      "avg": 197
    }
  },
  {
    "rank": 161,
    "name": "Tre Tucker",
    "team": "LV",
    "position": {
      "position": "WR",
      "rank": 67
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.03,
      "y": -0.21,
      "magnitude": 0.22,
      "angle": -98
    },
    "consensusStrength": 0.75,
    "variance": 6,
    "rankings": {
      "ff": null,
      "espn": 161,
      "fp": 173,
      "avg": 167
    }
  },
  {
    "rank": 162,
    "name": "Jalen Nailor",
    "team": "LV",
    "position": {
      "position": "WR",
      "rank": 68
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.16,
      "y": -0.08,
      "magnitude": 0.18,
      "angle": -152
    },
    "consensusStrength": 0.25,
    "variance": 33,
    "rankings": {
      "ff": null,
      "espn": 162,
      "fp": 228,
      "avg": 195
    }
  },
  {
    "rank": 163,
    "name": "Rashod Bateman",
    "team": "BAL",
    "position": {
      "position": "WR",
      "rank": 69
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.16,
      "y": -0.07,
      "magnitude": 0.18,
      "angle": -156
    },
    "consensusStrength": 0.25,
    "variance": 34,
    "rankings": {
      "ff": null,
      "espn": 163,
      "fp": 231,
      "avg": 197
    }
  },
  {
    "rank": 164,
    "name": "Jauan Jennings",
    "team": "MIN",
    "position": {
      "position": "WR",
      "rank": 70
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.26,
      "magnitude": 0.26,
      "angle": -84
    },
    "consensusStrength": 0.75,
    "variance": 5.5,
    "rankings": {
      "ff": null,
      "espn": 164,
      "fp": 153,
      "avg": 159
    }
  },
  {
    "rank": 165,
    "name": "Chris Bell",
    "team": "MIA",
    "position": {
      "position": "WR",
      "rank": 71
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.22,
      "y": 0,
      "magnitude": 0.22,
      "angle": -179
    },
    "consensusStrength": 0.25,
    "variance": 47,
    "rankings": {
      "ff": null,
      "espn": 165,
      "fp": 259,
      "avg": 212
    }
  },
  {
    "rank": 166,
    "name": "Tyler Allgeier",
    "team": "ARI",
    "position": {
      "position": "RB",
      "rank": 54
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.09,
      "y": -0.3,
      "magnitude": 0.32,
      "angle": -74
    },
    "consensusStrength": 0.5,
    "variance": 18,
    "rankings": {
      "ff": null,
      "espn": 166,
      "fp": 130,
      "avg": 148
    }
  },
  {
    "rank": 167,
    "name": "James Conner",
    "team": "ARI",
    "position": {
      "position": "RB",
      "rank": 55
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.04,
      "y": -0.26,
      "magnitude": 0.26,
      "angle": -81
    },
    "consensusStrength": 0.75,
    "variance": 8.5,
    "rankings": {
      "ff": null,
      "espn": 167,
      "fp": 150,
      "avg": 159
    }
  },
  {
    "rank": 168,
    "name": "Keaton Mitchell",
    "team": "LAC",
    "position": {
      "position": "RB",
      "rank": 56
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.24,
      "magnitude": 0.24,
      "angle": -84
    },
    "consensusStrength": 0.75,
    "variance": 5.5,
    "rankings": {
      "ff": null,
      "espn": 168,
      "fp": 157,
      "avg": 163
    }
  },
  {
    "rank": 169,
    "name": "Broncos D/ST",
    "team": "DEN",
    "position": {
      "position": "DST",
      "rank": 1
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.31,
      "y": 0.1,
      "magnitude": 0.33,
      "angle": 161
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 169,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 170,
    "name": "Texans D/ST",
    "team": "HOU",
    "position": {
      "position": "DST",
      "rank": 2
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.31,
      "y": 0.11,
      "magnitude": 0.33,
      "angle": 161
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 170,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 171,
    "name": "Steelers D/ST",
    "team": "PIT",
    "position": {
      "position": "DST",
      "rank": 3
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.31,
      "y": 0.11,
      "magnitude": 0.32,
      "angle": 160
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 171,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 172,
    "name": "Seahawks D/ST",
    "team": "SEA",
    "position": {
      "position": "DST",
      "rank": 4
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.3,
      "y": 0.11,
      "magnitude": 0.32,
      "angle": 160
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 172,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 173,
    "name": "Rams D/ST",
    "team": "LAR",
    "position": {
      "position": "DST",
      "rank": 5
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.3,
      "y": 0.11,
      "magnitude": 0.32,
      "angle": 159
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 173,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 174,
    "name": "Ravens D/ST",
    "team": "BAL",
    "position": {
      "position": "DST",
      "rank": 6
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.3,
      "y": 0.12,
      "magnitude": 0.32,
      "angle": 159
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 174,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 175,
    "name": "Eagles D/ST",
    "team": "PHI",
    "position": {
      "position": "DST",
      "rank": 7
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.3,
      "y": 0.12,
      "magnitude": 0.32,
      "angle": 158
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 175,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 176,
    "name": "Browns D/ST",
    "team": "CLE",
    "position": {
      "position": "DST",
      "rank": 8
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.29,
      "y": 0.12,
      "magnitude": 0.32,
      "angle": 158
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 176,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 177,
    "name": "Patriots D/ST",
    "team": "NE",
    "position": {
      "position": "DST",
      "rank": 9
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.29,
      "y": 0.12,
      "magnitude": 0.32,
      "angle": 157
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 177,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 178,
    "name": "Lions D/ST",
    "team": "DET",
    "position": {
      "position": "DST",
      "rank": 10
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.29,
      "y": 0.13,
      "magnitude": 0.31,
      "angle": 156
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 178,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 179,
    "name": "Chiefs D/ST",
    "team": "KC",
    "position": {
      "position": "DST",
      "rank": 11
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.29,
      "y": 0.13,
      "magnitude": 0.31,
      "angle": 156
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 179,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 180,
    "name": "Chargers D/ST",
    "team": "LAC",
    "position": {
      "position": "DST",
      "rank": 12
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.28,
      "y": 0.13,
      "magnitude": 0.31,
      "angle": 155
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 180,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 181,
    "name": "Brandon Aubrey",
    "team": "DAL",
    "position": {
      "position": "K",
      "rank": 1
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.03,
      "y": -0.12,
      "magnitude": 0.13,
      "angle": -102
    },
    "consensusStrength": 0.75,
    "variance": 5.5,
    "rankings": {
      "ff": null,
      "espn": 181,
      "fp": 192,
      "avg": 187
    }
  },
  {
    "rank": 182,
    "name": "Cameron Dicker",
    "team": "LAC",
    "position": {
      "position": "K",
      "rank": 2
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": -0.1,
      "magnitude": 0.11,
      "angle": -114
    },
    "consensusStrength": 0.75,
    "variance": 9.5,
    "rankings": {
      "ff": null,
      "espn": 182,
      "fp": 201,
      "avg": 192
    }
  },
  {
    "rank": 183,
    "name": "Jason Myers",
    "team": "SEA",
    "position": {
      "position": "K",
      "rank": 3
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.05,
      "y": -0.09,
      "magnitude": 0.1,
      "angle": -119
    },
    "consensusStrength": 0.75,
    "variance": 10.5,
    "rankings": {
      "ff": null,
      "espn": 183,
      "fp": 204,
      "avg": 194
    }
  },
  {
    "rank": 184,
    "name": "Harrison Mevis",
    "team": "LAR",
    "position": {
      "position": "K",
      "rank": 4
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.16,
      "y": 0.03,
      "magnitude": 0.16,
      "angle": 171
    },
    "consensusStrength": 0.25,
    "variance": 34,
    "rankings": {
      "ff": null,
      "espn": 184,
      "fp": 252,
      "avg": 218
    }
  },
  {
    "rank": 185,
    "name": "Ka'imi Fairbairn",
    "team": "HOU",
    "position": {
      "position": "K",
      "rank": 5
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": -0.09,
      "magnitude": 0.1,
      "angle": -116
    },
    "consensusStrength": 0.75,
    "variance": 9,
    "rankings": {
      "ff": null,
      "espn": 185,
      "fp": 203,
      "avg": 194
    }
  },
  {
    "rank": 186,
    "name": "Eddy Pineiro",
    "team": "SF",
    "position": {
      "position": "K",
      "rank": 6
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.06,
      "y": -0.06,
      "magnitude": 0.09,
      "angle": -134
    },
    "consensusStrength": 0.75,
    "variance": 13,
    "rankings": {
      "ff": null,
      "espn": 186,
      "fp": 212,
      "avg": 199
    }
  },
  {
    "rank": 187,
    "name": "Harrison Butker",
    "team": "KC",
    "position": {
      "position": "K",
      "rank": 7
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.13,
      "y": 0.01,
      "magnitude": 0.13,
      "angle": 175
    },
    "consensusStrength": 0.5,
    "variance": 28,
    "rankings": {
      "ff": null,
      "espn": 187,
      "fp": 243,
      "avg": 215
    }
  },
  {
    "rank": 188,
    "name": "Cam Little",
    "team": "JAX",
    "position": {
      "position": "K",
      "rank": 8
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": -0.07,
      "magnitude": 0.08,
      "angle": -120
    },
    "consensusStrength": 0.75,
    "variance": 9,
    "rankings": {
      "ff": null,
      "espn": 188,
      "fp": 206,
      "avg": 197
    }
  },
  {
    "rank": 189,
    "name": "Jake Bates",
    "team": "DET",
    "position": {
      "position": "K",
      "rank": 9
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.11,
      "y": 0,
      "magnitude": 0.11,
      "angle": -179
    },
    "consensusStrength": 0.5,
    "variance": 23,
    "rankings": {
      "ff": null,
      "espn": 189,
      "fp": 235,
      "avg": 212
    }
  },
  {
    "rank": 190,
    "name": "Tyler Loop",
    "team": "BAL",
    "position": {
      "position": "K",
      "rank": 10
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.06,
      "y": -0.05,
      "magnitude": 0.08,
      "angle": -141
    },
    "consensusStrength": 0.75,
    "variance": 12.5,
    "rankings": {
      "ff": null,
      "espn": 190,
      "fp": 215,
      "avg": 203
    }
  },
  {
    "rank": 191,
    "name": "Cairo Santos",
    "team": "CHI",
    "position": {
      "position": "K",
      "rank": 11
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.08,
      "y": -0.03,
      "magnitude": 0.08,
      "angle": -161
    },
    "consensusStrength": 0.5,
    "variance": 16,
    "rankings": {
      "ff": null,
      "espn": 191,
      "fp": 223,
      "avg": 207
    }
  },
  {
    "rank": 192,
    "name": "Will Reichard",
    "team": "MIN",
    "position": {
      "position": "K",
      "rank": 12
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.24,
      "y": 0.14,
      "magnitude": 0.28,
      "angle": 149
    },
    "consensusStrength": 0.25,
    "variance": 50.5,
    "rankings": {
      "ff": null,
      "espn": 192,
      "fp": 293,
      "avg": 243
    }
  },
  {
    "rank": 193,
    "name": "Justice Hill",
    "team": "BAL",
    "position": {
      "position": "RB",
      "rank": 57
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.14,
      "y": 0.05,
      "magnitude": 0.15,
      "angle": 161
    },
    "consensusStrength": 0.5,
    "variance": 30,
    "rankings": {
      "ff": null,
      "espn": 193,
      "fp": 253,
      "avg": 223
    }
  },
  {
    "rank": 194,
    "name": "Juwan Johnson",
    "team": "NO",
    "position": {
      "position": "TE",
      "rank": 21
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.13,
      "y": -0.22,
      "magnitude": 0.26,
      "angle": -59
    },
    "consensusStrength": 0.5,
    "variance": 28.5,
    "rankings": {
      "ff": null,
      "espn": 194,
      "fp": 137,
      "avg": 166
    }
  },
  {
    "rank": 195,
    "name": "Jordan James",
    "team": "SF",
    "position": {
      "position": "RB",
      "rank": 58
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.22,
      "y": 0.14,
      "magnitude": 0.26,
      "angle": 148
    },
    "consensusStrength": 0.25,
    "variance": 47,
    "rankings": {
      "ff": null,
      "espn": 195,
      "fp": 289,
      "avg": 242
    }
  },
  {
    "rank": 196,
    "name": "Kaelon Black",
    "team": "SF",
    "position": {
      "position": "RB",
      "rank": 59
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.29,
      "y": 0.21,
      "magnitude": 0.35,
      "angle": 144
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 196,
      "fp": 317,
      "avg": 300
    }
  },
  {
    "rank": 197,
    "name": "Jack Bech",
    "team": "LV",
    "position": {
      "position": "WR",
      "rank": 72
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.12,
      "y": 0.04,
      "magnitude": 0.12,
      "angle": 160
    },
    "consensusStrength": 0.5,
    "variance": 24.5,
    "rankings": {
      "ff": null,
      "espn": 197,
      "fp": 246,
      "avg": 222
    }
  },
  {
    "rank": 198,
    "name": "Jordan Love",
    "team": "GB",
    "position": {
      "position": "QB",
      "rank": 22
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.19,
      "y": -0.26,
      "magnitude": 0.33,
      "angle": -54
    },
    "consensusStrength": 0.25,
    "variance": 41,
    "rankings": {
      "ff": null,
      "espn": 198,
      "fp": 116,
      "avg": 157
    }
  },
  {
    "rank": 199,
    "name": "Cam Ward",
    "team": "TEN",
    "position": {
      "position": "QB",
      "rank": 23
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.13,
      "y": -0.19,
      "magnitude": 0.23,
      "angle": -56
    },
    "consensusStrength": 0.5,
    "variance": 27.5,
    "rankings": {
      "ff": null,
      "espn": 199,
      "fp": 144,
      "avg": 172
    }
  },
  {
    "rank": 200,
    "name": "C.J. Stroud",
    "team": "HOU",
    "position": {
      "position": "QB",
      "rank": 24
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.16,
      "y": -0.22,
      "magnitude": 0.27,
      "angle": -54
    },
    "consensusStrength": 0.25,
    "variance": 33.5,
    "rankings": {
      "ff": null,
      "espn": 200,
      "fp": 133,
      "avg": 167
    }
  },
  {
    "rank": 201,
    "name": "Tank Dell",
    "team": "HOU",
    "position": {
      "position": "WR",
      "rank": 73
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.07,
      "y": 0.01,
      "magnitude": 0.07,
      "angle": 168
    },
    "consensusStrength": 0.75,
    "variance": 14.5,
    "rankings": {
      "ff": null,
      "espn": 201,
      "fp": 230,
      "avg": 216
    }
  },
  {
    "rank": 202,
    "name": "Brandon Aiyuk",
    "team": "SF",
    "position": {
      "position": "WR",
      "rank": 74
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.06,
      "y": -0.11,
      "magnitude": 0.13,
      "angle": -61
    },
    "consensusStrength": 0.75,
    "variance": 13.5,
    "rankings": {
      "ff": null,
      "espn": 202,
      "fp": 175,
      "avg": 189
    }
  },
  {
    "rank": 203,
    "name": "Deebo Samuel Sr.",
    "team": "FA",
    "position": {
      "position": "WR",
      "rank": 75
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.09,
      "y": -0.13,
      "magnitude": 0.16,
      "angle": -57
    },
    "consensusStrength": 0.5,
    "variance": 18.5,
    "rankings": {
      "ff": null,
      "espn": 203,
      "fp": 166,
      "avg": 185
    }
  },
  {
    "rank": 204,
    "name": "Stefon Diggs",
    "team": "FA",
    "position": {
      "position": "WR",
      "rank": 76
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.08,
      "y": -0.12,
      "magnitude": 0.14,
      "angle": -57
    },
    "consensusStrength": 0.5,
    "variance": 16.5,
    "rankings": {
      "ff": null,
      "espn": 204,
      "fp": 171,
      "avg": 188
    }
  },
  {
    "rank": 205,
    "name": "Tre Harris",
    "team": "LAC",
    "position": {
      "position": "WR",
      "rank": 77
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.09,
      "y": -0.13,
      "magnitude": 0.15,
      "angle": -54
    },
    "consensusStrength": 0.5,
    "variance": 19,
    "rankings": {
      "ff": null,
      "espn": 205,
      "fp": 167,
      "avg": 186
    }
  },
  {
    "rank": 206,
    "name": "Pat Freiermuth",
    "team": "PIT",
    "position": {
      "position": "TE",
      "rank": 22
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.08,
      "y": 0.05,
      "magnitude": 0.09,
      "angle": 148
    },
    "consensusStrength": 0.5,
    "variance": 17,
    "rankings": {
      "ff": null,
      "espn": 206,
      "fp": 240,
      "avg": 223
    }
  },
  {
    "rank": 207,
    "name": "Dalton Schultz",
    "team": "HOU",
    "position": {
      "position": "TE",
      "rank": 23
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.1,
      "y": -0.13,
      "magnitude": 0.17,
      "angle": -51
    },
    "consensusStrength": 0.5,
    "variance": 22,
    "rankings": {
      "ff": null,
      "espn": 207,
      "fp": 163,
      "avg": 185
    }
  },
  {
    "rank": 208,
    "name": "Isaac TeSlaa",
    "team": "DET",
    "position": {
      "position": "WR",
      "rank": 78
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.04,
      "y": -0.07,
      "magnitude": 0.08,
      "angle": -56
    },
    "consensusStrength": 0.75,
    "variance": 9.5,
    "rankings": {
      "ff": null,
      "espn": 208,
      "fp": 189,
      "avg": 199
    }
  },
  {
    "rank": 209,
    "name": "Caleb Douglas",
    "team": "MIA",
    "position": {
      "position": "WR",
      "rank": 79
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.35,
      "y": 0.33,
      "magnitude": 0.48,
      "angle": 136
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 209,
      "fp": 355,
      "avg": 300
    }
  },
  {
    "rank": 210,
    "name": "Cooper Kupp",
    "team": "SEA",
    "position": {
      "position": "WR",
      "rank": 80
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": 0.02,
      "magnitude": 0.04,
      "angle": 146
    },
    "consensusStrength": 0.75,
    "variance": 7.5,
    "rankings": {
      "ff": null,
      "espn": 210,
      "fp": 225,
      "avg": 218
    }
  },
  {
    "rank": 211,
    "name": "Ryan Flournoy",
    "team": "DAL",
    "position": {
      "position": "WR",
      "rank": 81
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.07,
      "y": -0.08,
      "magnitude": 0.1,
      "angle": -48
    },
    "consensusStrength": 0.75,
    "variance": 14.5,
    "rankings": {
      "ff": null,
      "espn": 211,
      "fp": 182,
      "avg": 197
    }
  },
  {
    "rank": 212,
    "name": "Kaytron Allen",
    "team": "WAS",
    "position": {
      "position": "RB",
      "rank": 60
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.01,
      "y": -0.01,
      "magnitude": 0.01,
      "angle": -53
    },
    "consensusStrength": 1,
    "variance": 1.6,
    "rankings": {
      "ff": null,
      "espn": 212,
      "fp": 209,
      "avg": 211
    }
  },
  {
    "rank": 213,
    "name": "Nicholas Singleton",
    "team": "TEN",
    "position": {
      "position": "RB",
      "rank": 61
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": 0,
      "magnitude": 0.01,
      "angle": -25
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": null,
      "espn": 213,
      "fp": 211,
      "avg": 212
    }
  },
  {
    "rank": 214,
    "name": "Demond Claiborne",
    "team": "MIN",
    "position": {
      "position": "RB",
      "rank": 62
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.15,
      "y": 0.16,
      "magnitude": 0.22,
      "angle": 134
    },
    "consensusStrength": 0.25,
    "variance": 32,
    "rankings": {
      "ff": null,
      "espn": 214,
      "fp": 278,
      "avg": 246
    }
  },
  {
    "rank": 215,
    "name": "Oronde Gadsden",
    "team": "LAC",
    "position": {
      "position": "TE",
      "rank": 24
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.17,
      "y": -0.16,
      "magnitude": 0.24,
      "angle": -43
    },
    "consensusStrength": 0.25,
    "variance": 37,
    "rankings": {
      "ff": null,
      "espn": 215,
      "fp": 141,
      "avg": 178
    }
  },
  {
    "rank": 216,
    "name": "Gunnar Helm",
    "team": "TEN",
    "position": {
      "position": "TE",
      "rank": 25
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.03,
      "y": -0.01,
      "magnitude": 0.03,
      "angle": -20
    },
    "consensusStrength": 0.75,
    "variance": 5.5,
    "rankings": {
      "ff": null,
      "espn": 216,
      "fp": 205,
      "avg": 211
    }
  },
  {
    "rank": 217,
    "name": "AJ Barner",
    "team": "SEA",
    "position": {
      "position": "TE",
      "rank": 26
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.06,
      "y": -0.04,
      "magnitude": 0.07,
      "angle": -33
    },
    "consensusStrength": 0.75,
    "variance": 13,
    "rankings": {
      "ff": null,
      "espn": 217,
      "fp": 191,
      "avg": 204
    }
  },
  {
    "rank": 218,
    "name": "Sam Darnold",
    "team": "SEA",
    "position": {
      "position": "QB",
      "rank": 25
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.19,
      "y": -0.16,
      "magnitude": 0.25,
      "angle": -41
    },
    "consensusStrength": 0.25,
    "variance": 40,
    "rankings": {
      "ff": null,
      "espn": 218,
      "fp": 138,
      "avg": 178
    }
  },
  {
    "rank": 219,
    "name": "Bryce Young",
    "team": "CAR",
    "position": {
      "position": "QB",
      "rank": 26
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.16,
      "y": -0.13,
      "magnitude": 0.2,
      "angle": -39
    },
    "consensusStrength": 0.25,
    "variance": 33.5,
    "rankings": {
      "ff": null,
      "espn": 219,
      "fp": 152,
      "avg": 186
    }
  },
  {
    "rank": 220,
    "name": "Fernando Mendoza",
    "team": "LV",
    "position": {
      "position": "QB",
      "rank": 27
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": 0.06,
      "magnitude": 0.06,
      "angle": 110
    },
    "consensusStrength": 1,
    "variance": 4.5,
    "rankings": {
      "ff": null,
      "espn": 220,
      "fp": 229,
      "avg": 225
    }
  },
  {
    "rank": 221,
    "name": "Jonah Coleman",
    "team": "DEN",
    "position": {
      "position": "RB",
      "rank": 63
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.13,
      "y": -0.09,
      "magnitude": 0.16,
      "angle": -35
    },
    "consensusStrength": 0.5,
    "variance": 28.5,
    "rankings": {
      "ff": null,
      "espn": 221,
      "fp": 164,
      "avg": 193
    }
  },
  {
    "rank": 222,
    "name": "Seth McGowan",
    "team": "IND",
    "position": {
      "position": "RB",
      "rank": 64
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.14,
      "y": 0.18,
      "magnitude": 0.23,
      "angle": 127
    },
    "consensusStrength": 0.5,
    "variance": 29,
    "rankings": {
      "ff": null,
      "espn": 222,
      "fp": 280,
      "avg": 251
    }
  },
  {
    "rank": 223,
    "name": "Emmett Johnson",
    "team": "KC",
    "position": {
      "position": "RB",
      "rank": 65
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.09,
      "y": -0.04,
      "magnitude": 0.1,
      "angle": -24
    },
    "consensusStrength": 0.5,
    "variance": 19,
    "rankings": {
      "ff": null,
      "espn": 223,
      "fp": 185,
      "avg": 204
    }
  },
  {
    "rank": 224,
    "name": "Malik Washington",
    "team": "MIA",
    "position": {
      "position": "WR",
      "rank": 82
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.02,
      "y": 0.03,
      "magnitude": 0.04,
      "angle": 53
    },
    "consensusStrength": 1,
    "variance": 5,
    "rankings": {
      "ff": null,
      "espn": 224,
      "fp": 214,
      "avg": 219
    }
  },
  {
    "rank": 225,
    "name": "Dylan Sampson",
    "team": "CLE",
    "position": {
      "position": "RB",
      "rank": 66
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.19,
      "y": -0.13,
      "magnitude": 0.24,
      "angle": -35
    },
    "consensusStrength": 0.25,
    "variance": 41,
    "rankings": {
      "ff": null,
      "espn": 225,
      "fp": 143,
      "avg": 184
    }
  },
  {
    "rank": 226,
    "name": "Samaje Perine",
    "team": "CIN",
    "position": {
      "position": "RB",
      "rank": 67
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.14,
      "y": 0.21,
      "magnitude": 0.25,
      "angle": 125
    },
    "consensusStrength": 0.25,
    "variance": 30.5,
    "rankings": {
      "ff": null,
      "espn": 226,
      "fp": 287,
      "avg": 257
    }
  },
  {
    "rank": 227,
    "name": "Tyreek Hill",
    "team": "FA",
    "position": {
      "position": "WR",
      "rank": 83
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.01,
      "y": 0.05,
      "magnitude": 0.06,
      "angle": 75
    },
    "consensusStrength": 1,
    "variance": 3,
    "rankings": {
      "ff": null,
      "espn": 227,
      "fp": 221,
      "avg": 224
    }
  },
  {
    "rank": 228,
    "name": "De'Zhaun Stribling",
    "team": "SF",
    "position": {
      "position": "WR",
      "rank": 84
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": 0.07,
      "magnitude": 0.07,
      "angle": 88
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": null,
      "espn": 228,
      "fp": 227,
      "avg": 228
    }
  },
  {
    "rank": 229,
    "name": "Jalen Tolbert",
    "team": "MIA",
    "position": {
      "position": "WR",
      "rank": 85
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.28,
      "y": 0.36,
      "magnitude": 0.46,
      "angle": 128
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 229,
      "fp": 348,
      "avg": 300
    }
  },
  {
    "rank": 230,
    "name": "Christian Kirk",
    "team": "SF",
    "position": {
      "position": "WR",
      "rank": 86
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.06,
      "y": 0.14,
      "magnitude": 0.16,
      "angle": 113
    },
    "consensusStrength": 0.75,
    "variance": 13,
    "rankings": {
      "ff": null,
      "espn": 230,
      "fp": 256,
      "avg": 243
    }
  },
  {
    "rank": 231,
    "name": "Savion Williams",
    "team": "GB",
    "position": {
      "position": "WR",
      "rank": 87
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.37,
      "y": 0.46,
      "magnitude": 0.59,
      "angle": 129
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 231,
      "fp": 389,
      "avg": 300
    }
  },
  {
    "rank": 232,
    "name": "Chris Brazzell II",
    "team": "CAR",
    "position": {
      "position": "WR",
      "rank": 88
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.14,
      "y": 0.23,
      "magnitude": 0.27,
      "angle": 121
    },
    "consensusStrength": 0.5,
    "variance": 29,
    "rankings": {
      "ff": null,
      "espn": 232,
      "fp": 290,
      "avg": 261
    }
  },
  {
    "rank": 233,
    "name": "Xavier Legette",
    "team": "CAR",
    "position": {
      "position": "WR",
      "rank": 89
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.11,
      "y": 0.21,
      "magnitude": 0.23,
      "angle": 118
    },
    "consensusStrength": 0.5,
    "variance": 23,
    "rankings": {
      "ff": null,
      "espn": 233,
      "fp": 279,
      "avg": 256
    }
  },
  {
    "rank": 234,
    "name": "Keon Coleman",
    "team": "BUF",
    "position": {
      "position": "WR",
      "rank": 90
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.05,
      "y": 0.15,
      "magnitude": 0.16,
      "angle": 108
    },
    "consensusStrength": 0.75,
    "variance": 10.5,
    "rankings": {
      "ff": null,
      "espn": 234,
      "fp": 255,
      "avg": 245
    }
  },
  {
    "rank": 235,
    "name": "Buccaneers D/ST",
    "team": "TB",
    "position": {
      "position": "DST",
      "rank": 13
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.15,
      "y": 0.26,
      "magnitude": 0.3,
      "angle": 121
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 235,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 236,
    "name": "Packers D/ST",
    "team": "GB",
    "position": {
      "position": "DST",
      "rank": 14
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.15,
      "y": 0.26,
      "magnitude": 0.3,
      "angle": 120
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 236,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 237,
    "name": "Chris Boswell",
    "team": "PIT",
    "position": {
      "position": "K",
      "rank": 13
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": 0.16,
      "magnitude": 0.16,
      "angle": 104
    },
    "consensusStrength": 0.75,
    "variance": 8.5,
    "rankings": {
      "ff": null,
      "espn": 237,
      "fp": 254,
      "avg": 246
    }
  },
  {
    "rank": 238,
    "name": "Chase McLaughlin",
    "team": "TB",
    "position": {
      "position": "K",
      "rank": 14
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.01,
      "y": 0.11,
      "magnitude": 0.11,
      "angle": 82
    },
    "consensusStrength": 1,
    "variance": 3,
    "rankings": {
      "ff": null,
      "espn": 238,
      "fp": 232,
      "avg": 235
    }
  },
  {
    "rank": 239,
    "name": "LeQuint Allen",
    "team": "JAX",
    "position": {
      "position": "RB",
      "rank": 68
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.12,
      "y": 0.24,
      "magnitude": 0.27,
      "angle": 116
    },
    "consensusStrength": 0.5,
    "variance": 24.5,
    "rankings": {
      "ff": null,
      "espn": 239,
      "fp": 288,
      "avg": 264
    }
  },
  {
    "rank": 240,
    "name": "Jaylen Wright",
    "team": "MIA",
    "position": {
      "position": "RB",
      "rank": 69
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.05,
      "y": 0.08,
      "magnitude": 0.09,
      "angle": 56
    },
    "consensusStrength": 0.75,
    "variance": 11,
    "rankings": {
      "ff": null,
      "espn": 240,
      "fp": 218,
      "avg": 229
    }
  },
  {
    "rank": 241,
    "name": "Ollie Gordon II",
    "team": "MIA",
    "position": {
      "position": "RB",
      "rank": 70
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.01,
      "y": 0.13,
      "magnitude": 0.13,
      "angle": 86
    },
    "consensusStrength": 1,
    "variance": 2,
    "rankings": {
      "ff": null,
      "espn": 241,
      "fp": 237,
      "avg": 239
    }
  },
  {
    "rank": 242,
    "name": "Kimani Vidal",
    "team": "LAC",
    "position": {
      "position": "RB",
      "rank": 71
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.15,
      "y": -0.01,
      "magnitude": 0.15,
      "angle": -3
    },
    "consensusStrength": 0.25,
    "variance": 31,
    "rankings": {
      "ff": null,
      "espn": 242,
      "fp": 180,
      "avg": 211
    }
  },
  {
    "rank": 243,
    "name": "Brashard Smith",
    "team": "KC",
    "position": {
      "position": "RB",
      "rank": 72
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.08,
      "y": 0.22,
      "magnitude": 0.24,
      "angle": 109
    },
    "consensusStrength": 0.5,
    "variance": 16.5,
    "rankings": {
      "ff": null,
      "espn": 243,
      "fp": 276,
      "avg": 260
    }
  },
  {
    "rank": 244,
    "name": "Adam Randall",
    "team": "BAL",
    "position": {
      "position": "RB",
      "rank": 73
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.14,
      "y": 0.29,
      "magnitude": 0.33,
      "angle": 116
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 244,
      "fp": 305,
      "avg": 300
    }
  },
  {
    "rank": 245,
    "name": "Trey Benson",
    "team": "ARI",
    "position": {
      "position": "RB",
      "rank": 74
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.01,
      "y": 0.16,
      "magnitude": 0.16,
      "angle": 93
    },
    "consensusStrength": 1,
    "variance": 2,
    "rankings": {
      "ff": null,
      "espn": 245,
      "fp": 249,
      "avg": 247
    }
  },
  {
    "rank": 246,
    "name": "Kaleb Johnson",
    "team": "PIT",
    "position": {
      "position": "RB",
      "rank": 75
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": 0.16,
      "magnitude": 0.16,
      "angle": 89
    },
    "consensusStrength": 1,
    "variance": 0.7,
    "rankings": {
      "ff": null,
      "espn": 246,
      "fp": 245,
      "avg": 246
    }
  },
  {
    "rank": 247,
    "name": "Ty Johnson",
    "team": "BUF",
    "position": {
      "position": "RB",
      "rank": 76
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": 0.21,
      "magnitude": 0.21,
      "angle": 102
    },
    "consensusStrength": 0.75,
    "variance": 9,
    "rankings": {
      "ff": null,
      "espn": 247,
      "fp": 265,
      "avg": 256
    }
  },
  {
    "rank": 248,
    "name": "MarShawn Lloyd",
    "team": "GB",
    "position": {
      "position": "RB",
      "rank": 77
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.05,
      "y": 0.22,
      "magnitude": 0.22,
      "angle": 102
    },
    "consensusStrength": 0.75,
    "variance": 10,
    "rankings": {
      "ff": null,
      "espn": 248,
      "fp": 268,
      "avg": 258
    }
  },
  {
    "rank": 249,
    "name": "Emari Demercado",
    "team": "KC",
    "position": {
      "position": "RB",
      "rank": 78
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.14,
      "y": 0.31,
      "magnitude": 0.34,
      "angle": 114
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 249,
      "fp": 307,
      "avg": 300
    }
  },
  {
    "rank": 250,
    "name": "Malik Davis",
    "team": "DAL",
    "position": {
      "position": "RB",
      "rank": 79
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.08,
      "y": 0.26,
      "magnitude": 0.27,
      "angle": 107
    },
    "consensusStrength": 0.5,
    "variance": 16.5,
    "rankings": {
      "ff": null,
      "espn": 250,
      "fp": 283,
      "avg": 267
    }
  },
  {
    "rank": 251,
    "name": "Kyle Juszczyk",
    "team": "SF",
    "position": {
      "position": "RB",
      "rank": 80
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.4,
      "y": 0.58,
      "magnitude": 0.71,
      "angle": 124
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 251,
      "fp": 420,
      "avg": 300
    }
  },
  {
    "rank": 252,
    "name": "Pat Bryant",
    "team": "DEN",
    "position": {
      "position": "WR",
      "rank": 91
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.15,
      "y": 0.03,
      "magnitude": 0.16,
      "angle": 12
    },
    "consensusStrength": 0.25,
    "variance": 32.5,
    "rankings": {
      "ff": null,
      "espn": 252,
      "fp": 187,
      "avg": 220
    }
  },
  {
    "rank": 253,
    "name": "Tory Horton",
    "team": "SEA",
    "position": {
      "position": "WR",
      "rank": 92
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.02,
      "y": 0.21,
      "magnitude": 0.21,
      "angle": 95
    },
    "consensusStrength": 1,
    "variance": 3.5,
    "rankings": {
      "ff": null,
      "espn": 253,
      "fp": 260,
      "avg": 257
    }
  },
  {
    "rank": 254,
    "name": "Jaguars D/ST",
    "team": "JAX",
    "position": {
      "position": "DST",
      "rank": 15
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.11,
      "y": 0.31,
      "magnitude": 0.32,
      "angle": 110
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 254,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 255,
    "name": "Colts D/ST",
    "team": "IND",
    "position": {
      "position": "DST",
      "rank": 16
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.11,
      "y": 0.31,
      "magnitude": 0.33,
      "angle": 109
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 255,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 256,
    "name": "Evan McPherson",
    "team": "CIN",
    "position": {
      "position": "K",
      "rank": 15
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.09,
      "y": 0.11,
      "magnitude": 0.15,
      "angle": 51
    },
    "consensusStrength": 0.5,
    "variance": 19.5,
    "rankings": {
      "ff": null,
      "espn": 256,
      "fp": 217,
      "avg": 237
    }
  },
  {
    "rank": 257,
    "name": "Nick Folk",
    "team": "ATL",
    "position": {
      "position": "K",
      "rank": 16
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.27,
      "y": 0.48,
      "magnitude": 0.56,
      "angle": 119
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 257,
      "fp": 373,
      "avg": 300
    }
  },
  {
    "rank": 258,
    "name": "Chig Okonkwo",
    "team": "WAS",
    "position": {
      "position": "TE",
      "rank": 27
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.21,
      "y": 0,
      "magnitude": 0.21,
      "angle": 1
    },
    "consensusStrength": 0.25,
    "variance": 45,
    "rankings": {
      "ff": null,
      "espn": 258,
      "fp": 168,
      "avg": 213
    }
  },
  {
    "rank": 259,
    "name": "Jake Tonges",
    "team": "SF",
    "position": {
      "position": "TE",
      "rank": 28
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.12,
      "y": 0.34,
      "magnitude": 0.36,
      "angle": 109
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 259,
      "fp": 309,
      "avg": 300
    }
  },
  {
    "rank": 260,
    "name": "Greg Dulcich",
    "team": "MIA",
    "position": {
      "position": "TE",
      "rank": 29
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.12,
      "y": 0.35,
      "magnitude": 0.37,
      "angle": 109
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 260,
      "fp": 312,
      "avg": 300
    }
  },
  {
    "rank": 261,
    "name": "Kayshon Boutte",
    "team": "NE",
    "position": {
      "position": "WR",
      "rank": 93
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.22,
      "y": 0.01,
      "magnitude": 0.22,
      "angle": 3
    },
    "consensusStrength": 0.25,
    "variance": 46,
    "rankings": {
      "ff": null,
      "espn": 261,
      "fp": 169,
      "avg": 215
    }
  },
  {
    "rank": 262,
    "name": "Ja'Kobi Lane",
    "team": "BAL",
    "position": {
      "position": "WR",
      "rank": 94
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.13,
      "y": 0.37,
      "magnitude": 0.39,
      "angle": 110
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 262,
      "fp": 319,
      "avg": 300
    }
  },
  {
    "rank": 263,
    "name": "Ted Hurst",
    "team": "TB",
    "position": {
      "position": "WR",
      "rank": 95
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.05,
      "y": 0.19,
      "magnitude": 0.2,
      "angle": 75
    },
    "consensusStrength": 0.75,
    "variance": 10.5,
    "rankings": {
      "ff": null,
      "espn": 263,
      "fp": 242,
      "avg": 253
    }
  },
  {
    "rank": 264,
    "name": "Elijah Sarratt",
    "team": "BAL",
    "position": {
      "position": "WR",
      "rank": 96
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.01,
      "y": 0.26,
      "magnitude": 0.26,
      "angle": 93
    },
    "consensusStrength": 1,
    "variance": 3,
    "rankings": {
      "ff": null,
      "espn": 264,
      "fp": 270,
      "avg": 267
    }
  },
  {
    "rank": 265,
    "name": "Chris Brooks",
    "team": "GB",
    "position": {
      "position": "RB",
      "rank": 81
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
    "variance": 2,
    "rankings": {
      "ff": null,
      "espn": 265,
      "fp": 269,
      "avg": 267
    }
  },
  {
    "rank": 266,
    "name": "George Holani",
    "team": "SEA",
    "position": {
      "position": "RB",
      "rank": 82
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.07,
      "y": 0.33,
      "magnitude": 0.33,
      "angle": 103
    },
    "consensusStrength": 0.5,
    "variance": 15.5,
    "rankings": {
      "ff": null,
      "espn": 266,
      "fp": 297,
      "avg": 282
    }
  },
  {
    "rank": 267,
    "name": "Geno Smith",
    "team": "NYJ",
    "position": {
      "position": "QB",
      "rank": 28
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.08,
      "y": 0.18,
      "magnitude": 0.19,
      "angle": 66
    },
    "consensusStrength": 0.5,
    "variance": 17,
    "rankings": {
      "ff": null,
      "espn": 267,
      "fp": 233,
      "avg": 250
    }
  },
  {
    "rank": 268,
    "name": "Aaron Rodgers",
    "team": "PIT",
    "position": {
      "position": "QB",
      "rank": 29
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.05,
      "y": 0.21,
      "magnitude": 0.22,
      "angle": 77
    },
    "consensusStrength": 0.75,
    "variance": 10.5,
    "rankings": {
      "ff": null,
      "espn": 268,
      "fp": 247,
      "avg": 258
    }
  },
  {
    "rank": 269,
    "name": "Deshaun Watson",
    "team": "CLE",
    "position": {
      "position": "QB",
      "rank": 30
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.09,
      "y": 0.36,
      "magnitude": 0.37,
      "angle": 104
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 269,
      "fp": 308,
      "avg": 300
    }
  },
  {
    "rank": 270,
    "name": "Jacoby Brissett",
    "team": "ARI",
    "position": {
      "position": "QB",
      "rank": 31
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.2,
      "y": 0.07,
      "magnitude": 0.21,
      "angle": 19
    },
    "consensusStrength": 0.25,
    "variance": 43,
    "rankings": {
      "ff": null,
      "espn": 270,
      "fp": 184,
      "avg": 227
    }
  },
  {
    "rank": 271,
    "name": "Dontayvion Wicks",
    "team": "PHI",
    "position": {
      "position": "WR",
      "rank": 97
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.15,
      "y": 0.13,
      "magnitude": 0.2,
      "angle": 41
    },
    "consensusStrength": 0.25,
    "variance": 31.5,
    "rankings": {
      "ff": null,
      "espn": 271,
      "fp": 208,
      "avg": 240
    }
  },
  {
    "rank": 272,
    "name": "Nick Westbrook-Ikhine",
    "team": "IND",
    "position": {
      "position": "WR",
      "rank": 98
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.28,
      "y": 0.57,
      "magnitude": 0.63,
      "angle": 117
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 272,
      "fp": 392,
      "avg": 300
    }
  },
  {
    "rank": 273,
    "name": "Darius Slayton",
    "team": "NYG",
    "position": {
      "position": "WR",
      "rank": 99
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": 0.29,
      "magnitude": 0.29,
      "angle": 90
    },
    "consensusStrength": 1,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 273,
      "fp": 273,
      "avg": 273
    }
  },
  {
    "rank": 274,
    "name": "Dyami Brown",
    "team": "WAS",
    "position": {
      "position": "WR",
      "rank": 100
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.36,
      "y": 0.65,
      "magnitude": 0.75,
      "angle": 119
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 274,
      "fp": 427,
      "avg": 300
    }
  },
  {
    "rank": 275,
    "name": "Jahan Dotson",
    "team": "ATL",
    "position": {
      "position": "WR",
      "rank": 101
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.14,
      "y": 0.44,
      "magnitude": 0.46,
      "angle": 108
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 275,
      "fp": 334,
      "avg": 300
    }
  },
  {
    "rank": 276,
    "name": "Isaiah Davis",
    "team": "NYJ",
    "position": {
      "position": "RB",
      "rank": 83
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.04,
      "y": 0.26,
      "magnitude": 0.26,
      "angle": 80
    },
    "consensusStrength": 0.75,
    "variance": 9.5,
    "rankings": {
      "ff": null,
      "espn": 276,
      "fp": 257,
      "avg": 267
    }
  },
  {
    "rank": 277,
    "name": "DJ Giddens",
    "team": "IND",
    "position": {
      "position": "RB",
      "rank": 84
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.01,
      "y": 0.3,
      "magnitude": 0.3,
      "angle": 89
    },
    "consensusStrength": 1,
    "variance": 1.6,
    "rankings": {
      "ff": null,
      "espn": 277,
      "fp": 274,
      "avg": 276
    }
  },
  {
    "rank": 278,
    "name": "Jaydon Blue",
    "team": "DAL",
    "position": {
      "position": "RB",
      "rank": 85
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.02,
      "y": 0.29,
      "magnitude": 0.29,
      "angle": 87
    },
    "consensusStrength": 1,
    "variance": 3.5,
    "rankings": {
      "ff": null,
      "espn": 278,
      "fp": 271,
      "avg": 275
    }
  },
  {
    "rank": 279,
    "name": "Trevor Etienne",
    "team": "CAR",
    "position": {
      "position": "RB",
      "rank": 86
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.07,
      "y": 0.39,
      "magnitude": 0.39,
      "angle": 101
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 279,
      "fp": 310,
      "avg": 300
    }
  },
  {
    "rank": 280,
    "name": "Emanuel Wilson",
    "team": "SEA",
    "position": {
      "position": "RB",
      "rank": 87
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.26,
      "y": 0.06,
      "magnitude": 0.27,
      "angle": 13
    },
    "consensusStrength": 0.25,
    "variance": 55,
    "rankings": {
      "ff": null,
      "espn": 280,
      "fp": 170,
      "avg": 225
    }
  },
  {
    "rank": 281,
    "name": "Will Shipley",
    "team": "PHI",
    "position": {
      "position": "RB",
      "rank": 88
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.12,
      "y": 0.44,
      "magnitude": 0.46,
      "angle": 105
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 281,
      "fp": 331,
      "avg": 300
    }
  },
  {
    "rank": 282,
    "name": "Tyler Badie",
    "team": "DEN",
    "position": {
      "position": "RB",
      "rank": 89
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.37,
      "y": 0.7,
      "magnitude": 0.79,
      "angle": 118
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 282,
      "fp": 439,
      "avg": 300
    }
  },
  {
    "rank": 283,
    "name": "Devin Singletary",
    "team": "NYG",
    "position": {
      "position": "RB",
      "rank": 90
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": 0.37,
      "magnitude": 0.37,
      "angle": 95
    },
    "consensusStrength": 0.75,
    "variance": 7.5,
    "rankings": {
      "ff": null,
      "espn": 283,
      "fp": 298,
      "avg": 291
    }
  },
  {
    "rank": 284,
    "name": "Andrei Iosivas",
    "team": "CIN",
    "position": {
      "position": "WR",
      "rank": 102
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.09,
      "y": 0.42,
      "magnitude": 0.43,
      "angle": 101
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 284,
      "fp": 320,
      "avg": 300
    }
  },
  {
    "rank": 285,
    "name": "Bengals D/ST",
    "team": "CIN",
    "position": {
      "position": "DST",
      "rank": 17
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": 0.38,
      "magnitude": 0.38,
      "angle": 95
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 285,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 286,
    "name": "Bears D/ST",
    "team": "CHI",
    "position": {
      "position": "DST",
      "rank": 18
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.03,
      "y": 0.38,
      "magnitude": 0.38,
      "angle": 95
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 286,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 287,
    "name": "Trey Smack",
    "team": "GB",
    "position": {
      "position": "K",
      "rank": 17
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.35,
      "y": 0.7,
      "magnitude": 0.78,
      "angle": 116
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 287,
      "fp": 434,
      "avg": 300
    }
  },
  {
    "rank": 288,
    "name": "Jake Elliott",
    "team": "PHI",
    "position": {
      "position": "K",
      "rank": 18
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.21,
      "y": 0.56,
      "magnitude": 0.6,
      "angle": 110
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 288,
      "fp": 375,
      "avg": 300
    }
  },
  {
    "rank": 289,
    "name": "Mike Gesicki",
    "team": "CIN",
    "position": {
      "position": "TE",
      "rank": 30
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.04,
      "y": 0.4,
      "magnitude": 0.4,
      "angle": 96
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 289,
      "fp": 306,
      "avg": 300
    }
  },
  {
    "rank": 290,
    "name": "Cade Otton",
    "team": "TB",
    "position": {
      "position": "TE",
      "rank": 31
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.12,
      "y": 0.24,
      "magnitude": 0.27,
      "angle": 63
    },
    "consensusStrength": 0.5,
    "variance": 26,
    "rankings": {
      "ff": null,
      "espn": 290,
      "fp": 238,
      "avg": 264
    }
  },
  {
    "rank": 291,
    "name": "Evan Engram",
    "team": "DEN",
    "position": {
      "position": "TE",
      "rank": 32
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.08,
      "y": 0.29,
      "magnitude": 0.3,
      "angle": 75
    },
    "consensusStrength": 0.5,
    "variance": 16.5,
    "rankings": {
      "ff": null,
      "espn": 291,
      "fp": 258,
      "avg": 275
    }
  },
  {
    "rank": 292,
    "name": "David Njoku",
    "team": "LAC",
    "position": {
      "position": "TE",
      "rank": 33
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.16,
      "y": 0.22,
      "magnitude": 0.27,
      "angle": 55
    },
    "consensusStrength": 0.25,
    "variance": 33,
    "rankings": {
      "ff": null,
      "espn": 292,
      "fp": 226,
      "avg": 259
    }
  },
  {
    "rank": 293,
    "name": "Michael Mayer",
    "team": "LV",
    "position": {
      "position": "TE",
      "rank": 34
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.15,
      "y": 0.53,
      "magnitude": 0.56,
      "angle": 106
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 293,
      "fp": 358,
      "avg": 300
    }
  },
  {
    "rank": 294,
    "name": "Tyquan Thornton",
    "team": "KC",
    "position": {
      "position": "WR",
      "rank": 103
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": 0.38,
      "magnitude": 0.38,
      "angle": 89
    },
    "consensusStrength": 1,
    "variance": 1,
    "rankings": {
      "ff": null,
      "espn": 294,
      "fp": 292,
      "avg": 293
    }
  },
  {
    "rank": 295,
    "name": "Van Jefferson",
    "team": "WAS",
    "position": {
      "position": "WR",
      "rank": 104
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.01,
      "y": 0.4,
      "magnitude": 0.4,
      "angle": 92
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 295,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 296,
    "name": "Tua Tagovailoa",
    "team": "ATL",
    "position": {
      "position": "QB",
      "rank": 32
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0.05,
      "y": 0.35,
      "magnitude": 0.35,
      "angle": 82
    },
    "consensusStrength": 0.75,
    "variance": 10.5,
    "rankings": {
      "ff": null,
      "espn": 296,
      "fp": 275,
      "avg": 286
    }
  },
  {
    "rank": 297,
    "name": "49ers D/ST",
    "team": "SF",
    "position": {
      "position": "DST",
      "rank": 19
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": -0.01,
      "y": 0.41,
      "magnitude": 0.41,
      "angle": 91
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 297,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 298,
    "name": "Jets D/ST",
    "team": "NYJ",
    "position": {
      "position": "DST",
      "rank": 20
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": 0.41,
      "magnitude": 0.41,
      "angle": 91
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 298,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 299,
    "name": "Saints D/ST",
    "team": "NO",
    "position": {
      "position": "DST",
      "rank": 21
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": 0.41,
      "magnitude": 0.41,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 299,
      "fp": null,
      "avg": 300
    }
  },
  {
    "rank": 300,
    "name": "Panthers D/ST",
    "team": "CAR",
    "position": {
      "position": "DST",
      "rank": 22
    },
    "price": 0,
    "bye": 7,
    "vector": {
      "x": 0,
      "y": 0.41,
      "magnitude": 0.41,
      "angle": 90
    },
    "consensusStrength": 0,
    "variance": 0,
    "rankings": {
      "ff": null,
      "espn": 300,
      "fp": null,
      "avg": 300
    }
  }
];

export default players;
