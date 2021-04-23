<template>
  <div class="product">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Products component</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              iusto debitis commodi rem, error ipsa fugiat obcaecati praesentium
              corrupti ratione amet fugit, necessitatibus sint veritatis? Ad
              harum explicabo non rem.
            </p>
          </div>
          <div class="col-md-6">
            <img
              src="/img/svg/products.svg"
              alt="products image"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
      <hr />

      <div class="form h-100">
        <div class="row h-100">
          <div class="col-md-10">
            <div class="form-group">
              <label for="name">Product:</label>
              <input
                type="text"
                v-model="product.name"
                class="form-control"
                placeholder="product name"
              />
            </div>
            <div class="form-group">
              <label for="name">Price:</label>
              <input
                type="integer"
                v-model="product.price"
                class="form-control"
                placeholder="price"
              />
            </div>
            <div class="form-group">
              <input type="submit" @click="saveData" value="Submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";

export default {
  name: "Products",
  data() {
    return {
      product: {
        name: null,
        price: null,
      },
    };
  },
  methods: {
    saveData() {
      // Add a new document with a generated id.
      db.collection("products")
        .add(this.product)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          this.reset();
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },
    reset(){
      // Object.assign(this.$data, getDefaultData());
      Object.assign(this.$data, this.$options.data.apply(this))
    }
  },
};
</script>
