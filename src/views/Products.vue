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
              <h5 class="modal-title" id="productLabel" v-if="modal == 'new'">
                Add Product
              </h5>
              <h5 class="modal-title" id="productLabel" v-if="modal == 'edit'">
                Edit Product
              </h5>
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
                    <vue-editor v-model="product.description"></vue-editor>
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
                      v-model="tag"
                      @keyup.188="addTag"
                      class="form-control mb-3"
                      placeholder="product tag"
                    />
                    <h6 class="d-inline">Product Images</h6>
                    <input
                      @change="uploadImage"
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
              <button
                v-if="modal == 'new'"
                @click="addProduct"
                type="button"
                class="btn btn-primary"
              >
                Save Product
              </button>
              <button
                v-if="modal == 'edit'"
                @click="updateProduct(product)"
                type="button"
                class="btn btn-primary"
              >
                Apply Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- endmodal -->
      <hr />
      <h3 class="d-inline-block">Products List</h3>
      <button @click="newProduct" class="btn btn-primary float-right">
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
            <td>
              <button class="btn btn-primary" @click="editProduct(product)">
                Edit
              </button>
            </td>
            <td>
              <button @click="deleteProduct(product)" class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";
import { VueEditor } from "vue2-editor";

export default {
  name: "Products",
  components: {
    VueEditor,
  },
  data() {
    return {
      products: [],
      product: {
        name: null,
        description: null,
        tags: [],
        image: null,
        price: null,
      },
      activeItem: null,
      modal: null,
      tag: "",
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
    editProduct(product) {
      this.modal = "edit";
      this.product = product;
      $("#product").modal("show");
    },
    deleteProduct(product) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert  this!",
        icon: "Warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$firestore.products.doc(product.id).delete();
          Toast.fire({
            icon: "success",
            title: "Deleted successfully",
          });
        }
      });
    },
    newProduct() {
      this.modal = "new";
      $("#product").modal("show");
    },
    updateProduct(product) {
      this.$firestore.products.doc(product.id).update(this.product);
      $("#product").modal("hide");

      Toast.fire({
        icon: "success",
        title: this.product.name + " updated successfully",
      });
    },
    addTag() {
      // console.log("pressed")
      this.product.tags.push(this.tag);
      this.tag = "";
    },
    uploadImage(e) {
      let file = e.target.files[0];
      var storageRef = fb
        .storage()
        .ref("products/" + file.name)
        .put(file)
        .then((response) => {
          response.ref.getDownloadURL().then((downloadURL) => {
            this.product.image = downloadURL;
            // console.log("File available at", downloadURL);
          });
        });
    },
  },
};
</script>
