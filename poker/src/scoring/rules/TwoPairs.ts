import Card from "../../card/Card";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class TwoPairs extends CardsOfSameKind{
  ruleSatisfied(cards: Card[]) {
    return this.getCountsOfCardsWithSameValues(cards, 2) === 2;
  }
}