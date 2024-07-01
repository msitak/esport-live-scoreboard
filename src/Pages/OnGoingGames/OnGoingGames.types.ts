interface TeamScore {
  id: number;
  score: number;
}

export interface Game {
  teams: TeamScore[];
}

interface Series {
  teams: TeamScore[];
}

interface Match {
  id: number;
  games: Game[];
  series: Series;
}

export type Matches = Match[];
