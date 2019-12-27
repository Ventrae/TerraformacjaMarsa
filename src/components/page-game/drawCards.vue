<template>
    <div class="col-12 mx-auto container">
        <div class="col-12 d-flex justify-content-between align-items-center flex-column flex-lg-row">
            <h2>Dobierz karty:</h2>
            <h5>(koszt karty - 3 gotówki)</h5>
        </div>
        <div class="col-12 justify-content-center row mx-auto">
            <div v-for="(c,i) of drawed">
                <karta :card="c.card" @played="choose(c, i)" />
                <div class="text-center my-4" :class="{'text-success': c.chosen, 'text-danger': !c.chosen}">{{ c.chosen ? '[WYBRANO]' : '[NIE WYBRANO]'}}</div>
            </div>
        </div>
        <div class="col-10 mx-auto row justify-content-center">
            <button class="mb-5 mx-lg-auto mb-lg-0 btn btn-primary" @click="draw()">
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
