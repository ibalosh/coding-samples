import {Card} from "../PokerCard";

export interface CardRule {
  readonly score: number;
  calculateScore(cards:Card[]): number;
}