<template>
    <div class="playerInterface">
        <login
            :cpassword="player.password"
            :name="player.name"
            v-if="logged !== true"
            @logged="logIn($event)"
        ></login>
        <template v-else>
            <div class="standardOperations">
                {{ player.name }} | <button @click="finishTurn()">KONIEC TURY</button>
            </div>
            <div class="resources">

            </div>

            <h2>{{ this.active }}</h2>

            <div class="cardSection">
                <karta
                    v-for="karta in player.karta"
                    :type="karta.type"
                    :title="karta.title"
                    :price="karta.price"
                    :requirements="karta.requirements"
                    :symbol="karta.symbol"
                    :text="karta.text"
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
