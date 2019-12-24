<template>
    <nav :class="{'hidden-navbar': !navbarShown}">
        <transition name="slide-down" appear>
            <div class="navbar fixed-top navbar-expand-lg navbar-dark" v-if="navbarShown">
                <div class="d-flex justify-content-between w-100" >
                    <a class="navbar-brand navbar--logo" href="/#/">TERRAFORMACJA MARSA</a>
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
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click="toggleNavbar()">
                                <i class="fa fa-chevron-up" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
        <button class="show-navbar" v-if="!navbarShown" @click="toggleNavbar()">
            <i class="fa fa-chevron-down" />
        </button>
    </nav>
</template>

<script>
    export default {
        name: "MainNavbar",
        data() {
            return {
                mobileExpand: false,
                navbarShown: true
            }
        },
        methods: {
            toggleNavbar(){
                this.navbarShown = !this.navbarShown;
            }
        }
    }
</script>

<style scoped>
    nav {
        margin-bottom: 55px;
    }
    .hidden-navbar {
        margin-bottom: 0;
    }
    .show-navbar {
        position: fixed;
        top: 0; right: 0;
        color: orangered;
        background: transparent;
        padding: 5px 15px;
        border: 0;
        z-index: 9999;
    }

    .slide-down-enter-active {
        animation: slide-down-animation .4s ease-out forwards;
    }
    .slide-down-leave-active {
        animation: slide-down-animation .4s ease-out reverse;
    }
    @keyframes slide-down-animation {
        from {
            transform: translateY(-90px);
        }
        to {
            transform: translateY(0);
        }
    }
</style>
