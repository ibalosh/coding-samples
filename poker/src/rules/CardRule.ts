import {Card} from "../Card";

export interface CardRule {
  readonly score: number;
  calculateScore(cards:Card[]): number;
}