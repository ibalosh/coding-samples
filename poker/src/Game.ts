import {PokerCardIdentifier} from './PokerCard'
import {CardRule} from "./rules";
import {CardRulesFactory, CardsHandFactory} from "./factories";
import Player from "./Player";
import {Card} from "./Card";

export default class Game {
  public cards: Card[];
  public players: Player[];

  private cardRules: CardRule[];
  private cardsHandFactory: CardsHandFactory;

  constructor(cardRulesFactory: CardRulesFactory, cardsHandFactory: CardsHandFactory) {
    this.cards = [];
    this.cardRules = cardRulesFactory.createRules();
    this.cardsHandFactory = cardsHandFactory;
    this.players = [];
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  addCards(cards: string[], player: Player) {
    const playerFound = this.findPlayer(player);

    if (playerFound === undefined)
      throw new Error("Player not found");

    playerFound.addCards(this.cardsHandFactory.createHand(cards));
  }

  calculateScore(player: Player) {
    if (!this.findPlayer(player))
      throw new Error("Player not found");

    const foundPlayer = this.findPlayer(player)
    if (!foundPlayer?.cards)
      throw new Error("Player has no cards");

    for(let i = 0; i < this.cardRules.length; i++) {
      const score = this.cardRules[i].calculateScore(foundPlayer.cards)
      if (score > 0)
        return score;
    }

    return 0;
  }

  calculateWinner() {
    if (this.players.length === 0)
      return null;

    let winner = this.players[0];
    let score = this.calculateScore(winner);

    for (let i = 1; i < this.players.length; i++) {
      const player = this.players[i];
      const playerScore = this.calculateScore(player);

      if (playerScore > score) {
        winner = player;
        score = playerScore;
      }
    }

    return winner;
  }

  private findPlayer(player: Player) {
    return this.players.find(p => p === player);
  }
}
