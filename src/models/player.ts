import Resource from "./resources";
import Card from "./card";
import Points from "./points";
import {AllCards} from "../mixins/AllCards";
import Indicators from "./indicators";

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

    standardOperation(operation: number, indicators: Indicators):boolean{
        let result = false;
        switch (operation) {
            case 0:
                // Założenie miasta
                if (this.resources.cash >= 25) {
                    this.income.cash += 1;
                    this.resources.cash -= 25;
                    result = true;
                }
                else
                {
                    alert('Nie można założyć miasta, musisz posiadać 25 jednostek gotówki');
                    result = false;
                }
                break;
            case 1:
                // Założenie lasu
                if (this.resources.green >= 8) {
                    indicators.oxygen += 1;
                    this.resources.green -= 8;
                    this.points.terraformation++;
                    result = true;
                }
                else {
                    alert('Nie można założyć lasu, musisz posiadać 8 jednostek zieleni');
                    result = false;
                }
                break;
            case 2:
                // Założenie oceanu
                if (this.resources.cash >= 18) {
                    indicators.water += 1;
                    this.resources.cash -= 18;
                    this.points.terraformation++;
                    result = true;
                }
                else {
                    alert('Nie można założyć oceanu, musisz posiadać 18 jednostek gotówki');
                    result = false;
                }
                break;
            case 3:
                // Podniesienie temperatury (za gotówkę)
                if (this.resources.cash >= 14) {
                    indicators.temperature += 2;
                    this.resources.cash -= 14;
                    this.points.terraformation++;
                    result = true;
                }
                else {
                    alert('Nie można podnieść temperatury, musisz posiadać 14 jednostek gotówki');
                    result = false;
                }
                break;
            case 4:
                // Zwiększenie produkcji energii
                if (this.resources.cash >= 11) {
                    this.income.energy += 1;
                    this.resources.cash -= 11;
                    result = true;
                }
                else {
                    alert('Nie można zwiększyć produkcji energii, musisz posiadać 11 jednostek gotówki');
                    result = false;
                }
                break;
            case 5:
                // Zwiększenie temperatury (za 8 energii)
                if (this.resources.heat >= 8) {
                    indicators.temperature += 2;
                    this.resources.heat -= 8;
                    this.points.terraformation++;
                    result = true;
                }
                else {
                    alert('Nie można podnieść temperatury, musisz posiadać 8 jednostek ciepła');
                    result = false;
                }
                break;
        }
        return result;
    }

    drawCards(cards: Array<Card>, cost: number){
        cards.forEach(e => {
            this.cards.push(e);
        });
        this.resources.cash -= cost;
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
