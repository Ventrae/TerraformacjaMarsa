import cardBehavior from "./cardBehavior";
import Player from "./player";
import gameplay from "./gameplay";
import Indicators from "./indicators";

export enum Types {
    'blue' = 'blue',
    'green' = 'green',
    'red' = 'red',
    'yellow' = 'yellow'
}

export enum Symbols {
    science = 'science',
    earth = 'earth',
    iron = 'iron',
    star = 'star',
    animals = 'animals',
    leaf = 'leaf'
}

interface ICard {
    type: Types;
    title: String;
    price: number;
    symbol: Symbols;
    requirements: Indicators;
    text: String;
    behavior: cardBehavior;

    playCard(gameplay: gameplay, player:Player):void

}

export default class Card implements ICard {
    type: Types;
    title: String;
    price: number;
    symbol: Symbols;
    requirements: Indicators;
    text: String;
    behavior: cardBehavior;

    constructor(title: String, type: Types, price: number, symbol: Symbols, text: String, behavior: cardBehavior, requirements?: Indicators, ) {
        this.title = title;
        this.type = type;
        this.price = price;
        this.symbol = symbol;
        this.text = text;
        this.behavior = behavior;
        if(requirements != undefined) this.requirements = requirements;
        else this.requirements = new Indicators(0,0,0);
    }

    playCard(gameplay: gameplay, player: Player): void {
        if(gameplay.indicators.water >= this.requirements.water && gameplay.indicators.temperature >= this.requirements.temperature && gameplay.indicators.oxygen >= this.requirements.oxygen) {
            player.resources = {...player.resources, ...this.behavior.resources};
            player.income = {...player.income, ...this.behavior.income};
            player.aquiredSymbols.push(this.symbol);
            player.points = {...player.points, ...this.behavior.points};
        }
        else alert ("WYMAGANIA NIESPEŁNIONE!");
    }

}
