import Resource from "./resources";
import Indicators from "./indicators";
import Points from "./points";

export default class CardBehavior {
    resources: Resource;
    income: Resource;
    points: Points;
    indicators: Indicators;

    constructor(resources?: Resource, income?: Resource, terraformation?: number, victory?: number, water?: number, temperature?: number, oxygen?: number) {

        let tmp_res = new Resource(0,0,0,0,0,0);
        if (resources != undefined) this.resources = {...tmp_res,...resources};
        else this.resources = tmp_res;

        let tmp_inc = new Resource(0,0,0,0,0,0);
        if (income != undefined) this.income = {...tmp_inc,...income};
        else this.income = tmp_inc;

        let tmp_pts = new Points(0,0);
            if (terraformation != undefined) tmp_pts.terraformation = terraformation;
            else tmp_pts.terraformation = 0;
            if (victory != undefined) tmp_pts.victory = victory;
            else tmp_pts.victory = 0;
        this.points = tmp_pts;

        let tmp_ind = new Indicators(0,0,0);
            if (water != undefined) tmp_ind.water = water;
            else tmp_ind.water = 0;
            if (temperature != undefined) tmp_ind.temperature = temperature;
            else tmp_ind.temperature = 0;
            if (oxygen != undefined) tmp_ind.oxygen = oxygen;
            else tmp_ind.oxygen = 0;
        this.indicators = tmp_ind;

    }

}
