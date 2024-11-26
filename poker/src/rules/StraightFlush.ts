import {Card} from "../Card";
import {Straight} from "./Straight";

export class StraightFlush extends Straight {
  calculateCardsRankAndValue(cards: Card[]) {
    const rank = (this.doCardsHaveConsecutiveValues(cards) && this.doCardsHaveSameSuit(cards)) ?
      this.combinationRank : 0;

    return {
      rank,
      value: this.calculateCardsValue(cards)
    }
  }

  protected doCardsHaveSameSuit(cards: Card[]): boolean {
    return (cards.every(card => card.suit === cards[0].suit))
  }
}