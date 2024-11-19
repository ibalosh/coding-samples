import Game from "../src/Game";
import {PokerHandFactory, PokerRulesFactory} from "../src/factories";

describe("Game", () => {
  const rulesFactory = new PokerRulesFactory();
  rulesFactory.createRules();

  const handFactory = new PokerHandFactory();

  test("add invalid number of cards", () => {
    const pokerHand = new Game(rulesFactory, handFactory);

    expect(() =>pokerHand.addCards(Array(6).fill("a"))).toThrow(Error);
  })

  test("add valid number of cards", () => {
    const pokerHand = new Game(rulesFactory, handFactory);
    
    expect(() => pokerHand.addCards(["Qd","7s","5h","3c","Ts"])).not.toThrow(Error);
  })

  describe("calculate score", () => {
    test("identify high card", () => {
      const pokerHand = new Game(rulesFactory, handFactory);
      pokerHand.addCards(["Qd","7s","5h","3c","Ts"]);
      
      expect(pokerHand.calculateScore()).toEqual(1);
    })

    test("identify pair", () => {
      const pokerHand = new Game(rulesFactory, handFactory);
      pokerHand.addCards(["3d","3s","4h","6d","7d"]);

      expect(pokerHand.calculateScore()).toEqual(2);
    })

    test("identify two pairs", () => {
      const pokerHand = new Game(rulesFactory, handFactory);
      pokerHand.addCards(["3d","3s","6h","6d","7d"]);

      expect(pokerHand.calculateScore()).toEqual(3);
    })

    test("identify three of kind", () => {
      const pokerHand = new Game(rulesFactory, handFactory);
      pokerHand.addCards(["3d","3s","3h","6d","7d"]);

      expect(pokerHand.calculateScore()).toEqual(4);
    })

    test("identify straight", () => {
      const pokerHand = new Game(rulesFactory, handFactory);
      pokerHand.addCards(["3d","4s","5h","6d","7d"]);

      expect(pokerHand.calculateScore()).toEqual(5);
    })

    test("identify flush", () => {
      const pokerHand = new Game(rulesFactory, handFactory);
      pokerHand.addCards(["9d","9d","9d","5d","2d"]);

      expect(pokerHand.calculateScore()).toEqual(6);
    })

    test("identify full house", () => {
      const pokerHand = new Game(rulesFactory, handFactory);
      pokerHand.addCards(["9d","9d","9d","2d","2s"]);

      expect(pokerHand.calculateScore()).toEqual(7);
    })

    test("identify four kind", () => {
      const pokerHand = new Game(rulesFactory, handFactory);
      pokerHand.addCards(["9d","9d","9d","9d","Jd"]);

      expect(pokerHand.calculateScore()).toEqual(8);
    })

    test("identify straight flush", () => {
      const pokerHand = new Game(rulesFactory, handFactory);
      pokerHand.addCards(["7d","8d","9d","Td","Jd"]);

      expect(pokerHand.calculateScore()).toEqual(9);
    })
  })
})