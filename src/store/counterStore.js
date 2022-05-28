import { createStore } from 'vuex'

const counterStore = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) { return state.count++ }
  }
})

export default counterStore
