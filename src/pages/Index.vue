<template>
    <div class="page">

        <h2 class="pt-2 my-3">Rozpocznij rozgrywkę:</h2>
        <player-form @playerAdded="addPlayer($event)"/>
        <player-list :players="players" @deleted="deletePlayer($event)"/>
        <button class="btn btn-primary btn-lg start-game" @click="beginGame()">Rozpocznij grę</button>

    </div>
</template>

<script>
    import PlayerForm from "../components/page-index/player-form";
    import PlayerList from "../components/page-index/player-list";
    import {gamesService} from "../mixins/game.service";
    import GamePlay from "../models/gameplay";

    export default {
        name: "Index",
        components: {PlayerList, PlayerForm},
        data() {
            return {
                players: []
            }
        },
        mixins: [ gamesService ],
        methods: {
            addPlayer(arg) {
                this.players.push(arg);
            },
            deletePlayer($event){
                this.players.splice($event, 1);
            },
            beginGame(){

                let gI = new GamePlay(this.players);
                this.$store.state.gameInstance = gI;

                this.$router.push('/gra');

            }
        }
    }
</script>

<style scoped>
    .start-game {
        position: fixed;
        bottom: 64px;
        left: 50vw;
        transform: translateX(-50%);
    }
</style>
