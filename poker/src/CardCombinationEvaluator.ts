import {Card} from "./card";
import {CardRules} from "./scoring/CardRules";

export interface CardsScore {
  scoreByValue: number;
  scoreByRank: number;
}

export default class CardCombinationEvaluator {
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