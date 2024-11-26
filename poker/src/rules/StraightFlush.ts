import {Card} from "../Card";
import {Straight} from "./Straight";

export class StraightFlush extends Straight {
  satisfiesTheRule(cards: Card[]) {
    return this.doCardsHaveConsecutiveValues(cards) && this.doCardsHaveSameSuit(cards);
  }

  protected doCardsHaveSameSuit(cards: Card[]): boolean {
    return (cards.every(card => card.suit === cards[0].suit))
  }
}