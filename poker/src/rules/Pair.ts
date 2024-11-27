import {Card} from "../card/Card";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class Pair extends CardsOfSameKind{
  constructor(score: number) {
    super(score);
  }

  satisfiesTheRule(cards: Card[]) {
    return this.hasCardsWithSameValues(cards, 2);
  }
}