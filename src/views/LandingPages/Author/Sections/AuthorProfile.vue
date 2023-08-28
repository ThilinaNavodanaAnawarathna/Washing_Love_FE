<script setup>
import { onMounted } from "vue";

//Vue Material Kit 2 components
import MaterialAvatar from "@/components/MaterialAvatar.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// image
import profilePic from "@/assets/img/bruce-mars.jpg";

// material-input
import setMaterialInput from "@/assets/js/material-input";
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <section class="py-sm-7 py-5 position-relative">
    <div class="container">
      <div class="row">
        <div class="col-12 mx-auto">
          <div class="mt-n8 mt-md-n9 text-center">
            <div class="blur-shadow-avatar">
              <MaterialAvatar
                size="xxl"
                class="shadow-xl position-relative z-index-2"
                :image="profilePic"
                alt="Avatar"
              />
            </div>
          </div>
          <div class="row py-5">
              <div class="col-lg-4 col-md-8 col-12 mx-auto">
                <div class="card z-index-0 fadeIn3 fadeInBottom">

                  <div class="card-body">
                    <h6 class="text-center">Profile Details</h6>
                    <form role="form" class="text-start">
                      <div class=" text-white form-group">
                        <label for="username">First Name</label>
                        <input
                          v-model="formData.firstName"
                          type="text"
                          id="firstName"
                          class="form-control"
                          name="firstName"
                          placeholder="First Name"
                          disabled="true"
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
                          disabled="true"
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
                          disabled="true"
                          required>
                        <div class="text-white invalid-feedback">
                          Email is required.
                        </div>
                      </div>

                      <div class=" text-white form-group">
                        <label for="password">Create Date</label>
                        <input
                          v-model="formData.createTime"
                          type="text"
                          id="email"
                          class="form-control"
                          name="password"
                          placeholder="Password"
                          disabled="true"
                          required>
                        <div class="text-white invalid-feedback">
                          Password is required.
                        </div>
                      </div>

                      <div class=" text-white form-group">
                        <label for="password">Role</label>
                        <input
                          v-model="formData.role"
                          type="text"
                          id="email"
                          class="form-control"
                          name="password"
                          placeholder="Password"
                          disabled="true"
                          required>
                        <div class="text-white invalid-feedback">
                          Password is required.
                        </div>
                      </div>

                      <div class="text-center">
<!--                        <router-link to="/pages/landing-pages/basic">-->
<!--                          <MaterialButton-->
<!--                            class="my-4 mb-2"-->
<!--                            variant="gradient"-->
<!--                            color="success"-->
<!--                            fullWidth-->

<!--                          >Update Details</MaterialButton-->
<!--                          >-->
<!--                        </router-link>-->
                      </div>
                    </form>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

import User from "@/model/User";
import UserService from "@/service/UserService";
export default {
  name: "Login",
  data() {
    return {
      formData: new User(),
      loading: false,
      submitted: false,
      errorMessage: "",
      message: "",
    };
  },
  mounted() {
    this.getUserDetails()
  },
  methods: {
    getUserDetails(){
      UserService.getByUserId(localStorage.getItem("user-id")).then((response) => {
        this.formData=response.data
      }).catch((err) => {
        console.log(err);
      }).then(() => {
        this.loading = false;
      });
    }
  }
}
</script>
