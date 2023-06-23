<script lang="ts" setup>
import { useNavbarItems } from '../../../store/navbar';
import { useHeaderMain } from '../../../store/headermain';
const { menuShow } = useHeaderMain()
const store = useNavbarItems();

</script>

<template>
  <nav class="nav__body" :class="{_active : menuShow}">
    <ul class="nav__list">
      <li class="nav__item" v-for="item in store.navbar" :key="item.id">
        <a :href="item.link" class="nav__link"> {{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>
