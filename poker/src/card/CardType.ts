export type PokerCardValue =
  "0" | "1" | "2" | "3"| "4"  |
  "5" | "6" | "7" | "8" | "9" |
  "T" | "J" | "Q" | "K" | "A";

export type PokerCardSuit = "s" | "h" | "d" | "c";
export type PokerCardIdentifier = `${PokerCardValue}${PokerCardSuit}`;

export type StringNumberPair = { [Identifier: string]: number }