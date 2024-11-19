import {Card} from "./Card";

export interface Hand {
  maxNumberOfCards: number;
  cards: Card[];
  handCards(cards: string[]): void;
  calculateScore(): number;
}