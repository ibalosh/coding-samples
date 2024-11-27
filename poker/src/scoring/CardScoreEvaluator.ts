
import CardRules from "./CardRules";
import Card from "../card/Card";

export interface CardsScore {
  scoreByValue: number;
  scoreByRank: number;
}

export default class CardScoreEvaluator {
  constructor(private cardRules: CardRules) {
    this.cardRules = cardRules;
  }
  evaluate(cards: Card[]): CardsScore {
    return {
      scoreByValue: cards.reduce((acc, card) => acc + card.value, 0),
      scoreByRank: this.cardRules.retrieveRuleWithHighestRankScore(cards)?.score || 0
    };
  }
}
