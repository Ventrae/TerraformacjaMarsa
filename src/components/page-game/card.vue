<template>
  <div :class="bgtype" @click="executeCard()" class="card" style="width: 18rem;">

    <h5>{{ this.title }}</h5>

    <div class="card--price">
      <card-cost>{{ this.price }}</card-cost>
      <card-requirement :oxygen="this.requirements.oxygen" :temperature="this.requirements.temperature"
                        :water="this.requirements.water"></card-requirement>
      <card-symbol :symbol="this.symbol"></card-symbol>
    </div>

      <div class="card-img-top">
        <img :alt="this.title" :src="this.image"/>
      </div>

    <div class="card-body text-center">
      <div class="card-body--text">
        <p>{{ this.text }}</p>
      </div>
    </div>

  </div>
</template>

<script>
    import CardSymbol from "./cardSymbol";
    import CardCost from "./cardCost";
    import CardRequirement from "./cardRequirement";

    export default {
        name: "karta",
        components: {
            CardRequirement,
            CardCost,
            CardSymbol,
        },
        props: {
            type: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            symbol: {
                type: String,
                required: true
            },
            requirements: {
                type: Object,
                required: false,
                default: {
                    water: null,
                    temperature: null,
                    oxygen: null
                }
            },
            text: {
                type: String,
                required: true
            }
        },
        methods: {
            executeCard() {
                alert("Zagrywam " + this.title);
                this.$emit('played', this.symbol);
            }
        },
        data() {
            return {
                bgtype: "card--bg-" + this.type
            }
        },
        computed: {
            image() {
                return "/src/assets/img/cards/" + this.type + "/" + this.title + ".jpg";
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
