<template>
  <div class="container" id="app">
    <router-view name="header"/>
    <div class="wrapper">
      <transition mode="out-in" name="fade">
        <router-view name="default"/>
      </transition>
    </div>
    <router-view name="footer"/>
  </div>
</template>

<script>
    export default {};
</script>

<style lang="scss">
  .fade-leave-active {
    transition: opacity .2s linear;
    opacity: 0;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-enter-active {
    transition: opacity .4s ease-in-out;
    opacity: 1;
  }

  .fade-enter {
    opacity: 0;
  }
</style>
