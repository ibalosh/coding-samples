import {MatchStatus, TeamScore} from "./models";

class Match {
  homeTeam: TeamScore;
  guestTeam: TeamScore;
  startedAt: Date;
  finishedAt: Date | null = null;
  status: MatchStatus;

  constructor(homeTeamName: string, guestTeamName: string) {
    this.homeTeam = {
      name: homeTeamName,
      score: 0
    };

    this.guestTeam = {
      name: guestTeamName,
      score: 0
    }

    this.startedAt = new Date();
    this.status = "started";
  }

  updateScore(homeTeamScore: number, guestTeamScore: number): void {
    this.homeTeam.score = homeTeamScore;
    this.guestTeam.score = guestTeamScore;
  }

  totalScore(): number {
    return this.homeTeam.score + this.guestTeam.score;
  }

  finish(): void {
    this.finishedAt = new Date();
    this.status = "finished";
  }

  isFinished() {
    return this.status === "finished";
  }
}

export default Match;
