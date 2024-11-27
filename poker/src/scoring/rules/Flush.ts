import Card from "../../card/Card";
import {CardRule} from "./CardRule";

export class Flush extends CardRule {
  ruleSatisfied(cards: Card[]) {
    return cards.every((card: Card) => card.suit === cards[0].suit)
  }
}