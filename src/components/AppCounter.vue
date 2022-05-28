<script setup>
import counterStore from '@/store/counterStore'
const title = 'Vuex State Counter'
const message = 'Click on button to add 1 to counter'
const styles = {
  containerClass: 'flex flex-col items-center justify-center',
  bigHeaderClass: 'font-semibold text-2xl md:text-4xl opacity-90 my-2 text-vue-secondary',
  paragraphClass: 'text-vue-secondary my-4 text-xl',
  buttonClass: 'text-xl opacity-90 my-4 px-4 py-2 bg-vue-primary rounded'
}
const onCountClick = () => counterStore.commit('increment')
</script>

<template>
  <div :class="styles.containerClass">
    <h1 :class="styles.bigHeaderClass">{{ title }}</h1>
    <p :class="styles.paragraphClass">{{ message }}</p>
    <button :class="styles.buttonClass" @click="onCountClick">Count is : {{ counterStore.state.count }}
    </button>
  </div>
</template>
