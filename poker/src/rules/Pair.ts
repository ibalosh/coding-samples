import {Card} from "../Card";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class Pair extends CardsOfSameKind{
  constructor(score: number) {
    super(score);
  }

  calculateScore(cards: Card[]): number {
    return this.hasCardsWithSameValues(cards, 2) ? this.score : 0;
  }
}