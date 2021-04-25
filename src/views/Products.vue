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
      <hr />
      <h3>CRUD operation on the documents of a collection from cloud firestore</h3>
      <div class="table-responsive">

      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr :key="product.id" v-for="product in products">
            <td>{{ product.data().name }}</td>
            <td>{{ product.data().price }}</td>
            <td><button class="btn btn-primary">Edit</button></td>
            <td><button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";

export default {
  name: "Products",
  data() {
    return {
      products: [],
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
          this.readData();
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
          console.log("");
        });
    },
    readData() {
      db.collection("products")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            this.products.push(doc);
          });
        });
    },
    deleteProduct(id){
      // alert(id);
      
    },
    reset() {
      // Object.assign(this.$data, getDefaultData());
      // Object.assign(this.$data, this.$options.data.apply(this));
    },
  },
  created() {
    this.readData()
  },
};
</script>
