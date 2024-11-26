import {Card} from "../Card";

export abstract class CardRule {
  readonly rank: number;
  constructor(rank: number) {
    this.rank = rank;
  }

  abstract satisfiesTheRule(cards:Card[]): boolean;
}