import {Card, PokerCard, PokerCardIdentifier} from "../card";
import {CardFactory} from "./CardFactory";

export class PokerCardFactory implements CardFactory {
  createCard(cardIdentifier: PokerCardIdentifier): Card {
    return new PokerCard(cardIdentifier);
  }
}