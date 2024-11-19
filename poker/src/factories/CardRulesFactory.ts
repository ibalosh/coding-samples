import {
  CardRule,
  HighCard,
  StraightFlush,
  FourOfKind,
  FullHouse,
  Flush,
  Pair,
  Straight,
  ThreeOfKind,
  TwoPairs,
} from "../rules";

export interface CardRulesFactory {
  createRules(): CardRule[];
}

export class PokerRulesFactory implements CardRulesFactory {
  createRules(): CardRule[] {
    const cardRules: CardRule[] = [];
    cardRules.push(new StraightFlush(9));
    cardRules.push(new FourOfKind(8));
    cardRules.push(new FullHouse(7));
    cardRules.push(new Flush(6));
    cardRules.push(new Straight(5));
    cardRules.push(new ThreeOfKind(4));
    cardRules.push(new TwoPairs(3));
    cardRules.push(new Pair(2));
    cardRules.push(new HighCard(1));

    return cardRules;
  }
}