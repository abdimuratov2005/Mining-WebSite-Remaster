<template>
  <div class="benefit__right">
    <div 
      class="benefit__benefits benefits"
      v-for="benefit in store.benefits"
      :key="benefit.id"
    >
      <ImgLoader img="check"/>
      <h4 class="benefits__info">
        {{ benefit.info }}
      </h4>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useBenefitsStore} from '../../../store/benefits';
import ImgLoader from '../../../shared/ui/img-loader/loader.vue';
const store = useBenefitsStore()
</script>

<style lang="scss"></style>