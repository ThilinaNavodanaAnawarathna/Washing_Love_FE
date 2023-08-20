<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import MaterialButton from "@/components/MaterialButton.vue";

import vueMkHeader from "@/assets/img/vue-mk-header.jpg";</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              :style="`background-image: url(${vueMkHeader})`"
              icon="touch_app"
              title="Washing Love <br /> Is a "
              description="Fully integrated Machine learnig system that provide vehicle damage detection and it help customers to get an idea about car"
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="Make a booking"
              description="You can get this amazing experience NOW"
              :action="[
                {
                  route: 'page-features',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <div class="Reservation-card">
              <div class="p-4 mx-auto d-flex justify-content-center flex-column">
                <h3 class="text-center">Make A reservarion</h3>
                <form role="form" id="contact-form" method="post" autocomplete="off">
                  <div class="card-body">
                    <div class="row">

                      <div class="col-md-6 ps-2">
                        <div class=" text-white form-group">
                          <label for="date">Date</label>
                          <input
                            type="date"
                            v-model="bookingData.date"
                            id="date"
                            class="form-control"
                            name="date"
                            placeholder="Date"
                            required>
                          <div class="text-white invalid-feedback">
                            Date is required.
                          </div>
                        </div>
                      </div>
                      <div class="mb-4 col-md-6 ">
                        <div class=" text-white form-group">
                          <label for="startTime">Time</label>
                          <input
                            type="time"
                            v-model="bookingData.startTime"
                            id="startTime"
                            class="form-control"
                            name="startTime"
                            placeholder="Time"
                            required>
                          <div class="text-white invalid-feedback">
                            Time is required.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="dropdown">
                          <button class="btn bg-gradient-dark dropdown-toggle" type="button" id="dropdownMenuButton"
                                  data-bs-toggle="dropdown" aria-expanded="false" fullWidth>
                            {{ this.selectedVehicleNumber }}
                          </button>
                          <ul class="dropdown-menu px-2 py-3" aria-labelledby="dropdownMenuButton">
                            <li @click="selectVehicle(item.id,item.vehicleNumber)" v-for="item in vehicleData"
                                :key="item"><a class="dropdown-item border-radius-md"
                                               href="javascript:;">{{ item.vehicleNumber }}</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <MaterialButton
                          @click="checkAvailability()"
                          type="button"
                          variant="gradient"
                          style="background-color: #63b3ed;color: whitesmoke"
                          color="dangor"
                          fullWidth
                        >Check Availability
                        </MaterialButton
                        >
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <p style="text-align: center">{{ this.availabilityMsg }}</p>

                      <div class="col-md-12">
                        <MaterialButton
                          @click="makeReservation()"
                          type="button"
                          variant="gradient"
                          color="dark"
                          fullWidth
                        >Make a Reservation
                        </MaterialButton
                        >
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>

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
      vehicleData: [],
      selectedVehicleId: 0,
      selectedVehicleNumber: "Select Vehicle",
      availabilityMsg: "Please check availability before the reservation"
    };
  },
  mounted() {
    this.loadVehicles();
  },
  methods: {
    loadVehicles() {
      VehicleService.getMyVehicles(localStorage.getItem("user-id")).then((response) => {
        response.data.forEach((element, index) => {
          const payload = {
            id: element.id,
            brand: element.brand,
            model: element.model,
            year: element.year,
            vehicleNumber: element.vehicleNumber
          };
          this.vehicleData.push(payload);
        });
        console.log(this.vehicleData);
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

    selectVehicle(id, number) {
      this.selectedVehicleId = id;
      this.selectedVehicleNumber = number;
      const vehicle = new Vehicle();
      vehicle.id = this.selectedVehicleId;
      this.bookingData.vehicle = vehicle;

    },

    checkAvailability() {
      console.log(this.bookingData);
      const check = new CheckAvailability(this.bookingData.date, this.bookingData.startTime+":00");
      BookingService.checkAvailability(check).then((response) => {
        console.log(response.data);
        if(response.data){
          this.availabilityMsg= "Yes, Your Date and time available on the system"
        }else {
          this.availabilityMsg= "No, Your Date and time already booked"
        }
      }).catch((err) => {
        console.log(err);
      }).then(() => {
        this.loading = false;
      });
    },

    makeReservation(){
      this.bookingData.startTime=this.bookingData.startTime+":00"
      const user=new User()
      user.id=localStorage.getItem("user-id")
      this.bookingData.user=user
      this.bookingData.bookingStatus="PENDING"
      BookingService.addBooking(this.bookingData).then((response) => {
        console.log(response.data);
        this.availabilityMsg= "Reservation complete"
        this.bookingData=new Booking()
      }).catch((err) => {
        console.log(err);
        this.availabilityMsg= "Reservation Fail"
      }).then(() => {
        this.loading = false;
      });
    }
  }
};
</script>

<style>
.Reservation-card {
  margin-top: 20px;
  border: 1px solid #dee0e3;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #dee0e3;
}
</style>