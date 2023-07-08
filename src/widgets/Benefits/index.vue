<script setup lang="ts">
import benefitLeft from "./components/benefit-left.vue";
import benefitRight from "./components/benefit-right.vue";
import ImgLoader from '../../shared/ui/img-loader/loader.vue'
</script>

<template>
  <section class="benefit">
    <div class="benefit__bg" :style="[]"></div>
    <div class="benefit__container">
      <benefit-left />
      <benefit-right />
    </div>
    <div class="benefit__img bottom-img">
      <ImgLoader img="benefits"/>
    </div>
  </section>
</template>


<style lang="scss"></style>