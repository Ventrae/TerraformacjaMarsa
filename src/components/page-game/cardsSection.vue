<template>
    <div class="col-10 mx-auto row cardSectionWrapper">
        <div class="p-4 d-flex flex-column cardSection">
            <h3>Karty akcji:</h3>
            <div class="d-flex flex-wrap">
                <karta
                    v-for="(card, index) in cards"
                    :card="card"
                    @played="executeCard($event, index)"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import Karta from "./card/card";

    export default {
        name: "cardsSection",
        props: {
            cards: {
                type: Array
            }
        },
        methods: {
            executeCard(event, index){
                this.$emit('cardPlayed', {event, index})
            }
        },
        components: {
            Karta
        }
    }
</script>

<style scoped>

</style>
