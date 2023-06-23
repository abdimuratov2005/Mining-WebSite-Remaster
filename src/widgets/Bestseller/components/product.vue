<script setup lang="ts">
import { useBestsellerStore } from '../../../store/bestseller'
import ImgLoader from '../../../shared/ui/img-loader/loader.vue'
const store = useBestsellerStore();
</script>

<template>
  <div 
    class="bestseller__product best-product"
    v-for="product in store.products"
    :key="product.id"  
  >
    <div class="best-product__header">
      <h4>{{ product.header }}</h4>
      <span
        :class="product.like ? '_icon-favorite' : '_icon-favorite-2'"
        ></span>
    </div>
    <div class="best-product__img">
      <ImgLoader :img="product.img"/>
    </div>
    <div class="best-product__name">{{ product.name }}</div>
    <div class="best-product__how">{{ product.how }}</div>
    <div class="best-product__price">
      <h4>{{ product.price }}000 ₽
        <span v-if="product.skitka">{{ product.skitka }}000 ₽</span>
      </h4>
      <span class="_icon-korzina-2"></span>
    </div>
    <div class="best-product__btn">
      <button type="button" class="buyOnClick">Купить в 1 клик</button>
    </div>
  </div>
</template>


<style lang="scss"></style>