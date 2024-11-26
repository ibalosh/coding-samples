import {Card} from "../Card";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class TwoPairs extends CardsOfSameKind{
  satisfiesTheRule(cards: Card[]) {
    return this.getCountsOfCardsWithSameValues(cards, 2) === 2;
  }
}