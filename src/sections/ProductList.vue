<template>
  <div class="productList" id="products">
    <div class="row container mx-auto">
      <h1 class="text-center p-5">Our Products List</h1>
      <carousel
        :perPage="4"
        :autoplay="true"
        :autoplayTimeout="6000"
        :speed="1500"
        :loop="true"
        paginationEnabled="false"
        class="col-md-12"
      >
        <slide class="mb-4" :key="index" v-for="(product, index) in products">
          <div class="card product-item mx-2 border-0">
            <!-- <carousel
                :perPage="1"
                :autoplay="true"
                :autoplayTimeout="6000"
                :speed="1500"
                :loop="true"
              > -->
            <span v-for="(image, index) in product.images" :key="index">
              <img
                :src="image"
                alt="..."
                class="card-img-top img img-responsive border-0"
                width="150px"
                height="220px"
            /></span>
            <!-- <slide :key="index" v-for="(image, index) in product.images">
                  <img
                    :src="image"
                    class="card-img-top img img-responsive"
                    alt="..."
                    width="100px"
                    height="150px"
                  />
                </slide>
              </carousel> -->

            <div class="products-contant">
              <h6 class="products-title">
                <a href="#">{{ product.name }}</a>
              </h6>
              <div class="price-rating justify-content-between">
                <p class="price-icon">
                  <i class="fa fa-usd"><small></small></i>
                </p>
              </div>
              <p class="text"><span class="rating">
                <ul>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                </ul>
              </span></p>
              
              <div class="products-cart">
                <center>
                  <a class="cart-add" href="contact.html"
                    ><i class="fas fa-shopping-cart"></i>
                    <!-- <add-to-cart
                      :image="getImage(product.images)"
                      :p-id="product.id"
                      :price="product.price"
                      :name="product.name"
                      class="p-3 mx-auto"
                    >
                    </add-to-cart -->
                    Order Now
                  </a>
                </center>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
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
  background: #fff;
  padding-bottom: 3rem;
}
small {
  font-size: 0.9rem;
}
.products-contant {
  padding: 15px;
  border: 2px solid #ebf4fc;
  border-top: 0;
}

.products-contant .products-title {
  margin: 0;
}
.products-contant .products-title a {
  font-size: 16px;
  color: teal;
  font-weight: 700;
}
.products-contant .price-rating {
  margin-top: 10px;
}
ul,
ol {
  margin: 0px;
  padding: 0px;
  list-style-type: none;
}
.products-contant .rating ul li {
  display: block;
  font-size: 15px;
  float: right;
  color: #d5a500;
}
.products-contant .price-rating .price .regular-price {
  font-size: 20px;
  color: teal;
  font-weight: 700;
  margin-right: 10px;
  font-family: "Open Sans", sans-serif;
}
p.price-icon {
  font-size: 36px;
  padding-bottom: 7px;
  padding-top: 20px;
  margin-left: 47%;
  transition: all 0.4s linear;
  position: relative;
  display: inline-block;
}
p i {
  font-size: 0.7rem;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  padding: 0 10px;
  background-color: #2e4db9;
  color: #fff;
  position: absolute;
  top: -4px;
  left: -22px;
  -webkit-transition: all 0.4s linear;
  transition: all 0.4s linear;
}
.fa {
  font: small small small 20px/1 FontAwesome;
  text-rendering: auto;
}
.fa-dollar::before,
.fa-usd::before {
  content: "Ksh";
  // padding: -10px;
}
.products-contant .text .rating{
  margin-top: 15px;
  background: red;
}
p {
  font-size: 15px;
}
.products-contant .products-cart {
  margin-top: 5px;
}
.products-contant .products-cart .cart-add {
  padding: 15px 20px;
  line-height: 50px;
  height: 50px;
  background-color: teal;
  color: #fff;
  font-size: 16px;
  margin-right: 8px;
  margin-top: 10px;
  border-radius: 50px;
}
</style>
