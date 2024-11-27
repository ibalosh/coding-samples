import {Card} from "../card/Card";
import {CardRule} from "./CardRule";

export class Flush extends CardRule {
  satisfiesTheRule(cards: Card[]) {
    return cards.every((card: Card) => card.suit === cards[0].suit)
  }
}