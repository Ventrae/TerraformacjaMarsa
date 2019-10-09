import Player from "./player";
import Card from "./card";

// import AllCards from './AllCards.json';

export class GamePlay {

     cards: Array<Card> = [];
     players: Array<Player> = [];
     general: {
         water: number,
         temperature: number,
         oxygen: number
     };

     constructor(players:Array<Player>) {
         this.players = players;
         this.general = {
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
                 if(levels != undefined) this.general.water += levels;
                 else this.general.water += 1;
             break;
             case "temperature":
                 if(levels != undefined) this.general.temperature += levels*2;
                 else this.general.temperature += 2;
             break;
             case "oxygen":
                 if(levels != undefined) this.general.oxygen += levels;
                 else this.general.oxygen += 1;
             break;
         }
     }

     randomCard(){
         let x = this.cards.length;
         return this.cards[Math.floor(Math.random() * (x + 1))];
     }

}
