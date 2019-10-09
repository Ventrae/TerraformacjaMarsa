import Resource from "./resources";
import Card from "./card";
import Points from "./points";

interface IPlayer {
    name: String,
    password: String | null,
    resources: Resource
    income: Resource
    points: Points
    cards: Array<Card>
    aquiredSymbols: Array<Object>
}

export default class Player implements IPlayer {

    name: String;
    password: String | null;

    resources = new Resource(0,0,0,0,0,0);
    income = new Resource(0,0,0,0,0,0);
    points = new Points(0,0);
    cards: Array<Card> = [];
    aquiredSymbols: Array<Object> = [];

    constructor(corporation:String, name: String) {

        this.name = name;
        this.password = null;

        switch (corporation) {
            case "Credicor":
                // "Cash" - declaration example
                let res = new Resource(60, 0,0,0,0,0);
                let inc = new Resource(2,1,1,1,1,0);

                this.resources = res;
                this.income = inc;

            break;
            case "Mining Guild":
                // "Iron"

            break;
            case "Inventrix":
                // "Science"

            break;
            case "Ecoline":
                // "Green"

            break;
            case "Saturn Systems":
                // Science

            break;
            case "Teractor":
                // Cash

            break;
            case "Thorgate":
                // Energy

            break;
            case "Aphrodite":
                // Green

            break;
            case "United Nations Mars Initiative":
                // Exploration


            break;
        }

        this.points = new Points(0,0);

        this.cards = [];

    }

}
