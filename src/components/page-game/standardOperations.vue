<template>
    <div class="col-12 mx-auto operationRow row">
        <div class="col-10 col-sm-5 col-lg-4 col-xl-2 mx-auto">
            <button
                @click="standardOperation(0)"
                v-html="'25 '+renderedSymbol('cash')+` <i class='fas fa-long-arrow-alt-right'></i> `+renderedSymbol('cash', true)"
                title="Załóż miasto"
            >
            </button>
        </div>
        <div class="col-10 col-sm-5 col-lg-4 col-xl-2 mx-auto">
            <button
                @click="standardOperation(1)"
                v-html="'8 '+renderedSymbol('green')+` <i class='fas fa-long-arrow-alt-right'></i> `+renderedSymbol('oxygen')"
                title="Posadź las"
            >
            </button>
        </div>
        <div class="col-10 col-sm-5 col-lg-4 col-xl-2 mx-auto">
            <button
                @click="standardOperation(5)"
                v-html="'8 '+renderedSymbol('heat')+` <i class='fas fa-long-arrow-alt-right'></i> `+renderedSymbol('temperature')"
                title="Podnieś temperaturę"
            >
            </button>
        </div>
        <div class="col-10 col-sm-5 col-lg-4 col-xl-2 mx-auto">
            <button
                @click="standardOperation(2)"
                v-html="'6 '+renderedSymbol('cash')+` <i class='fas fa-long-arrow-alt-right'></i> `+renderedSymbol('water')"
                title="Nawodnij Marsa"
            >
            </button>
        </div>
        <div class="col-10 col-sm-5 col-lg-4 col-xl-2 mx-auto">
            <button
                @click="standardOperation(3)"
                v-html="'14 '+renderedSymbol('cash')+` <i class='fas fa-long-arrow-alt-right'></i> `+renderedSymbol('temperature')"
                title="Asteroida"
            >
            </button>
        </div>
        <div class="col-10 col-sm-5 col-lg-4 col-xl-2 mx-auto">
            <button
                @click="standardOperation(4)"
                v-html="'11 '+renderedSymbol('cash')+` <i class='fas fa-long-arrow-alt-right'></i> `+renderedSymbol('energy', true)"
                title="Podnieś produkcję energii"
            >
            </button>
        </div>
    </div>
</template>

<script>
    import {renderedSymbol} from "../../mixins/renderedSymbol";

    export default {
        name: "standardOperations",
        methods: {
            standardOperation(operation){
                this.$emit('operated', operation);
            }
        },
        mixins:[ renderedSymbol ]
    }
</script>

<style scoped>

</style>
