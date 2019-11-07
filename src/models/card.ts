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

    playCard(indicators: Indicators, player:Player):boolean

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
        else this.requirements = new Indicators(0,-30,0);
    }

    playCard(indicators: Indicators, player: Player):boolean {
        if(indicators.water >= this.requirements.water && indicators.temperature >= this.requirements.temperature && indicators.oxygen >= this.requirements.oxygen) {

            if(player.resources.cash >= this.price){

                player.resources.cash += this.behavior.resources.cash;
                player.resources.iron += this.behavior.resources.iron;
                player.resources.titan += this.behavior.resources.titan;
                player.resources.green += this.behavior.resources.green;
                player.resources.energy += this.behavior.resources.energy;
                player.resources.heat += this.behavior.resources.heat;

                player.income.cash += this.behavior.income.cash;
                player.income.iron += this.behavior.income.iron;
                player.income.titan += this.behavior.income.titan;
                player.income.green += this.behavior.income.green;
                player.income.energy += this.behavior.income.energy;
                player.income.heat += this.behavior.income.heat;

                indicators.water += this.behavior.indicators.water;
                indicators.temperature += (2*this.behavior.indicators.temperature);
                indicators.oxygen += this.behavior.indicators.oxygen;

                player.points.terraformation += this.behavior.points.terraformation;
                player.points.victory += this.behavior.points.victory;

                player.aquiredSymbols.push(this.symbol);
                player.resources.cash -= this.price;

                return true;

            }
            else {
                alert("Brak gotówki!");
                return false;
            }

        }
        else {
            alert ("WYMAGANIA NIESPEŁNIONE!");
            return false;
        }
    }

}
