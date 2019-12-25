import Vue from 'vue'
import router from './router';
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.scss';
import '@fortawesome/fontawesome-free/js/all.min.js';
import Vuelidate from 'vuelidate';
import {store} from "./store/store";


Vue.use(Vuelidate);

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
