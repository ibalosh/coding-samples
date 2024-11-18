class Match {
  homeTeamName: string;
  guestTeamName: string;
  homeTeamScore: number;
  guestTeamScore: number;
  startedAt: Date;
  finishedAt: Date | null = null;

  constructor(homeTeamName: string, guestTeamName: string) {
    this.homeTeamName = homeTeamName;
    this.guestTeamName = guestTeamName;
    this.homeTeamScore = 0;
    this.guestTeamScore = 0;
    this.startedAt = new Date();
  }

  updateScore(homeTeamScore: number, guestTeamScore: number): void {
    this.homeTeamScore = homeTeamScore;
    this.guestTeamScore = guestTeamScore;
  }

  totalScore(): number {
    return this.homeTeamScore + this.guestTeamScore;
  }

  finish(): void {
    this.finishedAt = new Date();
  }

  isFinished() {
    return this.finishedAt !== null;
  }
}

export default Match;