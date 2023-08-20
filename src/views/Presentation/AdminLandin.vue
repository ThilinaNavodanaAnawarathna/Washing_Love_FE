<script setup>
import { onMounted, onUnmounted } from "vue";


import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import BackgroundVideo from "@/assets/img/video.mp4";
//images
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
import NavbarAdmin from "@/examples/navbars/NavbarAdmin.vue";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarAdmin :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div

      class="page-header min-vh-75"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy"
    > <video autoplay muted loop>
      <source :src="BackgroundVideo" type="video/mp4">
      <!-- You can add more <source> elements for different video formats -->
      Your browser does not support the video tag.
    </video>
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
              Admin Pannel
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              Manage Everything
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">



    <div class="container">
      <div class="row">
        <router-link class="col-3" to="/pages/landing-pages/users">
        <div ><h3>Users</h3></div>
        </router-link>
        <router-link class="col-3" to="/pages/landing-pages/bookings">
        <div ><h3>Booking</h3></div>
        </router-link>
        <router-link class="col-3" to="/pages/landing-pages/allreports">
        <div ><h3>Reports</h3></div>
        </router-link>
        <router-link class="col-3" to="/pages/landing-pages/adminspareparts">
        <div><h3>Spare parts Inventory</h3></div>
        </router-link>
      </div>
    </div>

  </div>
  <DefaultFooter />
</template>
