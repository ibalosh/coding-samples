import {Card} from "./Card";

export default class Player {
  name: string;
  cards: Card[];

  constructor(name: string) {
    this.name = name;
    this.cards = [];
  }

  addCards(cards: Card[]) {
    this.cards = cards;
  }
}