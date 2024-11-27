import Card from "../../card/Card";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class Pair extends CardsOfSameKind{
  ruleSatisfied(cards: Card[]) {
    return this.hasCardsWithSameValues(cards, 2);
  }
}