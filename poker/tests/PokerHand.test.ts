import PokerHand from "../src/PokerHand";
import {PokerRulesFactory} from "../src/factories/CardRuleFactory";

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

  test("calculate score", () => {
    let pokerHand = new PokerHand(5, rulesFactory);
    pokerHand.addCards(["Qd","7s","5h","3c","Ts"]);
    expect(pokerHand.calculateScore()).toEqual(1);
  })

  test("calculate score for straight flush", () => {
    let pokerHand = new PokerHand(5, rulesFactory);
    pokerHand.addCards(["7d","8d","9d","Td","Jd"]);
    expect(pokerHand.calculateScore()).toEqual(9);
  })
})