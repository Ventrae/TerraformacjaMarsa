<template>
    <div>
        <player-list-item
            v-for="player of players"
            :player="player"
        ></player-list-item>
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
        }
    }
</script>

<style scoped>

</style>
