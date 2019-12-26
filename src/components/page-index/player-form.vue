<template>
    <form @submit.prevent="addPlayer()" class="player-form container m-0 mx-auto p-2 row">

        <div class="form-group col-12 col-lg-3 my-1">
            <input type="text" placeholder="Nazwa gracza" v-model="player.name" class="w-100 form-control form-control-lg"/>
        </div>

        <div class="form-group col-12 col-lg-3 my-1">
            <input type="password" placeholder="Hasło (opcjonalnie)" v-model="player.password"
                   class="w-100 form-control form-control-lg"/>
        </div>

        <div class="form-group col-12 col-lg-3 my-1">
            <select v-model="player.corporation" class="w-100 form-control form-control-lg">
                <option value="Credicor">Credicor</option>
                <option value="Mining Guild">Mining Guild</option>
                <option value="Inventrix">Inventrix</option>
                <option value="Ecoline">Ecoline</option>
                <option value="Thorgate">Thorgate</option>
            </select>
        </div>

        <button type="submit" class="my-1 col-8 col-lg-3 btn btn-lg btn-outline-primary">Dodaj gracza</button>

        <div class="w-100 text-center pt-2 pb-1 error" v-if="!$v.player.name.required && submitted">
            Nazwa gracza jest wymagana
        </div>

        <div class="w-100 text-center pt-2 pb-1 error" v-if="!$v.player.corporation.mustBeValidCorpo && submitted">
            Podaj poprawną korporację
        </div>

        <div class="w-100 p-2 text-center">
            {{ corporationInfo(player.corporation).info }}
        </div>

    </form>
</template>

<script>
    import Player from "../../models/player";
    import CorporationCard from "./corporation-card";
    import {corporationInfoMixin} from "../../mixins/corporationInfoMixin";
    import { required } from "vuelidate/lib/validators";

    function mustBeValidCorpo(value){
        let ifValid = false;
        let validValues = ['Credicor', 'Mining Guild', 'Ecoline', 'Inventrix', 'Thorgate'];
        validValues.forEach(v => {
            if(value === v){
                ifValid = true;
            }
        });
        return ifValid;
    }

    export default {
        name: "player-form",
        components: {CorporationCard},
        data() {
            return {
                player: {
                    name: '',
                    password: null,
                    corporation: 'Credicor',
                },
                submitted: false
            }
        },
        validations: {
            player: {
                name: { required },
                corporation: { required, mustBeValidCorpo }
            }
        },
        methods: {
            addPlayer() {
                this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }

                let playerC = new Player(this.player.corporation, this.player.name, this.player.password);
                this.$emit('playerAdded', playerC);
            }
        },
        mixins: [ corporationInfoMixin ]
    }
</script>

<style scoped>
    .form-group {
        margin-bottom: 0;
    }
    .error {
        color: red;
    }
</style>
