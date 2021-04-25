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
      <h3>
        <!-- Modal -->
        <div
          class="modal fade"
          id="edit"
          data-backdrop="static"
          data-keyboard="false"
          tabindex="-1"
          aria-labelledby="editLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="editLabel">Modal title</h5>
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
                <div class="form-group">
                  <input
                    type="text"
                    v-model="product.name"
                    class="form-control"
                    placeholder="product name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="integer"
                    v-model="product.price"
                    class="form-control"
                    placeholder="price"
                  />
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
                  @click="updateProduct"
                  type="button"
                  class="btn btn-primary"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- endmodal -->

        CRUD operation on the documents of a collection from cloud firestore
      </h3>
      <div class="table-responsive"></div>
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
            <td>
              <button
                class="btn btn-primary"
                @click="launchEditProductModal(product)"
              >
                Edit
              </button>
            </td>
            <td>
              <button class="btn btn-danger" @click="deleteProduct(product.id)">
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

export default {
  name: "Products",
  data() {
    return {
      products: [],
      product: {
        name: null,
        price: null,
      },
      activeItem: null,
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
    deleteProduct(doc) {
      // alert(id);
      if (confirm("Are you sure?")) {
        // alert(id);
        db.collection("products")
          .doc(doc)
          .delete()
          .then(() => {
            alert("Document successfully deleted!");
          })
          .catch((error) => {
            console.error("Error removing document: ", error);
          });
      }
    },
    launchEditProductModal(doc) {
      $("#edit").modal("show");
      this.product = doc.data();
      this.activeItem = doc.id;
    },
    updateProduct() {
      db.collection("products")
        .doc(this.activeItem)
        .update(this.product)
        .then(() => {
          $("#edit").modal("hide");
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    },
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
