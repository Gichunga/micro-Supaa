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

      <!-- Modal -->
      <div
        class="modal fade"
        id="product"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        aria-labelledby="productLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="productLabel">Add Product</h5>
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
              <div class="row">
                <div class="col-md-8">
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="product.name"
                      class="form-control"
                      placeholder="product name"
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      cols="30"
                      rows="10"
                      class="form-control"
                      v-model="product.description"
                    >
                    Product description
                    </textarea>
                  </div>
                </div>
                <div class="col-md-4">
                  <h5>Product Details</h5>
                  <hr />
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="product.price"
                      class="form-control mb-2"
                      placeholder="product price"
                    />
                    <input
                      type="text"
                      v-model="product.tag"
                      class="form-control mb-3"
                      placeholder="product tag"
                    />
                    <h6 class="d-inline">Product Images</h6>
                    <input
                      @change="uploadImage()"
                      type="file"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button @click="addProduct" type="button" class="btn btn-primary">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- endmodal -->
      <hr />
      <h3 class="d-inline-block">Products List</h3>
      <button
        @click="launchAddProductModal"
        class="btn btn-primary float-right"
      >
        Add Product
      </button>
      <div class="table-responsive"></div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Tag</th>
            <th>Image</th>
            <th colspan="2" align="center">Modify</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="product.id" v-for="product in products">
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.tag }}</td>
            <td>{{ product.image }}</td>
            <td><button class="btn btn-primary">Edit</button></td>
            <td><button class="btn btn-danger">Delete</button></td>
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
        description: null,
        tag: null,
        image: null,
        price: null,
      },
      activeItem: null,
    };
  },
  firestore() {
    return {
      products: db.collection("products"),
    };
  },
  methods: {
    addProduct() {
      // Add a new document with a generated id.
      this.$firestore.products.add(this.product);
      $("#product").modal("hide");
    },
    readData() {},
    deleteProduct(doc) {},
    launchEditProductModal(doc) {
      $("#product").modal("show");
      this.product = doc.data();
      this.activeItem = doc.id;
    },
    launchAddProductModal() {
      $("#product").modal("show");
    },
    updateProduct() {},
    reset() {
      // Object.assign(this.$data, getDefaultData());
      // Object.assign(this.$data, this.$options.data.apply(this));
    },
  },
  created() {
    this.readData();
  },
};
</script>
