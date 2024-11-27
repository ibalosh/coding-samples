import {Card} from "../../card/Card";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class FourOfKind extends CardsOfSameKind {
  satisfiesTheRule(cards: Card[]) {
    return this.hasCardsWithSameValues(cards,4);
  }
}