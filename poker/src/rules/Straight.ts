import Card from "../Card";
import {CardRule} from "./CardRule";

export class Straight implements CardRule {
  public readonly score;

  constructor(score: number) {
    this.score = score;
  }

  calculateScore(cards: Card[]): number {
    if (this.doCardsHaveConsecutiveValues(cards))
      return this.score;
    else
      return 0;
  }

  protected doCardsHaveConsecutiveValues(cards: Card[]): boolean {
    cards.sort((a, b) => a.value - b.value);

    for (let i = 1; i < cards.length; i++) {
      if (cards[i].value -1 !== cards[i-1].value)
        return false;
    }

    return true;
  }
}