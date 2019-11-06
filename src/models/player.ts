import Resource from "./resources";
import Card, {Symbols, Types} from "./card";
import Points from "./points";
import cardBehavior from "./cardBehavior";
import Indicators from "./indicators";

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

    constructor(corporation: String, name: String, password?: String) {

        this.name = name;
        this.password = null;
        if(password != undefined) this.password = password;
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
                this.cards.push(new Card("Zasoby z Ziemi", Types.blue, 4,Symbols.earth, "Zabieracie zasoby z Ziemi", b, new Indicators(0,0,0)));
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
            case "TEST":
                this.resources = new Resource(50, 0,0,0,0,0);
                this.income = new Resource(2,1,1,1,1,0);
                let testB1 = new cardBehavior(new Resource(0,0,0,0,11,0)); // Dodawanie 11 energii
                let testB2 = new cardBehavior(null, new Resource(0,0,0,3,0,0)); // Dodawanie 3 produkcji zieleni
                let testB3 = new cardBehavior(null, null, 2, 1); // 2 punkty WT i 1 punkty zwycięstwa
                let testB4 = new cardBehavior(null, null, 0,0,0,2,4); // Temperatura +4stopnie, tlen +4%
                this.cards.push(new Card("Eksploracja Fobosa", Types.blue, 10,Symbols.star, "Eksplorujecie Fobosa i znajdujecie tam 11 jednostek energii.", testB1, new Indicators(0,-20,0)));
                this.cards.push(new Card("Plantacja", Types.green, 4,Symbols.leaf, "Plantacja produkuje 3 jednostki zieleni/tura", testB2, new Indicators(2,0,0)));
                this.cards.push(new Card("Kwatery mieszkalne", Types.yellow, 4,Symbols.science, "+2 do współczynnika terraformacji, +1 punkt zwycięztwa", testB3, new Indicators(0,0,6)));
                this.cards.push(new Card("Deszcz meteorów", Types.red, 4,Symbols.earth, "Temperatura +4 stopnie, Poziom tlenu +4%", testB4, new Indicators(0,-10,4)));
            break;
        }



    }

}