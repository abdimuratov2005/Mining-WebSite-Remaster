<script setup lang="ts">
import Slides from '../../shared/ui/swiper/slide.vue';
import ImgLoader from '../../shared/ui/img-loader/loader.vue'
</script>

<template>
  <section class="hero">
    <div class="slider">
      <div class="slider__title">
        <h1>оборудование для майнинга оптом</h1>
        <h4>с гарантией 12 месяцев</h4>
        <button type="button" class="slider__go">Перейти в каталог</button>
      </div>
      <div class="slider__bg">
        <ImgLoader img="hero_main"/>
      </div>
      <Slides />
    </div>
    <div class="offer">
      <div class="offer__container">
        <h1 class="offer__title">выгодное предложение</h1>
        <div class="offer__promotion">
          <h1>-20%</h1>
          <h1>на все товары Antminer</h1>
        </div>
        <div class="offer__img">
          <ImgLoader img="bitcoin"/>
        </div>
        <a href="#" class="offer__arrow">
          В каталог<span class="_icon-arrow"></span>
        </a>
      </div>
    </div>
  </section>
</template>


<style lang="scss"></style>
