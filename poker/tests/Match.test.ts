import Match from "../src/Match";

describe('Match', () => {
  test('start', () => {
      const match = new Match("home team", "guest team");

      expect(match.homeTeamScore).toBe(0);
      expect(match.guestTeamScore).toBe(0);
  })

  test('start - with correct start date', () => {
    const match = new Match("home team", "guest team");

    expect(match.startedAt).toBeInstanceOf(Date);
  })

  test('updateScore', () => {
    const match = new Match("home team", "guest team");
    match.updateScore(1,2);

    expect(match.homeTeamScore).toBe(1);
    expect(match.guestTeamScore).toBe(2);
  })

  test('finish', () => {
    const match = new Match("home team", "guest team");
    match.finish();

    expect(match.isFinished()).toBe(true);
  })
})