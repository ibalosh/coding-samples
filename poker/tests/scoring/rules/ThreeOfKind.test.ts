import {PokerCard} from "../../../src/card/PokerCard";
import {ThreeOfKind} from "../../../src/scoring/rules";

describe('Three of kind rule', () => {
  test("not satisfy the rule", () => {
    const cards = [
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("4s"),
      new PokerCard("3s"),
      new PokerCard("3h")
    ]

    expect(new ThreeOfKind(4).satisfiesTheRule(cards)).toBe(false);
  })

  test("satisfy the rule", () => {
    const cards = [
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("2s"),
      new PokerCard("3s")
    ]

    expect(new ThreeOfKind(4).satisfiesTheRule(cards)).toBe(true);
  })
})