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
    import {gamesService} from "../mixins/game.service";

    export default {
        name: "Game",
        components: {
            PlayerInterface,
            TerraformationBar,
            card: card
        },
        computed: {
            gameInstance(){
                return this.$store.state.gameInstance;
            },
            gameGoing() {
                return this.$store.state.gameInstance !== null;
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
        beforeRouteEnter(to, from, next){
            next(vm => {
                if(vm.$store.state.gameInstance === null){
                    alert('Najpierw rozpocznij rozgrywkę!');
                    next('/');
                }
            });
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
