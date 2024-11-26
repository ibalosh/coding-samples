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

    if (playerFound === undefined)
      throw new Error("Player not found");

    playerFound.addCards(this.cardHandManager.createHand(cards));
  }

  /**
   * Calculate the value of the cards of a player
   * @param playerByName
   * @returns The total value of the cards for the player
   */
  calculateHandValue(playerByName: string) {
    const foundPlayer = this.findPlayerByName(playerByName)
    if (!foundPlayer)
      throw new Error("Player not found");

    if (!foundPlayer?.cards)
      throw new Error("Player has no cards");

    for(let i = 0; i < this.cardRules.length; i++) {
      const cardCombination = this.cardRules[i].calculateCardsRankAndValue(foundPlayer.cards)
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
    let rank = 0;

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
    return this.players.find(p => p.name.toLowerCase().trim() === name.toLowerCase().trim());
  }
}
