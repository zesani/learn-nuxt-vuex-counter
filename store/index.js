import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    counter: state => {
      return state.counter
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    decrement (context) {
      context.commit('decrement')
    }
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    decrement (state) {
      if (state.counter > 0) {
        state.counter--
      }
    }
  }
})

export default store
