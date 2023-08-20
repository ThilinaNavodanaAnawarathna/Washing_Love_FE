<script setup>
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
import AddCardBackground from "@/assets/img/Addcar.png";
import ReportCardBackground from "@/assets/img/Report.png";
</script>
<template>
  <div class=" mt-sm-5">
    <div
      class="page-header bg-white py-md-5 my-sm-3 mb-3 border-radius-xl text-dark"
      loading="lazy"
    >
      <span class="mask bg-white "></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h4 class="">More Than just a Car Wash</h4>
            <h1 class="">Add Your Vehicles
              & View Your Previous</h1>

            <p class="lead  opacity-8 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste exercitationem odit consectetur magni dolore
              nulla impedit sed maxime modi voluptatum ratione, labore et quod harum. Dolorem voluptatum obcaecati
              ducimus in!
            </p>
            <h1 class="text-bolder"> +94 25645120 </h1>
            <a
              href="https://www.creative-tim.com/learning-lab/vue/overview/material-kit/"
              class="text-white icon-move-right"
            >
              Read docs
              <i class="fas fa-arrow-right text-sm ms-1"></i>
            </a>
          </div>
          <div class="col-lg-7">
            <div class="row">
              <router-link class="col-4" to="/views/Presentation/myvehicles">
                <div :style="`background-image: url(${AddCardBackground})`" class="gap-4 p-2 add-card-design  ">
                  <span class="new-mask bg-gradient-dark opacity-8"></span>
                  <h4 class="text-white mt-9 z-index-3">Vehicles</h4>
                </div>
              </router-link>
              <router-link class="col-4" to="/views/Presentation/reports">
                <div :style="`background-image: url(${ReportCardBackground})`" class="gap-4 p-2 add-card-design  ">
                  <span class="new-mask bg-gradient-dark opacity-8"></span>
                  <h4 class="text-white mt-9 z-index-3">Report</h4>
                </div>
              </router-link>
              <router-link class="col-4 " to="/views/Presentation/spareparts">
                <div :style="`background-image: url(${ReportCardBackground})`" class="gap-4 p-2 add-card-design  ">
                  <span class="new-mask bg-gradient-dark opacity-8"></span>
                  <h4 class="text-white mt-9 z-index-3">Spare Parts</h4>
                </div>
              </router-link>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.add-card-design {
  height: 350px;
  width: auto;
  position: relative;
  border-radius: 10px;
  text-align: center;

}


</style>