import Card from "../Card";
import {CardRule} from "./CardRule";
import {StringNumberPair} from "../models";

export abstract class CardsOfSameKind implements CardRule {
  public readonly score;

  constructor(score: number) {
    this.score = score;
  }

  abstract calculateScore(cards: Card[]): number;

  protected hasMultipleNumberOfCardsWithSameValue(cards: Card[], numberOfCards: number): number {
    const cardsGroupedByValue = this.groupCardsByValue(cards);
    return (Object.values(cardsGroupedByValue).filter(values => values === numberOfCards)).length
  }

  protected hasNumberOfCardsWithSameValue(cards: Card[], numberOfCards: number): boolean {
    return this.hasMultipleNumberOfCardsWithSameValue(cards, numberOfCards) === 1;
  }

  protected groupCardsByValue(cards: Card[]): StringNumberPair {
    return cards.reduce((acc: {[Identifier: number]:number}, card) => {
      acc[card.value] = (acc[card.value] || 0) + 1
      return acc;
    },{})
  }
}