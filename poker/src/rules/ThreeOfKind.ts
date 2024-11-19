import Card from "../Card";
import {CardRule} from "./CardRule";
import {StringNumberPair} from "../models";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class ThreeOfKind extends CardsOfSameKind{
  constructor(score: number) {
    super(score);
  }

  calculateScore(cards: Card[]): number {
    return this.hasNumberOfCardsWithSameValue(cards, 3) ? this.score : 0;
  }
}