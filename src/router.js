import Vue from 'vue';
import Router from 'vue-router';

import Index from './pages/Index.vue';
import Instrukcja from './pages/Instrukcja.vue'
import Game from './pages/Game.vue';

import MainNavbar from './components/general/MainNavbar.vue';
import MainFooter from './components/general/MainFooter.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        default: Index,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: '/gra',
      name: 'gra',
      components: {
        default: Game,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: '/instrukcja',
      name: 'instrukcja',
      components: {
        default: Instrukcja,
        header: MainNavbar,
        footer: MainFooter
      }
    }
  ]
});
