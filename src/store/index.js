import { createStore } from 'vuex'

import authStore from './Auth/main';

export default createStore({
  state: {
    backEndIp: 'http://localhost:3000/',
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authStore,
  }
})
