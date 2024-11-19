import Card from "../../src/Card";
import {FourOfKind, StraightFlush} from "../../src/rules";
import {FullHouse} from "../../src/rules/FullHouse";

describe('Full House rule', () => {

  test("not satisfy the rule",() => {
    const cards = [
      new Card("0s"), new Card("0s"), new Card("0s"), new Card("3s"), new Card("4h")
    ]

    expect(new FullHouse().calculateScore(cards)).toEqual(0);
  })

  test("satisfy the rule",() => {
    const cards = [
      new Card("0s"), new Card("0s"), new Card("0s"), new Card("3s"), new Card("3h")
    ]

    expect(new FullHouse().calculateScore(cards)).toEqual(7);
  })
})