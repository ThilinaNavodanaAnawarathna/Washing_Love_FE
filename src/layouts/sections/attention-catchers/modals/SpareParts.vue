<script setup>
import { onMounted } from "vue";

// Modals page components
import SimpleModal from "../../../../views/Vehicle/AddVehicleModal.vue";


//nav-pills
import setNavPills from "@/assets/js/nav-pills";
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
import Car1 from "@/assets/img/car1.png";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialInput from "@/components/MaterialInput.vue";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>


    <section class="pt-8">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <h2 class="text-gradient text-primary text-center">SpareParts</h2>
            <p class="lead mb-5">Find All SpareParts</p>
          </div>
          <div class="col-lg-10">
            <div class="table-responsive">
              <table class="table table-pricing">
                <thead class="text-light">
                <tr>
                  <th class="ps-2">
                    <h6 class="mb-0">Brand</h6>
                  </th>
                  <th class="text-center">
                    <h6 class="font-weight-bold">Model</h6>
                  </th>
                  <th class="text-center">
                    <h6 class="font-weight-bold">Year</h6>
                  </th>
                  <th class="text-center">
                    <h6 class="font-weight-bold">Part Name</h6>
                  </th>
                  <th class="text-center">
                    <h6 class="font-weight-bold">Price</h6>
                  </th>
                  <th class="text-center">
                    <h6 class="font-weight-bold">in Stock</h6>
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td class="py-3">
                    <span class="text-xs">Toyota</span>
                  </td>
                  <td class="text-center py-3">
                    <span class="text-xs">Corolla</span>
                  </td>
                  <td class="text-center py-3">
                    <span class="text-xs">2018</span>
                  </td>
                  <td class="text-center py-3">
                    <span class="text-xs">Head Light</span>
                  </td>

                  <td class="text-center py-3">
                    <span class="text-xs">Rs : 54000</span>
                  </td>

                  <td class="text-center py-3">
                    <span style="color: green"> Yes</span>
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
