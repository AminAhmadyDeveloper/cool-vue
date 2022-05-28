<script setup>
import MainPage from './views/MainPage.vue'
const containerClass = 'bg-gray-300 h-screen'
</script>

<template>
  <div :class="containerClass">
    <MainPage />
  </div>
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
