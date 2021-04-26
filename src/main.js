import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "./assets/app.scss";
import $ from "jquery";
window.$ = window.jQuery = $;
import "popper.js";
import {fb} from "./firebase"
import VueFirestore from "vue-firestore"

Vue.config.productionTip = false; // Turns off the you are running vue in development msg

Vue.use(VueFirestore)

//Register global components
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


