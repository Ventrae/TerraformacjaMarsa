import cardBehavior from "./cardBehavior";
import Player from "./player";
import gameplay from "./gameplay";

enum Types {
    blue,
    green,
    red,
    yellow
}

enum Symbols {
    science,
    earth,
    iron,
    star,
    animals,
    leaf
}

interface ICard {
    type: Types;
    title: String;
    price: number;
    symbol: Symbols;
    requirements: Object;
    text: String;
    behavior: cardBehavior;

    playCard(gameplay: gameplay, player:Player):void

}

export default class Card implements ICard {
    type: Types;
    title: String;
    price: number;
    symbol: Symbols;
    requirements: Object;
    text: String;
    behavior: cardBehavior;

    constructor(price: number, requirements: Object, symbol: Symbols, text: String, title: String, type: Types, behavior: cardBehavior) {
        this.price = price;
        this.requirements = requirements;
        this.symbol = symbol;
        this.text = text;
        this.title = title;
        this.type = type;
        this.behavior = behavior;
    }

    playCard(gameplay: gameplay, player: Player): void {
        player.resources = {...player.resources,...this.behavior.resources};
        player.income = {...player.income,...this.behavior.income};
        player.aquiredSymbols.push(this.symbol);
        player.points = {...player.points,...this.behavior.points};

    }

}
