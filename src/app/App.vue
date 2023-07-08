<template>
  <Header />
  <Layout>
    <Hero />
    <Category />
    <Benefits />
    <BestSeller />
    <About />
    <Form />
    <Contact />
  </Layout>
  <Footer />
</template>

<script setup lang="ts">
import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';
import '@splidejs/vue-splide/css/core';
import './styles/style.min.css';
import Header from '../widgets/Header/index.vue';
import Layout from './layout/Layout.vue';
import Hero from '../widgets/Hero/index.vue';
import Category from '../widgets/Category/index.vue';
import Benefits from '../widgets/Benefits/index.vue';
import BestSeller from '../widgets/Bestseller/index.vue';
import About from '../widgets/About/index.vue';
import Form from '../widgets/Form/index.vue';
import Contact from '../widgets/Contact/index.vue';
import Footer from '../widgets/Footer/index.vue'
</script>

<style lang="scss"></style>