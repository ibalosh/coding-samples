import {PokerCard} from "../../../src/card/PokerCard";
import {Flush} from "../../../src/scoring/rules";

describe('Flush rule', () => {
  test("not satisfy the rule", () => {
    const cards = [
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("3s"),
      new PokerCard("3h")
    ]

    expect(new Flush(6).ruleSatisfied(cards)).toBe(false);
  })

  test("satisfy the rule", () => {
    const cards = [
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("3s"),
      new PokerCard("3s")
    ]

    expect(new Flush(6).ruleSatisfied(cards)).toBe(true);
  })
})