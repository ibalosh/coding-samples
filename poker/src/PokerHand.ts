import {Card, PokerCard, PokerCardIdentifier} from './PokerCard'
import {CardRule} from "./rules";
import {CardRulesFactory} from "./factories/CardRuleFactory";

export interface Hand {
  maxNumberOfCards: number;
  cards: Card[];
  addCards(cards: string[]): void;
  calculateScore(): number;
}

export default class PokerHand implements Hand {
  maxNumberOfCards: number;
  cards: Card[];
  cardRules: CardRule[];

  constructor(maxNumberOfCards: number, cardRulesFactory: CardRulesFactory) {
    this.maxNumberOfCards = maxNumberOfCards;
    this.cards = [];
    this.cardRules = cardRulesFactory.createRules();
  }

  addCards(cards: PokerCardIdentifier[]) {
    this.validateCards(cards);

    for (const card of cards) {
      this.cards.push(new PokerCard(card));
    }
  }

  calculateScore() {
    for(let i = 0; i < this.cardRules.length; i++) {
      const score = this.cardRules[i].calculateScore(this.cards)
      if (score > 0)
        return score;
    }

    return 0;
  }

  private validateCards(cards: string[]) {
    if (cards.length > this.maxNumberOfCards) throw Error("Max number of cards reached.");
  }
}
