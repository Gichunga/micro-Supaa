<template>
  <div class="mini-cart">
    <!-- Modal -->
    <div
      class="modal fade"
      id="miniCart"
      data-backdrop="static"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">My Basket</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul>
              <li
                :key="item.key"
                v-for="item in this.$store.state.cart"
                class="media py-2"
                style="border-bottom: 0.5px solid lightgray"
              >
                <img
                  :src="item.productImage"
                  width="80px"
                  class="align-self-center mr-3"
                  alt=""
                />
                <div class="media-body">
                  <h5 class="mt-0">
                    {{ item.productName }}
                    <i
                      class="float-right"
                      style="color: red; cursor: pointer"
                      @click="$store.commit('removeFromCart', item)"
                      >&times;</i
                    >
                  </h5>
                  <p class="mt-0">{{ item.productPrice | currency("Ksh") }}</p>
                  <p class="mt-0">Quantity : {{ item.productQuantity }}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Continue Shopping
            </button>
            <button type="button" class="btn btn-primary" @click="checkout">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniCart",
  props: {
    msg: String,
  },
  methods: {
    checkout() {
      $("#miniCart").modal("hide");
      this.$router.push("/checkout");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
