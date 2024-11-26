import {Card} from "./Card";
import {PokerCard, PokerCardIdentifier} from "./PokerCard";

export interface CardFactory {
  createCard(cardIdentifier: string): Card;
}

export class PokerCardFactory implements CardFactory {
  createCard(cardIdentifier: PokerCardIdentifier): Card {
    return new PokerCard(cardIdentifier);
  }
}