<script setup lang="ts">
import navFooterLeft from '../../shared/ui/navbar/navFooterL.vue';
import navFooterRight from '../../shared/ui/navbar/navFooterR.vue';
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__body">
        <div class="footer__main main-footer">
          <a href="#" class="main-footer__logo">
            MEIN MINER
          </a>
          <button class="main-footer__order btn-order">
            Заказать звонок
          </button>
          <p class="main-footer__copyright copyright">&copy; Mein Miner, 2022</p>
        </div>
        <div class="footer__menu menu-footer">
          <div class="menu-footer__column">
            <button type="button" class="menu-footer__title">
              Покупателям
            </button>
            <navFooterLeft/>
          </div>
          <div class="menu-footer__column">
            <button type="button" class="menu-footer__title">
              Каталог товаров
            </button>
            <navFooterRight />
          </div>
        </div>
        <div class="footer__send send">
          <button class="send__order btn-order">
            Заказать звонок
          </button>
          <ul class="send__list">
            <li class="send__item"><a href="/" class="send__link">Публичная оферта</a></li>
            <li class="send__item"><a href="/" class="send__link">Политика конфиденциальности</a></li>
          </ul>
          <p class="send__copyright copyright">&copy; Mein Miner, 2022</p>
        </div>
      </div>
    </div>
  </footer>
</template>


<style lang="scss"></style>