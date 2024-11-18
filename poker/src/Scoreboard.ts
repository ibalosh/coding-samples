import {DataHandler} from "./MatchesHandler";
import match from "./Match";

class Scoreboard {
  private readonly matchesHandler: DataHandler;

  constructor(dataHandler: DataHandler) {
    this.matchesHandler = dataHandler;
  }

  startMatch(homeTeamName: string, guestTeamName: string) {
    this.matchesHandler.add(homeTeamName, guestTeamName);
  }

  updateMatch(homeTeamName: string, guestTeamName: string,
              homeTeamScore: number, guestTeamScore: number) {
    this.matchesHandler.update(homeTeamName, guestTeamName, homeTeamScore, guestTeamScore);
  }

  finishMatch(homeTeamName: string, guestTeamName: string) {
    this.matchesHandler.remove(homeTeamName, guestTeamName);
  }

  showMatches() {
    return this.matchesHandler.sorted().map(match => {
      return `${match.homeTeamName} : ${match.homeTeamScore}` + ' - ' +
        `${match.guestTeamName} : ${match.guestTeamScore}`;
    })
  }
}

export default Scoreboard;