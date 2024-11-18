import {MatchStatus, Teams, Score} from "./models";

class Match {
  public startedAt: Date;
  public score: Score;
  public teams: Teams;

  constructor(teams: Teams) {
    this.teams = teams;

    this.score = {
      homeTeam: 0,
      awayTeam: 0
    }

    this.startedAt = new Date();
  }

  updateScore(score: Score) {
    this.score = score;
  }

  totalScore(): number {
    return this.score.awayTeam + this.score.homeTeam;
  }

  getMatchStartTime() {
    if (!this.startedAt) throw Error("Start date not set")

    return this.startedAt.getTime();
  }

  matchByTeams(teams: Teams): boolean {
    return (teams.awayTeam === this.teams.awayTeam &&
      teams.homeTeam === this.teams.homeTeam)
  }

  clone(): Match {
    let match = new Match(this.teams);
    match.score = {...this.score}
    match.startedAt = new Date(this.startedAt.getTime());
    return match;
  }
}

export default Match;