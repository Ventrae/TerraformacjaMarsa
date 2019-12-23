export default class Indicators {

    water: number | null;
    temperature: number | null;
    oxygen: number | null;

    constructor(water: number, temperature: number, oxygen: number) {
        this.water = water;
        this.temperature = temperature;
        this.oxygen = oxygen;
    }

}
