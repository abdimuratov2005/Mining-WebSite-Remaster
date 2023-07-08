<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import { useHero } from '../../../store/hero';
import ImgLoader from '../img-loader/loader.vue';
const store = useHero();

</script>

<template>
  <Splide
      :options="{
        type: 'loop',
        rewind: true,
        perPage: 1,
        pagination: true,
        arrows: false,
      }"
  >
    <SplideSlide  v-for="slide in store.slides" :key="slide.id">
      <ImgLoader :img="slide.item"/>
    </SplideSlide>
  </Splide>
</template>
