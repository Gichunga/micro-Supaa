import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, item) {
      let found = state.cart.find(
        (product) => product.product_Id == item.product_Id
      );
      if (found) {
        found.productQuantity++;
        found.productPrice * found.productQuantity;
      } else {
        state.cart.push(item);
      }
    },
  },
});

export { store };
