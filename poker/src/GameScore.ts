import CardScoreEvaluator, {CardsScore} from "./scoring/CardScoreEvaluator";
import Player from "./Player";

export interface PlayerHandScore extends CardsScore {
  playerName: string;
}

export default class GameScore {
  constructor(private cardsScoreEvaluator: CardScoreEvaluator) {
    this.cardsScoreEvaluator = cardsScoreEvaluator;
  }

  /**
   * We are returning player with highest rank, but if we find more of them, we are going to calculate
   * the score by all card values in hand. Reason for this is since we want to return multiple winners,
   * if there are players with same rank and value scores for cards.
   *
   * @param players
   * @returns - player names
   */
  findPlayersWithHighestScore(players: Player[]): string[] {
    let scores = this.findPlayerHandScore(players);

    const highestScoreByRank = Math.max(...scores.map(score => score.scoreByRank));
    scores = scores.filter(score => score.scoreByRank === highestScoreByRank);

    const highestScoreValue = Math.max(...scores.map(score => score.scoreByValue));
    scores = scores.filter(score => score.scoreByValue === highestScoreValue);
    return scores.map(score => score.playerName);
  }

  findPlayerHandScore(players: Player[]): PlayerHandScore[] {
    return players.map((player) => {
      return {
        playerName: player.name,
        ...this.cardsScoreEvaluator.evaluate(player.cards)
      }
    })
  }
}