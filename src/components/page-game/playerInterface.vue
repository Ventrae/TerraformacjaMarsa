<template>
    <div class="playerInterface">
        <login
            :cpassword="player.password"
            :name="player.name"
            v-if="logged !== true"
            @logged="logIn($event)"
        ></login>
        <template v-else>

            <div class="standardOperations row">
                <div class="col-12 col-md-6"><button>Załóż miasto</button> - KOSZT: 12 (cash) - [+1 prod. cash]</div>
                <div class="col-12 col-md-6"><button>Załóż las</button> - KOSZT: 8 (green) - [+1 tlen]</div>
                <div class="col-12 col-md-6"><button>Nawodnij planete</button> - KOSZT: 6 (cash) - [+1 ocean]</div>
                <div class="col-12 col-md-6"><button>Podnieś temperaturę</button> - KOSZT: 8 (heat) - [+1 temperature]</div>
                <div class="col-12 col-md-6"><button>Zwiększ energię</button> - KOSZT: 11 (cash) - [+1 prod. energy]</div>
            </div>

            <div class="mt-2 resources row">
                <div class="col-12"><b>{{ player.name }}</b> | Gracz: {{ this.active }} | <button @click="finishTurn()">KONIEC TURY</button></div>
                <div class="col-12"><b>Symbole:</b> <span v-for="symbol in player.aquiredSymbols">{{ symbol }}, </span> </div>
                <div class="col-12">
                    <ul class="mt-2 row d-flex">
                        <li class="col-1 mx-auto" v-for="(resource, name) in player.resources">{{ name }}: {{ resource }}</li>
                    </ul>
                </div>
            </div>

            <div class="cardSection row">
                <karta
                    v-for="(card, index) in player.cards"
                    :type="card.type"
                    :title="card.title"
                    :price="card.price"
                    :requirements="card.requirements"
                    :symbol="card.symbol"
                    :text="card.text"
                    @played="addSymbol($event, index)"
                ></karta>
            </div>
        </template>
    </div>
</template>

<script>
    import Karta from "./karta";
    import login from "./login";

    export default {
        name: "playerInterface",
        components: {
            Karta,
            login
        },
        props: {
            player: {
                type: Object,
                required: true
            },
            active: {
                type: Number,
                required: true
            }
        },
        methods: {
            addSymbol(arg, index){
                // usuń kartę w this.player.cards
                console.log(this.player.cards);
                this.player.aquiredSymbols.push(arg);
            },
            finishTurn(){
                this.$emit('finishedTurn', this.active);
            },
            logIn(arg){
                this.logged = arg;
            }
        },
        data() {
            return {
                logged: false
            }
        }
    }
</script>

<style scoped>

</style>
