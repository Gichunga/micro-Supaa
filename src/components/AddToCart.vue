<template>
  <div class="add-to-cart">
    <button class="btn btn-primary">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: "add-to-cart",

  props: {
    image: String,
    productId: String,
    name: String,
    price: String,
  },
  data(){
    return {
      productName: this.name,
      productImage: this.image,
      product_Id: this.productId,
      productPrice: this.price,
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
