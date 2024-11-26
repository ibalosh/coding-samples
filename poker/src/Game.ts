import {CardRule} from "./rules";
import Player from "./Player";
import {CardFactory} from "./CardFactory";
import {CardRules} from "./CardRules";
import {calculateScore} from "./CardCombinaton";

export default class Game {
  public players: Player[];
  private cardFactory: CardFactory;
  private cardRules: CardRules;

  constructor(cardRules: CardRules, cardFactory: CardFactory) {
    this.cardFactory = cardFactory;
    this.cardRules = cardRules;
    this.players = [];
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  addCards(cards: string[], playerName: string) {
    const playerFound = this.findPlayerByName(playerName);
    const cardsToAdd = cards.map(card => this.cardFactory.createCard(card));

    playerFound.addCards(cardsToAdd);
  }

  /**
   * Calculate the value of the cards of a player
   * @param playerByName
   * @returns The total value of the cards for the player
   */
  calculateHandRank(playerByName: string) {
    const player = this.findPlayerByName(playerByName);
    return this.cardRules.retrieveIdentifiedRule(player.cards)?.rank || 0;
  }

  /**
   * Calculate the winner of the game based on the rank and value of the cards
   * @returns The player with the highest score
   */
  calculateWinner(): Player | null {
    if (this.players.length === 0)
      return null;

    let winner = [];
    let rank = 0;

    for (let i = 0; i < this.players.length; i++) {
      const player = this.players[i];
      const playerScore = calculateScore(this.cardRules, player.cards);

      if (playerScore.rank > rank) {
        winner = [];
        winner.push({
          player: player,
          score: playerScore.score,

        });
      }
      else if (playerScore.rank === rank) {
        winner.push({
          player: player,
          score: playerScore.score,
        });
      }
    }
    if (winner.length < 1) {
      return null;
    }
    else if (winner.length === 1) {
      return winner[0].player
    }
    else {
      let maxWinner: { player: Player, score: number} = winner[0];
      for (let i=1;i< winner.length;i++){
        if (winner[i].score > maxWinner.score){
          maxWinner = {
            player: winner[i].player,
            score: winner[i].score
          };
        }
      }

      return maxWinner.player;
    }
  }

  private findPlayerByName(name: string) {
    const player = this.players.find(p => p.name.toLowerCase().trim() === name.toLowerCase().trim());
    if (player)
      return player

    throw new Error("Player not found");
  }
}
