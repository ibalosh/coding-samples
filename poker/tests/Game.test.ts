import Game from "../src/Game";
import Player from "../src/Player";
import {PokerCardFactory} from "../src/factories";
import {
  Flush,
  FourOfKind,
  FullHouse,
  HighCard,
  Pair,
  Straight,
  StraightFlush,
  ThreeOfKind,
  TwoPairs
} from "../src/scoring/rules";
import {CardRules} from "../src/scoring/CardRules";

describe("Game", () => {
  const player = new Player("John Smith");
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
    game.addPlayer(player)

    expect(
      () => game.addCards(["Qd","7s","5h","3c","Ts"], player.name)
    ).not.toThrow(Error);
  })

  test("add cards to not yet existing player", () => {
    const game = new Game(pokerRules, new PokerCardFactory());

    expect(
      () => game.addCards(["Qd","7s","5h","3c","Ts"], "Jane Doe")
    ).toThrow(Error);
  })

  test("add cards to non existing player", () => {
    const game = new Game(pokerRules, new PokerCardFactory());
    game.addPlayer(player)

    expect(
      () => game.addCards(["Qd","7s","5h","3c","Ts"], "Jane Doe")
    ).toThrow(Error);
  })

  test("identify winner", () => {
    const game = new Game(pokerRules, new PokerCardFactory());
    const players = [
      new Player("John Smith"),
      new Player("Jane Doe"),
      new Player("Michael Doe"),
      new Player("Rico Doe"),
    ];

    players.forEach(player => game.addPlayer(player));

    game.addCards(["7d","8d","9d","Td","Jd"], "Jane Doe");
    game.addCards(["3d","3s","6h","6d","7d"], "John Smith");
    game.addCards(["3d","4s","5h","6d","7d"], "Michael Doe");

    expect(game.calculateWinner()).toEqual(["Jane Doe"]);
  })

  test("identify multiple winners", () => {
    const game = new Game(pokerRules, new PokerCardFactory());
    const players = [
      new Player("John Smith"),
      new Player("Jane Doe"),
      new Player("Michael Doe"),
      new Player("Rico Doe")
    ];

    players.forEach(player => game.addPlayer(player));

    game.addCards(["7d","8d","9d","Td","Jd"], "Jane Doe");
    game.addCards(["8h","7h","9h","Th","Jh"], "Rico Doe");
    game.addCards(["3d","3s","6h","6d","7d"], "John Smith");
    game.addCards(["3d","4s","5h","6d","7d"], "Michael Doe");

    expect(game.calculateWinner()).toEqual(["Jane Doe", "Rico Doe"]);
  })

  test("identify winner when players are not set", () => {
    const game = new Game(pokerRules, new PokerCardFactory());
    expect(game.calculateWinner()).toEqual([]);
  })

  describe("calculate score", () => {
    test("identify high card", () => {
      const game = new Game(pokerRules, new PokerCardFactory());
      game.addPlayer(player)
      game.addCards(["Qd","7s","5h","3c","Ts"], player.name);
      
      expect(game.calculateHandRank(player.name)).toEqual(1);
    })

    test("identify pair", () => {
      const game = new Game(pokerRules, new PokerCardFactory());
      game.addPlayer(player)
      game.addCards(["3d","3s","4h","6d","7d"], player.name);

      expect(game.calculateHandRank(player.name)).toEqual(2);
    })

    test("identify two pairs", () => {
      const game = new Game(pokerRules, new PokerCardFactory());
      game.addPlayer(player)
      game.addCards(["3d","3s","6h","6d","7d"], player.name);

      expect(game.calculateHandRank(player.name)).toEqual(3);
    })

    test("identify three of kind", () => {
      const game = new Game(pokerRules, new PokerCardFactory());
      game.addPlayer(player)
      game.addCards(["3d","3s","3h","6d","7d"], player.name);

      expect(game.calculateHandRank(player.name)).toEqual(4);
    })

    test("identify straight", () => {
      const game = new Game(pokerRules, new PokerCardFactory());
      game.addPlayer(player)
      game.addCards(["3d","4s","5h","6d","7d"], player.name);

      expect(game.calculateHandRank(player.name)).toEqual(5);
    })

    test("identify flush", () => {
      const game = new Game(pokerRules, new PokerCardFactory());
      game.addPlayer(player)
      game.addCards(["9d","9d","9d","5d","2d"], player.name);

      expect(game.calculateHandRank(player.name)).toEqual(6);
    })

    test("identify full house", () => {
      const game = new Game(pokerRules, new PokerCardFactory());
      game.addPlayer(player)
      game.addCards(["9d","9d","9d","2d","2s"],player.name);

      expect(game.calculateHandRank(player.name)).toEqual(7);
    })

    test("identify four kind", () => {
      const game = new Game(pokerRules, new PokerCardFactory());
      game.addPlayer(player)
      game.addCards(["9d","9d","9d","9d","Jd"],player.name);

      expect(game.calculateHandRank(player.name)).toEqual(8);
    })

    test("identify straight flush", () => {
      const game = new Game(pokerRules, new PokerCardFactory());
      game.addPlayer(player)
      game.addCards(["7d","8d","9d","Td","Jd"],player.name);

      expect(game.calculateHandRank(player.name)).toEqual(9);
    })
  })
})