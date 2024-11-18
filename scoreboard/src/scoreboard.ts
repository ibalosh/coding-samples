import {DataHandler} from "./models";

class Scoreboard {
  private readonly matches: DataHandler;

  constructor(matches: DataHandler) {
    this.matches = matches;
  }

  startMatch(homeTeamName: string, guestTeamName: string) {
    this.matches.add(homeTeamName, guestTeamName);
  }

  updateMatch(homeTeamName: string, guestTeamName: string,
              homeTeamScore: number, guestTeamScore: number) {
    this.matches.update(homeTeamName, guestTeamName, homeTeamScore, guestTeamScore);
  }

  finishMatch(homeTeamName: string, guestTeamName: string) {
    this.matches.remove(homeTeamName, guestTeamName);
  }

  showMatches(useSorting: boolean = true) {
    return this.matches.fetch(useSorting).map(match => {
      return `${match.homeTeam.name} : ${match.homeTeam.score}` + ' - ' +
        `${match.guestTeam.name} : ${match.guestTeam.score}`;
    })
  }
}

export default Scoreboard;
