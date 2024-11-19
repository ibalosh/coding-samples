import {PokerCard, PokerCardIdentifier} from './PokerCard'
import {Card} from "./Card";
import {CardRule} from "./rules";
import {CardRulesFactory} from "./factories";
import {Hand} from "./Hand";

export default class PokerHand implements Hand {
  readonly maxNumberOfCards: number;
  cards: Card[];
  cardRules: CardRule[];

  constructor(cardRulesFactory: CardRulesFactory) {
    this.maxNumberOfCards = 5;
    this.cards = [];
    this.cardRules = cardRulesFactory.createRules();
  }

  handCards(cards: PokerCardIdentifier[]) {
    this.validateMaxNumberOfCards(cards);

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

  private validateMaxNumberOfCards(cards: string[]) {
    if (cards.length > this.maxNumberOfCards) throw Error("More than max allowed number of cards in hand.");
  }
}
