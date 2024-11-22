import {CardRule} from "../rules";
import {Card} from "../Card";
import {CardRulesFactory, PokerRulesFactory} from "./CardRulesFactory";
import {PokerHandFactory} from "./CardsHandFactory";
import {PokerCardIdentifier} from "../PokerCard";

export interface CardGameFactory {
    createRules(): CardRule[];
    createHand(cardIdentifiers: string[]): Card[];
}

export class PokerGameFactory implements CardGameFactory {
    private cardRulesFactory: CardRulesFactory;
    private cardsHandFactory: PokerHandFactory;

    constructor() {
        this.cardRulesFactory = new PokerRulesFactory();
        this.cardsHandFactory = new PokerHandFactory();
    }

    createRules(): CardRule[] {
        return this.cardRulesFactory.createRules();
    }

    createHand(cardIdentifiers: PokerCardIdentifier[]): Card[] {
        return this.cardsHandFactory.createHand(cardIdentifiers);
    }
}