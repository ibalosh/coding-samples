import {Card} from "./Card";

export interface Hand {
  maxNumberOfCards: number;
  cards: Card[];
  addCards(cards: string[]): void;
  calculateScore(): number;
}