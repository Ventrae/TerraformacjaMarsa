<template>
    <div class="col-12 col-lg-6 mb-4 mx-auto d-flex justify-content-around align-items-center">
        <h5>Zebrane symbole:</h5>
        <div class="d-flex">
            <div
                class="resources--symbols-window-symbol"
                v-for="(value, key) in symbols"
                v-html="renderedSymbol(key) + 'x' + value"
            >
            </div>
        </div>
    </div>
</template>

<script>
    import {renderedSymbol} from "../../mixins/renderedSymbol";

    export default {
        name: "symbols",
        props: {
            symbols: {
                type: Object,
                required: true
            }
        },
        mixins: [ renderedSymbol ]
    }
</script>

<style scoped>

</style>
