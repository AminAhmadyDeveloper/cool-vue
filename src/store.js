import { createStore } from 'vuex'
import counterStore from '@/store/counterStore'

const store = createStore({
  modules: {
    counterStore
  }
})

export default store
