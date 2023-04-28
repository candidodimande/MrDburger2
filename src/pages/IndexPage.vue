<template>
  <q-page class="bg-grey-10" style="height: 100vh; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
    <div class="fullwidth main-bgcolor q-pa-md q-pt-xl q-pb-xl space-between text-black text-weight-normal"  style="padding-bottom: 100px; position: relative; border-radius: 0 0 50% 50%;">
      <q-list style="position: absolute; top: 0%; left: 45%;">
        <q-item clickable v-ripple >
        <q-item-section class="text-white" style="font-weight: lighter; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-style: italic;">Olá Meekness</q-item-section>
        <q-item-section avatar>
          <q-avatar style="width: 30px; height: 30px;">
            <img src="/logo/meekness.jpg">
          </q-avatar>
        </q-item-section>
      </q-item>
      </q-list>
      
    </div>

    <div 
        style="position: absolute; top: 80px; left: 50%; transform: translate(-50%); border-radius: 5px; z-index: 1; width: 60%;"
        class="q-pa-lg bg-red shadow-20"
      >
        <div class="q-pa-sm">
          <q-img
            class="absolute-center"
            style="width: 100px; position: relative;"
            src="/logo/cin.png"
          />
        </div>
        <div
          style="font-size: 12px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-style: italic; position: absolute; top: 60%; left: 50%; transform: translate(-50%); font-weight: lighter;"
          class="text-white"
        >
        A taste of home
      </div>
      </div> 

    <div 
    class="fullwidth bg-grey-10 q-pa-md q-ml-xm" 
    style=" position: relative;">
      <div style="margin-top: 40px;">
        <swiper
          slidesperview="auto"
          :space-between="0"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="fullwidth"
        >
          <swiper-slide
            v-for="(card, index) in cardStore.cardsType"
            :key="index"
            style="width:250px;"
            class="q-mx-sm"
          >
            <q-card 
              class="my-card text-white q-mr-md new"
              style="width:250px; border-radius: 10px; margin:40px 0;"
              :class="card.bgColor"
              >
              <div style="background: url(/bg/pizza.jpg); position: absolute; background-repeat: no-repeat; background-position: center; background-size: cover;height: 165px; width: 250px; border-radius: 10px; opacity: 55%;"></div>
              <q-card-section style="font-style: italic;">
                <div class="text-h6 text-weight-light" style="letter-spacing: 3px;">{{ card.name }}</div>
                <div class="text-subtitle2 text-weight-light" style="letter-spacing: 3px;">{{card.price}} MT</div>
                <div class="text-subtitle2 text-weight-light" style="letter-spacing: 3px;">{{card.size}}</div>
              </q-card-section>

              <q-card-actions class="text-right" style="margin-top: -20px">
                <q-btn outline rounded class="text-center" style="text-align: center;">Encomendar</q-btn>
                <!-- <q-btn flat>Action 2</q-btn> -->
              </q-card-actions>
            </q-card>
          </swiper-slide>
    ...
        </swiper>
        <!--  -->

      <div class=" q-px-sm row justify-between">
        <div class="column">
          <q-btn to="menu" round style="background: none; border: 1px solid orangered" icon="local_grocery_store"/>
          <p>Menu</p>
        </div>

        <div class="column">
          <q-btn round style="background: none; border: 1px solid orangered" class=""  icon="local_grocery_store"/>
          <p>Pedidos</p>
        </div>

        <div class="column">
          <q-btn round style="background: none; border: 1px solid orangered" icon="local_grocery_store"/>
          <p>Mesas</p>
        </div>

        <div class="column">
          <q-btn round style="background: none; border: 1px solid orangered" icon="local_grocery_store"/>
          <p>Entrega</p>
        </div>

        <div class="column">
          <q-btn round style="background: none; border: 1px solid orangered" icon="local_grocery_store"/>
          <p>Venda <br> balcão</p>
        </div>

        <div class="column">
          <q-btn round style="background: none; border: 1px solid orangered" icon="local_grocery_store"/>
          <p>Clientes</p>
        </div>
    
    
      </div>

      <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      style="height: 150px; border-radius: 5px;"
      
    >
      <q-carousel-slide :name="1"  img-src="/img/atum.jpg"/>
      <q-carousel-slide :name="2" img-src="/img/fries.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
  </div>
        
      </div>
      </div>
      
  </q-page>
</template>

<style>
  .column {
    position: relative;
    
  }
  .column .q-btn {
    margin: 10px;
    width: 60px;
    height: 60px;
    
  }
  .column p {
    text-align: center;
    color: white;
    letter-spacing: 3px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>

<script>
import { defineComponent } from 'vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import { ref } from 'vue'

import { useCardStore } from "../stores/card-store";
import { mapState } from "pinia";

export default defineComponent({
  name: 'IndexPage',
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      cardStore: useCardStore(),
    }
  },

  
  setup () {
    return {
      slide: ref(1)
    }
  },
  
   created() {
    console.log(useCardStore)
  }
});
</script>
