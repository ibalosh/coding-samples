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

  addPlayers(players: Player[]) {
    this.players.push(...players);
  }

  addCards(cards: string[], playerName: string) {
    const playerFound = this.findPlayerByName(playerName);

    if (playerFound === undefined)
      throw new Error("Player not found");

    playerFound.addCards(this.cardGameFactory.createHand(cards));
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
  calculateWinner() {
    if (this.players.length === 0)
      return null;

    let winner = this.players[0];
    let score = this.calculateHandValue(winner.name);

    for (let i = 1; i < this.players.length; i++) {
      const player = this.players[i];
      const playerScore = this.calculateHandValue(player.name);

      if (playerScore > score) {
        winner = player;
        score = playerScore;
      }
    }

    return winner;
  }

  private findPlayerByName(name: string) {
    return this.players.find(p => p.name.toLowerCase().trim() === name.toLowerCase().trim());
  }
}
