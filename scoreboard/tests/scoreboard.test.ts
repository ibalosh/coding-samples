import Scoreboard from "../src/scoreboard"

describe('Scoreboard', () => {
  test('init', () => {
    const scoreboard = new Scoreboard();

    expect(scoreboard.showScores().length).toBe(0);
  });

  test('start a single game', () => {
    const scoreboard = new Scoreboard();

    scoreboard.startMatch({homeTeam: "Austria", awayTeam: "Germany"})

    expect(scoreboard.showScores().length).toBe(1);
  });

  test('start and finish multiple games', () => {
    const scoreboard = new Scoreboard();

    scoreboard.startMatch({homeTeam: "Austria", awayTeam: "Germany"})
    scoreboard.startMatch({homeTeam: "England", awayTeam: "Hungary"})
    scoreboard.startMatch({homeTeam: "Spain", awayTeam: "Portugal"})
    scoreboard.finishMatch({homeTeam: "England", awayTeam: "Hungary"})

    expect(scoreboard.showScores().length).toBe(2);
  });
});