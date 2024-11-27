import {Card} from "../card/Card";
import {CardRule} from "./CardRule";

import {StringNumberPair} from "../card/CardType";

export class FullHouse extends CardRule {
  satisfiesTheRule(cards: Card[]) {
    const cardsGroupedByValue = this.groupCardsByValue(cards);

    return (Object.values(cardsGroupedByValue).includes(3) &&
      Object.values(cardsGroupedByValue).includes(2)
    );
  }

  private groupCardsByValue(cards: Card[]): StringNumberPair {
    return cards.reduce((acc: {[Identifier: number]:number}, card) => {
      acc[card.value] = (acc[card.value] || 0) + 1
      return acc;
    },{})
  }
}