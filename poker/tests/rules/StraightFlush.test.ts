import {PokerCard} from "../../src/PokerCard";
import {StraightFlush} from "../../src/rules";

describe('Straight flush rule', () => {
  test("not satisfied the rule", () => {
    const cards = [
      new PokerCard("0s"),
      new PokerCard("1s"),
      new PokerCard("2s"),
      new PokerCard("3s"),
      new PokerCard("4h")
    ]

    expect(new StraightFlush(9).calculateCardsRankAndValue(cards)).toEqual({rank: 0, value: 10});
  })

  test("satisfied the rule", () => {
    const cards = [
      new PokerCard("0s"),
      new PokerCard("1s"),
      new PokerCard("2s"),
      new PokerCard("3s"),
      new PokerCard("4s")
    ]

    expect(new StraightFlush(9).calculateCardsRankAndValue(cards)).toEqual({rank: 9, value: 10});
  })
})