import { createStore } from 'vuex'

export default createStore({
  state: {
    name: 'default',
  },
  mutations: {
    setName(state, val) {
      state.name = val
    }
  },
  actions: {
    async changeName({commit}, name) {
      commit('setName', name)
    }
  },
  modules: {
  }
})
