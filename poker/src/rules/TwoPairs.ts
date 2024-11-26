import {Card} from "../Card";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class TwoPairs extends CardsOfSameKind{
  calculateCardsRankAndValue(cards: Card[]) {
    return {
      rank: this.getCountsOfCardsWithSameValues(cards, 2) === 2 ? this.rank : 0,
      value: this.calculateCardsValue(cards)
    };
  }
}