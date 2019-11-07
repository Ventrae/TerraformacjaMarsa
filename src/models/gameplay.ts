import Player from "./player";
import Card from "./card";
import Indicators from "./indicators";

// import AllCards from './AllCards.json';

export default class GamePlay {

     cards: Card[] = [];
     players: Player[] = [];
     activePlayer: number;
     indicators: Indicators;

     constructor(players:Array<Player>) {
         this.players = players;
         this.indicators = new Indicators(0,-30,0);
         this.activePlayer = 0;
     }

     preRound(){
         for(let player of this.players){
             for(let i=0;i<8;i++) player.cards.push(this.randomCard());
         }
     }

     postRound(){
         for(let player of this.players){
             player.resources = {...player.resources, ...player.income};
         }
     }

     increaseIndicators(indicator:string, levels?:number):void {
         switch (indicator) {
             case "Water" || "water":
                 if(levels != undefined) this.indicators.water += levels;
                 else this.indicators.water += 1;
             break;
             case "Temperature" || "temperature":
                 if(levels != undefined) this.indicators.temperature += levels*2;
                 else this.indicators.temperature += 2;
             break;
             case "Oxygen" || "oxygen":
                 if(levels != undefined) this.indicators.oxygen += levels;
                 else this.indicators.oxygen += 1;
             break;
         }
     }

     randomCard(){
         let x = this.cards.length;
         return this.cards[Math.floor(Math.random() * (x + 1))];
     }

};
