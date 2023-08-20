<script setup>
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
</script>
<template>
  <div class="container mt-sm-5">
    <div
      class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
       :style="`background-image: url(${vueMkHeader})`"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <h4 class="text-white">Carry Yourself Brand New Everyday</h4>
            <h1 class="text-white">More Than Just a Car Wash</h1>
            <p class="lead text-white opacity-8 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste exercitationem odit consectetur magni dolore nulla impedit sed maxime modi voluptatum ratione, labore et quod harum. Dolorem voluptatum obcaecati ducimus in!
            </p>
            <a
              href="https://www.creative-tim.com/learning-lab/vue/overview/material-kit/"
              class="text-white icon-move-right"
            >
              Read docs
              <i class="fas fa-arrow-right text-sm ms-1"></i>
            </a>
          </div>
          <div class="col-lg-5 ">
            <router-link to="/views/Presentation/mybookings">
              <div style="padding: 20px; background-color: rgba(0,0,0,0.5)" class="mt-6 rounded">
                <h3 class="text-white text-center">My Bookings</h3>
              </div>
            </router-link>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
