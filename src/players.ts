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
  }
];

export default players;
