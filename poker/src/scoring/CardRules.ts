import {CardRule} from "./rules/CardRule";
import {Card} from "../card/Card";

export class CardRules {
  cardRules: CardRule[] = [];
  retrieveHighestScoringRule(cards: Card[]): CardRule | null {
    let ruleWithHighestScore: CardRule | null = null;

    for (const cardRule of this.cardRules) {
      if (cardRule.satisfiesTheRule(cards)) {
        if (ruleWithHighestScore === null) {
          ruleWithHighestScore = cardRule;
        } else if (cardRule.score > ruleWithHighestScore.score) {
          ruleWithHighestScore = cardRule;
        }
      }
    }

    return ruleWithHighestScore;
  };

  addRule(cardRule: CardRule) {
    this.cardRules.push(cardRule);
  }
}