import Player from "./player";

class Gameplay {

    players:Array<Player> = [];

    constructor(players) {
        this.players = players;
    }

    preRound(){

    }

    postRound(){
        for(let player of this.players){
            player.resources = {...player.resources, ...player.income};
        }
    }

}
