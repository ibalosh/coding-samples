import {Card} from "../Card";
import {CardRule} from "./CardRule";
import {StringNumberPair} from "../models";
import {CardsOfSameKind} from "./CardsOfSameKind";

export class HighCard extends CardRule {
  calculateCardsRankAndValue(cards: Card[]) {
    return {
      rank: this.combinationRank,
      value: this.calculateCardsValue(cards)
    };
  }
}