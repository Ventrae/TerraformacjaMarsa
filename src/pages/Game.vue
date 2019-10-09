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

<script type="text/babel">
    import karta from './../components/page-game/karta.vue'
    import TerraformationBar from "../components/page-game/terraformationBar";
    import PlayerInterface from "../components/page-game/playerInterface";

    // import json from '../components/mixins/AllCards.json';
    import Resource from "../components/mixins/resources";
    import GamePlay from "../components/mixins/gameplay";
    import Card from "../components/mixins/card";
    import Points from "../components/mixins/points";
    import Player from "../components/mixins/player";
    import CardBehavior from "../components/mixins/cardBehavior";

    export default {
        name: "Game",
        components: {
            PlayerInterface,
            TerraformationBar,
            karta: karta
        },
        data() {
            return {
                gameInstance: new GamePlay(
                    [
                        this.filipC,
                        new Player("Credicor", "Paweł")
                    ]
                )
            }
        },
        computed: {
            filipC(){
                let x = new Player("Credicor", "Filip");
                let r = new Resource(1,2,3,4,5,6);
                let behavior = new CardBehavior(r);
                x.cards.push(new Card(12, {water: 2}, 0, "abcdeeeee", "Plantacja", 1, behavior));
                return x;
            },
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
            console.log(this.filipC);
        }
    }
</script>

<style scoped>

</style>
