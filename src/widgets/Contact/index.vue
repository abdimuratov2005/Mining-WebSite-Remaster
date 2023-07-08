<script setup lang="ts">
import { useContactData } from '../../store/contactdata';
const store = useContactData()
</script>

<template>
  <section class="contact">
    <div class="contact__container">
      <div class="contact__text text">
        <h1 class="contact__title">контакты</h1>
        <ul class="text__list">
          <li class="text__item _icon-geo"><a href="https://goo.gl/maps/JtGRUDfnjf7cgUt56" class="text_link">г. Москва,
              ул. Покровка, 47А</a></li>
          <li class="text__item _icon-M"><a href="/" class="text_link">м. Курская</a></li>
          <li class="text__item _icon-email-2"><a :href="'mailto:' + store.mailto" class="text_link">{{ store.mailto }}</a></li>
          <li class="text__item _icon-phone-2"><a :href="`tel:${store.phone}`" class="text_link">+{{ store.phone }}</a></li>
          <li class="text__item _icon-grafik"><a href="" class="text_link">График работы: ежедневно с 9:00 до 20:00</a>
          </li>
        </ul>
        <div class="contact__social social">
          <ul class="social__list">
            <li class="social__item"><a href="/" class="social__link _icon-telegram-2"></a></li>
            <li class="social__item"><a href="/" class="social__link _icon-whats-app-2"></a></li>
          </ul>
        </div>
      </div>
      <div class="contact__img">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d140.29473433663284!2d37.6537431!3d55.7634399!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a89bfdd7051%3A0xd7f72b70d5d92719!2z0YPQuy4g0J_QvtC60YDQvtCy0LrQsCwgNDcgItCQLCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTA1MDYy!5e0!3m2!1sru!2s!4v1687509811210!5m2!1sru!2s" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>
</template>


<style lang="scss"></style>