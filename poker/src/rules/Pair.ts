import {Card} from "../Card";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class Pair extends CardsOfSameKind{
  constructor(score: number) {
    super(score);
  }

  calculateCardsRankAndValue(cards: Card[]) {
    return {
      rank: this.hasCardsWithSameValues(cards, 2) ? this.combinationRank : 0,
      value: this.calculateCardsValue(cards)
    };
  }
}