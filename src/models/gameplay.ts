import Player from "./player";
import Card from "./card";
import Indicators from "./indicators";

// import AllCards from './AllCards.json';

export default class GamePlay {

    cards: Card[] = [];
    players: Player[] = [];
    activePlayer: number;
    indicators: Indicators;

    constructor(players: Array<Player>) {
        this.players = players;
        this.indicators = new Indicators(0, -30, 0);
        this.activePlayer = 0;
    }

    preRound() {
        for (let player of this.players) {
            for (let i = 0; i < 4; i++) player.cards.push(this.randomCard());
        }
    }

    randomCard(): Card {
        let x = this.cards.length;
        return this.cards[Math.floor(Math.random() * (x + 1))];
    }

};
