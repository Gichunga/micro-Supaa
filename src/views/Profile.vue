<template>
  <div class="profile">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Profile component</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              iusto debitis commodi rem, error ipsa fugiat obcaecati praesentium
              corrupti ratione amet fugit, necessitatibus sint veritatis? Ad
              harum explicabo non rem.
            </p>
          </div>
          <div class="col-md-6">
            <img
              src="/img/svg/profile.svg"
              alt="profile image"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
      <div class="col-md-12 mt-3">
        <div class="card">
          <div class="card-header p-2">
            <ul class="nav nav-pills" id="pills-tab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="pills-account-tab"
                  href="#pills-account"
                  data-toggle="pill"
                  role="tab"
                  aria-controls="pills-account"
                  aria-selected="false"
                  >Account Settings</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="pills-profile-tab"
                  href="#pills-profile"
                  data-toggle="pill"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="true"
                  >Profile</a
                >
              </li>
            </ul>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <div class="tab-content">
              <div
                class="tab-pane fade pt-3"
                id="pills-account"
                role="tabpanel"
                aria-labelledby="pills-account-tab"
              >
                <div class="container">
                  <div class="row form">
                    <div class="col-md-">
                      <div class="alert alert-info">
                        Please use the Reset password email button for reseting
                        the password. The form doens't work currently
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          v-model="account.name"
                          placeholder="User name"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          v-model="account.email"
                          placeholder="Email address"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          v-model="account.password"
                          placeholder="New password"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          v-model="account.confirmPassword"
                          placeholder="Confirm password"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <input
                          type="file"
                          @change="uploadImage"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <input
                          type="submit"
                          value="Save Changes"
                          class="btn btn-primary w-100"
                        />
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <input
                          type="button"
                          @click="resetPassword"
                          value="Reset password email"
                          class="btn btn-success w-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade show active pt-3"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div class="container">
                  <div class="row form">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          name=""
                          v-model="profile.name"
                          placeholder="Full name"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          v-model="profile.phone"
                          placeholder="Phone"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div class="form-group">
                        <input
                          type="text"
                          v-model="profile.address"
                          placeholder="Address"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-md-8">
                      <div class="form-group">
                        <input
                          type="text"
                          v-model="profile.postcode"
                          placeholder="Postcode"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <input
                          type="submit"
                          @click="updateProfile"
                          value="Save Changes"
                          class="btn btn-primary w-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.tab-pane -->
            </div>
            <!-- /.tab-content -->
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";
export default {
  name: "profile",
  data() {
    return {
      profile: {
        name: null,
        phone: null,
        address: null,
        postcode: null,
      },
      account: {
        name: null,
        email: null,
        photoUrl: null,
        emailVerified: null,
        password: null,
        confirmPassword: null,
        uid: null,
      },
    };
  },

  firestore() {
    const user = fb.auth().currentUser;
    return {
      userProfile: db.collection("profiles").doc(user.uid),
    };
  },
  methods: {
    updateProfile() {
      this.$firestore.userProfile.update(this.profile);
    },
    uploadImage(e) {
      let file = e.target.files[0];
      var storage = fb
        .storage()
        .ref("profiles/" + file.name)
        .put(file)
        .then((response) => {
            response.ref.getDownloadURL().then((downloadURL) => {
              this.account.profileUrl.push(downloadURL);
            })
        })
        .catch((err) => {
          alert("something went wrong");
        });
    },
    resetPassword() {
      const auth = fb.auth();
      auth.sendPasswordResetEmail(auth.currentUser.email).then(() => {
        Toast.fire({
          icon: "success",
          title: "email sent",
        });
      }).catch((error) => {
        alert("Something wrong happened")
      });
    },
  },
};
</script>
