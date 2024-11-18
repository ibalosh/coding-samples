import Match from "../src/Match";

describe('Match', () => {
  test('start', () => {
      const match = new Match("home team", "guest team");

      expect(match.homeTeam.score).toBe(0);
      expect(match.guestTeam.score).toBe(0);
  })

  test('start - with correct start date', () => {
    const match = new Match("home team", "guest team");

    expect(match.startedAt).toBeInstanceOf(Date);
  })

  test('updateScore', () => {
    const match = new Match("home team", "guest team");
    match.updateScore(1,2);

    expect(match.homeTeam.score).toBe(1);
    expect(match.guestTeam.score).toBe(2);
  })

  test('totalScore', () => {
    const match = new Match("home team", "guest team");
    match.updateScore(1,2);

    expect(match.totalScore()).toBe(3);
  })

  test('finished', () => {
    const match = new Match("home team", "guest team");
    match.finish();

    expect(match.isFinished()).toBe(true);
  })

  test('not finished', () => {
    const match = new Match("home team", "guest team");

    expect(match.isFinished()).toBe(false);
  })
})
