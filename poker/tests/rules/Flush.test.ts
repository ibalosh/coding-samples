import Card from "../../src/Card";
import {Flush} from "../../src/rules";

describe('Flush', () => {
  const suitNames = Object.keys(Card.Suits);

  test("not satisfy the rule",() => {
    const cards = [
      new Card("0s"), new Card("0s"), new Card("0s"), new Card("3s"), new Card("3h")
    ]

    expect(new Flush().calculateScore(cards)).toEqual(0);
  })

  test("satisfy the rule",() => {
    const cards = [
      new Card("0s"), new Card("0s"), new Card("0s"), new Card("3s"), new Card("3s")
    ]

    expect(new Flush().calculateScore(cards)).toEqual(6);
  })
})