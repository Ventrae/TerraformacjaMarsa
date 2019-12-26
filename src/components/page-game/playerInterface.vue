<template>
    <div class="playerInterface row">

        <login
            :cpassword="player.password"
            :name="player.name"
            v-if="logged !== true"
            @logged="logIn($event)"
        />

        <draw-cards
            @drawed="drawCards($event)"
            v-if="logged === true && drawed === false"
        />

        <template v-if="logged === true && drawed === true">

            <div class="col-10 mx-auto px-4 mb-4 player-info row">
                <div class="d-flex flex-column">
                    <h4>{{ player.name }} - "{{ player.corporation }}"</h4>
                </div>
                <div class="col-12 col-lg-4 d-flex justify-content-around align-items-center">
                    <div class="mx-auto">WT: {{ player.points.terraformation }}<span class="ml-1"v-html="renderedSymbol('terraformation')"/>,
                        punkty zwycięstwa: {{ player.points.victory }}
                    </div>
                    <button class="my-2 mx-auto col-4 btn-block btn btn-outline-primary" @click="finishTurn()">Spasuj</button>
                </div>
            </div>

            <div class="col-12 resources row mx-auto">
                <symbols :symbols="symbols"/>
            </div>

            <standard-operations @operated="standardOperation($event)" />

            <div class="col-12 mx-auto row cardSectionWrapper">
                <div class="cardSection">
                    <h2>Karty akcji:</h2>
                    <karta
                        v-for="(card, index) in player.cards"
                        :card="card"
                        @played="executeCard($event, index)"
                    />
                </div>
            </div>

        </template>

        <resources :player="player" v-if="logged"/>

    </div>
</template>

<script>
    import Karta from "./card/card";
    import login from "./login";
    import Indicators from "../../models/indicators";
    import Player from "../../models/player";
    import {renderedSymbol} from "../../mixins/renderedSymbol";
    import DrawCards from "./drawCards";
    import Symbols from "./symbols";
    import Resources from "./resources";
    import StandardOperations from "./standardOperations";

    export default {
        name: "playerInterface",
        components: {
            StandardOperations,
            Resources,
            Symbols,
            DrawCards,
            Karta,
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
        methods: {
            standardOperation(operation) {
                switch (operation) {
                    case 0:
                        // Założenie miasta
                        if (this.player.resources.cash >= 25) {
                            this.player.income.cash += 1;
                            this.player.resources.cash -= 25;

                            this.actions++;
                            if (this.actions === 2) {
                                this.finishTurn();
                            }
                        } else alert('Nie można założyć miasta, musisz posiadać 25 jednostek gotówki');
                        break;
                    case 1:
                        // Założenie lasu
                        if (this.player.resources.green >= 8) {
                            this.indicators.oxygen += 1;
                            this.player.resources.green -= 8;

                            this.player.points.terraformation++;
                            this.$emit('terraformed');

                            this.actions++;
                            if (this.actions === 2) {
                                this.finishTurn();
                            }
                        } else alert('Nie można założyć lasu, musisz posiadać 8 jednostek zieleni');
                        break;
                    case 2:
                        // Założenie oceanu
                        if (this.player.resources.cash >= 18) {
                            this.indicators.water += 1;
                            this.player.resources.cash -= 18;

                            this.player.points.terraformation++;
                            this.$emit('terraformed');

                            this.actions++;
                            if (this.actions === 2) {
                                this.finishTurn();
                            }
                        } else alert('Nie można założyć oceanu, musisz posiadać 18 jednostek gotówki');
                        break;
                    case 3:
                        // Podniesienie temperatury (za gotówkę)
                        if (this.player.resources.cash >= 14) {
                            this.indicators.temperature += 2;
                            this.player.resources.cash -= 14;

                            this.player.points.terraformation++;
                            this.$emit('terraformed');

                            this.actions++;
                            if (this.actions === 2) {
                                this.finishTurn();
                            }
                        } else alert('Nie można podnieść temperatury, musisz posiadać 14 jednostek gotówki');
                        break;
                    case 4:
                        // Zwiększenie produkcji energii
                        if (this.player.resources.cash >= 11) {
                            this.player.income.energy += 1;
                            this.player.resources.cash -= 11;

                            this.actions++;
                            if (this.actions === 2) {
                                this.finishTurn();
                            }
                        } else alert('Nie można zwiększyć produkcji energii, musisz posiadać 11 jednostek gotówki');
                        break;
                    case 5:
                        // Zwiększenie temperatury (za 8 energii)
                        if (this.player.resources.heat >= 8) {
                            this.indicators.temperature += 1;
                            this.player.resources.heat -= 8;

                            this.player.points.terraformation++;
                            this.$emit('terraformed');

                            this.actions++;
                            if (this.actions === 2) {
                                this.finishTurn();
                            }
                        } else alert('Nie można podnieść temperatury, musisz posiadać 8 jednostek ciepła');
                        break;
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
                this.$emit('finishedTurn', this.active);
            },
            logIn(arg) {
                this.logged = arg;
            },
            drawCards($event){
                if($event.cards !== undefined){
                    $event.cards.forEach(e => {
                        this.player.cards.push(e);
                    });
                    this.player.resources.cash -= $event.cost;
                }
                this.drawed = true;
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
        computed: {
            symbolsCount(){
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
                return x;
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
