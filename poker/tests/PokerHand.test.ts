import PokerHand from "../src/PokerHand";
import {StraightFlush,CardRule} from "../src/rules";

describe("Poker Hand", () => {
  test("add invalid number of cards", () => {
    let pokerHand = new PokerHand(3, [new StraightFlush()]);
    expect(() =>pokerHand.addCards(Array(5).fill("a"))).toThrow(Error);
  })

  test("add valid number of cards", () => {
    let pokerHand = new PokerHand(5, [new StraightFlush()]);
    pokerHand.addCards(["Qd","7s","5h","3c","Ts"]);
  })

  test("calculate score", () => {
    let pokerHand = new PokerHand(5, [new StraightFlush()]);
    pokerHand.addCards(["Qd","7s","5h","3c","Ts"]);
    expect(pokerHand.calculateScore()).toEqual(0);
  })

  test("calculate score for straight flush", () => {
    let pokerHand = new PokerHand(5, [new StraightFlush()]);
    pokerHand.addCards(["7d","8d","9d","Td","Jd"]);
    expect(pokerHand.calculateScore()).toEqual(9);
  })
})