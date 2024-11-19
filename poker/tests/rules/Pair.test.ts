import Card from "../../src/Card";
import {ThreeOfKind} from "../../src/rules/ThreeOfKind";
import {Pair} from "../../src/rules";

describe('Pair rule', () => {
  test("not satisfy the rule",() => {
    const cards = [
      new Card("0s"), new Card("1s"), new Card("4s"), new Card("Ts"), new Card("3h")
    ]

    expect(new Pair(3).calculateScore(cards)).toEqual(0);
  })

  test("satisfy the rule",() => {
    const cards = [
      new Card("0s"), new Card("0s"), new Card("1s"), new Card("2s"), new Card("3s")
    ]

    expect(new Pair(3).calculateScore(cards)).toEqual(3);
  })
})