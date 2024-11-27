import {
  CardRule,
  Flush,
  FourOfKind,
  FullHouse,
  HighCard,
  Pair,
  Straight,
  StraightFlush,
  ThreeOfKind,
  TwoPairs
} from "./rules";
import {CardRules} from "./CardRules";

export class PokerRules extends CardRules {
  cardRules: CardRule[] = [];

  constructor() {
    super();
    [
      new Straight(5), new StraightFlush(9), new FullHouse(7),
      new Flush(6), new ThreeOfKind(4), new FourOfKind(8),
      new Pair(2), new TwoPairs(3), new HighCard(1)
    ].forEach(cardRule => this.add(cardRule));
  }
}