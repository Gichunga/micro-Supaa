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
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link" href="#settings" data-toggle="tab"
                  >Account Settings</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#settings" data-toggle="tab"
                  >Profile</a
                >
              </li>
            </ul>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <div class="tab-content">
              <div class="tab-pane" id="settings">
                <form class="form-horizontal">
                  <div class="form-group row">
                    <label for="inputName" class="col-sm-12 col-form-label"
                      >Name</label
                    >
                    <div class="col-sm-12">
                      <input
                        type="email"
                        class="form-control"
                        id="inputName"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputEmail" class="col-sm-12 col-form-label"
                      >Email</label
                    >
                    <div class="col-sm-12">
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputBiography" class="col-sm-12 col-form-label"
                      >Biography</label
                    >
                    <div class="col-sm-12">
                      <textarea
                        class="form-control"
                        id="inputBiography"
                        placeholder="Biography"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputType" class="col-sm-12 col-form-label"
                      >Type</label
                    >
                    <div class="col-sm-12">
                      <select name="type" id="type" class="form-control">
                        <option value="">Select user role</option>
                        <option value="admin">Admin</option>
                        <option value="user">Standard user</option>
                        <option value="author">Author</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="profile" class="col-sm-12 col-form-label"
                      >Profile Photo</label
                    >
                    <div class="col-sm-12">
                      <input type="file" id="profilePhoto" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="inputExperience"
                      class="col-sm-12 col-form-label"
                      >Password (leave empty if not changing)</label
                    >
                    <div class="col-sm-12">
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="offset-sm-12 col-sm-12">
                      <button type="submit" class="btn btn-success">
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="tab-pane active" id="profile">
                <form class="form-horizontal">
                  <div class="form-group row">
                    <label for="inputName" class="col-sm-12 col-form-label"
                      >Name</label
                    >
                    <div class="col-sm-12">
                      <input
                        type="email"
                        class="form-control"
                        id="inputName"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputEmail" class="col-sm-12 col-form-label"
                      >Email</label
                    >
                    <div class="col-sm-12">
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputBiography" class="col-sm-12 col-form-label"
                      >Biography</label
                    >
                    <div class="col-sm-12">
                      <textarea
                        class="form-control"
                        id="inputBiography"
                        placeholder="Biography"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputType" class="col-sm-12 col-form-label"
                      >Type</label
                    >
                    <div class="col-sm-12">
                      <select name="type" id="type" class="form-control">
                        <option value="">Select user role</option>
                        <option value="admin">Admin</option>
                        <option value="user">Standard user</option>
                        <option value="author">Author</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="profile" class="col-sm-12 col-form-label"
                      >Profile Photo</label
                    >
                    <div class="col-sm-12">
                      <input type="file" id="profilePhoto" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="inputExperience"
                      class="col-sm-12 col-form-label"
                      >Password (leave empty if not changing)</label
                    >
                    <div class="col-sm-12">
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="offset-sm-12 col-sm-12">
                      <button type="submit" class="btn btn-success">
                        Update
                      </button>
                    </div>
                  </div>
                </form>
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
export default {
  name: "profile",
};
</script>
