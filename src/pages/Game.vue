<template>
  <div class="page" v-if="gameGoing">

    <terraformation-bar
        :gameInstance="this.gameInstance"
        :active="this.gameInstance.activePlayer"
    ></terraformation-bar>

    <player-interface
     v-for="player of this.gameInstance.players"
     :player="player"
     :active="this.gameInstance.activePlayer"
     @finishedTurn="nextTurn()"
     v-if="player === this.gameInstance.players[this.gameInstance.activePlayer]"
    >
    </player-interface>

    <div class="row justify-content-around">




    </div>

  </div>
</template>

<script>
    import card from '../components/page-game/card.vue'
    import TerraformationBar from "../components/page-game/terraformationBar";
    import PlayerInterface from "../components/page-game/playerInterface";

    import GamePlay from "../components/mixins/gameplay";
    import Player from "../components/mixins/player";

    // import json from '../components/mixins/AllCards.json';

    let gameInstance = new GamePlay(
        [
            new Player("Inventrix", "Filip"),
            new Player("Credicor", "Paweł"),
            new Player("Mining Guild", "Szymon")
        ]
    );

    export default {
        name: "Game",
        components: {
            PlayerInterface,
            TerraformationBar,
            card: card
        },
        data() {
            return {
                gameInstance: gameInstance
            }
        },
        computed: {
            gameGoing(){
                /*if(this.GameInstance.indicators.water < 8 &&
                   this.GameInstance.indicators.temperature < 16 &&
                   this.GameInstance.indicators.oxygen < 16){
                    return true;
                }
                else return true;*/
                return true;
            }
        },
        methods: {
            nextTurn(){
                if(this.gameInstance.activePlayer === (this.gameInstance.players.length-1)) this.gameInstance.activePlayer = 0;
                else ++this.gameInstance.activePlayer;
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>
