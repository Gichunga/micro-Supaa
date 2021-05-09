import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let cart = window.localStorage.getItem('cart');

const store = new Vuex.Store({
  state: {
    cart: cart ? JSON.parse(cart) : [],
  },
  mutations: {
    addToCart(state, item) {
      let found = state.cart.find(
        (product) => product.product_Id == item.product_Id
      );
      if (found) {
        let price = found.productQuantity++;
        state.cart.productPrice = item.productPrice * found.productQuantity;
      } else {
        state.cart.push(item);
      }    

      this.commit('saveData');
    },
    
    saveData(state){
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  },
});

export { store };
