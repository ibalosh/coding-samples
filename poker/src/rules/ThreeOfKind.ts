import Card from "../Card";
import {CardRule} from "./CardRule";
import {StringNumberPair} from "../models";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class ThreeOfKind extends CardsOfSameKind{
  score: number;

  constructor() {
    super();
    this.score = 4;
  }

  calculateScore(cards: Card[]): number {
    return this.hasNumberOfCardsWithSameValue(cards, 3) ? this.score : 0;
  }
}