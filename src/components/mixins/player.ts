import Resource from "./resources";

interface IPlayer {
    resources: Resource
    income: Resource,
    points: Object
}

export default class Player implements IPlayer {

    resources = new Resource(0,0,0,0,0,0);
    income = new Resource(0,0,0,0,0,0);
    points = {};

    constructor(corporation:String) {
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

        this.points = {
            terraformation: 0,
            victory: 0
        }

    }


}
