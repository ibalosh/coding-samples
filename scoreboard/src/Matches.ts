import Match from "./Match";
import {DataHandler} from "./models";

export default class Matches implements DataHandler{
  matches: Match[];

  constructor() {
    this.matches = [];
  }

  add(homeTeamName: string, guestTeamName: string) {
    this.matches.push(new Match(homeTeamName, guestTeamName));
  }

  remove(homeTeamName: string, guestTeamName: string) {
    const matchIndex = this.findIndex(homeTeamName, guestTeamName);
    this.matches = this.deepCopyMatches().filter((match,index) => matchIndex !== index);
  }

  update(homeTeamName: string, guestTeamName: string,
         homeTeamScore: number, guestTeamScore: number) {
    const matchIndex = this.findIndex(homeTeamName, guestTeamName);
    this.matches[matchIndex].updateScore(homeTeamScore, guestTeamScore);
  }

  fetch(useSorting: boolean = true):Match[] {
    const matches = this.deepCopyMatches();
    return useSorting ? this.sorted(matches) : matches;
  }

  private sorted(matches: Match[]): Match[] {
    matches.sort((matchA: Match, matchB: Match) => {
      if (matchA.totalScore() !== matchB.totalScore())
        return matchB.totalScore() - matchA.totalScore();
      else {
        return matchB.startedAt.getTime() - matchA.startedAt.getTime();
      }
    })

    return matches;
  }

  private deepCopyMatches(): Match[] {
    return this.matches.map(match => {
      const newMatch = new Match(match.homeTeam.name, match.guestTeam.name)

      newMatch.startedAt = new Date(match.startedAt.getTime());
      newMatch.finishedAt = match.finishedAt === null ? null : new Date(match.finishedAt.getTime());
      newMatch.updateScore(match.homeTeam.score, match.guestTeam.score);

      return newMatch;
    });
  }

  private findIndex(homeTeamName: string, guestTeamName: string) {
    const matchIndex = this.matches.findIndex(match => {
      return match.homeTeam.name === homeTeamName && match.guestTeam.name === guestTeamName;
    })

    if (matchIndex === -1)
      throw Error(`Match between ${homeTeamName} and ${guestTeamName} doesn't exist.`);

    return matchIndex;
  }
}
