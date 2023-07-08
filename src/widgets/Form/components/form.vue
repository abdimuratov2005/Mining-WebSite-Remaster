<script setup lang="ts">
import { useFormStore } from "../../../store/form";

const store = useFormStore()
</script>

<template>
  <form @submit.prevent="store.handleSubmit" class="form__form">
    <input type="text" name="name" v-model="store.form.name" placeholder="Ваше имя">
    <input type="tel" name="tel" v-model="store.form.tel" placeholder="Ваш телефон">
    <input type="submit" name="submit" id="submit" class="submit-top" value="Отправить">
  </form>
  <div class="form__checkbox">
    <input type="checkbox" v-model="store.form.checkbox">
      <span class="checkbox-text">
        Согласен на обработку персональных данных
      </span>
  </div>
  <input type="submit" name="submit" id="submit" class="submit-end" value="Отправить">
</template>


<style lang="scss"></style>