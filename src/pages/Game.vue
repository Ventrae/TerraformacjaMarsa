<template>
    <div class="page">

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
    import player from "../models/player";

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
                let endGame = true;

                if (this.gameInstance.indicators.temperature < 16){
                    endGame = false;
                }
                if(this.gameInstance.indicators.water < 8){
                    endGame = false;
                }
                if(this.gameInstance.indicators.oxygen < 14) {
                    endGame = false;
                }

                if(endGame){
                    this.finishGame();
                }
            },
            finishGame() {
                let x, winners = [];
                let winner = {
                    name: '',
                    score: 0
                };
                console.group('Wyniki');
                this.$store.state.gameInstance.players.forEach(player => {
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
                    this.$store.state.gameInstance = null;
                    this.$router.push('/');
                }
                else {
                    winner = '';
                    x = winners.forEach(e => {
                        winner = winner + ', ' + e.name;
                    });
                    alert('Koniec gry! Wygrywają '+winner+' remisem!');
                    this.$store.state.gameInstance = null;
                    this.$router.push('/');
                }

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
