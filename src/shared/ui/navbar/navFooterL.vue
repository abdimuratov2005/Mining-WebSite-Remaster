<script lang="ts" setup>
import { useNavbarItems } from '../../../store/navbar';
const store = useNavbarItems();

</script>

<template>
  <ul class="menu-footer__list">
    <li class="menu-footer__item" v-for="item in store.navbarFooterLeft" :key="item.id">
      <a :href="item.link" class="menu-footer__link"> {{ item.name }}</a>
    </li>
  </ul>
</template>
