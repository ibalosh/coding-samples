import PokerHand from "../src/PokerHand";
import {PokerRulesFactory} from "../src/factories";

describe("PokerHand", () => {
  const rulesFactory = new PokerRulesFactory();
  rulesFactory.createRules();

  test("add invalid number of cards", () => {
    const pokerHand = new PokerHand(rulesFactory);

    expect(() =>pokerHand.handCards(Array(6).fill("a"))).toThrow(Error);
  })

  test("add valid number of cards", () => {
    const pokerHand = new PokerHand(rulesFactory);
    
    expect(() => pokerHand.handCards(["Qd","7s","5h","3c","Ts"])).not.toThrow(Error);
  })

  describe("calculate score", () => {
    test("identify high card", () => {
      const pokerHand = new PokerHand(rulesFactory);
      pokerHand.handCards(["Qd","7s","5h","3c","Ts"]);
      
      expect(pokerHand.calculateScore()).toEqual(1);
    })

    test("identify pair", () => {
      const pokerHand = new PokerHand(rulesFactory);
      pokerHand.handCards(["3d","3s","4h","6d","7d"]);

      expect(pokerHand.calculateScore()).toEqual(2);
    })

    test("identify two pairs", () => {
      const pokerHand = new PokerHand(rulesFactory);
      pokerHand.handCards(["3d","3s","6h","6d","7d"]);

      expect(pokerHand.calculateScore()).toEqual(3);
    })

    test("identify three of kind", () => {
      const pokerHand = new PokerHand(rulesFactory);
      pokerHand.handCards(["3d","3s","3h","6d","7d"]);

      expect(pokerHand.calculateScore()).toEqual(4);
    })

    test("identify straight", () => {
      const pokerHand = new PokerHand(rulesFactory);
      pokerHand.handCards(["3d","4s","5h","6d","7d"]);

      expect(pokerHand.calculateScore()).toEqual(5);
    })

    test("identify flush", () => {
      const pokerHand = new PokerHand(rulesFactory);
      pokerHand.handCards(["9d","9d","9d","5d","2d"]);

      expect(pokerHand.calculateScore()).toEqual(6);
    })

    test("identify full house", () => {
      const pokerHand = new PokerHand(rulesFactory);
      pokerHand.handCards(["9d","9d","9d","2d","2s"]);

      expect(pokerHand.calculateScore()).toEqual(7);
    })

    test("identify four kind", () => {
      const pokerHand = new PokerHand(rulesFactory);
      pokerHand.handCards(["9d","9d","9d","9d","Jd"]);

      expect(pokerHand.calculateScore()).toEqual(8);
    })

    test("identify straight flush", () => {
      const pokerHand = new PokerHand(rulesFactory);
      pokerHand.handCards(["7d","8d","9d","Td","Jd"]);

      expect(pokerHand.calculateScore()).toEqual(9);
    })
  })
})