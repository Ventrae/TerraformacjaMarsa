import Vue from 'vue'
import router from './router';
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.scss';
import '@fortawesome/fontawesome-free/js/all.min.js';

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
