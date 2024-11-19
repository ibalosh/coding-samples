import {PokerCard} from "../src/PokerCard";

describe("Card", () => {
  test("valid card with one digit number and suit", () => {
    let card = new PokerCard("9h");

    expect(card.identifier).toEqual("9h")
    expect(card.value).toEqual(9)
    expect(card.suit).toEqual(1)
  })
})