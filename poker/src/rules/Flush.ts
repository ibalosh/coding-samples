import Card from "../Card";
import {CardRule} from "./CardRule";

export class Flush implements CardRule {
  public readonly score;

  constructor(score: number) {
    this.score = score;
  }

  calculateScore(cards: Card[]): number {
    return cards.every((card: Card) => card.suit === cards[0].suit) ? this.score : 0
  }
}