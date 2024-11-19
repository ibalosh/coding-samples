import {Card} from "../PokerCard";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class TwoPairs extends CardsOfSameKind{
  constructor(score: number) {
    super(score);
  }

  calculateScore(cards: Card[]): number {
    return this.getCountsOfCardsWithSameValues(cards, 2) === 2 ? this.score : 0;
  }
}