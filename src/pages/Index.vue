<template>
    <div class="page">

        <!--
        <div class="col-12 col-md-6 mx-auto alert alert-danger alert-dismissible fade show" role="alert">
          Strona "Index" narazie nie istnieje!
          <button aria-label="Close" class="close" data-dismiss="alert" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        -->
        <h2 class="pt-2 my-3">Rozpocznij rozgrywkę:</h2>
        <player-form @playerAdded="addPlayer($event)"/>
        <player-list :players="players" @deleted="deletePlayer($event)"/>



    </div>
</template>

<script>
    import PlayerForm from "../components/page-index/player-form";
    import PlayerList from "../components/page-index/player-list";

    export default {
        name: "Index",
        components: {PlayerList, PlayerForm},
        data() {
            return {
                players: []
            }
        },
        methods: {
            addPlayer(arg) {
                this.players.push(arg);
            },
            deletePlayer($event){
                this.players.splice($event, 1);
            }
        }
    }
</script>

<style scoped>
</style>
