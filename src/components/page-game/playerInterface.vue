<template>
    <div class="playerInterface row">

        <login
            :cpassword="player.password"
            :name="player.name"
            :color="playerColor"
            v-if="logged !== true"
            @logged="logIn($event)"
        />

        <draw-cards
            @drawed="drawCards($event)"
            v-if="logged === true && drawed === false"
        />

        <template v-if="logged === true && drawed === true">

            <div class="col-10 mx-auto px-lg-4 pb-2 pb-lg-0 mb-4 player-info row p-0">
                <div class="d-flex flex-column">
                    <h3 class="d-none d-lg-block" :style="playerColor">{{ player.name }} - "{{ player.corporation }}"</h3>
                </div>
                <div class="col-12 col-lg-4 d-flex justify-content-around align-items-center px-0">
                    <div class="mx-auto">
                        WT: {{ player.points.terraformation }}<span class="ml-1"v-html="renderedSymbol('terraformation')"/>,<br class="d-inline d-md-none"/>
                        punkty zwycięstwa: {{ player.points.victory }}
                    </div>
                    <button class="my-2 mx-auto col-4 btn-block btn btn-outline-primary" @click="finishTurn()">Spasuj</button>
                </div>
            </div>

            <symbols :symbols="symbols"/>

            <standard-operations @operated="standardOperation($event)" />

            <cards-section :cards="player.cards" @cardPlayed="executeCard($event.event, $event.index)"/>

        </template>

        <resources :player="player" v-if="logged" />

    </div>
</template>

<script>
    import login from "./login";
    import Indicators from "../../models/indicators";
    import Player from "../../models/player";
    import {renderedSymbol} from "../../mixins/renderedSymbol";
    import DrawCards from "./drawCards";
    import Symbols from "./symbols";
    import Resources from "./resources";
    import StandardOperations from "./standardOperations";
    import CardsSection from "./cardsSection";

    export default {
        name: "playerInterface",
        components: {
            CardsSection,
            StandardOperations,
            Resources,
            Symbols,
            DrawCards,
            login
        },
        props: {
            player: {
                type: Player,
                required: true
            },
            active: {
                type: Number,
                required: true
            },
            indicators: {
                type: Indicators,
                required: true
            }
        },
        computed: {
            corporationClass(){
                if(this.player.corporation === 'Credicor') return 'corpo-credicor';
                else if(this.player.corporation === 'Mining Guild') return 'corpo-mining';
                else if(this.player.corporation === 'Ecoline') return 'corpo-ecoline';
                else if(this.player.corporation === 'Inventrix') return 'corpo-inventrix';
                else if(this.player.corporation === 'Thorgate') return 'corpo-thorgate';
                else return '';
            },
            playerColor(){
                if(this.active === 0) return { color: 'red', 'text-shadow': '1px 1px black' };
                else if(this.active === 1) return { color: 'blue', 'text-shadow': '1px 1px black' };
                else if(this.active === 2) return { color: 'turquoise', 'text-shadow': '1px 1px black' };
                else if(this.active === 3) return { color: 'purple', 'text-shadow': '1px 1px black' };
            }
        },
        methods: {
            standardOperation(operation) {
                if(this.player.standardOperation(operation)){
                    if(operation === 1 || operation === 2 || operation === 3 || operation === 5){
                        this.$emit('terraformed');
                    }
                    this.actions++;
                    if (this.actions === 2) {
                        this.finishTurn();
                    }
                }
            },
            executeCard(arg, index) {

                if (arg.playCard(this.indicators, this.player)) {
                    this.$emit('terraformed');
                    // Jeśli wymagania są spełnione usuń kartę z ręki gracza (playCard() zwraca boolean w razie sukcesu)
                    this.player.cards.splice(index, 1);
                    this.updateSymbols(arg.symbol);
                    this.actions++;
                    if (this.actions === 2) {
                        this.finishTurn();
                    }
                }

            },
            finishTurn() {
                this.player.productionPhase();
                this.$emit('finishedTurn');
            },
            logIn(arg) {
                this.logged = arg;
            },
            drawCards($event){
                if($event.cards !== undefined){
                    this.player.drawCards($event.cards, $event.cost);
                }
                this.drawed = true;
                window.scrollTo(0,0);
            },
            updateSymbols(symbol){
                if(symbol === 'earth') this.symbols.earth += 1;
                else if (symbol === 'science') this.symbols.science += 1;
                else if (symbol === 'leaf')this.symbols.leaf += 1;
                else if (symbol === 'animals')this.symbols.animals += 1;
                else if (symbol === 'steel')this.symbols.steel += 1;
                else if (symbol === 'star')this.symbols.star += 1;
                else {
                    let x = {
                        earth: 0,
                        science: 0,
                        leaf: 0,
                        animals: 0,
                        steel: 0,
                        star: 0
                    };
                    this.$store.state.gameInstance.players[this.active].aquiredSymbols.forEach(s => {
                        if(s === 'earth') x.earth += 1;
                        else if (s === 'science')  x.science += 1;
                        else if (s === 'leaf') x.leaf += 1;
                        else if (s === 'animals') x.animals += 1;
                        else if (s === 'steel') x.steel += 1;
                        else if (s === 'star') x.star += 1;
                    });
                    this.symbols = x;
                }
            }
        },
        data() {
            return {
                logged: false,
                drawed: false,
                actions: 0,
                symbols: {
                    earth: 0,
                    science: 0,
                    leaf: 0,
                    animals: 0,
                    steel: 0,
                    star: 0
                }
            }
        },
        mixins: [renderedSymbol],
        mounted() {
            this.updateSymbols();
        }
    }
</script>

<style scoped>

</style>
