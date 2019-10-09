import Player from "./player";
import Card from "./card";
import Indicators from "./indicators";

// import AllCards from './AllCards.json';

export default class GamePlay {

     cards: Array<Card> = [];
     players: Array<Player> = [];
     activePlayer: number = 0;
     indicators: Indicators;

     constructor(players:Array<Player>) {
         this.players = players;
         this.indicators = {
             water: 0,
             temperature: -30,
             oxygen: 0
         }
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

     increaseGenerals(general:string, levels?:number):void{
         switch (general) {
             case "water":
                 if(levels != undefined) this.indicators.water += levels;
                 else this.indicators.water += 1;
             break;
             case "temperature":
                 if(levels != undefined) this.indicators.temperature += levels*2;
                 else this.indicators.temperature += 2;
             break;
             case "oxygen":
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
