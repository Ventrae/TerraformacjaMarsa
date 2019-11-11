<template>
    <!--<span><i class="mr-2 fas fa-thermometer-half"></i>0&#x2103; | </span>
    <span><i class="ml-2 fas fa-globe"></i> 12%</span>-->
    <div :class="this.symbol" class="card--price-symbol" v-html="renderedSymbol(this.symbol)"></div>
</template>

<script>
    import {renderedSymbol} from "../../mixins/renderedSymbol";
    export default {
        name: "symbol",
        props: {
            symbol: {
                type: String,
                required: true
            }
        },
        mixins: [ renderedSymbol ]
    }
</script>

<style scoped>
    .science {
        background-color: whitesmoke;
        color: darkgoldenrod;
        font-size: 28px;
    }

    .earth {
        background: mediumseagreen;
        color: royalblue;
        font-size: 26px;
    }

    .leaf {
        background-color: forestgreen;
        color: lawngreen;
        font-size: 22px;
    }

    .animals {
        background-color: lightseagreen;
        color: darkolivegreen;
        font-size: 26px;
    }

    .steel {
        background-color: #7f4b23;
        color: #482613;
        font-size: 22px;
    }

    .star {
        background-color: #484848;
        color: #FFD700;
        font-size: 24px;
    }
</style>
