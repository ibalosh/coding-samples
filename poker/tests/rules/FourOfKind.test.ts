import {PokerCard} from "../../src/PokerCard";
import {FourOfKind} from "../../src/rules";

describe('Four of kind Rule', () => {
  test("not satisfy the rule",() => {
    const cards = [
      new PokerCard("0s"), new PokerCard("0s"), new PokerCard("0s"), new PokerCard("3s"), new PokerCard("3h")
    ]

    expect(new FourOfKind(8).calculateScore(cards)).toEqual(0);
  })

  test("satisfy the rule",() => {
    const cards = [
      new PokerCard("0s"), new PokerCard("0s"), new PokerCard("0s"), new PokerCard("0s"), new PokerCard("3s")
    ]

    expect(new FourOfKind(8).calculateScore(cards)).toEqual(8);
  })
})