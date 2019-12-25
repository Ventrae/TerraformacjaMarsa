<template>
    <div class="player-list container">
        <player-list-item
            v-for="(player, index) of players"
            :player="player"
            @deleted="deletePlayer(index)"
        />
    </div>
</template>

<script>
    import PlayerListItem from "./player-list-item";

    export default {
        name: "player-list",
        components: {PlayerListItem},
        props: {
            players: {
                type: Array,
                required: true
            }
        },
        methods: {
            deletePlayer(arg){
                this.$emit('deleted', arg);
            }
        }
    }
</script>

<style scoped>

</style>
