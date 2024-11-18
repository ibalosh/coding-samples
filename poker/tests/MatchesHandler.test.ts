import MatchesHandler from "../src/MatchesHandler";

describe('MatchesHandler', () => {
  test('init', () => {
    const handler: MatchesHandler = new MatchesHandler();
    expect(handler.matches.length).toBe(0);
  })

  test('init', () => {
    const handler: MatchesHandler = new MatchesHandler();
    handler.add("Austria", "Germany");
    handler.add("England", "Spain");
    handler.add("England", "Portugal");
    handler.update("Austria", "Germany", 1,2);
    handler.update("England", "Portugal", 9,2);
    handler.update("England", "Spain", 3,2);

    const sortedMatches = handler.sorted();
    expect(sortedMatches[0].homeTeamName).toEqual("England")
    expect(sortedMatches[0].guestTeamName).toEqual("Portugal")
    expect(sortedMatches[0].homeTeamScore).toEqual(9)
    expect(sortedMatches[0].guestTeamScore).toEqual(2)
  })
})