import Card from "../Card";
import {CardRule} from "./CardRule";

export class Flush implements CardRule {
  score: number;

  constructor() {
    this.score = 6;
  }

  calculateScore(cards: Card[]): number {
    return cards.every((card: Card) => card.suit === cards[0].suit) ? this.score : 0
  }
}