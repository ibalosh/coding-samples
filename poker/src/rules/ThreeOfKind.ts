import {Card} from "../Card";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class ThreeOfKind extends CardsOfSameKind{
  constructor(score: number) {
    super(score);
  }

  calculateScore(cards: Card[]): number {
    return this.hasCardsWithSameValues(cards, 3) ? this.score : 0;
  }
}