import Card from "../Card";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class FourOfKind extends CardsOfSameKind {
  constructor(score: number) {
    super(score);
  }

  calculateScore(cards: Card[]): number {
    return this.hasNumberOfCardsWithSameValue(cards,4) ? this.score : 0;
  }
}