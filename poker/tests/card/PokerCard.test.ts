import {PokerCard} from "../../src/card/PokerCard";

describe("PokerCard", () => {
  test("valid card with number as a value and string suit", () => {
    const card = new PokerCard("9h");

    expect(card.identifier).toEqual("9h")
    expect(card.value).toEqual(9)
    expect(card.suit).toEqual(1)
  })

  test("valid card with string as a value and string suit", () => {
    const card = new PokerCard("Th");

    expect(card.identifier).toEqual("Th")
    expect(card.value).toEqual(10)
    expect(card.suit).toEqual(1)
  })
})