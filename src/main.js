import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform'
import VeeValidate, { Validator } from 'vee-validate'
import messagePtBr from './pt_BR'

// frameworks 
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.min.js' // jquery 3.2.1
import 'bootstrap/dist/js/bootstrap.min.js'
// import 'materialize-css/dist/css/materialize.min.css'
// import 'materialize-css/dist/js/materialize.js'
// require('materialize-css/js/velocity.min')
// require('materialize-css/js/modal')
// import 'materialize-css/js/velocity.min'
// import 'materialize-css/js/modal.min'

// assets custom
import './assets/css/styles.css'
import './assets/js/script.js'

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);

const router = new VueRouter({ 
	routes,
	mode: 'history'
});

Validator.addLocale(messagePtBr);
Vue.use(VeeValidate, {
    locale: 'pt_BR'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
