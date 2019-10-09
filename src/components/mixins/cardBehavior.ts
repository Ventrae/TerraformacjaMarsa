import Resource from "./resources";
import Indicators from "./indicators";
import Points from "./points";

export default abstract class CardBehavior {
    resources: Resource;
    income: Resource;
    points: Points;
    indicators: Indicators;

    constructor(
        resources?: Resource,
        income?: Resource,
        terraformation?: number,
        victory?: number,
        water?: number,
        temperature?: number,
        oxygen?: number
    )
    {

        if(resources != undefined) this.resources = resources;
        else this.resources = null;
        if(income != undefined) this.income = income;
        else this.income = null;

        if(terraformation != undefined) this.points.terraformation = terraformation;
        else this.points.terraformation = 0;
        if(victory != undefined) this.points.victory = victory;
        else this.points.victory = 0;

        if(water != undefined) this.indicators.water = water;
        else this.indicators.water = 0;
        if(temperature != undefined) this.indicators.temperature = temperature;
        else this.indicators.temperature = 0;
        if(oxygen != undefined) this.indicators.oxygen = oxygen;
        else this.indicators.oxygen = null;

    }
}
