<template>
    <div class="playerInterface">
        <login
            :cpassword="player.password"
            :name="player.name"
            v-if="logged !== true"
            @logged="logIn($event)"
        ></login>
        <template v-else>

            <div class="col-12 d-flex flex-column mb-4">
                <h4>{{ player.name }}</h4>
                <div>Gracz: {{ this.active }}</div>
                <div>Współczynnik terraformacji: {{ player.points.terraformation }}, punkty zwycięstwa: {{ player.points.victory }}</div>
                <button class="col-2" @click="finishTurn()">KONIEC TURY</button>
            </div>

            <div class="standardOperations row">
                <div class="col-12 col-md-6">
                    <button
                        @click="standardOperation(0)"
                        v-html="'25 '+renderSymbol('cash')+` <i class='fas fa-long-arrow-alt-right'></i> `+renderSymbol('cash')+`+<i class='fas fa-city button-icon mr-2'></i>`"
                        title="Załóż miasto"
                    >
                    </button>
                </div>
                <div class="col-12 col-md-6">
                    <button
                        @click="standardOperation(1)"
                        v-html="'8 '+renderSymbol('green')+` <i class='fas fa-long-arrow-alt-right'></i> `+renderSymbol('oxygen')"
                        title="Posadź las"
                    >
                    </button>
                </div>
                <div class="col-12 col-md-6">
                    <button
                        @click="standardOperation(2)"
                        v-html="'6 '+renderSymbol('cash')+` <i class='fas fa-long-arrow-alt-right'></i> `+renderSymbol('water')"
                        title="Nawodnij Marsa"
                    >
                    </button>
                </div>
                <div class="col-12 col-md-6">
                    <button
                        @click="standardOperation(3)"
                        v-html="'14 '+renderSymbol('cash')+` <i class='fas fa-long-arrow-alt-right'></i> `+renderSymbol('temperature')"
                        title="Asteroida"
                    >
                    </button>
                </div>
                <div class="col-12 col-md-6">
                    <button
                        @click="standardOperation(4)"
                        v-html="'11 '+renderSymbol('cash')+` <i class='fas fa-long-arrow-alt-right'></i> `+renderSymbol('energy')"
                        title="Podnieś produkcję energii"
                    >
                    </button>
                </div>
                <div class="col-12 col-md-6">
                    <button
                        @click="standardOperation(5)"
                        v-html="'8 '+renderSymbol('heat')+` <i class='fas fa-long-arrow-alt-right'></i> `+renderSymbol('temperature')"
                        title="Podnieś temperaturę"
                    >
                    </button>
                </div>
            </div>

            <div class="mt-2 resources row">
                <div class="col-12"><h5>Symbole:</h5> <span v-for="symbol in player.aquiredSymbols">{{ symbol }}, </span> </div>
                <div class="col-12">
                    <h5>Zasoby:</h5>
                    <ul class="mt-2 row">
                        <li class="col-2 mx-auto resource-icons"
                            v-html="renderSymbol('cash')+': '+player.resources.cash+' (+'+player.income.cash+')'"
                        ></li>
                        <li class="col-2 mx-auto resource-icons"
                            v-html="renderSymbol('iron')+': '+player.resources.iron+' (+'+player.income.iron+')'"
                        ></li>
                        <li class="col-2 mx-auto resource-icons"
                            v-html="renderSymbol('titan')+': '+player.resources.titan+' (+'+player.income.titan+')'"
                        ></li>
                        <li class="col-2 mx-auto resource-icons"
                            v-html="renderSymbol('green')+': '+player.resources.green+' (+'+player.income.green+')'"
                        ></li>
                        <li class="col-2 mx-auto resource-icons"
                            v-html="renderSymbol('energy')+': '+player.resources.energy+' (+'+player.income.energy+')'"
                        ></li>
                        <li class="col-2 mx-auto resource-icons"
                            v-html="renderSymbol('heat')+': '+player.resources.heat+' (+'+player.income.heat+')'"
                        ></li>
                    </ul>
                </div>
            </div>

            <div class="cardSection row">
                <karta
                    v-for="(card, index) in player.cards"
                    :card="card"
                    @played="executeCard($event, index)"
                ></karta>
            </div>
        </template>
    </div>
</template>

