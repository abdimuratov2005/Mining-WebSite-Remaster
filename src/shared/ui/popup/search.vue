<script setup lang="ts">
interface SearchProps {
  search: string;
  searching: () => void;
}
const props = defineProps<SearchProps>()
</script>

<template>
  <div class="search-bar">
    <h1>SearchBar</h1>
    <input type="text" class="search-input" v-model="props.search" @keypress.enter="props.searching" />
  </div>
</template>

<style lang="scss" scoped>
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