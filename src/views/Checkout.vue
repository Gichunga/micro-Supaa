<template>
  <div class="checkout">
    <Navbar></Navbar>
    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col-md-9">
          <h4 class="">Checkout Page</h4>
          <ul>
            <li
              :key="item.key"
              v-for="item in this.$store.state.cart"
              class="media py-2"
              style="border-top: 0.5px solid lightgray"
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
        <div class="col-md-3">
          <h4 class="">Total Price</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkout",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
