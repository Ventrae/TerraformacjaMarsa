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
                if(this.$store.state.gameInstance !== null){
                    if(this.gameInstance.indicators.temperature < 16 && this.gameInstance.indicators.water < 8 && this.gameInstance.indicators.oxygen < 14){
                        return true;
                    }
                    else return false;
                }
                else return false;
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
                // TODO: wyliczanie zwycięzcy
                let x = [];
                this.$store.state.gameInstance.players.forEach(player => {
                    x.push(player.name);
                });

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
    .page {
        margin-top: 0;
    }

    @media screen and (max-width: 991px) {
        .page {
            margin-bottom: 110px;
        }
    }
</style>
