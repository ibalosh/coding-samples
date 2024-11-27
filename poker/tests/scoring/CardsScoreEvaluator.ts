import {
  StraightFlush,
  Flush,
  FourOfKind,
  FullHouse,
  HighCard,
  Straight,
  TwoPairs,
  ThreeOfKind,
  Pair
} from "../../src/scoring/rules";
import {PokerCardIdentifier} from "../../src/card";
import CardScoreE from "../../src/scoring/CardScoreEvaluator";
import {CardRules} from "../../src/scoring/CardRules";
import {PokerCardFactory} from "../../src/factories";

describe("CardCombinationScorer", () => {
  const pokerRules = new CardRules();
  [
    new StraightFlush(9),
    new FourOfKind(8),
    new FullHouse(7),
    new Flush(6),
    new Straight(5),
    new ThreeOfKind(4),
    new TwoPairs(3),
    new Pair(2),
    new HighCard(1)
  ].forEach(cardRule => pokerRules.addRule(cardRule));

  function createCards(cards: PokerCardIdentifier[]) {
    return cards.map(card => new PokerCardFactory().createCard(card));
  }

  test("identify high card", () => {
    const cards = createCards(["Qd", "7s", "5h", "3c", "Ts"])

    expect(new CardScoreE(pokerRules).evaluate(cards)).toEqual({
      scoreByValue: 37,
      scoreByRank: 1
    });
  })

  test("identify pair", () => {
    const cards = createCards(["3d", "3s", "4h", "6d", "7d"]);

    expect(new CardScoreE(pokerRules).evaluate(cards)).toEqual({
      scoreByValue: 23,
      scoreByRank: 2
    });
  })

  test("identify two pairs", () => {
    const cards = createCards(["3d", "3s", "6h", "6d", "7d"]);

    expect(new CardScoreE(pokerRules).evaluate(cards)).toEqual({
      scoreByValue: 25,
      scoreByRank: 3
    });
  })

  test("identify three of kind", () => {
    const cards = createCards(["3d", "3s", "3h", "6d", "7d"]);

    expect(new CardScoreE(pokerRules).evaluate(cards)).toEqual({
      scoreByValue: 22,
      scoreByRank: 4
    });
  })

  test("identify straight", () => {
    const cards = createCards(["3d", "4s", "5h", "6d", "7d"]);

    expect(new CardScoreE(pokerRules).evaluate(cards)).toEqual({
      scoreByValue: 25,
      scoreByRank: 5
    });
  })

  test("identify flush", () => {
    const cards = createCards(["9d", "9d", "9d", "5d", "2d"]);

    expect(new CardScoreE(pokerRules).evaluate(cards)).toEqual({
      scoreByValue: 34,
      scoreByRank: 6
    });
  })

  test("identify full house", () => {
    const cards = createCards(["9d", "9d", "9d", "2d", "2s"]);

    expect(new CardScoreE(pokerRules).evaluate(cards)).toEqual({
      scoreByValue: 31,
      scoreByRank: 7
    });
  })

  test("identify four kind", () => {
    const cards = createCards(["9d", "9d", "9d", "9d", "Jd"]);

    expect(new CardScoreE(pokerRules).evaluate(cards)).toEqual({
      scoreByValue: 47,
      scoreByRank: 8
    });
  })

  test("identify straight flush", () => {
    const cards = createCards(["7d", "8d", "9d", "Td", "Jd"]);

    expect(new CardScoreE(pokerRules).evaluate(cards)).toEqual({
      scoreByValue: 45,
      scoreByRank: 9
    });
  })
})