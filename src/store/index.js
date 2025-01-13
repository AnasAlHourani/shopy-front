import { createStore } from 'vuex'

import authStore from './Auth/main';
import notificationStore from './NotficationStore/main';
import myProductStore from './MyProductStore/main';

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
    notificationStore,
    myProductStore,
  }
})
