import {Card} from "../Card";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class FourOfKind extends CardsOfSameKind {
  constructor(score: number) {
    super(score);
  }

  satisfiesTheRule(cards: Card[]) {
    return this.hasCardsWithSameValues(cards,4);
  }
}