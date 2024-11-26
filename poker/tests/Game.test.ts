import Game from "../src/Game";
import Player from "../src/Player";
import {PokerRules} from "../src/CardRules";
import {PokerHandManager} from "../src/CardHandManager";

describe("Game", () => {
  const player = new Player("John Smith");

  test("add invalid number of cards", () => {
    const game = new Game(new PokerRules(), new PokerHandManager());
    game.addPlayer(player)

    expect(
      () => game.addCards(["a","a","a","a","a","a"], player.name)
    ).toThrow(Error);
  })

  test("add valid number of cards", () => {
    const game = new Game(new PokerRules(), new PokerHandManager());
    game.addPlayer(player)

    expect(
      () => game.addCards(["Qd","7s","5h","3c","Ts"], player.name)
    ).not.toThrow(Error);
  })

  test("add cards to not yet existing player", () => {
    const game = new Game(new PokerRules(), new PokerHandManager());

    expect(
      () => game.addCards(["Qd","7s","5h","3c","Ts"], "Jane Doe")
    ).toThrow(Error);
  })

  test("add cards to non existing player", () => {
    const game = new Game(new PokerRules(), new PokerHandManager());
    game.addPlayer(player)

    expect(
      () => game.addCards(["Qd","7s","5h","3c","Ts"], "Jane Doe")
    ).toThrow(Error);
  })

  test("identify winner", () => {
    const game = new Game(new PokerRules(), new PokerHandManager());
    const players = [
      new Player("John Smith"),
      new Player("Jane Doe"),
      new Player("Michael Doe")
    ];

    players.forEach(player => game.addPlayer(player));

    game.addCards(["7d","8d","9d","Td","Jd"],players[1].name);
    game.addCards(["3d","3s","6h","6d","7d"], players[0].name);
    game.addCards(["3d","4s","5h","6d","7d"], players[2].name);

    expect(game.calculateWinner()).toEqual([players[1]]);
  })

  describe("calculate score", () => {
    test("identify high card", () => {
      const game = new Game(new PokerRules(), new PokerHandManager());
      game.addPlayer(player)
      game.addCards(["Qd","7s","5h","3c","Ts"], player.name);
      
      expect(game.calculateHandValue(player.name)).toEqual(1);
    })

    test("identify pair", () => {
      const game = new Game(new PokerRules(), new PokerHandManager());
      game.addPlayer(player)
      game.addCards(["3d","3s","4h","6d","7d"], player.name);

      expect(game.calculateHandValue(player.name)).toEqual(2);
    })

    test("identify two pairs", () => {
      const game = new Game(new PokerRules(), new PokerHandManager());
      game.addPlayer(player)
      game.addCards(["3d","3s","6h","6d","7d"], player.name);

      expect(game.calculateHandValue(player.name)).toEqual(3);
    })

    test("identify three of kind", () => {
      const game = new Game(new PokerRules(), new PokerHandManager());
      game.addPlayer(player)
      game.addCards(["3d","3s","3h","6d","7d"], player.name);

      expect(game.calculateHandValue(player.name)).toEqual(4);
    })

    test("identify straight", () => {
      const game = new Game(new PokerRules(), new PokerHandManager());
      game.addPlayer(player)
      game.addCards(["3d","4s","5h","6d","7d"], player.name);

      expect(game.calculateHandValue(player.name)).toEqual(5);
    })

    test("identify flush", () => {
      const game = new Game(new PokerRules(), new PokerHandManager());
      game.addPlayer(player)
      game.addCards(["9d","9d","9d","5d","2d"], player.name);

      expect(game.calculateHandValue(player.name)).toEqual(6);
    })

    test("identify full house", () => {
      const game = new Game(new PokerRules(), new PokerHandManager());
      game.addPlayer(player)
      game.addCards(["9d","9d","9d","2d","2s"],player.name);

      expect(game.calculateHandValue(player.name)).toEqual(7);
    })

    test("identify four kind", () => {
      const game = new Game(new PokerRules(), new PokerHandManager());
      game.addPlayer(player)
      game.addCards(["9d","9d","9d","9d","Jd"],player.name);

      expect(game.calculateHandValue(player.name)).toEqual(8);
    })

    test("identify straight flush", () => {
      const game = new Game(new PokerRules(), new PokerHandManager());
      game.addPlayer(player)
      game.addCards(["7d","8d","9d","Td","Jd"],player.name);

      expect(game.calculateHandValue(player.name)).toEqual(9);
    })
  })
})