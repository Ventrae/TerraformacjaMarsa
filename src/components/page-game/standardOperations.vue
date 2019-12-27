<template>
    <div class="col-12 col-md-10 mx-auto operationRow py-4 row">
        <button class="mx-auto btn btn-primary d-flex align-items-center btn-sm px-4" @click="visible = !visible">
            <div class="mr-2">Operacje standardowe</div>
            <i class="fa fa-chevron-down" />
        </button>
        <transition name="slide-down" v-if="visible">
            <div class="col-12 row mx-auto">
                <div class="col-10 col-lg-6 p-0 px-lg-3 d-flex align-items-center justify-content-between mx-auto">
                    <button @click="standardOperation(0)" class="btn btn-outline-primary">
                        Załóż miasto
                    </button>
                    <span class="ml-2">
                        <b>Koszt: 25 </b><span v-html="renderedSymbol('cash')"/>, zwiększa produkcję <span v-html="renderedSymbol('cash')"/> o 1.
                    </span>
                </div>
                <div class="col-10 col-lg-6 p-0 px-lg-3 d-flex align-items-center justify-content-between mx-auto">
                    <button @click="standardOperation(1)" class="btn btn-outline-primary">
                        Posadź las
                    </button>
                    <span class="ml-2">
                        <b>Koszt: 8 </b><span v-html="renderedSymbol('leaf')"/>, zwiększa poziom <span v-html="renderedSymbol('oxygen')"/> o 1.
                    </span>
                </div>
                <div class="col-10 col-lg-6 p-0 px-lg-3 d-flex align-items-center justify-content-between mx-auto">
                    <button @click="standardOperation(4)" class="btn btn-outline-primary">
                        Wybuduj elektrownię
                    </button>
                    <span class="ml-2">
                        <b>Koszt: 11 </b><span v-html="renderedSymbol('cash')"/>, zwiększa produkcję <span v-html="renderedSymbol('energy')"/> o 1.
                    </span>
                </div>
                <div class="col-10 col-lg-6 p-0 px-lg-3 d-flex align-items-center justify-content-between mx-auto">
                    <button @click="standardOperation(5)" class="btn btn-outline-primary">
                        Podnieś temperaturę
                    </button>
                    <span class="ml-2">
                        <b>Koszt: 8 </b><span v-html="renderedSymbol('heat')"/>, zwiększa poziom <span v-html="renderedSymbol('temperature')"/> o 2&#x2103;.
                    </span>
                </div>
                <div class="col-10 col-lg-6 p-0 px-lg-3 d-flex align-items-center justify-content-between mx-auto">
                    <button @click="standardOperation(3)" class="btn btn-outline-primary">
                        Asteroida
                    </button>
                    <span class="ml-2">
                        <b>Koszt: 14 </b><span v-html="renderedSymbol('cash')"/>, zwiększa poziom <span v-html="renderedSymbol('temperature')"/> o 2&#x2103;.
                    </span>
                </div>
                <div class="col-10 col-lg-6 p-0 px-lg-3 d-flex align-items-center justify-content-between mx-auto">
                    <button @click="standardOperation(2)" class="btn btn-outline-primary">
                        Nawodnij Marsa
                    </button>
                    <span class="ml-2">
                        <b>Koszt: 18 </b><span v-html="renderedSymbol('cash')"/>, zwiększa ilość <span v-html="renderedSymbol('water')"/> na planecie o 1.
                    </span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import {renderedSymbol} from "../../mixins/renderedSymbol";

    export default {
        name: "standardOperations",
        methods: {
            standardOperation(operation){
                this.$emit('operated', operation);
            }
        },
        data(){
          return {
              visible: false
          }
        },
        mixins:[ renderedSymbol ]
    }
</script>

<style scoped>

</style>
