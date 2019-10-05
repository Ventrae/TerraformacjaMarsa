<template>
  <div class="card" :class="bgtype" style="width: 18rem;" @click="executeCard()">

    <slot name="title"></slot>
    <slot name="price"></slot>
    <slot name="image"></slot>

    <div class="card-body text-center">
      <div class="card-body--text">
        <slot name="text"></slot>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "karta",
        props: {
            type: {
              type: String,
              required: true
            }
        },
      methods: {
        executeCard(){
          console.log(this.$slots.title);
          // alert(this.$slots.title.elm.innerText);
        }
      },
      data() {
        return {
          bgtype: "card--bg-" + this.type
        }
      }
    }
</script>

<style scoped>
  h5 {
    text-align: center;
    color: ghostwhite;
    padding: 10px;
    margin: 0;
  }
</style>
