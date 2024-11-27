import CardFactory from "./factories/CardFactory";
import CardRules from "./scoring/CardRules";
import CardScoreEvaluator from "./scoring/CardScoreEvaluator";
import GameScore from "./GameScore";
import Players from "./Players";

export default class Game {
  public players: Players;
  private readonly cardFactory: CardFactory;
  private readonly playerScoreCalculator: GameScore;

  constructor(cardRules: CardRules, cardFactory: CardFactory) {
    this.cardFactory = cardFactory;
    this.playerScoreCalculator = new GameScore(new CardScoreEvaluator(cardRules));
    this.players = new Players();
  }

  addPlayer(playerName: string) {
    this.players.add(playerName);
  }

  addCards(cards: string[], playerName: string) {
    const player = this.players.findByName(playerName);
    const cardsToAdd = cards.map(card => this.cardFactory.createCard(card));

    player.addCards(cardsToAdd);
  }

  /**
   * Find winners of the game based on the rank and value of the cards.
   *
   * @returns Names of the players with the highest score
   */
  findWinners(): string[] {
    return this.playerScoreCalculator.findPlayersWithHighestScore(this.players.all());
  }
}
