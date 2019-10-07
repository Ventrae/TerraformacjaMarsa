import Resource from "./resources";

export default abstract class CardBehavior {
    resources: Resource;
    income: Resource;
    points: {
        terraformation: number,
        victory: number,
    };
    general: {
        water: number,
        temperature: number,
        oxygen: number
    };


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
        if(this.resources != undefined) this.resources = resources;
        else this.resources = null;
        if(this.income != undefined) this.income = income;
        else this.income = null;

        if(this.points.terraformation != undefined) this.points.terraformation = terraformation;
        else this.points.terraformation = 0;
        if(this.points.victory != undefined) this.points.victory = victory;
        else this.points.victory = 0;

        if(this.general.water != undefined) this.general.water = water;
        else this.general.water = 0;
        if(this.general.temperature != undefined) this.general.temperature = temperature;
        else this.general.temperature = 0;
        if(this.general.oxygen != undefined) this.general.oxygen = oxygen;
        else this.general.oxygen = null;
    }
}
