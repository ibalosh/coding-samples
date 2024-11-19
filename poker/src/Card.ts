import {StringNumberPair} from "./models";

export default class Card {
  value: number;
  suit: number;
  identifier: string;

  constructor(identifier: string) {
    if (identifier.length !== 2) throw Error("Too long card value to parse.")
    if (Card.Values[identifier.charAt(0)] === undefined) throw Error("Invalid card value.")
    if (Card.Suits[identifier.charAt(1)] === undefined) throw Error("Invalid card suit.")

    this.identifier = identifier;
    this.value = Card.Values[identifier.charAt(0)];

    this.suit = Card.Suits[identifier.charAt(1)];
  }

  public static Suits:StringNumberPair = {
    "s":0,
    "h": 1,
    "d": 2,
    "c": 3,
  }


  public static Values:StringNumberPair = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "T": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14,
  }
}