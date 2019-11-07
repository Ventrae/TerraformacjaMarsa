<template>
    <form @submit="addPlayer()">
        <h2 class="mb-3">Rozpocznij rozgrywkę:</h2>
        <input type="text" placeholder="Nazwa gracza" v-model="name"/>
        <input type="password" placeholder="Hasło gracza (opcjonalnie)" v-model="password" />
        <select v-model="corporation">
            <option>Credicor</option>
            <option>Mining Guild</option>
            <option>Inventrix</option>
            <option>Ecoline</option>
            <option>Saturn Systems</option>
            <option>Teractor</option>
            <option>Thorgate</option>
            <option>Aphrodite</option>
            <option>United Nations Mars Initiative</option>
        </select>
        <button type="submit">Dodaj gracza</button>
    </form>
</template>

<script>
    import Player from "../../models/player";

    export default {
        name: "player-form",
        data(){
            return {
                name: '',
                password: '',
                corporation: 'Credicor'
            }
        },
        methods: {
            addPlayer(){
                let playerC = new Player(this.corporation, this.name, this.password);
                this.$emit('playerAdded', playerC);
            }
        }
    }
</script>

<style scoped>

</style>
