import {Card} from "./card";
import {CardRules} from "./CardRules";

export interface CardsScore {
  scoreByValue: number;
  scoreByRank: number;
}

export default class CardsEvaluator {
  private readonly cardRules: CardRules;

  constructor(cardRules: CardRules) {
    this.cardRules = cardRules;
  }

  evaluate(cards: Card[]): CardsScore {
    return {
      scoreByValue: cards.reduce((acc, card) => acc + card.value, 0),
      scoreByRank: this.cardRules.retrieveHighestScoringRule(cards)?.score || 0
    };
  }
}