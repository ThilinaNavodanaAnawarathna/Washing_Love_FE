<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Features page components
import FeatureOne from "./components/FeatureOne.vue";

// Features page components codes
import { feature1Code } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";

//  material-input
import setMaterialInput from "@/assets/js/material-input";

onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Features"
    :breadcrumb="[
      { label: 'Home', route: '#' },
      { label: 'Reservations' },
    ]"
  >
  <div class="container py-4">
      <div class="row">
        <div class="col-lg-7 mx-auto d-flex justify-content-center flex-column">
          <h3 class="text-center">Make A reservarion</h3>
          <form role="form" id="contact-form" method="post" autocomplete="off">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <MaterialInput
                    class="input-group-dynamic mb-4"
                    :label="{ text: 'First Name', class: 'form-label' }"
                    type="text"
                  />
                </div>
                <div class="col-md-6 ps-2">
                  <MaterialInput
                    class="input-group-dynamic"
                    :label="{ text: 'Last Name', class: 'form-label' }"
                    type="text"
                  />
                </div>
              </div>
              <div class="mb-4">
                <MaterialInput
                  class="input-group-dynamic"
                  :label="{ text: 'Email Address', class: 'form-label' }"
                  type="email"
                />
              </div>
              <MaterialTextArea
                class="input-group-static mb-4"
                id="message"
                :rows="4"
                >Your message</MaterialTextArea
              >
            </div>
            <div class="row">
              <div class="col-md-12">
                <MaterialSwitch
                  class="mb-4 d-flex align-items-center"
                  id="flexSwitchCheckDefault"
                  checked
                  labelClass="ms-3 mb-0"
                >
                  I agree to the
                  <a href="javascript:;" class="text-dark"
                    ><u>Terms and Conditions</u></a
                  >.
                </MaterialSwitch>

                <div class="col-md-12">
                  <MaterialButton
                    type="submit"
                    variant="gradient"
                    color="dark"
                    fullWidth
                    >Make A reservation</MaterialButton
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
