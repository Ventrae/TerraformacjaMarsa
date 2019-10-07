<template>
    <div class="terraformation-bar mb-5" >
        <div class="terraformation-bar-players">
            <div
                class="terraformation-bar-players-cell"
                v-for="player in gameInstance.players"
                :class="{'active-turn':player.name === 'Filip'}"
            >
                [{{ player.name }}] = {{ player.points.terraformation }}<i class="ml-1 far fa-sun"></i>
            </div>
        </div>
        <div class="terraformation-bar-generals">
            <div class="terraformation-bar-generals-cell generals-cell-water">
                0 <i class="ml-2 fas fa-tint"></i>
            </div>
            <div class="terraformation-bar-generals-cell generals-cell-temperature">
                -30&#x2103;<i class="ml-2 fas fa-thermometer-half"></i>
            </div>
            <div class="terraformation-bar-generals-cell generals-cell-oxygen">
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
            }
        }
    }
</script>

<style scoped>
    .fa-sun {
        font-size: 20px;
    }
</style>
