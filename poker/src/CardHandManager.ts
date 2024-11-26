import {Card} from "./Card";
import {PokerCard, PokerCardIdentifier} from "./PokerCard";

export interface CardHandManager {
  maxNumberOfCards: number;

  createHand(cardIdentifiers: string[]): Card[];
}

export class PokerHandManager implements CardHandManager {
  constructor(public maxNumberOfCards: number = 5) {
    this.maxNumberOfCards = maxNumberOfCards;
  }

  createHand(cardIdentifiers: PokerCardIdentifier[]): Card[] {
    this.validateMaxNumberOfCards(cardIdentifiers);

    const cards: Card[] = [];

    for (const cardIdentifier of cardIdentifiers) {
      cards.push(new PokerCard(cardIdentifier));
    }

    return cards;
  }

  private validateMaxNumberOfCards(cards: string[]) {
    if (cards.length > this.maxNumberOfCards) throw Error("More than max allowed number of cards in hand.");
  }
}