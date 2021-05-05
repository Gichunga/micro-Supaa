<template>
  <div class="add-to-cart">
    <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: "add-to-cart",

  props: {
    image: String,
    pId: String,
    name: String,
    price: String,
  },
  data(){
    return {
      item: {
        productName: this.name,
        productImage: this.image,
        product_Id: this.pId,
        productPrice: this.price,
        productQuantity: 1,
      }
    }
  },
  methods: {
    addToCart(){
      this.$store.commit('addToCart', this.item)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
