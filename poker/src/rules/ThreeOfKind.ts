import {Card} from "../Card";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class ThreeOfKind extends CardsOfSameKind{
  calculateCardsRankAndValue(cards: Card[]) {
    return {
      rank: this.hasCardsWithSameValues(cards, 3) ? this.combinationRank : 0,
      value: this.calculateCardsValue(cards)
    };
  }
}