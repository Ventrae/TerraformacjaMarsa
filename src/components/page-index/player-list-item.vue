<template>
    <div>
        {{ player.name }} - {{ player.password }} - {{ player.corporation }}
    </div>
</template>

<script>
    import Player from "../../models/player";

    export default {
        name: "player-list-item",
        props: {
            player: {
                type: Player,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
