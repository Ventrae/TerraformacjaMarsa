<template>
    <div class="page">

        <h2 class="pt-2 my-3">Rozpocznij rozgrywkę:</h2>
        <player-form @playerAdded="addPlayer($event)"/>
        <player-list :players="players" @deleted="deletePlayer($event)"/>

        <transition name="fade-up">
            <button
                class="btn btn-primary btn-lg start-game"
                @click="beginGame()"
                v-if="players.length >= 2"
            >
                Rozpocznij grę
            </button>
        </transition>

    </div>
</template>

<script>
    import PlayerForm from "../components/page-index/player-form";
    import PlayerList from "../components/page-index/player-list";
    import GamePlay from "../models/gameplay";

    export default {
        name: "Index",
        components: {PlayerList, PlayerForm},
        data() {
            return {
                players: []
            }
        },
        methods: {
            addPlayer(arg) {
                this.players.push(arg);
            },
            deletePlayer($event){
                this.players.splice($event, 1);
            },
            beginGame(){
                if(this.players.length < 2){
                    alert('Dodaj conajmniej dwóch graczy!');
                }
                else {
                    let gI = new GamePlay(this.players);
                    this.$store.state.gameInstance = gI;
                    this.$router.push('/gra');
                }
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
    .fade-up-enter {
        
    }
    .fade-up-enter-active {

    }
    .fade-up-leave {

    }
    .fade-up-leave-active {

    }
</style>
