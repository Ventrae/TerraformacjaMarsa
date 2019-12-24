<template>
    <div class="page" v-if="gameGoing">

        <transition name="slide-down" appear>
            <terraformation-bar
                :gameInstance="gameInstance"
                :active="gameInstance.activePlayer"
            />
        </transition>

        <player-interface
            v-for="player of gameInstance.players"
            :player="player"
            :active="gameInstance.activePlayer"
            :indicators="gameInstance.indicators"
            @finishedTurn="nextTurn()"
            @terraformed="checkEnd()"
            v-if="player === gameInstance.players[gameInstance.activePlayer]"
        >
        </player-interface>

    </div>
</template>

<script>
    import card from '../components/page-game/card/card.vue'
    import TerraformationBar from "../components/page-game/terraformationBar";
    import PlayerInterface from "../components/page-game/playerInterface";

    import GamePlay from "../models/gameplay";
    import Player from "../models/player";

    // import json from '../components/models/AllCards.ts';

    export var gameInstance = new GamePlay(
        [
            new Player("Inventrix", "Filip"),
            new Player("TEST", "Paweł"),
            new Player("Mining Guild", "Szymon", "abcde")
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
            gameGoing() {
                /*
                if(this.GameInstance.indicators.water < 8 &&
                   this.GameInstance.indicators.temperature < 16 &&
                   this.GameInstance.indicators.oxygen < 16){
                    return true;
                }
                else return true;*/
                return true;
            }
        },
        methods: {
            nextTurn() {
                if (this.gameInstance.activePlayer === (this.gameInstance.players.length - 1)){
                    this.gameInstance.activePlayer = 0;
                }
                else ++this.gameInstance.activePlayer;
            },
            checkEnd() {
                if (this.gameInstance.indicators.temperature >= 16 && this.gameInstance.indicators.water >= 8 && this.gameInstance.indicators.oxygen >= 14) {
                    this.finishGame();
                }
            },
            finishGame() {
                alert('koniec gry!');
            }
        },
        mounted() {
            console.log(this.gameInstance);
        }
    }
</script>

<style scoped>
    .slide-down-enter-active {
        animation: slide-down-animation 1.4s ease-out forwards;
    }

    @keyframes slide-down-animation {
        from {
            transform: translateY(-90px);
        }
        to {
            transform: translateY(0);
        }
    }
</style>
