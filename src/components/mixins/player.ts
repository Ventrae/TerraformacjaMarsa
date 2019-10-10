import Resource from "./resources";
import Card from "./card";
import Points from "./points";
import cardBehavior from "./cardBehavior";

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

    resources: Resource;
    income: Resource;
    points: Points;
    cards: Array<Card>;
    aquiredSymbols: Array<Object>;

    constructor(corporation:String, name: String) {

        this.name = name;
        this.password = null;
        this.resources = new Resource();
        this.income = new Resource();
        this.points = new Points(0,0);
        this.aquiredSymbols = [];
        this.cards = [];


        switch (corporation) {
            case "Credicor":
                // "Cash" - declaration example
                this.resources = new Resource(60, 0,0,0,0,0);
                this.income = new Resource(2,1,1,1,1,0);
            break;
            case "Mining Guild":
                // "Iron"
                this.resources = new Resource(30, 10,5,0,5,0);
                this.income = new Resource(1,2,1,1,1,0);
                this.aquiredSymbols.push("iron");
            break;
            case "Inventrix":
                // "Science"
                this.resources = new Resource(50, 0,0,0,0,0);
                this.income = new Resource(2,1,1,1,1,0);
                let b = new cardBehavior(new Resource(0,2,1,4,2,0));
                this.cards.push(new Card(4,{},1, "Zabieracie zasoby z Ziemi", "Zasoby z Ziemi", 0, b));
                this.aquiredSymbols.push("science");
                this.aquiredSymbols.push("earth");
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



    }

}
