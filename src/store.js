import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    addToCart (state, item) {
      state.cart.push(item);
    }
  }
})

export {store}