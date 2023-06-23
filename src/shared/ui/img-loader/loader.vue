<script setup lang="ts">
//path: '/'
import about from '../../assets/img/about.webp'
import bgForm from '../../assets/img/bgForm.webp'
import check from '../../assets/img/check.webp'
import close_menu from '../../assets/img/close-menu.svg'
import map from '../../assets/img/map.webp'
import menu from '../../assets/img/menu.svg'
//path: /benefits
import benefits from '../../assets/img/benefits/benefits.webp';
import stroke_bg from '../../assets/img/benefits/stroke-bg.webp';
//path: /bestsellers
import bestseller1 from '../../assets/img/bestsellers/img-1.webp';
import bestseller2 from '../../assets/img/bestsellers/img-2.webp';
import bestseller3 from '../../assets/img/bestsellers/img-3.webp';
import bestseller4 from '../../assets/img/bestsellers/img-4.webp';
import bestseller5 from '../../assets/img/bestsellers/img-5.webp';
//path: /category
import maining_1 from '../../assets/img/category/maining-1.webp';
import maining_2 from '../../assets/img/category/maining-2.webp';
import maining_3 from '../../assets/img/category/maining-3.webp';
import maining_4 from '../../assets/img/category/maining-4.webp';
import maining_5 from '../../assets/img/category/maining-5.webp';
import maining_6 from '../../assets/img/category/maining-6.webp';
//path: /hero
import bitcoin from '../../assets/img/hero/bitcoin.webp';
import hero_main from '../../assets/img/hero/hero-main.webp';
import hero_maining from '../../assets/img/hero/hero-maining.webp';

export type MenuImg = 
  'about' |
  'bgForm' |
  'check' |
  'close_menu' |
  'map' |
  'menu' |
  'benefits' |
  'stroke_bg' |
  'bestseller1' |
  'bestseller2' |
  'bestseller3' |
  'bestseller4' |
  'bestseller5' |
  'maining_1' |
  'maining_2' |
  'maining_3' |
  'maining_4' |
  'maining_5' |
  'maining_6' |
  'bitcoin' |
  'hero_main' |
  'hero_maining'

interface MenuImgProp {
  img: MenuImg
}

const imgList = {
  about: about,
  bgForm: bgForm,
  check: check,
  close_menu: close_menu,
  map: map,
  menu: menu,
  benefits: benefits,
  stroke_bg: stroke_bg,
  bestseller1: bestseller1,
  bestseller2: bestseller2,
  bestseller3: bestseller3,
  bestseller4: bestseller4,
  bestseller5: bestseller5,
  maining_1: maining_1,
  maining_2: maining_2,
  maining_3: maining_3,
  maining_4: maining_4,
  maining_5: maining_5,
  maining_6: maining_6,
  bitcoin: bitcoin,
  hero_main: hero_main,
  hero_maining: hero_maining,
}

const props = defineProps<MenuImgProp>()
</script>

<template>
  <img loading="lazy" :src="imgList[props.img]">
</template>