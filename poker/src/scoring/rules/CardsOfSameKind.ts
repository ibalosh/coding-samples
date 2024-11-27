import {Card, StringNumberPair} from "../../card";
import {CardRule} from "./CardRule";

export abstract class CardsOfSameKind extends CardRule {
  protected getCountsOfCardsWithSameValues(cards: Card[], numberOfCards: number): number {
    const cardsGroupedByValue = this.groupCardsByValue(cards);
    return (Object.values(cardsGroupedByValue).filter(values => values === numberOfCards)).length
  }

  protected hasCardsWithSameValues(cards: Card[], numberOfCards: number): boolean {
    return this.getCountsOfCardsWithSameValues(cards, numberOfCards) === 1;
  }

  protected groupCardsByValue(cards: Card[]): StringNumberPair {
    return cards.reduce((acc: {[Identifier: number]:number}, card) => {
      acc[card.value] = (acc[card.value] || 0) + 1
      return acc;
    },{})
  }
}