import Card from "../src/Card";
import PokerHand from "../src/PokerHand";

describe("Card", () => {
  test("too long card identifier", () => {
    expect(() => new Card("10h")).toThrow(Error);
  })

  test("invalid card value", () => {
    expect(() => new Card("ah")).toThrow(Error);
  })

  test("invalid card suit", () => {
    expect(() => new Card("0f")).toThrow(Error);
  })

  test("valid card with one digit number and suit", () => {
    let card = new Card("9h");

    expect(card.identifier).toEqual("9h")
    expect(card.value).toEqual(Card.Values["9"])
    expect(card.suit).toEqual(Card.Suits["h"])
  })
})