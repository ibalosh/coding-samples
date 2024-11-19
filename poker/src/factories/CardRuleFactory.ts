import {CardRule, StraightFlush, FourOfKind} from "../rules";

export interface CardRulesFactory {
  createRules(): CardRule[];
}

export class PokerRulesFactory implements CardRulesFactory {
  createRules(): CardRule[] {
    const cardRules: CardRule[] = [];
    cardRules.push(new StraightFlush());
    cardRules.push(new FourOfKind());

    return cardRules;
  }
}