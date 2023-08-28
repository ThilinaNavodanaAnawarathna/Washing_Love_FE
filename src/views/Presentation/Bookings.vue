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
            <h2 class="text-gradient text-primary text-center">All Bookings</h2>
            <p class="lead mb-5">All Bookings Manage</p>
          </div>
          <div class="col-lg-10">
            <div class="table-responsive">
              <table class="table table-pricing">
                <thead class="text-light">
                <tr>
                  <th class="ps-2">
                    <h6 class="mb-0">Booking ID</h6>
                  </th>
                  <th class="text-center">
                    <h6 class="font-weight-bold">User Email</h6>
                  </th>
                  <th class="text-center">
                    <h6 class="font-weight-bold">Date</h6>
                  </th>
                  <th class="text-center">
                    <h6 class="font-weight-bold">Time</h6>
                  </th>
                  <th class="text-center">
                    <h6 class="font-weight-bold">Status</h6>
                  </th>
                  <th class="text-center">
                    <h6 class="font-weight-bold">Vehicle Number</h6>
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in bookingDataList"
                    :key="item">
                  <td class="py-3">
                    <span class="text-xs">{{ item.id }}</span>
                  </td>
                  <td class="text-center py-3">
                    <span class="text-xs">{{ item.user.firstName }} {{ item.user.lastName }}</span>
                  </td>
                  <td class="text-center py-3">
                    <span class="text-xs">{{ item.date }}</span>
                  </td>
                  <td class="text-center py-3">
                    <span class="text-xs">{{ item.startTime }}</span>
                  </td>

                  <td class="text-center py-3">
                    <span class="cursor-pointer text-xs ql-color-green">{{ item.bookingStatus }}</span>
                  </td>

                  <td class="text-center py-3">
                    <a href="javascript:;" class="text-dark text-danger">{{ item.vehicle.vehicleNumber }}</a>
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
<script>
import BookingService from "@/service/BookingService";
import Vehicle from "@/model/Vehicle";
import Booking from "@/model/Booking";

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
      BookingService.getAllBookings().then((response) => {
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

  }
};
</script>
