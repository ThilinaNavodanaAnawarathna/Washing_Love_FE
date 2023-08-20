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
                    <h6 class="font-weight-bold">User Name</h6>
                  </th>
                  <th class="text-center">
                    <h6 class="font-weight-bold">First Name</h6>
                  </th>
                  <th class="text-center">
                    <h6 class="font-weight-bold">Last Name</h6>
                  </th>
                  <th class="text-center">
                    <h6 class="font-weight-bold">Lock</h6>
                  </th>
                  <th class="text-center">
                    <h6 class="font-weight-bold">Action</h6>
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td class="py-3">
                    <span class="text-xs">1</span>
                  </td>
                  <td class="text-center py-3">
                    <span class="text-xs">Thilina@mail.com</span>
                  </td>
                  <td class="text-center py-3">
                    <span class="text-xs">Thilina</span>
                  </td>
                  <td class="text-center py-3">
                    <span class="text-xs">Anawarathne</span>
                  </td>

                  <td class="text-center py-3">
                    <span class="cursor-pointer text-xs ql-color-green">Lock</span>
                  </td>

                  <td class="text-center py-3">
                    <a href="javascript:;" class="text-dark text-danger">Delete</a>
                  </td>
                </tr>
                <tr>
                  <td class="py-3">
                    <span class="text-xs">1</span>
                  </td>
                  <td class="text-center py-3">
                    <span class="text-xs">Thilina@mail.com</span>
                  </td>
                  <td class="text-center py-3">
                    <span class="text-xs">Thilina</span>
                  </td>
                  <td class="text-center py-3">
                    <span class="text-xs">Anawarathne</span>
                  </td>

                  <td class="text-center py-3">
                    <span class="cursor-pointer text-xs ql-color-green">Lock</span>
                  </td>

                  <td class="text-center py-3">
                    <a href="javascript:;" class="text-dark text-danger">Delete</a>
                  </td>
                </tr>
                <tr>
                  <td class="py-3">
                    <span class="text-xs">1</span>
                  </td>
                  <td class="text-center py-3">
                    <span class="text-xs">Thilina@mail.com</span>
                  </td>
                  <td class="text-center py-3">
                    <span class="text-xs">Thilina</span>
                  </td>
                  <td class="text-center py-3">
                    <span class="text-xs">Anawarathne</span>
                  </td>

                  <td class="text-center py-3">
                    <span class="cursor-pointer text-xs ql-color-green">Lock</span>
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
