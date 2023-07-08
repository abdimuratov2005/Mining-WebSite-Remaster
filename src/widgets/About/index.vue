<script setup lang="ts">
import ImgLoader from '../../shared/ui/img-loader/loader.vue'
import advantage from './components/advantage.vue';
</script>

<template>
  <section class="about">
    <div class="about__container">
      <h1 class="about__title">
        о КОМПАНИИ
      </h1>
      <div class="about__content content">
        <div class="content__text">
          С 2017 года Main-miner поставляет технику для майнинга на российский рынок оптом. За пять лет мы смогли укрепить
          свои позиции на рынке оборудования, вырастили персонал, прекрасно разбирающийся в каждом типе асиков
          и комплектующих.
          <br>
          <br>
          Если вы хотите купить асики оптом, то с нами можете быть уверены как в качестве техники, так и в надёжности
          сотрудничества. Лучше всего о нас говорит репутация!
        </div>
        <div class="content__img">
          <ImgLoader img="about" />
        </div>
      </div>
      <div class="about__advantage">
        <advantage />
      </div>
    </div>
  </section>
</template>



<style lang="scss"></style>