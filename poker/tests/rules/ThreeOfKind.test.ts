import Card from "../../src/Card";
import {ThreeOfKind} from "../../src/rules/ThreeOfKind";

describe('Three of kind rule', () => {
  test("not satisfy the rule",() => {
    const cards = [
      new Card("0s"), new Card("0s"), new Card("4s"), new Card("3s"), new Card("3h")
    ]

    expect(new ThreeOfKind().calculateScore(cards)).toEqual(0);
  })

  test("satisfy the rule",() => {
    const cards = [
      new Card("0s"), new Card("0s"), new Card("0s"), new Card("2s"), new Card("3s")
    ]

    expect(new ThreeOfKind().calculateScore(cards)).toEqual(4);
  })
})