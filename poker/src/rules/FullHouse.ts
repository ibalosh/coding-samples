import {Card} from "../Card";
import {CardRule} from "./CardRule";
import {StringNumberPair} from "../models";

export class FullHouse extends CardRule {
  calculateCardsRankAndValue(cards: Card[]) {
    const cardsGroupedByValue = this.groupCardsByValue(cards);

    const rank = (Object.values(cardsGroupedByValue).includes(3) &&
      Object.values(cardsGroupedByValue).includes(2)
    ) ? this.combinationRank : 0;

    return {
      rank,
      value: this.calculateCardsValue(cards)
    }
  }

  private groupCardsByValue(cards: Card[]): StringNumberPair {
    return cards.reduce((acc: {[Identifier: number]:number}, card) => {
      acc[card.value] = (acc[card.value] || 0) + 1
      return acc;
    },{})
  }
}