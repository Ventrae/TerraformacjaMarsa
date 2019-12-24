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

            <div class="col-12 mx-auto d-flex flex-column mb-4">
                <h4>{{ player.name }} - {{ player.corporation }}</h4>
                <div>Gracz: {{ this.active }}</div>
                <div>WT: {{ player.points.terraformation }}<span class="ml-1"v-html="renderedSymbol('terraformation')"/>,
                    punkty zwycięstwa: {{ player.points.victory }}
                </div>
                <button class="col-2" @click="finishTurn()">KONIEC TURY</button>
            </div>


            <div class="col-12 resources row mx-auto">
                <div class="col-12 resources--symbols">
                    <h5>Symbole:</h5>
                    <div class="resources--symbols-window">
                        <div
                            class="resources--symbols-window-symbol"
                            :class="symbol"
                            v-for="symbol in player.aquiredSymbols"
                            v-html="renderedSymbol(symbol)"
                        >
                        </div>
                    </div>
                </div>
                <div class="col-12 resources--resources">
                    <ul class="row">
                        <li class="mx-auto resource-icons"
                            v-html="renderedSymbol('cash')+': '+player.resources.cash+' (+'+(player.points.terraformation+player.income.cash)+')'"
                            title="Gotówka"
                        />
                        <li class="mx-auto resource-icons"
                            v-html="renderedSymbol('iron')+': '+player.resources.iron+' (+'+player.income.iron+')'"
                            title="Stal"
                        />
                        <li class="mx-auto resource-icons"
                            v-html="renderedSymbol('titan')+': '+player.resources.titan+' (+'+player.income.titan+')'"
                            title="Tytan"
                        />
                        <li class="mx-auto resource-icons"
                            v-html="renderedSymbol('green')+': '+player.resources.green+' (+'+player.income.green+')'"
                            title="Zieleń"
                        />
                        <li class="mx-auto resource-icons"
                            v-html="renderedSymbol('energy')+': '+player.resources.energy+' (+'+player.income.energy+')'"
                            title="Energia"
                        />
                        <li class="mx-auto resource-icons"
                            v-html="renderedSymbol('heat')+': '+player.resources.heat+' (+'+player.income.heat+')'"
                            title="Ciepło"
                        />
                    </ul>
                </div>
            </div>


            <div class="col-12 mx-auto operationRow row">
                <div class="col-10 col-sm-5 col-lg-4 col-xl-2 mx-auto">
                    <button
                        @click="standardOperation(0)"
                        v-html="'25 '+renderedSymbol('cash')+` <i class='fas fa-long-arrow-alt-right'></i> `+renderedSymbol('cash', true)"
                        title="Załóż miasto"
                    >
                    </button>
                </div>
                <div class="col-10 col-sm-5 col-lg-4 col-xl-2 mx-auto">
                    <button
                        @click="standardOperation(1)"
                        v-html="'8 '+renderedSymbol('green')+` <i class='fas fa-long-arrow-alt-right'></i> `+renderedSymbol('oxygen')"
                        title="Posadź las"
                    >
                    </button>
                </div>
                <div class="col-10 col-sm-5 col-lg-4 col-xl-2 mx-auto">
                    <button
                        @click="standardOperation(5)"
                        v-html="'8 '+renderedSymbol('heat')+` <i class='fas fa-long-arrow-alt-right'></i> `+renderedSymbol('temperature')"
                        title="Podnieś temperaturę"
                    >
                    </button>
                </div>
                <div class="col-10 col-sm-5 col-lg-4 col-xl-2 mx-auto">
                    <button
                        @click="standardOperation(2)"
                        v-html="'6 '+renderedSymbol('cash')+` <i class='fas fa-long-arrow-alt-right'></i> `+renderedSymbol('water')"
                        title="Nawodnij Marsa"
                    >
                    </button>
                </div>
                <div class="col-10 col-sm-5 col-lg-4 col-xl-2 mx-auto">
                    <button
                        @click="standardOperation(3)"
                        v-html="'14 '+renderedSymbol('cash')+` <i class='fas fa-long-arrow-alt-right'></i> `+renderedSymbol('temperature')"
                        title="Asteroida"
                    >
                    </button>
                </div>
                <div class="col-10 col-sm-5 col-lg-4 col-xl-2 mx-auto">
                    <button
                        @click="standardOperation(4)"
                        v-html="'11 '+renderedSymbol('cash')+` <i class='fas fa-long-arrow-alt-right'></i> `+renderedSymbol('energy', true)"
                        title="Podnieś produkcję energii"
                    >
                    </button>
                </div>
            </div>

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

    </div>
</template>

<script>
    import Karta from "./card/card";
    import login from "./login";
    import Indicators from "../../models/indicators";
    import Player from "../../models/player";
    import {renderedSymbol} from "../../mixins/renderedSymbol";
    import DrawCards from "./drawCards";

    export default {
        name: "playerInterface",
        components: {
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
                this.drawCards();
            },
            drawCards($event){
                if($event.cards !== undefined){
                    $event.cards.forEach(e => {
                        this.player.cards.push(e);
                    });
                    this.player.resources.cash -= $event.cost;
                }
                this.drawed = true;
            }
        },
        data() {
            return {
                logged: false,
                drawed: false,
                actions: 0
            }
        },
        mixins: [renderedSymbol]
    }
</script>

<style scoped>
    .resource-icons[title='Gotówka']{
        background-image: linear-gradient(to bottom, rgba(0,40,0, 0.4), rgba(0,60,0, 0.3)),
        url("/src/assets/img/cash.jpg");
    }
    .resource-icons[title='Stal']{
        background-image: linear-gradient(to bottom, rgba(40,30,0, 0.7), rgba(40,30,0, 0.6)),
        url("/src/assets/img/steel2.jpg");
        background-size: cover;
    }
    .resource-icons[title='Tytan']{
        background-image: linear-gradient(to bottom, rgba(50,50,50, 0.2), rgba(100,100,100, 0.2)),
        url("/src/assets/img/stars.jpg");
        background-position: left;
    }
    .resource-icons[title='Zieleń']{
        background-image: linear-gradient(to bottom, rgba(50,70,50, 0.6), rgba(100,120,100, 0.6)),
        url("/src/assets/img/forest.jpg");
        color: palegoldenrod;
        background-position: center;
    }
    .resource-icons[title='Energia']{
        background-image: linear-gradient(to bottom, rgba(140,100,140, 0.3), rgba(140,100,140, 0.2)),
        url("/src/assets/img/lightning.jpg");
        background-position: center;
    }
    .resource-icons[title='Ciepło']{
        background-image: linear-gradient(to bottom, rgba(60,40,10, 0.3), rgba(60,40,10, 0.4)),
        url("/src/assets/img/fire.jpg");
        background-position: center;
    }
</style>
