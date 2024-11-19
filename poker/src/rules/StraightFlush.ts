import Card from "../Card";
import {Straight} from "./Straight";

export class StraightFlush extends Straight {
  score: number;

  constructor() {
    super();
    this.score = 9;
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