import {Score, Teams} from "./models";
import ScoreBoard from "./scoreboard";

async function tryOut() {
  function sleep(delay: number){
    return new Promise(resolve => setTimeout(resolve, delay));
  }

  let games: {team: Teams, score: Score}[] = [
    {
      team: { homeTeam: "Mexico", awayTeam: "Canada" },
      score: { homeTeam: 0 , awayTeam: 5},
    },
    {
      team: { homeTeam: "Spain", awayTeam: "Brazil" },
      score: { homeTeam: 10 , awayTeam: 2},
    },
    {
      team: { homeTeam: "Germany", awayTeam: "France" },
      score: { homeTeam: 2 , awayTeam: 2},
    },
    {
      team: { homeTeam: "Uruguay", awayTeam: "Italy" },
      score: { homeTeam: 6 , awayTeam: 6},
    },
    {
      team: { homeTeam: "Argentina", awayTeam: "Australia" },
      score: { homeTeam: 3 , awayTeam: 1},
    }
  ];


  const scoreBoard = new ScoreBoard();

  for (const game of games) {
    scoreBoard.startMatch(game.team);
    await sleep(100);
  }

  for (const game of games) {
    scoreBoard.updateMatch(game.team, game.score);
    await sleep(100);
  }

  //scoreBoard.finishMatch({homeTeam: "Germany", awayTeam: "France"});
  console.log(scoreBoard.showScores());
}

tryOut();