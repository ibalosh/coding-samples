import {Card} from "../card/Card";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class ThreeOfKind extends CardsOfSameKind{
  satisfiesTheRule(cards: Card[]) {
    return this.hasCardsWithSameValues(cards, 3);
  }
}