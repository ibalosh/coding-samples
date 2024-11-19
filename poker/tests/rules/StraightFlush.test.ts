import Card from "../../src/Card";
import {StraightFlush} from "../../src/rules";

describe('Straight Flush Rule', () => {
  test("not satisfied the rule",() => {
    const cards = [
      new Card("0s"), new Card("1s"), new Card("2s"), new Card("3s"), new Card("4h")
    ]

    expect(new StraightFlush().calculateScore(cards)).toEqual(0);
  })

  test("satisfied the rule",() => {
    const cards = [
      new Card("0s"), new Card("1s"), new Card("2s"), new Card("3s"), new Card("4s")
    ]

    expect(new StraightFlush().calculateScore(cards)).toEqual(9);
  })
})