<template>
    <div :class="bgtype" @click="executeCard()" class="card" >

        <h5>{{ this.card.title }}</h5>

        <div class="card--price">
            <card-cost>{{ this.card.price }}</card-cost>
            <card-requirement :oxygen="this.card.requirements.oxygen" :temperature="this.card.requirements.temperature"
                              :water="this.card.requirements.water"></card-requirement>
            <card-symbol :symbol="this.card.symbol"></card-symbol>
        </div>

        <div class="card-img-top">
            <img :alt="this.card.title" :src="this.image"/>
        </div>

        <div class="card-body text-center">
            <div class="card-body--text">
                <p>{{ this.card.text }}</p>
            </div>
        </div>

    </div>
</template>

<script>
    import CardSymbol from "./cardSymbol";
    import CardCost from "./cardCost";
    import CardRequirement from "./cardRequirement";
    import {Card} from "../../models/card";

    export default {
        name: "karta",
        components: {
            CardRequirement,
            CardCost,
            CardSymbol,
        },
        props: {
            card: {
                type: Object,
                required: true
            }
        },
        methods: {
            executeCard() {
                // alert("Zagrywam " + this.card.title);
                this.$emit('played', this.card);
            }
        },
        data() {
            return {
                bgtype: "card--bg-" + this.card.type
            }
        },
        computed: {
            image() {
                return "/src/assets/img/cards/" + this.card.type + "/" + this.card.title + ".jpg";
            }
        }
    }
</script>

<style scoped>
    h5 {
        text-align: center;
        color: ghostwhite;
        padding: 10px;
        margin: 0;
    }
</style>
