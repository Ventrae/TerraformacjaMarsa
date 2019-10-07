<template>
  <div class="page">

    <div class="py-md-5 my-md-5"></div> <!-- odstęp żeby było lepiej widać karty podczas prac :) -->

    <div class="row justify-content-around">

      <karta
        :behavior="{
          imie: 'jan'
        }"
        :price="12"
        symbol="oxygen"
        text="abcdef"
        title="Deszcz meteorów"
        type="red"
      ></karta>

      <karta
        :behavior="{
          imie: 'jan'
        }"
        :price="8"
        :requirements="{
          oxygen: 6,
          temperature: 2
        }"
        symbol="iron"
        text="+4 jednostki żelaza, +1 produkcja żelaza. Dalej flavour text przykładowy bla bla bla..."
        title="Kwatery mieszkalne"
        type="yellow"
      ></karta>

      <karta
        :behavior="{
          imie: 'jan'
        }"
        :price="8"
        :requirements="{
          water: 4,
          temperature: 6
        }"
        symbol="leaf"
        text="Plantacja bawełny dostarcza +4 jednostki zieloności. Dalej przykładowy text bla bla bla..."
        title="Plantacja"
        type="green"
      ></karta>

      <karta
        :behavior="{
          imie: 'jan'
        }"
        :price="16"
        symbol="science"
        text="Eksplorujecie księżyc fobos"
        title="Eksploracja Fobosa"
        type="blue"
      ></karta>

    </div>

  </div>
</template>

<script>
    import karta from './../components/page-game/karta.vue'

    export default {
        name: "Game",
        components: {
            karta: karta
        }
    }
</script>

<style scoped>

</style>
