import {PokerCard} from "../../../src/card/PokerCard";
import {FourOfKind} from "../../../src/scoring/rules";

describe('Four of kind rule', () => {
  test("not satisfy the rule", () => {
    const cards = [
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("3s"),
      new PokerCard("3h")
    ]

    expect(new FourOfKind(8).ruleSatisfied(cards)).toBe(false);
  })

  test("satisfy the rule", () => {
    const cards = [
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("3s")
    ]

    expect(new FourOfKind(8).ruleSatisfied(cards)).toBe(true);
  })
})