import Player from "./Player";
import {CardFactory} from "./factories/CardFactory";
import {CardRules} from "./scoring/CardRules";
import CardCombinationEvaluator, {CardsScore} from "./CardCombinationEvaluator";

export default class Game {
  public players: Player[];
  private readonly cardFactory: CardFactory;
  private readonly cardsEvaluator: CardCombinationEvaluator;

  constructor(cardRules: CardRules, cardFactory: CardFactory) {
    this.cardFactory = cardFactory;
    this.cardsEvaluator = new CardCombinationEvaluator(cardRules);
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

  calculateHandRank(playerName: string): number {
    const player = this.findPlayerByName(playerName);
    const cards = player.cards;

    return this.cardsEvaluator.evaluate(cards).scoreByRank;
  }
  /**
   * Calculate the winner of the game based on the rank and value of the cards
   * @returns The player with the highest score
   */
  calculateWinner(): string[] {
    if (this.players.length === 0)
      return [];

    let scores: {
      playerName: string;
      cardsScore: CardsScore;
    }[] = [];

    for (const player of this.players) {
      const cardsScore = this.cardsEvaluator.evaluate(player.cards);

      scores.push({
        playerName: player.name,
        cardsScore
      });
    }

    const highestScoreByRank = Math.max(...scores.map(score => score.cardsScore.scoreByRank));
    scores = scores.filter(score => score.cardsScore.scoreByRank === highestScoreByRank);

    const highestScoreValue = Math.max(...scores.map(score => score.cardsScore.scoreByValue));
    scores = scores.filter(score => score.cardsScore.scoreByValue === highestScoreValue);
    return scores.map(score => score.playerName);
  }

  private findPlayerByName(name: string) {
    const player = this.players.find(p => p.name.toLowerCase().trim() === name.toLowerCase().trim());
    if (player)
      return player

    throw new Error("Player not found");
  }
}
