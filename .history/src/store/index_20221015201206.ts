import { createStore,Store } from 'vuex'

declare module '@vue/runtime-core' {
  // 声明自己的 store state
  interface State {
    isFirstLoad: boolean
    totalPeople: number
  }

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

export default createStore({
  state: {
    isFirstLoad: true,
    totalPeople: 0
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
