import Matches from "../src/Matches";

describe('Matches', () => {
  test('init', () => {
    const handler: Matches = new Matches();
    expect(handler.matches.length).toBe(0);
  })

  test('init', () => {
    const matches: Matches = new Matches();
    matches.add("Austria", "Germany");
    matches.add("England", "Spain");
    matches.add("England", "Portugal");
    matches.update("Austria", "Germany", 1,2);
    matches.update("England", "Portugal", 9,2);
    matches.update("England", "Spain", 3,2);

    const sortedMatches = matches.fetch();

    expect(sortedMatches[0].homeTeam).toEqual({name: "England", score: 9})
    expect(sortedMatches[0].guestTeam).toEqual({name: "Portugal", score: 2})
  })

  test('remove existing', () => {
    const matches: Matches = new Matches();
    matches.add("Austria", "Germany");
    matches.remove("Austria", "Germany");
    expect(matches.fetch().length).toEqual(0);
  })

  test('remove non existing', () => {
    const matches: Matches = new Matches();
    expect(() => { matches.remove("Austria", "Germany") }).toThrow(Error);
  })
})
