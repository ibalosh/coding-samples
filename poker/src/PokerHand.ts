import Card from './Card'
import {CardRule} from "./rules";

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

  constructor(maxNumberOfCards: number, cardRules: CardRule[]) {
    this.maxNumberOfCards = maxNumberOfCards;
    this.cards = [];
    this.cardRules = cardRules;
  }

  addCards(cards: string[]) {
    this.validateCards(cards);

    for (const card of cards) {
      this.cards.push(new Card(card));
    }
  }

  calculateScore() {
    return this.cardRules[0].calculateScore(this.cards)
  }

  private validateCards(cards: string[]) {
    if (cards.length > this.maxNumberOfCards) throw Error("Max number of cards reached.");
  }
}
