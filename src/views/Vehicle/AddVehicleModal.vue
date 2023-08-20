<script setup>
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";</script>
<template>
  <div class="container py-7">
    <div class="row mt-2 flex justify-content-center">
      <div class="col-sm-3 col-6 ms-8">
        <!-- Button trigger modal -->
        <MaterialButton
          variant="gradient"
          color="success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add New Vehicle
        </MaterialButton>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Add Vehicle Details
                </h5>
                <MaterialButton
                  color="none"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                </MaterialButton>
              </div>
              <form role="form" @submit.prevent="addVehicle">
                <div class="modal-body">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div class=" text-white form-group">
                          <label for="brand">Brand</label>
                          <input
                            type="text"
                            v-model="formData.brand"
                            id="brand"
                            class="form-control"
                            name="brand"
                            placeholder="Brand"
                            required>
                          <div class="text-white invalid-feedback">
                            Brand is required.
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 ps-2">
                        <div class=" text-white form-group">
                          <label for="model">Model</label>
                          <input
                            type="text"
                            v-model="formData.model"
                            id="model"
                            class="form-control"
                            name="model"
                            placeholder="Model"
                            required>
                          <div class="text-white invalid-feedback">
                            Model is required.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-4">
                      <div class=" text-white form-group">
                        <label for="vehicleNumber">Vehicle Number</label>
                        <input
                          type="text"
                          v-model="formData.vehicleNumber"
                          id="vehicleNumber"
                          class="form-control"
                          name="vehicleNumber"
                          placeholder="Vehicle Number"
                          required>
                        <div class="text-white invalid-feedback">
                          Vehicle Number is required.
                        </div>
                      </div>
                    </div>
                    <div class="mb-4">
                      <div class=" text-white form-group">
                        <label for="year">Year</label>
                        <input
                          type="number"
                          v-model="formData.year"
                          id="year"
                          class="form-control"
                          name="year"
                          placeholder="Year"
                          required>
                        <div class="text-white invalid-feedback">
                          Year is required.
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="modal-footer justify-content-between">
                  <MaterialButton
                    variant="gradient"
                    color="dark"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </MaterialButton>
                  <MaterialButton
                    variant="gradient"
                    @click="submitted = true"
                    :disabled="loading"
                    color="success"
                    class="mb-0">
                    Save
                  </MaterialButton>
                </div>
                <div v-if="errorMessage" class="alert alert-danger mt-2">
                  {{ errorMessage }}
                </div>
                <div v-if="message" class="alert alert-info mt-2">
                  {{ message }}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VehicleService from "@/service/VehicleService";
import Vehicle from "@/model/Vehicle";
import router from "@/router";
import User from "@/model/User";

export default {
  name: "Login",
  data() {
    return {
      formData: new Vehicle(),
      loading: false,
      submitted: false,
      errorMessage: "",
      message: ""
    };
  },
  methods: {

    addVehicle() {
      const user = new User();
      user.id = localStorage.getItem("user-id");
      this.formData.user = user;
      if (!this.formData.brand || !this.formData.model || !this.formData.year || !this.formData.vehicleNumber) {
        return;
      }

      this.loading = true;
      VehicleService.addVehicle(this.formData).then((response) => {
        this.message = "Vehicle added success";
        window.location.reload();
      }).catch((err) => {
        console.log(err);
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


};
</script>
