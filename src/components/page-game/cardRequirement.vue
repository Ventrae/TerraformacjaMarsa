<template>
    <div class="card--price-requirements">
        <div class="card--price-requirements--water" v-if="this.water != 0">
            <i class="mr-1 fas fa-tint"></i>{{ this.water }}
        </div>
        <div class="card--price-requirements--temperature" v-if="this.temperature != -30">
            <i class="mr-1 fas fa-thermometer-half"></i>{{ this.temperature }}&#x2103;
        </div>
        <div class="card--price-requirements--oxygen" v-if="this.oxygen != 0">
            <i class="mr-1 fas fa-globe"></i>{{ this.oxygen }}%
        </div>
    </div>
</template>

<script>
    export default {
        name: "cardRequirement",
        props: {
            water: {
                type: Number,
                required: false,
                default: null
            },
            temperature: {
                type: Number,
                required: false,
                default: null
            },
            oxygen: {
                type: Number,
                required: false,
                default: null
            }
        }
    }
</script>

<style scoped>

</style>
