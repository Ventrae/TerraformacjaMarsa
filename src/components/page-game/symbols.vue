<template>
    <div class="col-12 col-lg-10 col-xl-6 mb-4 mx-auto d-flex flex-column flex-md-row justify-content-around align-items-center">
        <h3>Zebrane symbole:</h3>
        <div class="d-flex flex-wrap justify-content-center">
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
    h3 {
        font-size: 20px;
    }
</style>
