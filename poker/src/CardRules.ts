import {CardRule} from "./rules";
import {Card} from "./card/Card";

export class CardRules {
  cardRules: CardRule[] = [];
  retrieveHighestScoringRule(cards: Card[]): CardRule | null {
    let ruleWithMaxRankNumber: CardRule | null = null;

    for (const cardRule of this.cardRules) {
      if (cardRule.satisfiesTheRule(cards)) {
        if (ruleWithMaxRankNumber === null) {
          ruleWithMaxRankNumber = cardRule;
        } else if (cardRule.score > ruleWithMaxRankNumber.score) {
          ruleWithMaxRankNumber = cardRule;
        }
      }
    }

    return ruleWithMaxRankNumber;
  };

  add(cardRule: CardRule) {
    this.cardRules.push(cardRule);
  }
}