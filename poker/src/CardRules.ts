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
} from "./rules";
import {Card} from "./Card";

export abstract class CardRules {
  cardRules: CardRule[] = [];
  retrieveIdentifiedRule(cards: Card[]): CardRule | null {
    let ruleWithMaxRankNumber: CardRule | null = null;

    for (let i = 0; i < this.cardRules.length; i++) {
      if (this.cardRules[i].satisfiesTheRule(cards)) {
        if (ruleWithMaxRankNumber === null) {
          ruleWithMaxRankNumber = this.cardRules[i];
        } else if (this.cardRules[i].rank > ruleWithMaxRankNumber.rank) {
          ruleWithMaxRankNumber = this.cardRules[i];
        }
      }
    }

    return ruleWithMaxRankNumber;
  };
}

export class PokerRules extends CardRules {
  cardRules: CardRule[] = [];

  constructor() {
    super();
    this.create();
  }

  create() {
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

    this.cardRules = cardRules;
  }
}