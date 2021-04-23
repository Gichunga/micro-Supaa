import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "./assets/app.scss";
import $ from "jquery";
window.$ = window.jQuery = $;
import "popper.js";
import {fb} from "./firebase"
Vue.config.productionTip = false;

//Reister global components
Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('products-list', require('./sections/ProductList.vue').default);

let app = "";
fb.auth().onAuthStateChanged((user) => {
  if(!app){
    new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});


