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
                    <h6 class="text-center">Update Profile Details</h6>
                    <form role="form" class="text-start">
                      <MaterialInput
                        id="UserName"
                        class="input-group-outline my-3"
                        :label="{ text: 'First Name', class: 'form-label' }"
                        type="text"
                      />
                      <MaterialInput
                        id="email"
                        class="input-group-outline my-3"
                        :label="{ text: 'Last Name', class: 'form-label' }"
                        type="text"
                      />
                      <MaterialInput
                        id="password"
                        class="input-group-outline mb-3"
                        :label="{ text: 'Email', class: 'form-label' }"
                        type="email"
                      />
                      <MaterialInput
                        id="password"
                        class="input-group-outline mb-3"
                        :label="{ text: 'Password', class: 'form-label' }"
                        type="password"
                      />

                      <div class="text-center">
                        <router-link to="/pages/landing-pages/basic">
                          <MaterialButton
                            class="my-4 mb-2"
                            variant="gradient"
                            color="success"
                            fullWidth

                          >Update Details</MaterialButton
                          >
                        </router-link>
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
