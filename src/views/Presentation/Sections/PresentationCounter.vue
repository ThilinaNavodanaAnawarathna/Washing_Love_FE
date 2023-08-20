<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Customers"
                description="We had Many customers for this systems"
                :count="175"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Customer Satisfactions"
                description="Mix the sections, change the colors and unleash your
                  creativity"
                :count="150"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="success"
                title="Service center"
                description="Save 3-4 weeks of work when you use our pre-made pages for
                  your website"
                :count="1"
                :duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
