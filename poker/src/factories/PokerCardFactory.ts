import {PokerCard, PokerCardIdentifier} from "../card";
import CardFactory from "./CardFactory";
import Card from "../card/Card";

export class PokerCardFactory implements CardFactory {
  createCard(cardIdentifier: PokerCardIdentifier): Card {
    return new PokerCard(cardIdentifier);
  }
}