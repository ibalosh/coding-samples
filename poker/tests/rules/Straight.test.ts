import Card from "../../src/Card";
import {Straight, StraightFlush} from "../../src/rules";

describe('Straight Rule', () => {
  test("not satisfied the rule",() => {
    const cards = [
      new Card("0s"), new Card("1s"), new Card("2s"), new Card("3s"), new Card("6s"),
    ]

    expect(new Straight().calculateScore(cards)).toEqual(0);
  })

  test("satisfied the rule",() => {
    const cards = [
      new Card("0s"), new Card("1h"), new Card("2d"), new Card("3d"), new Card("4s"),
    ]

    expect(new Straight().calculateScore(cards)).toEqual(5);
  })
})