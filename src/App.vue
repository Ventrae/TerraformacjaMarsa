<template>
    <div class="container-fluid" id="app">
        <router-view name="header"/>
        <div class="wrapper">
            <transition mode="out-in" name="fade">
                <keep-alive>
                    <router-view name="default"/>
                </keep-alive>
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
