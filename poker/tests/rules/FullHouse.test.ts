import {PokerCard} from "../../src/PokerCard";
import {FullHouse} from "../../src/rules/FullHouse";

describe('Full House rule', () => {

  test("not satisfy the rule",() => {
    const cards = [
      new PokerCard("0s"), new PokerCard("0s"), new PokerCard("0s"), new PokerCard("3s"), new PokerCard("4h")
    ]

    expect(new FullHouse(7).calculateScore(cards)).toEqual(0);
  })

  test("satisfy the rule",() => {
    const cards = [
      new PokerCard("0s"), new PokerCard("0s"), new PokerCard("0s"), new PokerCard("3s"), new PokerCard("3h")
    ]

    expect(new FullHouse(7).calculateScore(cards)).toEqual(7);
  })
})