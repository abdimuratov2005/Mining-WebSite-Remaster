<script lang="ts" setup>
import { useNavbarItems } from '../../../store/navbar';
const store = useNavbarItems();
interface Props {
  toggleClassName?: boolean
}
const props = defineProps<Props>()
</script>

<template>
  <nav class="nav__body" :class="{_active : props.toggleClassName}">
    <ul class="nav__list">
      <li class="nav__item" v-for="item in store.navbar" :key="item.id">
        <a :href="item.link" class="nav__link"> {{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>
