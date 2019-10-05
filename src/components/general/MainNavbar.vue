<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
    <a class="navbar-brand navbar--logo" href="/#/">TERRAFORMACJA MARSA</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/#/">Start <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#/instrukcja">Instrukcja</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#/gra">Gra</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/Ventrae/TerraformacjaMarsa" target="_blank">GitHub</a>
        </li>
      </ul>

    </div>
  </nav>
</template>

<script>
    export default {
        name: "MainNavbar"
    }
</script>

<style scoped>

</style>
