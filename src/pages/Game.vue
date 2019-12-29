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
                this.gameInstance.nextTurn();
            },
            checkEnd() {
                if(this.gameInstance.checkEnd()){
                    this.gameInstance.finishGame();
                    this.$router.push('/');
                    this.$store.state.gameInstance = null;
                }
            },
            finishGame() {
                this.gameInstance.finishGame();
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
