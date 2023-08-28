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
            <h2 class="text-gradient text-primary text-center">All Reports</h2>
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
                    <h6 class="font-weight-bold">Vehicle Number</h6>
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
                    <h6 class="font-weight-bold"></h6>
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in reportData" :key="item">
                  <td class="py-3">
                    <span class="text-xs">{{item.bookingId}}</span>
                  </td>
                  <td class="text-center py-3">
                    <span class="text-xs">{{item.vehicleNumber}}</span>
                  </td>
                  <td class="text-center py-3">
                    <span class="text-xs">{{item.date}}</span>
                  </td>
                  <td class="text-center py-3">
                    <span class="text-xs">{{item.startTime}}</span>
                  </td>

                  <td class="text-center py-3">
                    <span class="cursor-pointer text-xs ql-color-green">{{item.endTime}}</span>
                  </td>

                  <td class="text-center py-3">
                    <a :href=item.url class="text-dark text-danger">Download</a>
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
import Vehicle from "@/model/Vehicle";
import ReportService from "@/service/ReportService";

export default {
  name: "Login",
  data() {
    return {
      formData: new Vehicle(),
      loading: false,
      submitted: false,
      errorMessage: "",
      message: "",
      reportData: [],
      selectedId: 0
    };
  },
  mounted() {
    this.loadReports()
  },
  methods: {
    loadReports() {
      ReportService.getAllReports().then((response) => {
        response.data.forEach((element, index) => {
          const payload = {
            bookingId: element.booking.id,
            url: "http://localhost:8083/wl/v1/api/file/download_document/"+element.url,
            date: element.booking.date,
            startTime: element.booking.startTime,
            endTime: element.booking.endTime,
            vehicleNumber: element.booking.vehicle.vehicleNumber
          }
          this.reportData.push(payload)
          console.log(this.reportData);
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
  }
}
</script>
