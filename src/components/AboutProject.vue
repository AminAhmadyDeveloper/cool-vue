<script setup>
const title = 'About Project'
const styles = {
  containerClass: 'flex flex-col items-center justify-center',
  bigHeaderClass: 'font-semibold text-2xl md:text-4xl opacity-90 my-2 text-vue-secondary',
  paragraphClass: 'text-vue-secondary my-4 text-xl'
}
</script>

<template>
  <div :class="styles.containerClass">
    <h1 :class="styles.bigHeaderClass">{{ title }}</h1>
    <p :class="styles.paragraphClass">This is a cool <code>Vue.js</code> project</p>
    <p :class="styles.paragraphClass"><code>Vue + Vuex + Vue Router + Tailwind</code></p>
  </div>
</template>
