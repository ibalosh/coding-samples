import {PokerCard, PokerCardIdentifier} from './PokerCard'
import {Card} from "./Card";
import {CardRule} from "./rules";
import {CardRulesFactory, CardsHandFactory} from "./factories";

export default class Game {
  public cards: Card[];

  private cardRules: CardRule[];
  private cardsHandFactory: CardsHandFactory;

  constructor(cardRulesFactory: CardRulesFactory, cardsHandFactory: CardsHandFactory) {
    this.cards = [];
    this.cardRules = cardRulesFactory.createRules();
    this.cardsHandFactory = cardsHandFactory;
  }

  addCards(cards: PokerCardIdentifier[]) {
    this.cards = this.cardsHandFactory.createHand(cards);
  }

  calculateScore() {
    for(let i = 0; i < this.cardRules.length; i++) {
      const score = this.cardRules[i].calculateScore(this.cards)
      if (score > 0)
        return score;
    }

    return 0;
  }
}
