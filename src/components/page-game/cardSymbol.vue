<template>
  <!--<span><i class="mr-2 fas fa-thermometer-half"></i>0&#x2103; | </span>
  <span><i class="ml-2 fas fa-globe"></i> 12%</span>-->
  <div :class="this.symbol" class="card--price-symbol" v-html="rendered"></div>
</template>

<script>
    export default {
        name: "symbol",
        props: {
            symbol: {
                type: String,
                required: true
            }
        },
        computed: {
            rendered() {
                let x;
                switch (this.symbol) {
                    case "science":
                        x = "<i class=\"fab fa-react\"></i>";
                        break;
                    case "leaf":
                        x = "<i class=\"fas fa-leaf\"></i>";
                        break;
                    case "water":
                        x = "<i class=\"fas fa-tint\"></i>";
                        break;
                    case "oxygen":
                        x = "<i class=\"fas fa-globe\"></i>";
                        break;
                    case "temperature":
                        x = "<i class=\"fas fa-thermometer-half\"></i>";
                        break;
                    case "star":
                        x = "<i class=\"far fa-star\"></i>";
                        break;
                    case "animal":
                        x = "<i class=\"fas fa-paw\"></i>";
                        break;
                    case "iron":
                        x = "<i class=\"fas fa-warehouse\"></i>";
                        break;
                }
                return x;
            }
        }
    }
</script>

<style scoped>
  .science {
    background-color: whitesmoke;
    color: darkgoldenrod;
    font-size: 28px;
  }

  .leaf {
    background-color: forestgreen;
    color: lawngreen;
    font-size: 22px;
  }

  .water {
    background: deepskyblue;
    color: royalblue;
    font-size: 24px;
  }

  .oxygen {
    background-color: navajowhite;
    color: orangered;
    font-size: 26px;
  }

  .star {
    background-color: #484848;
    color: #FFD700;
    font-size: 24px;
  }

  .animal {
    background-color: lightseagreen;
    color: darkolivegreen;
    font-size: 26px;
  }

  .iron {
    background-color: #7f4b23;
    color: #482613;
    font-size: 22px;
  }

  .temperature {
    background-color: cornflowerblue;
    color: crimson;
    font-size: 26px;
  }
</style>
