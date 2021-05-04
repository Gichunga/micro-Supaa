import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "./assets/app.scss";
import $ from "jquery";
window.$ = window.jQuery = $;
import "popper.js";
import { fb } from "./firebase";
import VueFirestore from "vue-firestore";
import Swal from "sweetalert2";
import VueCarousel from "vue-carousel";
import Vue2Filters from 'vue2-filters'


window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
window.Toast = Toast;

Vue.config.productionTip = false; // Turns off the you are running vue in development msg

Vue.use(VueFirestore, {
  key: "id", // The name of the property. Default is '.key'
  enumerable: true, // Whether it is enumerable or not. default is true
});
Vue.use(VueCarousel);
Vue.use(Vue2Filters)


//Register global components
Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.component("products-list", require("./sections/ProductList.vue").default);
Vue.component("add-to-cart", require("./components/AddToCart.vue").default);

let app = "";
fb.auth().onAuthStateChanged((user) => {
  if (!app) {
    new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
