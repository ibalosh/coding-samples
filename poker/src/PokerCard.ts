import {StringNumberPair} from "./models";

export type PokerCardValue = "0" | "1" | "2" | "3"| "4" | "5" |
  "6" | "7" | "8" | "9" | "T" | "J" | "Q" | "K" | "A";

export type PokerCardSuit = "s" | "h" | "d" | "c";
export type PokerCardIdentifier = `${PokerCardValue}${PokerCardSuit}`;

export interface Card {
  value: number;
  suit: number;
  identifier: string;
}

export class PokerCard implements Card{
  value: number;
  suit: number;
  identifier: PokerCardIdentifier;

  constructor(identifier: PokerCardIdentifier) {
    this.identifier = identifier;
    this.value = PokerCard.Values[identifier.charAt(0)];

    this.suit = PokerCard.Suits[identifier.charAt(1)];
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