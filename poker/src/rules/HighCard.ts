import {Card} from "../card/Card";
import {CardRule} from "./CardRule";
import {CardsOfSameKind} from "./CardsOfSameKind";
import {StringNumberPair} from "../card/CardType";

export class HighCard extends CardRule {
  satisfiesTheRule(cards: Card[]) {
    return true;
  }
}