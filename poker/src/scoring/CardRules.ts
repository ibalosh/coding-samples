import {CardRule} from "./rules/CardRule";
import Card from "../card/Card";

export default class CardRules {
  cardRules: CardRule[] = [];
  retrieveRuleWithHighestRankScore(cards: Card[]): CardRule | null {
    let ruleWithHighestRankScore: CardRule | null = null;

    for (const cardRule of this.cardRules) {
      if (cardRule.ruleSatisfied(cards)) {
        if (ruleWithHighestRankScore === null) {
          ruleWithHighestRankScore = cardRule;
        } else if (cardRule.score > ruleWithHighestRankScore.score) {
          ruleWithHighestRankScore = cardRule;
        }
      }
    }

    return ruleWithHighestRankScore;
  };

  addRule(cardRule: CardRule) {
    this.cardRules.push(cardRule);
  }
}