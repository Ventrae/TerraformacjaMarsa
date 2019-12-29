import Player from "./player";
import Card from "./card";
import Indicators from "./indicators";

export default class GamePlay {

    cards: Card[];
    players: Player[] = [];
    activePlayer: number;
    indicators: Indicators;

    constructor(players: Array<Player>){
        this.initializeGame(players);
    }

    nextTurn(){
        if (this.activePlayer === (this.players.length - 1)){
            this.activePlayer = 0;
        }
        else this.activePlayer++;
    }

    checkEnd():boolean{
        let endGame = true;

        if (this.indicators.temperature < 16){
            endGame = false;
        }
        if(this.indicators.water < 8){
            endGame = false;
        }
        if(this.indicators.oxygen < 14) {
            endGame = false;
        }

        return endGame;
    }

    initializeGame(players: Array<Player>){
        this.players = players;
        this.indicators = new Indicators(0, -30, 0);
        this.activePlayer = 0;
        this.testGameInitialization(players);
    }

    finishGame(){
        let x, winners = [];
        let winner = {
            name: '',
            score: 0
        };
        console.group('Wyniki');
        this.players.forEach(player => {
            x = {
                name: player.name,
                score: player.points.terraformation + player.points.victory
            };
            console.log(x.name + ': '+x.score+'pkt');
            if(x.score > winner.score) {
                winner = x;
                winners = [winner];
            }
            else if(x.score === winner.score) {
                winners.push(x);
            }
        });
        console.groupEnd();
        if(winners.length === 1){
            alert('Koniec gry! Wygrywa '+winner.name+'!');
        }
        else {
            let w = '';
            x = winners.forEach(e => {
                w = w + ', ' + e.name;
            });
            alert('Koniec gry! Wygrywają ' + w + ' remisem!');
        }
    }

    testPlayers(expectation):boolean{
        let x = true;
        if(this.players.length <= 1){
            x = false;
        }
        if(this.players !== expectation){
            x = false;
        }
        return x;
    }

    testIndicators(expectation):boolean{
        return this.indicators === expectation;
    }

    testGameInitialization(players){
        let x = true;
        if(!this.testPlayers(players)) {
            x = false;
        }
        if(!this.testIndicators(new Indicators(0, -30, 0))){
            x = false;
        }
        return x;
    }

};
