<script lang="ts" setup>
import { useContactData } from '../../../store/contactdata';
const store = useContactData()
</script>

<template>
  <div class="header__top">
    <div class="header__top_container">
      <div class="header__top_left">
        <div class="header__top_email">
          <div class="header__top_icon">
            <a :href="'mailto:' + store.mailto" class="_icon-mail"></a>
            <a :href="'mailto:' + store.mailto" class="header__top_address"
              >{{ store.mailto }}</a
            >
          </div>
        </div>
        <div class="header__top_call">
          <div class="header__top_icon">
            <a :href="`tel:${store.phone}`" class="_icon-phone"></a>
            <a :href="`tel:${store.phone}`" class="header__top_number"
              >{{ `+${store.phone}` }}</a
            >
          </div>
        </div>
      </div>

      <div class="header__top_right">
        <div class="header__top_messagers">
          <a href="/" class="_icon-telegram"></a>
          <a href="/" class="_icon-whats-app"></a>
        </div>
      </div>
    </div>
  </div>
</template>