import Card from "../Card";
import {Straight} from "./Straight";

export class StraightFlush extends Straight {
  constructor(score: number) {
    super(score);
  }

  calculateScore(cards: Card[]): number {
    if (this.doCardsHaveConsecutiveValues(cards) && this.doCardsHaveSameSuit(cards))
      return this.score;
    else
      return 0;
  }

  protected doCardsHaveSameSuit(cards: Card[]): boolean {
    return (cards.every(card => card.suit === cards[0].suit))
  }
}