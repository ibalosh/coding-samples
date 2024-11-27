import {Card} from "../card";

export interface CardFactory {
  createCard(cardIdentifier: string): Card;
}

