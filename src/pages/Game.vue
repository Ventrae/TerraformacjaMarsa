<template>
  <div class="page">

    <terraformation-bar
        :gameInstance="gameInstance"
    ></terraformation-bar>

    <player-interface
     v-for="player in gameInstance.players"
     :player="player"
    >
    </player-interface>


    <div class="row justify-content-around">



    </div>

  </div>
</template>

<script>
    import karta from './../components/page-game/karta.vue'
    import TerraformationBar from "../components/page-game/terraformationBar";
    import PlayerInterface from "../components/page-game/playerInterface";
    // import gameplay from "../components/mixins/gameplay";

    import json from '../components/mixins/AllCards.json';

    export default {
        name: "Game",
        components: {
            PlayerInterface,
            TerraformationBar,
            karta: karta
        },
        data() {
            return {
                gameInstance: {
                    players: [
                        {
                            name: "Filip",
                            points: {
                                terraformation: 11,
                                victory: 7
                            },
                            cards: json
                        },
                        {
                            name: "Radek",
                            points: {
                                terraformation: 12,
                                victory: 2
                            }
                        },
                        {
                            name: "Szymon",
                            points: {
                                terraformation: 4,
                                victory: 0
                            }
                        }
                    ]
                }
                //gameInstance: gameplay(4)
            }
        }
    }
</script>

<style scoped>

</style>
