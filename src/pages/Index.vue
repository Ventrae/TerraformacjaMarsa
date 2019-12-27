<template>
    <div class="page">

        <h2 class="pt-2 my-3 text-center">Rozpocznij rozgrywkę - dodaj graczy:</h2>

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
                if(this.players.length < 4) this.players.push(arg);
                else alert('Nie możesz dodać więcej niż czterech graczy!');
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
    .page {
        margin-top: 64px;
    }
    .start-game {
        position: fixed;
        bottom: 50px;
        left: 50vw;
        transform: translateX(-50%);
    }
    .fade-up-enter-active {
        animation: slide-in .3s ease-in forwards;
    }
    .fade-up-leave-active {
        animation: slide-in .3s ease-in reverse;
    }

    @keyframes slide-in {
        from {
            transform: translateX(-50%) translateY(50px);
        }
        to {
            transform: translateX(-50%) translateY(0);
        }
    }
</style>
