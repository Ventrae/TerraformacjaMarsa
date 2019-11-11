interface IResource {
    cash: number;
    iron: number;
    titan: number;
    green: number;
    energy: number;
    heat: number;
}

export default class Resource implements IResource {
    cash: number = 0;
    iron: number = 0;
    titan: number = 0;
    green: number = 0;
    energy: number = 0;
    heat: number = 0;

    constructor(cash?: number, iron?: number, titan?: number, green?: number, energy?: number, heat?: number) {

        if (cash != undefined) this.cash = cash;
        else this.cash = 0;

        if (iron != undefined) this.iron = iron;
        else this.iron = 0;

        if (titan != undefined) this.titan = titan;
        else this.titan = 0;

        if (green != undefined) this.green = green;
        else this.green = 0;

        if (energy != undefined) this.energy = energy;
        else this.energy = 0;

        if (heat != undefined) this.heat = heat;
        else this.heat = 0;

    }

}
