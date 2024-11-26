import {Card} from "./Card";
import {PokerCard, PokerCardIdentifier} from "./PokerCard";

export interface CardHandManager {
  createHand(cardIdentifiers: string[]): Card[];
}

export class PokerHandManager implements CardHandManager {
  createHand(cardIdentifiers: PokerCardIdentifier[]): Card[] {
    return cardIdentifiers.map(cardIdentifier =>
      new PokerCard(cardIdentifier));
  }
}