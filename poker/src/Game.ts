import {CardRule} from "./rules";
import Player from "./Player";
import {Card} from "./Card";
import {CardHandManager} from "./CardHandManager";
import {CardRules} from "./CardRules";

export default class Game {
  public cards: Card[];
  public players: Player[];
  private cardHandManager: CardHandManager;
  private cardRules: CardRule[];

  constructor(cardRules: CardRules, cardHandManager: CardHandManager) {
    this.cards = [];
    this.cardHandManager = cardHandManager;
    this.cardRules = cardRules.createRules();
    this.players = [];
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  addCards(cards: string[], playerName: string) {
    const playerFound = this.findPlayerByName(playerName);
    playerFound.addCards(this.cardHandManager.createHand(cards));
  }

  /**
   * Calculate the value of the cards of a player
   * @param playerByName
   * @returns The total value of the cards for the player
   */
  calculateHandValue(playerByName: string) {
    const player = this.findPlayerByName(playerByName)

    for(let i = 0; i < this.cardRules.length; i++) {
      const cardCombination = this.cardRules[i].calculateCardsRankAndValue(player.cards)
      if (cardCombination.rank > 0)
        return cardCombination.rank;
    }

    return 0;
  }

  /**
   * Calculate the winner of the game based on the rank and value of the cards
   * @returns The player with the highest score
   */
  calculateWinner(): Player[] {
    if (this.players.length === 0)
      return [];

    let winner = [];
    let score = 0;

    for (let i = 0; i < this.players.length; i++) {
      const player = this.players[i];
      const playerScore = this.calculateHandValue(player.name);

      if (playerScore > score) {
        winner = [];
        winner.push(player);
        score = playerScore;
      }
    }

    return winner;
  }

  private findPlayerByName(name: string) {
    const player = this.players.find(p => p.name.toLowerCase().trim() === name.toLowerCase().trim());
    if (player)
      return player

    throw new Error("Player not found");
  }
}
