<template>
    <div class="terraformation-bar mb-5 row mx-auto">
        <div class="col-12 row terraformation-bar-players">
            <div
                class="terraformation-bar-players-cell col-6 col-md-3"
                v-for="player in gameInstance.players"
                :class="{'active-turn':player === gameInstance.players[active]}"
            >
                [{{ player.name }}] = {{ player.points.terraformation }}<i class="ml-1 far fa-sun"></i>
            </div>
        </div>
        <div class="col-12 terraformation-bar-generals row">
            <div class="col-4 terraformation-bar-generals-cell generals-cell-water">
                0 <i class="ml-2 fas fa-tint"></i>
            </div>
            <div class="col-4 terraformation-bar-generals-cell generals-cell-temperature">
                -30&#x2103;<i class="ml-2 fas fa-thermometer-half"></i>
            </div>
            <div class="col-4 terraformation-bar-generals-cell generals-cell-oxygen">
                0%<i class="ml-2 fas fa-globe"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "terraformationBar",
        props: {
            gameInstance: {
                type: Object,
                required: true
            },
            active: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style scoped>
    .fa-sun {
        font-size: 20px;
    }
</style>
