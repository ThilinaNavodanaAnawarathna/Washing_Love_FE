<script setup>
import { onMounted } from "vue";

// Modals page components
import SimpleModal from "./AddVehicleModal.vue";


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

  </div>
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-8">
  <div class=" container">
    <div>
      <h1>Your Vehicles</h1>
    </div>

      <div class="row">
        <div v-for="item in vehicleData" :key="item" :style="`background-image: url(${Car1})`"  class="col-2 gap-4 mx-2  add-card-design text-white">
          <span class=" bg-gradient-dark"></span>
          <p style="background-color: rgba(0,0,0,0.2)" class="text-white mt-9">{{item.brand}}<br>{{item.model}}<br>{{item.vehicleNumber}}<br>{{item.year}}</p>
          <div class="row">
            <button @click="clickSelected(item.id)"  type="button" class="btn bg-gradient-dark col-6" data-bs-toggle="modal" data-bs-target="#updateVehicle">
            Update
            </button>
            <button @click="clickSelected(item.id)" class="btn-outline-white btn text-danger col-6 gap-4" data-bs-toggle="modal"  style="background-color: whitesmoke" data-bs-target="#deleteVehicle">
              Delete
            </button>
          </div>
          </div>


      </div>

  </div>
  </div>
  <div class="modal fade" id="updateVehicle" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Update your Vehicle Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
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
        <div class="modal-footer justify-content-between">
          <MaterialButton
            variant="gradient"
            color="dark"
            data-bs-dismiss="modal"
          >
            Close
          </MaterialButton>
          <MaterialButton @click="updateVehicle()" variant="gradient" color="success" class="mb-0">
            Update
          </MaterialButton>
          <div v-if="errorMessage" class="alert alert-danger mt-2">
            {{ errorMessage }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="deleteVehicle" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Delete Vehicle</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
         <p>Are you sure You want to delete Vehicle?</p>
        </div>
        <div class="modal-footer justify-content-between">
          <MaterialButton
            variant="gradient"
            color="dark"
            data-bs-dismiss="modal"
          >
            Close
          </MaterialButton>
          <MaterialButton @click="deleteVehicle()" variant="gradient" color="danger" class="mb-0">
            Delete
          </MaterialButton>
        </div>
      </div>
    </div>
  </div>
  <SimpleModal />
</template>
<script>
import VehicleService from "@/service/VehicleService";
import Vehicle from "@/model/Vehicle";

export default {
  name: "Login",
  data() {
    return {
      formData: new Vehicle(),
      loading: false,
      submitted: false,
      errorMessage: "",
      message:"",
      vehicleData:[],
      selectedId:0
    };
  },
  mounted() {
    this.loadVehicles()
  },
  methods: {
    loadVehicles(){
      VehicleService.getMyVehicles(localStorage.getItem("user-id")).then((response) => {
        response.data.forEach((element, index) => {
          const payload = {
            id: element.id,
            brand: element.brand,
            model: element.model,
            year: element.year,
            vehicleNumber: element.vehicleNumber
          }
          this.vehicleData.push(payload)
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

    },
    clickSelected(id) {
      this.selectedId = id
      VehicleService.findVehicleById(this.selectedId).then((response) => {
        this.formData.id=response.data.id
        this.formData.brand=response.data.brand
        this.formData.model=response.data.model
        this.formData.user=response.data.user
        this.formData.vehicleNumber=response.data.vehicleNumber
        this.formData.year=response.data.year
      }).catch((err) => {
        this.errorMessage = err.message;
      }).then(() => {
        this.loading = false;
      });
    },
    deleteVehicle(){
      console.log("Delete : ",this.selectedId)

      VehicleService.deleteVehicle(this.selectedId).then((response) => {
        window.location.reload();
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
    },
    updateVehicle(){
      VehicleService.updateVehicle(this.formData).then((response) => {
        console.log(response.data);
        window.location.reload();
      }).catch((err) => {
        this.errorMessage = err.message;
      }).then(() => {
        this.loading = false;
      });

    }
  }
};
</script>

