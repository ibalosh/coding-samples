import {Card} from "../PokerCard";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class FourOfKind extends CardsOfSameKind {
  constructor(score: number) {
    super(score);
  }

  calculateScore(cards: Card[]): number {
    return this.hasCardsWithSameValues(cards,4) ? this.score : 0;
  }
}