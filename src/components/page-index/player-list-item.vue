<template>
    <div class="player-list--item">
        <h3>Gracz: {{ player.name }}</h3>
        <p>Hasło: <span :class="{'text-censored': player.password}">{{ player.password ? '&lt;hidden&gt;' : '&ltbrak hasła&gt;' }}</span></p>
        <corporation-card :corporation="player.corporation" @deleted="deletePlayer()"/>
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
        }
    }
</script>

<style scoped>
    .text-censored {
        -webkit-text-security: square;
    }
</style>
