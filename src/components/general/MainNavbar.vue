<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
        <div class="d-flex justify-content-between w-100">
            <a class="navbar-brand navbar--logo" href="/#/">TERRAFORMACJA MARSA</a>
            <button :class="{'is-active': mobileExpand}" @click="mobileExpand = !mobileExpand"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"
                    class="navbar-toggler hamburger hamburger--spin-r"
                    data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
            </button>
        </div>
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
        name: "MainNavbar",
        data() {
            return {
                mobileExpand: false
            }
        }
    }
</script>

<style scoped>

</style>
