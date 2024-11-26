import {PokerCard} from "../../../src/card/PokerCard";
import {Straight} from "../../../src/scoring/rules";

describe('Straight rule', () => {
  test("not satisfied the rule", () => {
    const cards = [
      new PokerCard("0s"),
      new PokerCard("1s"),
      new PokerCard("2s"),
      new PokerCard("3s"),
      new PokerCard("6s"),
    ]

    expect(new Straight(5).ruleSatisfied(cards)).toBe(false);
  })

  test("satisfied the rule", () => {
    const cards = [
      new PokerCard("0s"),
      new PokerCard("1h"),
      new PokerCard("2d"),
      new PokerCard("3d"),
      new PokerCard("4s"),
    ]

    expect(new Straight(5).ruleSatisfied(cards)).toBe(true);
  })
})