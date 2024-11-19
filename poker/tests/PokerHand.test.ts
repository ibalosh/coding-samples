import PokerHand from "../src/PokerHand";
import {PokerRulesFactory} from "../src/factories/CardRulesFactory";

describe("Poker Hand", () => {
  const rulesFactory = new PokerRulesFactory();
  rulesFactory.createRules();

  test("add invalid number of cards", () => {
    let pokerHand = new PokerHand(3, rulesFactory);
    expect(() =>pokerHand.addCards(Array(5).fill("a"))).toThrow(Error);
  })

  test("add valid number of cards", () => {
    let pokerHand = new PokerHand(5, rulesFactory);
    pokerHand.addCards(["Qd","7s","5h","3c","Ts"]);
  })

  describe("calculate score", () => {
    test("identify high card", () => {
      let pokerHand = new PokerHand(5, rulesFactory);
      pokerHand.addCards(["Qd","7s","5h","3c","Ts"]);
      expect(pokerHand.calculateScore()).toEqual(1);
    })

    test("identify pair", () => {
      let pokerHand = new PokerHand(5, rulesFactory);
      pokerHand.addCards(["3d","3s","4h","6d","7d"]);
      expect(pokerHand.calculateScore()).toEqual(2);
    })

    test("identify two pairs", () => {
      let pokerHand = new PokerHand(5, rulesFactory);
      pokerHand.addCards(["3d","3s","6h","6d","7d"]);
      expect(pokerHand.calculateScore()).toEqual(3);
    })

    test("identify three of kind", () => {
      let pokerHand = new PokerHand(5, rulesFactory);
      pokerHand.addCards(["3d","3s","3h","6d","7d"]);
      expect(pokerHand.calculateScore()).toEqual(4);
    })

    test("identify straight", () => {
      let pokerHand = new PokerHand(5, rulesFactory);
      pokerHand.addCards(["3d","4s","5h","6d","7d"]);
      expect(pokerHand.calculateScore()).toEqual(5);
    })

    test("identify flush", () => {
      let pokerHand = new PokerHand(5, rulesFactory);
      pokerHand.addCards(["9d","9d","9d","5d","2d"]);
      expect(pokerHand.calculateScore()).toEqual(6);
    })

    test("identify full house", () => {
      let pokerHand = new PokerHand(5, rulesFactory);
      pokerHand.addCards(["9d","9d","9d","2d","2s"]);
      expect(pokerHand.calculateScore()).toEqual(7);
    })

    test("identify four kind", () => {
      let pokerHand = new PokerHand(5, rulesFactory);
      pokerHand.addCards(["9d","9d","9d","9d","Jd"]);
      expect(pokerHand.calculateScore()).toEqual(8);
    })

    test("identify straight flush", () => {
      let pokerHand = new PokerHand(5, rulesFactory);
      pokerHand.addCards(["7d","8d","9d","Td","Jd"]);
      expect(pokerHand.calculateScore()).toEqual(9);
    })
  })
})