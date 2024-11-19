import {Card} from "../PokerCard";
import {CardRule} from "./CardRule";
import {StringNumberPair} from "../models";

export class FullHouse implements CardRule {
  public readonly score;

  constructor(score: number) {
    this.score = score;
  }

  calculateScore(cards: Card[]): number {
    const cardsGroupedByValue = this.groupCardsByValue(cards);

    return (Object.values(cardsGroupedByValue).includes(3) &&
      Object.values(cardsGroupedByValue).includes(2)
    ) ? this.score : 0;
  }

  private groupCardsByValue(cards: Card[]): StringNumberPair {
    return cards.reduce((acc: {[Identifier: number]:number}, card) => {
      acc[card.value] = (acc[card.value] || 0) + 1
      return acc;
    },{})
  }
}