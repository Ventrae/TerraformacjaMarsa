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
                    <button @click="standardOperation(0)">
                        <i class="fas fa-city button-icon mr-2"></i> Załóż miasto
                    </button> - KOSZT: 25 (cash) - [+1 prod. cash]
                </div>
                <div class="col-12 col-md-6">
                    <button @click="standardOperation(1)">
                        <i class="fas fa-tree button-icon mr-2"></i> Załóż las
                    </button> - KOSZT: 8 (green) - [+1 tlen]
                </div>
                <div class="col-12 col-md-6">
                    <button @click="standardOperation(2)">
                        <i class="fas fa-tint button-icon mr-2"></i> Nawodnij planete
                    </button> - KOSZT: 6 (cash) - [+1 ocean]
                </div>
                <div class="col-12 col-md-6">
                    <button @click="standardOperation(3)">
                        <i class="fas fa-thermometer-half button-icon mr-2"></i> Podnieś temperaturę
                    </button> - KOSZT: 14 (cash) - [+1 temperature]
                </div>
                <div class="col-12 col-md-6">
                    <button @click="standardOperation(4)">
                        <i class="fas fa-bolt button-icon mr-2"></i> Zwiększ energię
                    </button> - KOSZT: 11 (cash) - [+1 prod. energy]
                </div>
                <div class="col-12 col-md-6">
                    <button @click="standardOperation(5)">
                        <i class="fas fa-thermometer-half button-icon mr-2"></i> Podnieś temperaturę
                    </button> - KOSZT: 8 (heat) - [+1 temperature]
                </div>
            </div>

            <div class="mt-2 resources row">
                <div class="col-12"><h5>Symbole:</h5> <span v-for="symbol in player.aquiredSymbols">{{ symbol }}, </span> </div>
                <div class="col-12">
                    <h5>Zasoby:</h5>
                    <ul class="mt-2 row d-flex">
                        <li class="col-1 mx-auto" v-for="(resource, name) in player.resources">{{ name }}: {{ resource }}</li>
                    </ul>
                </div>
                <div class="col-12">
                    <h5>Przychód:</h5>
                    <ul class="mt-2 row d-flex">
                        <li class="col-1 mx-auto" v-for="(income, name) in player.income">{{ name }}: {{ income }}</li>
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
                        }
                        else alert('Nie można założyć miasta, musisz posiadać 25 jednostek gotówki');
                    break;
                    case 1:
                        // Założenie lasu
                        if(this.player.resources.green >= 8){
                            this.indicators.oxygen += 1;
                            this.player.resources.green -= 8;
                        }
                        else alert('Nie można założyć lasu, musisz posiadać 8 jednostek zieleni');
                    break;
                    case 2:
                        // Założenie oceanu
                        if(this.player.resources.cash >= 18){
                            this.indicators.water += 1;
                            this.player.resources.cash -= 18;
                        }
                        else alert('Nie można założyć oceanu, musisz posiadać 18 jednostek gotówki');
                    break;
                    case 3:
                        // Podniesienie temperatury (za gotówkę)
                        if(this.player.resources.cash >= 14){
                            this.indicators.temperature += 2;
                            this.player.resources.cash -= 14;
                        }
                        else alert('Nie można podnieść temperatury, musisz posiadać 14 jednostek gotówki');
                    break;
                    case 4:
                        // Zwiększenie produkcji energii
                        if(this.player.resources.cash >= 11){
                            this.player.income.energy += 1;
                            this.player.resources.cash -= 11;
                        }
                        else alert('Nie można zwiększyć produkcji energii, musisz posiadać 11 jednostek gotówki');
                    break;
                    case 5:
                        // Zwiększenie temperatury (za 8 energii)
                        if(this.player.resources.energy >= 8){
                            this.indicators.temperature += 1;
                            this.player.resources.energy -= 8;
                        }
                        else alert('Nie można podnieść temperatury, musisz posiadać 8 jednostek energii');
                    break;
                }
            },
            executeCard(arg, index){

                if(arg.playCard(this.indicators, this.player)) {
                    // Jeśli wymagania są spełnione usuń kartę z ręki gracza (playCard() zwraca boolean w razie sukcesu)
                    this.player.cards.splice(index, 1);
                }

            },
            finishTurn() {
                this.player.productionPhase();
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
