import Card from "../Card";
import {CardRule} from "./CardRule";
import {StringNumberPair} from "../models";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class TwoPairs extends CardsOfSameKind{
  score: number;

  constructor() {
    super();
    this.score = 2;
  }

  calculateScore(cards: Card[]): number {
    return this.hasMultipleNumberOfCardsWithSameValue(cards, 2) === 2 ? this.score : 0;
  }
}