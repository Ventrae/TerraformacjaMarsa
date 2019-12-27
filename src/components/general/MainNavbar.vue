<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
        <div class="d-flex justify-content-between w-100" >
            <router-link class="navbar-brand navbar--logo" to="/">TERRAFORMACJA MARSA</router-link>
            <button :class="{'is-active': mobileExpand}" @click="mobileExpand = !mobileExpand"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"
                    class="navbar-toggler hamburger hamburger--spin-r"
                    data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
            <span class="hamburger-box">
              <span class="hamburger-inner"/>
            </span>
            </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Start <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="instrukcja">Instrukcja</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="gra">Rozgrywka</router-link>
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
