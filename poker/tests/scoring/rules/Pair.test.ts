import {PokerCard} from "../../../src/card/PokerCard";
import {Pair} from "../../../src/scoring/rules";

describe('Pair rule', () => {
  test("not satisfy the rule", () => {
    const cards = [
      new PokerCard("0s"),
      new PokerCard("1s"),
      new PokerCard("4s"),
      new PokerCard("Ts"),
      new PokerCard("3h")
    ]

    expect(new Pair(3).satisfiesTheRule(cards)).toBe(false)
  })

  test("satisfy the rule", () => {
    const cards = [
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("1s"),
      new PokerCard("2s"),
      new PokerCard("3s")
    ]

    expect(new Pair(3).satisfiesTheRule(cards)).toBe(true);
  })
})