import { createStore,Store } from 'vuex'

declare module '@vue/runtime-core' {
  // 声明自己的 store state
  interface State {
    isFirstLoad: boolean,
    totalPeople: number,
    userData: any,
    headerData: number
  }

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

let localData = localStorage.getItem("userData")
localData = typeof localData == "string" ? localData : '{}'

export default createStore({
  state: {
    isFirstLoad: true,
    totalPeople: 0,
    userData: JSON.parse(localData),
    headerData: 1
  },
  getters: {
  },
  mutations: {
    load(state) {
      state.isFirstLoad = false
    },
    clearUserData(state) {
      state.userData = ""
    }
  },
  actions: {
  },
  modules: {
  }
})
