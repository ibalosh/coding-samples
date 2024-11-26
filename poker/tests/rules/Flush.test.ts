import {PokerCard} from "../../src/PokerCard";
import {Flush} from "../../src/rules";

describe('Flush rule', () => {
  test("not satisfy the rule", () => {
    const cards = [
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("3s"),
      new PokerCard("3h")
    ]

    expect(new Flush(6).calculateCardsRankAndValue(cards)).toEqual({rank: 0, value: 6});
  })

  test("satisfy the rule", () => {
    const cards = [
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("0s"),
      new PokerCard("3s"),
      new PokerCard("3s")
    ]

    expect(new Flush(6).calculateCardsRankAndValue(cards)).toEqual({rank: 6, value: 6});
  })
})