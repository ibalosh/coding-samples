import {PokerCard} from "../../src/PokerCard";
import {ThreeOfKind} from "../../src/rules";

describe('Three of kind rule', () => {
  test("not satisfy the rule", () => {
    const cards = [
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("4s"),
      new PokerCard("3s"),
      new PokerCard("3h")
    ]

    expect(new ThreeOfKind(4).calculateCardsRankAndValue(cards)).toEqual({rank: 0, value: 10});
  })

  test("satisfy the rule", () => {
    const cards = [
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("2s"),
      new PokerCard("3s")
    ]

    expect(new ThreeOfKind(4).calculateCardsRankAndValue(cards)).toEqual({rank: 4, value: 5});
  })
})