<template>
    <div class="col-12 mx-auto px-2 cardSectionWrapper">
        <div class="col-12 px-5">
            <h2>Dobierz karty:</h2>
            <h5>(koszt karty - 3 gotówki)</h5>
        </div>
        <div class="col-12 justify-content-center row px-5 mx-auto">
            <div v-for="(c,i) of drawed">
                <karta :card="c.card" @played="choose(c, i)" />
                {{ c.chosen ? '[WYBRANO]' : '[NIE WYBRANO]'}}
            </div>
        </div>
        <div class="col-12 px-5 row justify-content-center">
            <button class="mx-auto btn btn-primary" @click="draw()">
                Wybierz te karty - {{ ammount }} gotówki
            </button>
        </div>
    </div>
</template>

<script>
    import Karta from "./card/card";
    import {AllCards} from "../../mixins/AllCards";

    export default {
        name: "drawCards",
        components: {Karta},
        data() {
            return {
                drawed: [],
                ammount: 0
            }
        },
        methods: {
            choose(arg, i){
                if(arg.chosen){
                    this.ammount -= 3;
                }
                else {
                    this.ammount += 3;
                }
                this.drawed[i].chosen = !arg.chosen;
            },
            draw() {
                let x = [];
                this.drawed.forEach(e => {
                   if(e.chosen) x.push(e.card);
                });
                this.$emit('drawed', {cards: x, cost: this.ammount});
            }
        },
        mixins: [ AllCards ],
        beforeMount() {
            let x = this.AllCards.length;
            for (let i = 0; i < 4; i++) {
                let nr = Math.floor(Math.random() * (x));
                let y = { chosen: false, card: this.AllCards[nr] };
                this.drawed.push(y);
            }
        }
    }
</script>

<style scoped>

</style>
