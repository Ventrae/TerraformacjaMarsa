<template>
    <div
        class="player-list--item col-10 mx-auto my-2 py-3 row text-warning"
        :class="corporationClass"
    >
        <div class="col-3 d-flex flex-column justify-content-center">
            <h3>{{ player.name }}</h3>
            <p>Hasło: <span :class="{'text-censored': player.password}">{{ player.password ? '&lt;hidden&gt;' : '&ltbrak hasła&gt;' }}</span></p>
        </div>
        <div class="col-3 d-flex align-items-center">
            <h4>"{{ player.corporation }}"</h4>
        </div>
        <corporation-card :corporation="player.corporation" @deleted="deletePlayer()"/>
        <div class="col-1 d-flex align-items-center">
            <button @click="deletePlayer()" class="btn btn-outline-danger px-4 py-3">
                <i class="fa fa-trash"/>
            </button>
        </div>
    </div>
</template>

<script>
    import Player from "../../models/player";
    import CorporationCard from "./corporation-card";

    export default {
        name: "player-list-item",
        components: {CorporationCard},
        props: {
            player: {
                type: Player,
                required: true
            }
        },
        methods: {
            deletePlayer(){
                this.$emit('deleted');
            }
        },
        computed: {
            corporationClass(){
                if(this.player.corporation === 'Credicor') return 'corpo-credicor';
                else if(this.player.corporation === 'Mining Guild') return 'corpo-mining';
                else if(this.player.corporation === 'Ecoline') return 'corpo-ecoline';
                else if(this.player.corporation === 'Inventrix') return 'corpo-inventrix';
                else if(this.player.corporation === 'Thorgate') return 'corpo-thorgate';
                else return '';
            }
        }
    }
</script>

<style scoped>
    .text-censored {
        -webkit-text-security: square;
    }
</style>
