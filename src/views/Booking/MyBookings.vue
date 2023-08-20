<script setup>
import { onMounted } from "vue";

// Modals page components


//nav-pills
import setNavPills from "@/assets/js/nav-pills";
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
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
        <h1>My Bookings</h1>
      </div>

      <table class="table table-pricing">
        <thead class="text-light">
        <tr>
          <th class="ps-2">
            <h6 class="mb-0">Vehicle number</h6>
          </th>
          <th class="text-center">
            <h6 class="font-weight-bold">Date</h6>
          </th>
          <th class="text-center">
            <h6 class="font-weight-bold">Start Time</h6>
          </th>
          <th class="text-center">
            <h6 class="font-weight-bold">End Time</h6>
          </th>
          <th class="text-center">
            <h6 class="font-weight-bold">Status</h6>
          </th>
          <th class="text-center">
            <h6 class="font-weight-bold"></h6>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in bookingDataList"
            :key="item">
          <td class="py-3">
            <span class="text-xs">{{ item.vehicle.vehicleNumber }}</span>
          </td>
          <td class="text-center py-3">
            <span class="text-xs">{{ item.date }}</span>
          </td>
          <td class="text-center py-3">
            <span class="text-xs">{{ item.startTime }}</span>
          </td>

          <td class="text-center py-3">
            <span class="text-xs">{{ item.endTime }}</span>
          </td>
          <td class="text-center py-3">
            <span class="text-xs" style="color: #797901">{{ item.bookingStatus }}</span>
          </td>

          <td class="text-center py-3">
            <button @click="selectedBooking( item.id )" class="btn-outline-white btn text-danger col-6 gap-4"
                    data-bs-toggle="modal" style="background-color: whitesmoke" data-bs-target="#deleteVehicle">
              Delete
            </button>
            <button type="button" class="btn-outline-white btn text-dark" data-bs-toggle="modal"
                    data-bs-target="#updateVehicle">
              Update
            </button>
          </td>
        </tr>
        </tbody>
      </table>

    </div>
  </div>
  <div class="modal fade" id="updateVehicle" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Update your Booking Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">

            <div class="col-md-6 ps-2">
              <MaterialInput
                class="input-group-dynamic"
                :label="{class: 'form-label' }"
                type="date"
              />
            </div>
            <div class="mb-4 col-md-6 ">
              <MaterialInput
                class="input-group-dynamic"
                :label="{ class: 'form-label' }"
                type="time"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="dropdown">
                <button class="btn bg-gradient-dark dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-bs-toggle="dropdown" aria-expanded="false" fullWidth>
                  Select Vehicle
                </button>
                <ul class="dropdown-menu px-2 py-3" aria-labelledby="dropdownMenuButton">
                  <li><a class="dropdown-item border-radius-md" href="javascript:;">KN 21548</a></li>
                  <li><a class="dropdown-item border-radius-md" href="javascript:;">Sp BWB 1245</a></li>
                  <li><a class="dropdown-item border-radius-md" href="javascript:;">sp NNW 1245</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <MaterialButton
                type="#"
                variant="gradient"
                style="background-color: #63b3ed;color: whitesmoke"
                color="dangor"
                fullWidth
              >Check Availability
              </MaterialButton
              >
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. quod?</p>
        </div>
        <div class="modal-footer justify-content-between">
          <MaterialButton
            variant="gradient"
            color="dark"
            data-bs-dismiss="modal"
          >
            Close
          </MaterialButton>
          <MaterialButton variant="gradient" color="success" class="mb-0">
            Update
          </MaterialButton>
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
          <p>Are you sure You want to delete booking?</p>
        </div>
        <div class="modal-footer justify-content-between">
          <MaterialButton
            variant="gradient"
            color="dark"
            data-bs-dismiss="modal"
          >
            Close
          </MaterialButton>
          <MaterialButton @click="deleteBooking(this.selectedBookingId)" variant="gradient" color="danger" class="mb-0">
            Delete
          </MaterialButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VehicleService from "@/service/VehicleService";
import BookingService from "@/service/BookingService";
import Vehicle from "@/model/Vehicle";
import Booking from "@/model/Booking";
import CheckAvailability from "@/model/CheckAvailability";
import User from "@/model/User";

export default {
  name: "Login",
  data() {
    return {
      bookingData: new Booking(),
      formData: new Vehicle(),
      loading: false,
      submitted: false,
      errorMessage: "",
      message: "",
      bookingDataList: [],
      selectedBookingId: 0
    };
  },
  mounted() {
    this.loadBooking();
  },
  methods: {
    loadBooking() {
      BookingService.getMyBookings(localStorage.getItem("user-id")).then((response) => {
        response.data.forEach((element, index) => {
          const payload = {
            id: element.id,
            vehicle: element.vehicle,
            user: element.user,
            date: element.date,
            startTime: element.startTime,
            endTime: element.endTime,
            bookingStatus: element.bookingStatus
          };
          this.bookingDataList.push(payload);
        });
        console.log(this.bookingDataList);
      }).catch((err) => {
        console.log(err);
      }).then(() => {
        this.loading = false;
      });
    },
    selectedBooking(id) {
      this.selectedBookingId = id;
    },
    deleteBooking(id){
      console.log(id);
      BookingService.deleteBookings(id).then((response) => {
        console.log(response)
        window.location.reload();
      }).catch((err) => {
        console.log(err);
      }).then(() => {
        this.loading = false;
      });
    }
  }
};
</script>
