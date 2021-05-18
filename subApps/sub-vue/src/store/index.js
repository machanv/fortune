import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    num: 1
  },
  getters: {},
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    getUsername: (state, payload) => {
      state.username = payload;
    }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    incrementAsync({commit}) {  //异步
      setTimeout(() => {
        commit('increment');
      }, 1000)
    },
    actionA({commit}) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    }
  },
  modules: {}
})