<script>
    import Karta from "./card";
    import login from "./login";
    import Indicators from "../../models/indicators";
    import Player from "../../models/player";

    export default {
        name: "playerInterface",
        components: {
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
            standardOperation(operation){
                switch (operation) {
                    case 0:
                        // Założenie miasta
                        if(this.player.resources.cash >= 25){
                            this.player.income.cash += 1;
                            this.player.resources.cash -= 25;

                            this.actions++;
                            if(this.actions === 2) {
                                this.finishTurn();
                            }
                        }
                        else alert('Nie można założyć miasta, musisz posiadać 25 jednostek gotówki');
                    break;
                    case 1:
                        // Założenie lasu
                        if(this.player.resources.green >= 8){
                            this.indicators.oxygen += 1;
                            this.player.resources.green -= 8;

                            this.player.points.terraformation++;
                            this.$emit('terraformed');

                            this.actions++;
                            if(this.actions === 2) {
                                this.finishTurn();
                            }
                        }
                        else alert('Nie można założyć lasu, musisz posiadać 8 jednostek zieleni');
                    break;
                    case 2:
                        // Założenie oceanu
                        if(this.player.resources.cash >= 18){
                            this.indicators.water += 1;
                            this.player.resources.cash -= 18;

                            this.player.points.terraformation++;
                            this.$emit('terraformed');

                            this.actions++;
                            if(this.actions === 2) {
                                this.finishTurn();
                            }
                        }
                        else alert('Nie można założyć oceanu, musisz posiadać 18 jednostek gotówki');
                    break;
                    case 3:
                        // Podniesienie temperatury (za gotówkę)
                        if(this.player.resources.cash >= 14){
                            this.indicators.temperature += 2;
                            this.player.resources.cash -= 14;

                            this.player.points.terraformation++;
                            this.$emit('terraformed');

                            this.actions++;
                            if(this.actions === 2) {
                                this.finishTurn();
                            }
                        }
                        else alert('Nie można podnieść temperatury, musisz posiadać 14 jednostek gotówki');
                    break;
                    case 4:
                        // Zwiększenie produkcji energii
                        if(this.player.resources.cash >= 11){
                            this.player.income.energy += 1;
                            this.player.resources.cash -= 11;

                            this.actions++;
                            if(this.actions === 2) {
                                this.finishTurn();
                            }
                        }
                        else alert('Nie można zwiększyć produkcji energii, musisz posiadać 11 jednostek gotówki');
                    break;
                    case 5:
                        // Zwiększenie temperatury (za 8 energii)
                        if(this.player.resources.heat >= 8){
                            this.indicators.temperature += 1;
                            this.player.resources.heat -= 8;

                            this.player.points.terraformation++;
                            this.$emit('terraformed');

                            this.actions++;
                            if(this.actions === 2) {
                                this.finishTurn();
                            }
                        }
                        else alert('Nie można podnieść temperatury, musisz posiadać 8 jednostek ciepła');
                    break;
                }
            },
            executeCard(arg, index){

                if(arg.playCard(this.indicators, this.player)) {
                    this.$emit('terraformed');
                    // Jeśli wymagania są spełnione usuń kartę z ręki gracza (playCard() zwraca boolean w razie sukcesu)

                    this.player.cards.splice(index, 1);
                    this.actions++;
                    if(this.actions === 2) {
                        this.finishTurn();
                    }
                }

            },
            finishTurn() {
                this.player.productionPhase();
                this.$emit('finishedTurn', this.active);
            },
            renderSymbol(symbol){
                switch (symbol) {
                    case 'cash':
                        return "<i class='fas fa-dollar-sign' style='color: #FF8C00' title='Gotówka'></i>";
                    break;
                    case 'iron':
                        return "<i class='fas fa-tools' style='color: #7f4b23' title='Stal'></i>";
                    break;
                    case 'titan':
                        return "<i class='far fa-star' style='color:#FFD700;' title='Tytan'></i>";
                    break;
                    case 'green':
                        return "<i class='fas fa-leaf' style='color: forestgreen;' title='Zieleń'></i>";
                    break;
                    case 'energy':
                        return "<i class='fas fa-bolt' style='color: #c024fc' title='Energia'></i>";
                    break;
                    case 'heat':
                        return "<i class='fas fa-fire' style='color: #db3a1a' title='Ciepło'></i>";
                    break;
                    case 'water':
                        return "<i class='fas fa-tint' style='color: #1c39a8' title='Nawodnienie Marsa'></i>";
                    break;
                    case 'temperature':
                        return "<i class='fas fa-thermometer-half' style='color: #d62f32' title='Temperatura Marsa'></i>";
                    break;
                    case 'oxygen':
                        return "<i class='fas fa-globe' style='color: #FF8C00' title='Poziom tlenu na Marsie'></i>";
                    break;
                }
            },
            logIn(arg){
                this.logged = arg;
            }
        },
        data() {
            return {
                logged: false,
                actions: 0
            }
        }
    }
</script>

<style scoped>
    .resource-icons {
        list-style-type: none;
        font-size: 24px;
        text-align: center;
    }
    .resource-icons li {
        display: flex;
        flex-flow: row wrap;
    }
    .resources div ul {
        padding-inline-start: 0;
        display: flex;
        flex-flow: row wrap;
    }
</style>
