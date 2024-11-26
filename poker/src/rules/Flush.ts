import {Card} from "../Card";
import {CardCombination, CardRule} from "./CardRule";

export class Flush extends CardRule {
  calculateCardsRankAndValue(cards: Card[]) {
    const rank = cards.every((card: Card) => card.suit === cards[0].suit) ?
      this.combinationRank : 0
    return {
      rank,
      value: this.calculateCardsValue(cards)
    }
  }
}