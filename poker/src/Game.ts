import {CardRule} from "./rules";
import Player from "./Player";
import {Card} from "./Card";
import {CardGameFactory} from "./factories";

export default class Game {
  public cards: Card[];
  public players: Player[];
  private cardGameFactory: CardGameFactory;
  private cardRules: CardRule[];

  constructor(cardGameFactory: CardGameFactory) {
    this.cards = [];
    this.cardGameFactory = cardGameFactory;
    this.cardRules = this.cardGameFactory.createRules();
    this.players = [];
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  addCards(cards: string[], player: Player) {
    const playerFound = this.findPlayer(player);

    if (playerFound === undefined)
      throw new Error("Player not found");

    playerFound.addCards(this.cardGameFactory.createHand(cards));
  }

  /**
   * Calculate the value of cards of a player
   * @param player
   * @returns The total value of the cards for the player
   */
  calculateHandValue(player: Player) {
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

  /**
   * Calculate the winner of the game
   * @returns The player with the highest score
   */
  calculateWinner() {
    if (this.players.length === 0)
      return null;

    let winner = this.players[0];
    let score = this.calculateHandValue(winner);

    for (let i = 1; i < this.players.length; i++) {
      const player = this.players[i];
      const playerScore = this.calculateHandValue(player);

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
