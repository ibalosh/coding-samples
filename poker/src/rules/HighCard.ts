import {Card} from "../PokerCard";
import {CardRule} from "./CardRule";
import {StringNumberPair} from "../models";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class HighCard implements CardRule {
  public readonly score;

  constructor(score: number) {
    this.score = score;
  }

  calculateScore(cards: Card[]): number {
    return this.score;
  }
}