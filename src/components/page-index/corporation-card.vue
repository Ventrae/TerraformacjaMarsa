<template>
    <div class="corporation-choice col-5 row">
        <div class="corporation-card col-12">
            <h5>{{ corporationInfo(corporation).slogan }}</h5>
            <p class="text-justify">{{ corporationInfo(corporation).info }}</p>
        </div>
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
        mixins: [ corporationInfoMixin ]
    }
</script>

<style scoped>

</style>
