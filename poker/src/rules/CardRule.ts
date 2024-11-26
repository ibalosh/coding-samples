import {Card} from "../Card";

export interface CardCombination {
  rank: number;
  value: number;
}

export abstract class CardRule {
  readonly rank: number;
  constructor(rank: number) {
    this.rank = rank;
  }

  abstract calculateCardsRankAndValue(cards:Card[]): CardCombination;
  calculateCardsValue(cards:Card[]): number {
    return cards.reduce((acc, card) => acc + card.value, 0);
  }
}