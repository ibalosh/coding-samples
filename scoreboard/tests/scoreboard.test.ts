import Scoreboard from "../src/Scoreboard";
import Matches from "../src/Matches";

describe('Scoreboard', () => {
  let defaultMatchHandler: Matches;

  beforeEach(() => {
    defaultMatchHandler = new Matches();
  })

  it('init', () => {
    const scoreboard = new Scoreboard(defaultMatchHandler);

    expect(scoreboard.showMatches()).toEqual([])
  })

  it('start a new game', () => {
    const scoreboard = new Scoreboard(defaultMatchHandler);

    scoreboard.startMatch("Mexico","Canada");
    scoreboard.startMatch("Germany","Italy");

    expect(scoreboard.showMatches().length).toBe(2);
  })

  it('finish an existing game', () => {
    const scoreboard = new Scoreboard(new Matches());

    scoreboard.startMatch("Mexico","Canada");
    scoreboard.startMatch("Germany","Italy");
    scoreboard.finishMatch("Mexico","Canada");

    expect(scoreboard.showMatches().length).toEqual(1);
  })

  it('finish an non existing game', () => {
    const scoreboard = new Scoreboard(new Matches());

    scoreboard.startMatch("Mexico","Canada");
    scoreboard.startMatch("Germany","Italy");

    expect(() => scoreboard.finishMatch("Austria","Canada")).toThrow(Error);
  })

  it('finish an non existing game', () => {
    const scoreboard = new Scoreboard(new Matches());

    scoreboard.startMatch("Mexico","Canada");
    scoreboard.updateMatch("Mexico","Canada",1,9)

    expect(scoreboard.showMatches()[0]).toContain("Mexico : 1 - Canada : 9")
  })
})
