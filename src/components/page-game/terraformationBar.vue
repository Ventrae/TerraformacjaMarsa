<template>
    <div>
        <div class="terraformation-bar mb-3 row mx-auto">
            <div class="col-12 row px-0 terraformation-bar-players mx-auto">
                <div
                    class="terraformation-bar-players-cell col-6 col-md-3"
                    v-for="player in gameInstance.players"
                    :class="{
                        'active-turn':player === gameInstance.players[active],
                        'two-players': gameInstance.players.length === 2,
                        'three-players': gameInstance.players.length === 3,
                        'four-players': gameInstance.players.length === 4,
                    }"
                >
                    [{{ player.name }}] = {{ player.points.terraformation }}
                    <div class="ml-1" v-html="renderedSymbol('terraformation')" title="Współczynnik terraformacji"></div>
                </div>
            </div>
            <div class="col-12 terraformation-bar-generals row">
                <div class="col-4 terraformation-bar-generals-cell generals-cell-water" title="Nawodnienie Marsa">
                    {{ this.gameInstance.indicators.water }}
                    <div v-html="renderedSymbol('water')" class="ml-2"></div>
                </div>
                <div class="col-4 terraformation-bar-generals-cell generals-cell-temperature"
                     title="Temperatura na Marsie">
                    {{ this.gameInstance.indicators.temperature }}&#x2103;
                    <div v-html="renderedSymbol('temperature')" class="ml-2"></div>
                </div>
                <div class="col-4 terraformation-bar-generals-cell generals-cell-oxygen" title="Poziom tlenu na Marsie">
                    {{ this.gameInstance.indicators.oxygen }}%
                    <div v-html="renderedSymbol('oxygen')" class="ml-2"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {renderedSymbol} from "../../mixins/renderedSymbol";

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
        },
        mixins: [renderedSymbol]
    }
</script>

<style scoped>
    .fa-sun {
        font-size: 20px;
    }
</style>
