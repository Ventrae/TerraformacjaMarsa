<template>
    <div class="playerInterface">
        <div class="standardOperations">

        </div>
        <div class="resources">
            <div v-for="resource in player.resources">

            </div>
        </div>



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
    </div>
</template>

<script>
    import Karta from "./karta";
    export default {
        name: "playerInterface",
        components: {Karta},
        props: {
            player: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
