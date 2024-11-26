import {Card} from "../Card";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class FourOfKind extends CardsOfSameKind {
  constructor(score: number) {
    super(score);
  }

  calculateCardsRankAndValue(cards: Card[]) {
    return {
      rank: this.hasCardsWithSameValues(cards,4) ? this.rank : 0,
      value: this.calculateCardsValue(cards)
    };
  }
}