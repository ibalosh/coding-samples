import Card from "../Card";
import {CardRule} from "./CardRule";
import {StringNumberPair} from "../models";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class Pair extends CardsOfSameKind{
  score: number;

  constructor() {
    super();
    this.score = 3;
  }

  calculateScore(cards: Card[]): number {
    return this.hasNumberOfCardsWithSameValue(cards, 2) ? this.score : 0;
  }
}