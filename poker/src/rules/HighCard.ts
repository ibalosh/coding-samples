import {Card} from "../Card";
import {CardRule} from "./CardRule";
import {StringNumberPair} from "../models";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class HighCard extends CardRule {
  satisfiesTheRule(cards: Card[]) {
    return true;
  }
}