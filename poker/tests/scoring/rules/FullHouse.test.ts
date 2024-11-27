import {PokerCard} from "../../../src/card/PokerCard";
import {FullHouse} from "../../../src/scoring/rules";

describe('Full house rule', () => {

  test("not satisfy the rule", () => {
    const cards = [
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("3s"),
      new PokerCard("4h")
    ]

    expect(new FullHouse(7).ruleSatisfied(cards)).toBe(false);
  })

  test("satisfy the rule", () => {
    const cards = [
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("3s"),
      new PokerCard("3h")
    ]

    expect(new FullHouse(7).ruleSatisfied(cards)).toBe(true);
  })
})