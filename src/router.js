import Vue from 'vue';
import Router from 'vue-router';

import Index from './pages/Index.vue';
import Game from './pages/Game.vue';

import MainNavbar from './components/general/MainNavbar.vue';
import MainFooter from './components/general/MainFooter.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
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
      path: '/game',
      name: 'game',
      components: {
        default: Game,
        header: MainNavbar,
        footer: MainFooter
      }
    }
  ]
});
