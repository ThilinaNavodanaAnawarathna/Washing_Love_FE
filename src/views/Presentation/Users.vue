<script setup>
import { onMounted } from "vue";

import setNavPills from "@/assets/js/nav-pills";
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
import NavbarAdmin from "@/examples/navbars/NavbarAdmin.vue";

onMounted(() => {
  setNavPills();
});
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarAdmin :sticky="true" />
      </div>
    </div>


    <section class="pt-8">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <h2 class="text-gradient text-primary text-center">Users</h2>
            <p class="lead mb-5">All Users Manage Things</p>
          </div>
          <div class="col-lg-10">
            <div class="table-responsive">
              <table class="table table-pricing">
                <thead class="text-light">
                <tr>
                  <th class="ps-2">
                    <h6 class="mb-0">User Id</h6>
                  </th>
                  <th class="text-center">
                    <h6 class="font-weight-bold">Email</h6>
                  </th>
                  <th class="text-center">
                    <h6 class="font-weight-bold">First Name</h6>
                  </th>
                  <th class="text-center">
                    <h6 class="font-weight-bold">Last Name</h6>
                  </th>
                  <th class="text-center">
                    <h6 class="font-weight-bold">Role</h6>
                  </th>
                  <th class="text-center">
                    <h6 class="font-weight-bold">Action</h6>
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in userData" :key="item">
                  <td class="py-3">
                    <span class="text-xs">{{item.id}}</span>
                  </td>
                  <td class="text-center py-3">
                    <span class="text-xs">{{item.email}}</span>
                  </td>
                  <td class="text-center py-3">
                    <span class="text-xs">{{item.firstName}}</span>
                  </td>
                  <td class="text-center py-3">
                    <span class="text-xs">{{item.lastName}}</span>
                  </td>

                  <td class="text-center py-3">
                    <span class="cursor-pointer text-xs ql-color-green">{{item.role}}</span>
                  </td>

                  <td class="text-center py-3">
                    <a href="javascript:;" class="text-dark text-danger">Delete</a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import UserService from "@/service/UserService";
import User from "@/model/User";

export default {
  name: "Login",
  data() {
    return {
      formData: new User(),
      loading: false,
      submitted: false,
      errorMessage: "",
      message: "",
      userData: [],
      selectedId: 0
    };
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      UserService.getAllUsers().then((response) => {
        response.data.forEach((element, index) => {
          const payload = {
            id: element.id,
            firstName: element.firstName,
            lastName: element.lastName,
            email: element.email,
            role: element.role
          }
          this.userData.push(payload)
        })
      }).catch((err) => {
        if (err?.response?.status === 409) {
          this.errorMessage = "Invalid Details!";
        } else if (err?.response?.status === 403) {
          this.errorMessage = "Invalid Details!";
        } else {
          this.errorMessage = "Unexpected Error occurred.!!";
        }
      }).then(() => {
        this.loading = false;
      });

    }
  }
}
</script>
