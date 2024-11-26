import {Card} from "../Card";

export interface CardCombination {
  rank: number;
  value: number;
}

export abstract class CardRule {
  readonly combinationRank: number;
  constructor(combinationRank: number) {
    this.combinationRank = combinationRank;
  }

  abstract calculateCardsRankAndValue(cards:Card[]): CardCombination;
  calculateCardsValue(cards:Card[]): number {
    return cards.reduce((acc, card) => acc + card.value, 0);
  }
}