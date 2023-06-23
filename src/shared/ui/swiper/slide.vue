<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useHero } from '../../../store/hero';
import ImgLoader from '../img-loader/loader.vue';
const store = useHero();
</script>

<template>
  <Swiper
    :slides-per-view="1"
    :space-between="30"
    :pagination="{ clickable: true }"
  >
    <SwiperSlide  v-for="slide in store.slides" :key="slide.id">
      <ImgLoader :img="slide.item"/>
    </SwiperSlide>
  </Swiper>
</template>
