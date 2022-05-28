<script setup>
import { RouterLink, RouterView } from 'vue-router'
const styles = {
  containerClass: 'h-screen flex flex-col items-center justify-center',
  logoClass: 'w-[30vh] animate-pulse-3s'
}
</script>

<template>
  <div :class="styles.containerClass">
    <img src="@/assets/vue.svg" :class="styles.logoClass" />
    <div class="flex w-3/12 justify-evenly my-3 border-2 border-vue-secondary rounded py-3">
      <RouterLink to="/" :class="this.$route.name === 'Counter' ? 'text-vue-primary font-bold' : null">
        Counter
      </RouterLink>
      <a class="text-vue-secondary"> | </a>
      <RouterLink to="/about" :class="this.$route.name === 'About' ? 'text-vue-primary font-bold' : null">
        About
      </RouterLink>
    </div>
    <RouterView />
  </div>
</template>
