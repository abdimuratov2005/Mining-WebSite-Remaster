<script setup lang="ts">
interface ModalProps{
  close: () => void
}
const props = defineProps<ModalProps>()
</script>

<template>
  <div class="modal">
    <div class="modal__container">
      <div class="close" @click="props.close"></div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped> 
.modal{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  &__container {
    width: 30rem;
    height: 20rem;
    background-color: #fff;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
  }
}
.close{
  position: absolute;
  right: 1.5rem;
  top: 1rem;
  cursor: pointer;
  &::before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    transform: rotate(-45deg);
    width: 1.5rem;
    height: 1.5rem;
    border-top: solid 1px #000;
  }
  &::after{
    position: absolute;
    content: '';
    left: 0;
    bottom: -.5rem;
    width: 1.5rem;
    height: 1.5rem;
    transform: rotate(45deg);
    border-bottom: solid 1px #000;
  }
}
</style>