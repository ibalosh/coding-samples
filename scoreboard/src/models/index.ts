export interface Teams {
  homeTeam: string;
  awayTeam: string;
}

export interface Score {
  homeTeam: number;
  awayTeam: number;
}

export type MatchStatus = "not-started" | "started" | "finished";