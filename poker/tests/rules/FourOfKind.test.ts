import Card from "../../src/Card";
import {FourOfKind, StraightFlush} from "../../src/rules";

describe('Four of kind Rule', () => {
  test("not satisfy the rule",() => {
    const cards = [
      new Card("0s"), new Card("0s"), new Card("0s"), new Card("3s"), new Card("3h")
    ]

    expect(new FourOfKind().calculateScore(cards)).toEqual(0);
  })

  test("satisfy the rule",() => {
    const cards = [
      new Card("0s"), new Card("0s"), new Card("0s"), new Card("0s"), new Card("3s")
    ]

    expect(new FourOfKind().calculateScore(cards)).toEqual(8);
  })
})