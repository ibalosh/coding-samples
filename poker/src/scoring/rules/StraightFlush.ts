import Card from "../../card/Card";
import {Straight} from "./Straight";

export class StraightFlush extends Straight {
  ruleSatisfied(cards: Card[]) {
    return this.doCardsHaveConsecutiveValues(cards) && this.doCardsHaveSameSuit(cards);
  }

  protected doCardsHaveSameSuit(cards: Card[]): boolean {
    return (cards.every(card => card.suit === cards[0].suit))
  }
}