import {PokerCard} from "../../src/PokerCard";
import {TwoPairs} from "../../src/rules";

describe('Two pair rule', () => {
  test("not satisfy the rule", () => {
    const cards = [
      new PokerCard("0s"),
      new PokerCard("1s"),
      new PokerCard("4s"),
      new PokerCard("Ts"),
      new PokerCard("3h")
    ]

    expect(new TwoPairs(2).satisfiesTheRule(cards)).toBe(false);
  })

  test("satisfy the rule", () => {
    const cards = [
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("1s"),
      new PokerCard("2s"),
      new PokerCard("2s")
    ]

    expect(new TwoPairs(2).satisfiesTheRule(cards)).toBe(true);
  })
})