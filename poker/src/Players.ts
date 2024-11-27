import Player from "./Player";

export default class Players {
  players: Player[];

  constructor() {
    this.players = [];
  }

  add(playerName: string) {
    this.players.push(new Player(playerName));
  }

  findByName(name: string) {
    const player = this.players.find(p => p.name.toLowerCase().trim() === name.toLowerCase().trim());

    if (player === undefined)
      throw new Error("Player not found");

    return player;
  }

  all() {
    return this.players;
  }
}