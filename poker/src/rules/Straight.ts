import {Card} from "../Card";
import {CardRule} from "./CardRule";

export class Straight extends CardRule {
  calculateCardsRankAndValue(cards: Card[]) {
    const rank = (this.doCardsHaveConsecutiveValues(cards)) ? this.rank : 0

    return {
      rank,
      value: this.calculateCardsValue(cards)
    };
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