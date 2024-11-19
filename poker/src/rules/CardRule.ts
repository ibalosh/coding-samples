import Card from "../Card";

export interface CardRule {
  score: number;
  calculateScore(cards:Card[]): number;
}