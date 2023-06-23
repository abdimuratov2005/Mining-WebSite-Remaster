<template>
  <section class="form">
    <div class="form__bg">
      <ImgLoader img="bgForm" />
    </div>
    <div class="form__container">
      <h1 class="form__title">
        не нашли то, что искали?
      </h1>
      <h1 class="form__subtitle">
        свяжитесь с нами, мы вам поможем!
      </h1>
      <div class="form__text">
        Заполните форму и мы свяжемся с Вами в ближайшее время
      </div>
      <Form />
    </div>
  </section>
</template>

<script setup lang="ts">
import Form from './components/form.vue';
import ImgLoader from '../../shared/ui/img-loader/loader.vue'

</script>

<style lang="scss"></style>