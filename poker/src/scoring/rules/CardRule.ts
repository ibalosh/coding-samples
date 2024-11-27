import {Card} from "../../card/Card";

export abstract class CardRule {
  readonly score: number;
  constructor(score: number) {
    this.score = score;
  }

  abstract satisfiesTheRule(cards:Card[]): boolean;
}