<script setup lang="ts">
import ImgLoader from '../img-loader/loader.vue'
import {useCategoryStore} from '../../../store/category'
const store = useCategoryStore();
</script>

<template>
  <div 
    v-for="product in store.products" 
    class="category__product product"
    :key="product.id"
  >
    <div class="product__img">
      <ImgLoader :img="product.imgName" />
    </div>
    <div class="product__title">
      <h4>{{ product.title }}</h4>
      <a href="/" class="product__link _icon-arrow-2">В каталог</a>
    </div>
  </div>
</template>


<style lang="scss"></style>