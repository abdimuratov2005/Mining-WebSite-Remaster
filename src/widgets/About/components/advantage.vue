<script setup lang="ts">
import { useAboutStore } from '../../../store/about'
const store = useAboutStore()
</script>

<template>
  <div class="advantage" v-for="advantage in store.advantages" :key="advantage.id">
    <div class="advantage__icon">
      <span :class="advantage.icon"></span>
    </div>
    <div class="advantage__text">
      {{ advantage.text }}
    </div>
  </div>
</template>