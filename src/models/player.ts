import Resource from "./resources";
import Card from "./card";
import Points from "./points";
import {AllCards} from "../mixins/AllCards";

interface IPlayer {

    name: String,
    password: String | null
    corporation: String
    resources: Resource
    income: Resource
    points: Points
    cards: Array<Card>
    aquiredSymbols: Array<String>

    productionPhase(): void;
}

export default class Player implements IPlayer {

    name: String;
    password: String | null;
    corporation: String;
    resources: Resource;
    income: Resource;
    points: Points;
    cards: Array<Card>;
    aquiredSymbols: Array<String>;

    constructor(corporation: String, name: String, password?: String) {

        this.name = name;
        this.password = null;
        if (password != undefined) this.password = password;
        this.corporation = corporation;
        this.resources = new Resource();
        this.income = new Resource();
        this.points = new Points(20, 0);
        this.aquiredSymbols = [];
        this.cards = [];

        switch (corporation) {
            case "Credicor":
                // "Cash" - declaration example
                this.resources = new Resource(60, 0, 0, 0, 0, 0);
                this.income = new Resource(2, 1, 1, 1, 1, 1);
                break;
            case "Mining Guild":
                // "Iron"
                this.resources = new Resource(30, 10, 5, 0, 0, 0);
                this.income = new Resource(1, 2, 1, 1, 1, 1);
                this.aquiredSymbols.push("steel");
                break;
            case "Inventrix":
                // "Science"
                this.resources = new Resource(50, 0, 0, 0, 0, 0);
                this.income = new Resource(1, 1, 1, 1, 1, 1);
                this.cards.push(AllCards.data().AllCards[6]);
                this.aquiredSymbols.push("science");
                this.aquiredSymbols.push("earth");
                break;
            case "Ecoline":
                // "Green"
                this.resources = new Resource(40, 0, 0, 6, 0, 0);
                this.income = new Resource(1, 1, 1, 2, 1, 1);
                this.aquiredSymbols.push("leaf");
                break;
            case "Thorgate":
                // Energy
                this.resources = new Resource(44, 0, 0, 0, 0, 0);
                this.income = new Resource(1, 1, 1, 1, 3, 1);
                break;
        }

    }

    productionPhase(): void {

        this.resources.cash += this.points.terraformation;
        this.resources.cash += this.income.cash;

        this.resources.iron += this.income.iron;
        this.resources.titan += this.income.titan;
        this.resources.green += this.income.green;

        // Niezużyta energia zmienia się w ciepło
        this.resources.heat += this.resources.energy;
        this.resources.energy = 0;
        this.resources.energy += this.income.energy;

        this.resources.heat += this.income.heat;

    }

}
