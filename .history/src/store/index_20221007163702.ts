import { createStore, Store } from 'vuex'

export default createStore({
  state: {
    isFirstLoad: true
  },
  getters: {
  },
  mutations: {
    load(state) {
      state.isFirstLoad = false
    }
  },
  actions: {
  },
  modules: {
  }
})
