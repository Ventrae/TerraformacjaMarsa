<template>
    <aside class="fixed-bottom navbar-dark resources">
        <div class="container">
            <ul>
                <li class="resource-icons bg-white">Zasoby:</li>
                <li class="resource-icons"
                    v-html="renderedSymbol('cash')+': '+player.resources.cash+' (+'+(player.points.terraformation+player.income.cash)+')'"
                    title="Gotówka"
                />
                <li class="resource-icons"
                    v-html="renderedSymbol('iron')+': '+player.resources.iron+' (+'+player.income.iron+')'"
                    title="Stal"
                />
                <li class="resource-icons"
                    v-html="renderedSymbol('titan')+': '+player.resources.titan+' (+'+player.income.titan+')'"
                    title="Tytan"
                />
                <li class="resource-icons"
                    v-html="renderedSymbol('green')+': '+player.resources.green+' (+'+player.income.green+')'"
                    title="Zieleń"
                />
                <li class="resource-icons"
                    v-html="renderedSymbol('energy')+': '+player.resources.energy+' (+'+player.income.energy+')'"
                    title="Energia"
                />
                <li class="resource-icons"
                    v-html="renderedSymbol('heat')+': '+player.resources.heat+' (+'+player.income.heat+')'"
                    title="Ciepło"
                />
            </ul>
        </div>
    </aside>
</template>

<script>
    import {renderedSymbol} from "../../mixins/renderedSymbol";
    import Player from "../../models/player";

    export default {
        name: "resources",
        props: {
          player: {
              type: Player,
              required: true
          }
        },
        mixins: [ renderedSymbol ]
    }
</script>

<style scoped>
    .resource-icons:first-child {
        color: #222222 !important;
        font-size: 22px !important;
        font-weight: bold;
        padding: 10px 50px !important;
    }
</style>
