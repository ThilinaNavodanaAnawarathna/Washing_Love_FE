<script setup>
import { onMounted } from "vue";

// example components
import Header from "@/examples/Header.vue";

//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";

onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <Header>
    <div
      class="page-header align-items-start min-vh-100"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div
                class="card-header p-0 position-relative mt-n4 mx-3 z-index-2"
              >
                <div
                  class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1"
                >
                  <h4
                    class="text-white font-weight-bolder text-center mt-2 mb-0"
                  >
                    Sign Up
                  </h4>
                </div>
              </div>
              <div class="card-body">
                <form role="form" class="text-start" @submit.prevent="handleRegister"
                      novalidate
                      :class="submitted ? 'was-validated' : ''">
                  <div class=" text-white form-group">
                    <label for="username">First Name</label>
                    <input
                      v-model="formData.firstName"
                      type="text"
                      id="firstName"
                      class="form-control"
                      name="firstName"
                      placeholder="First Name"
                      required>
                    <div class="text-white invalid-feedback">
                      First Name is required.
                    </div>
                  </div>

                  <div class=" text-white form-group">
                    <label for="lastName">Last Name</label>
                    <input
                      v-model="formData.lastName"
                      type="text"
                      id="lastName"
                      class="form-control"
                      name="lastName"
                      placeholder="Last Name"
                      required>
                    <div class="text-white invalid-feedback">
                      Last Name is required.
                    </div>
                  </div>

                  <div class=" text-white form-group">
                    <label for="email">Email</label>
                    <input
                      v-model="formData.email"
                      type="email"
                      id="email"
                      class="form-control"
                      name="email"
                      placeholder="Email"
                      required>
                    <div class="text-white invalid-feedback">
                      Email is required.
                    </div>
                  </div>

                  <div class=" text-white form-group">
                    <label for="password">Password</label>
                    <input
                      v-model="formData.password"
                      type="password"
                      id="email"
                      class="form-control"
                      name="password"
                      placeholder="Password"
                      required>
                    <div class="text-white invalid-feedback">
                      Password is required.
                    </div>
                  </div>


                  <div class="text-center">

                      <MaterialButton
                        class="my-4 mb-2"
                        @click="submitted = true"
                        :disabled="loading"
                        variant="gradient"
                        color="success"
                        fullWidth

                      >Sign Up
                      </MaterialButton
                      >

                  </div>
                  <p class="mt-4 text-sm text-center">
                    Already have an account?
                    <a
                      href="/"
                      class="text-success text-gradient font-weight-bold"
                    >Sign In</a
                    >
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="errorMessage" class="alert alert-danger mt-2">
        {{ errorMessage }}
      </div>
      <footer class="footer position-absolute bottom-2 py-2 w-100">
        <div class="container">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-12 col-md-6 my-auto">
              <div
                class="copyright text-center text-sm text-white text-lg-start"
              >
                © {{ new Date().getFullYear() }}, made with
                <i class="fa fa-heart" aria-hidden="true"></i> by
                <a
                  href="https://www.creative-tim.com"
                  class="font-weight-bold text-white"
                  target="_blank"
                >Creative Tim</a
                >
                for a better web.
              </div>
            </div>
            <div class="col-12 col-md-6">
              <ul
                class="nav nav-footer justify-content-center justify-content-lg-end"
              >
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com"
                    class="nav-link text-white"
                    target="_blank"
                  >Creative Tim</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com/presentation"
                    class="nav-link text-white"
                    target="_blank"
                  >About Us</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com/blog"
                    class="nav-link text-white"
                    target="_blank"
                  >Blog</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com/license"
                    class="nav-link pe-0 text-white"
                    target="_blank"
                  >License</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </Header>
</template>
<script>
import User from "@/model/User";
import vuex from "vuex";
import router from "@/router";
import AuthenticationService from "@/service/AuthenticationService";

export default {
  name: "Register",
  data() {
    return {
      formData: new User(),
      loading: false,
      submitted: false,
      errorMessage: ""
    };
  },

  // computed: {
  //   ...vuex.mapGetters(["currentUser"])
  // },

  mounted() {

  },

  methods: {
    handleRegister() {
      this.formData.role="USER"
      console.log(this.formData);
      if (!this.formData.password || !this.formData.email || !this.formData.firstName || !this.formData.lastName) {
        return;
      }

      this.loading = true;

      AuthenticationService.singUp(this.formData).then(() => {
        router.push("/");
      }).catch((err) => {
        console.log(err);
        if (err?.response?.status === 409) {
          this.errorMessage = "Email is not valid.!!";
        } else {
          this.errorMessage = "Unexpected Error occurred.!!";
        }
      }).then(() => {
        this.loading = false;
      });
    }


  }
};
</script>

