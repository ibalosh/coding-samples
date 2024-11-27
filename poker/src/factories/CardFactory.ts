import Card from "../card/Card";

export default interface CardFactory {
  createCard(cardIdentifier: string): Card;
}

