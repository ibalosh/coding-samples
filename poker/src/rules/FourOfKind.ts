import Card from "../Card";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class FourOfKind extends CardsOfSameKind {
  score: number;

  constructor() {
    super();
    this.score = 8;
  }

  calculateScore(cards: Card[]): number {
    return this.hasNumberOfCardsWithSameValue(cards,4) ? this.score : 0;
  }
}