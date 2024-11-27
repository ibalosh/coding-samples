import Game from "../src/Game";
import {PokerCardFactory} from "../src/factories";
import {
  Flush, FourOfKind, FullHouse, HighCard, Pair, Straight, StraightFlush, ThreeOfKind, TwoPairs
} from "../src/scoring/rules";
import CardRules from "../src/scoring/CardRules";

describe("Game", () => {
  const pokerRules = new CardRules();
  [
    new StraightFlush(9),
    new FourOfKind(8),
    new FullHouse(7),
    new Flush(6),
    new Straight(5),
    new ThreeOfKind(4),
    new TwoPairs(3),
    new Pair(2),
    new HighCard(1)
  ].forEach(cardRule => pokerRules.addRule(cardRule));

  test("add valid number of cards", () => {
    const game = new Game(pokerRules, new PokerCardFactory());
    game.addPlayer("John Smith");

    expect(() => game.addCards(["Qd","7s","5h","3c","Ts"], "John Smith")).not.toThrow(Error);
  })

  test("add cards to not yet existing player", () => {
    const game = new Game(pokerRules, new PokerCardFactory());

    expect(
      () => game.addCards(["Qd","7s","5h","3c","Ts"], "Jane Doe")
    ).toThrow(Error);
  })

  test("add cards to non existing player", () => {
    const game = new Game(pokerRules, new PokerCardFactory());
    game.addPlayer("John Smith");

    expect(
      () => game.addCards(["Qd","7s","5h","3c","Ts"], "Jane Doe")
    ).toThrow(Error);
  })

  test("identify winner", () => {
    const game = new Game(pokerRules, new PokerCardFactory());
    const players = ["John Smith", "Jane Doe", "Michael Doe"];
    players.forEach(player => game.addPlayer(player));

    game.addCards(["7d","8d","9d","Td","Jd"], "Jane Doe");
    game.addCards(["3d","3s","6h","6d","7d"], "John Smith");
    game.addCards(["3d","4s","5h","6d","7d"], "Michael Doe");

    expect(game.findWinners()).toEqual(["Jane Doe"]);
  })

  test("identify multiple winners", () => {
    const game = new Game(pokerRules, new PokerCardFactory());
    const players = ["John Smith", "Jane Doe", "Michael Doe", "Rico Doe"];
    players.forEach(player => game.addPlayer(player));

    game.addCards(["7d","8d","9d","Td","Jd"], "Jane Doe");
    game.addCards(["8h","7h","9h","Th","Jh"], "Rico Doe");
    game.addCards(["3d","3s","6h","6d","7d"], "John Smith");
    game.addCards(["3d","4s","5h","6d","7d"], "Michael Doe");

    expect(game.findWinners()).toEqual(["Jane Doe", "Rico Doe"]);
  })

  test("identify winner when players are not set", () => {
    const game = new Game(pokerRules, new PokerCardFactory());
    expect(game.findWinners()).toEqual([]);
  })
})