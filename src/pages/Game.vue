<template>
  <div class="page">

    <div class="py-5 my-5"></div>


    <div class="row justify-content-around">

      <karta type="red">
        <h5 slot="title">Deszcz meteorów</h5>
        <div class="card--price" slot="price">
          <div class="card--price-cash">
            12
          </div>
          <div class="card--price-requirements">
            WW
          </div>
          <div class="card--price-color">
            Z
          </div>
        </div>
        <img slot="image" class="card-img-top" src="../assets/img/cards/red/Deszcz meteorów.jpg"  alt="Deszcz meteorów" />
        <p slot="text">-1 produkcja pieniędzy, -2 produkcja zieleni. Dalej flavour text przykładowy bla bla bla...</p>
      </karta>

      <karta type="yellow">
        <h5 slot="title">Konstrukcja magazynu</h5>
        <img slot="image" class="card-img-top" src="../assets/img/cards/yellow/Konstrukcja magazynu.jpg" />
        <p slot="text">+4 jednostki żelaza, +1 produkcja żelaza. Dalej flavour text przykładowy bla bla bla...</p>
      </karta>

      <karta type="green">
        <h5 slot="title">Plantacja</h5>
        <img slot="image" class="card-img-top" src="../assets/img/cards/green/Plantacja.jpg" />
        <p slot="text">Plantacja bawełny dostarcza +4 jednostki zieloności. Dalej przykładowy text bla bla bla...</p>
      </karta>

      <karta type="blue">
        <h5 slot="title">Ekspolarcja Fobosa</h5>
        <img slot="image" class="card-img-top" src="../assets/img/cards/blue/Eksploracja Fobosa.jpg" />
        <p slot="text">Eksplorujecie księżyc fobos</p>
      </karta>
    </div>

  </div>
</template>

<script>
  import Karta from './../components/page-game/karta.vue'
    export default {
        name: "Game",
      components: {
          karta: Karta
      }
    }
</script>

<style scoped>

</style>
