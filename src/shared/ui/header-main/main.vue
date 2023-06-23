<script lang="ts" setup>
import Navbar from '../navbar/nav.vue';
import Modal from '../popup/modal.vue';
import { useHeaderMain } from '../../../store/headermain';
import { useUserStore } from '../../../store/user';
const user = useUserStore();
const store = useHeaderMain();

</script>

<template>
  <div class="header__main" @submit.prevent>
    <div class="header__main_container">
      <a href="/" class="header__main_logo">MEIN MINER</a>
      <div class="header__main_nav">
        <Navbar />
        <button class="header__main_order btn-order">Заказать звонок</button>
      </div>
      <div class="header__main_actions action">
        <div class="action__search">
          <div class="action__search_form">
            <a @click="store.showSearchBar" class="action__icon _icon-search"></a>
          </div>
        </div>
        <div class="action__favorite" @click="store.showModal">
          <a  class="action__icon _icon-favorite">
            <span>{{ user.header.favorite }}</span>
          </a>
        </div>
        <div class="action__korzina" @click="store.showModal">
          <a  class="action__icon _icon-korzina">
            <span>{{ user.header.korzina }}</span>
          </a>
        </div>
        <div class="action__menu" @click="store.showMenu">
          <span></span>
        </div>
      </div>
    </div>
  </div>
  <Modal :close="store.allModalClose" v-if="store.modalShow || store.searchBar">
    <div v-if="store.modalShow">
      <h1>Modal</h1>
    </div>
    <div v-else-if="store.searchBar" class="search-bar">
      <h1>SearchBar</h1>
      <input type="text" class="search-input" v-model="store.search" @keypress.enter="store.searching"/>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
.action__search{
  position: relative;
}
.search-bar{
  text-align: center;
}
.search-input {
  border-radius: 1rem;
  outline: none;
  border: solid 1px #000;
  font-size: 1rem;
  padding: .7rem 2rem;
  
}
</style>