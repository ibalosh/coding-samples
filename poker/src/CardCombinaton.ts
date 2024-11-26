import {Card} from "./Card";
import {CardRules} from "./CardRules";

export interface CardScore {
  score: number;
  rank: number;
}


export function calculateScore(cardRules: CardRules, cards:Card[]): CardScore {
    return {
      score: cards.reduce((acc, card) => acc + card.value, 0),
      rank: cardRules.retrieveIdentifiedRule(cards)?.rank || 0
    };
  }


