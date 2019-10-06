<template>
  <div class="page">

    <div class="py-5 my-5"></div> <!-- odstęp żeby było lepiej widać karty podczas prac :) -->


    <div class="row justify-content-around">

      <karta type="red">

        <h5 slot="title">Deszcz meteorów</h5>

        <div class="card--price" slot="price">
          <card-cost>12</card-cost>
          <card-requirement />
          <card-symbol symbol="oxygen" />
        </div>

        <img slot="image" class="card-img-top" src="../assets/img/cards/red/Deszcz meteorów.jpg"  alt="Deszcz meteorów" />

        <p slot="text">-1 produkcja pieniędzy, -2 produkcja zieleni. Dalej flavour text przykładowy bla bla bla...</p>

      </karta>

      <karta type="yellow">

        <h5 slot="title">Kwatery mieszkalne</h5>

        <div class="card--price" slot="price">
          <card-cost>8</card-cost>
          <card-requirement :oxygen="6" :temperature="2" />
          <card-symbol symbol="iron" />
        </div>

        <img slot="image" class="card-img-top" src="../assets/img/cards/yellow/Kwatery mieszkalne.jpg" />

        <p slot="text">+4 jednostki żelaza, +1 produkcja żelaza. Dalej flavour text przykładowy bla bla bla...</p>

      </karta>

      <karta type="green">

        <h5 slot="title">Plantacja</h5>

        <div class="card--price" slot="price">
          <card-cost>8</card-cost>
          <card-requirement :water="4" :temperature="8" />
          <card-symbol symbol="leaf" />
        </div>

        <img slot="image" class="card-img-top" src="../assets/img/cards/green/Plantacja.jpg" />

        <p slot="text">Plantacja bawełny dostarcza +4 jednostki zieloności. Dalej przykładowy text bla bla bla...</p>

      </karta>

      <karta type="blue">
        <h5 slot="title">Ekspolarcja Fobosa</h5>
        <div class="card--price" slot="price">
          <card-cost>9</card-cost>
          <card-requirement />
          <card-symbol symbol="science" />
        </div>
        <img slot="image" class="card-img-top" src="../assets/img/cards/blue/Eksploracja Fobosa.jpg" />
        <p slot="text">Eksplorujecie księżyc fobos</p>
      </karta>
    </div>

  </div>
</template>

<script>
  import karta from './../components/page-game/karta.vue'
  import cardSymbol from "../components/page-game/cardSymbol";
  import CardCost from "../components/page-game/cardCost";
  import CardRequirement from "../components/page-game/cardRequirement";
    export default {
      name: "Game",
      components: {
        CardRequirement,
        CardCost,
        cardSymbol: cardSymbol,
        karta: karta
      }
    }
</script>

<style scoped>

</style>
