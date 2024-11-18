import Match from "./Match";

export interface DataHandler {
  add: (homeTeamName: string, guestTeamName: string) => void;
  remove: (homeTeamName: string, guestTeamName: string) => void;
  update: (homeTeamName: string, guestTeamName: string,
           homeTeamScore: number, guestTeamScore: number) => void;
  sorted: () => Match[];
}

export default class MatchesHandler implements DataHandler{
  matches: Match[];

  constructor() {
    this.matches = [];
  }

  add(homeTeamName: string, guestTeamName: string) {
    this.matches.push(new Match(homeTeamName, guestTeamName));
  }

  remove(homeTeamName: string, guestTeamName: string) {
    const matchIndex = this.findIndex(homeTeamName, guestTeamName);
    if (matchIndex > -1) {
      this.matches = this.matches.slice(matchIndex, 1);
    }
    else {
      throw Error(`Match between ${homeTeamName} and ${guestTeamName} doesn't exist.`);
    }
  }

  update(homeTeamName: string, guestTeamName: string,
         homeTeamScore: number, guestTeamScore: number) {
    const matchIndex = this.findIndex(homeTeamName, guestTeamName);
    this.matches[matchIndex].updateScore(homeTeamScore, guestTeamScore);
  }

  sorted(): Match[] {
    const matches = this.deepCopyData();
    matches.sort((matchA: Match, matchB: Match) => {
      if (matchA.totalScore() !== matchB.totalScore())
        return matchB.totalScore() - matchA.totalScore();
      else {
        return matchB.startedAt.getTime() - matchA.startedAt.getTime();
      }
    })

    return matches;
  }

  private deepCopyData() {
    return this.matches.map(match => {
      const newMatch = new Match(match.homeTeamName, match.guestTeamName)
      newMatch.startedAt = new Date(match.startedAt.getTime());
      newMatch.finishedAt = match.finishedAt === null ? null : new Date(match.finishedAt.getTime());
      newMatch.updateScore(match.homeTeamScore, match.guestTeamScore);
      return newMatch;
    });
  }
  private findIndex(homeTeamName: string, guestTeamName: string) {
    return this.matches.findIndex(match => {
      return match.homeTeamName === homeTeamName && match.guestTeamName === guestTeamName;
    })
  }
}