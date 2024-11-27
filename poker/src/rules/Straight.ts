import {Card} from "../card/Card";
import {CardRule} from "./CardRule";

export class Straight extends CardRule {
  satisfiesTheRule(cards: Card[]) {
    return this.doCardsHaveConsecutiveValues(cards)
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