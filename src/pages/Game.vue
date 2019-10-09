<template>
  <div class="page" v-if="gameGoing">

    <terraformation-bar
        :gameInstance="gameInstance"
        :active="gameInstance.activePlayer"
    ></terraformation-bar>

    <player-interface
     v-for="player in gameInstance.players"
     :player="player"
     :active="gameInstance.activePlayer"
     @finishedTurn="nextTurn()"
     v-if="player === gameInstance.players[gameInstance.activePlayer]"
    >
    </player-interface>

    <div class="row justify-content-around">




    </div>

  </div>
</template>

<script>
    import karta from './../components/page-game/karta.vue'
    import TerraformationBar from "../components/page-game/terraformationBar";
    import PlayerInterface from "../components/page-game/playerInterface";
    // import gameplay from "../components/mixins/gameplay";

    // import json from '../components/mixins/AllCards.json';
    import {GamePlay} from "../components/mixins/gameplay.ts";

    export default {
        name: "Game",
        components: {
            PlayerInterface,
            TerraformationBar,
            karta: karta
        },
        data() {
            return {
                gameInstance: new GamePlay()
            }
        },
        computed: {
            gameGoing(){
                /*if(this.gameplay.generals.water < 8 &&
                   this.gameplay.generals.temperature < 16 &&
                   this.gameplay.generals.oxygen < 16){
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
        }
    }
</script>

<style scoped>

</style>
