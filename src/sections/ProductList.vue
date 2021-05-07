<template>
  <div class="productList" id="products">
    <div class="container">
      <h1 class="text-center p-5">Our Products List</h1>
      <div class="row">
        <div class="col-md-4 mb-4" :key="index" v-for="(product, index) in products">
          <div class="card product-item" style="height: 100%">
            <carousel :perPage="1" :autoplay="true" :autoplayTimeout="6000" :speed="1500" :loop="true">
              <slide :key="index" v-for="(image, index) in product.images">
                <img
                  :src="image"
                  class="card-img-top img img-responsive"
                  alt="..."
                  width="100px"
                  height="150px"
                />
              </slide>
            </carousel>

            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h5 class="card-title">{{ product.name }}</h5>
                <h5 class="card-price shadow rounded p-2"><small>{{ product.price | currency('Ksh',2, { spaceBetweenAmountAndSymbol: true }) }}</small></h5>
              </div>
                <h5 v-html="'<small>'+product.description+'</small>'"></h5>

              <add-to-cart
                :image="getImage(product.images)"
                :p-id="product.id"
                :price="product.price"
                :name="product.name"
              >
              </add-to-cart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";

export default {
  name: "Products-list",
  props: {
    msg: String,
  },
  data() {
    return {
      products: [],
    };
  },
  firestore() {
    return {
      products: db.collection("products"),
    };
  },
  methods: {
    getImage(images) {
      return images[0];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.productList {
  margin-top: 7rem;
  background: #f2f2f2;
  padding-bottom: 3rem;
}
</style>
