<template>
    <div class="corporation-choice">
        <div class="corporation-card">
            <h2>{{ corporation }}</h2>
            <h5>{{ corporationInfo(corporation).slogan }}</h5>
            <p>{{ corporationInfo(corporation).info }}</p>
        </div>
        <button @click="deletePlayer()" class="btn btn-outline-danger">
            <i class="fa fa-trash"/>
        </button>
    </div>
</template>

<script>
    import {corporationInfoMixin} from "../../mixins/corporationInfoMixin";

    export default {
        name: "corporation-card",
        props: {
            corporation: {
                type: String,
                required: true
            }
        },
        mixins: [ corporationInfoMixin ],
        methods: {
            deletePlayer(){
                this.$emit('deleted');
            }
        }
    }
</script>

<style scoped>

</style>
