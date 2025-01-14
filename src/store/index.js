import { createStore } from 'vuex'

import authStore from './Auth/main';
import notificationStore from './NotficationStore/main';
import myProductStore from './MyProductStore/main';
import homeProductStore from './HomeProductsStore/main';
import favorateProductsStore from './FavorateProductsStore/main';

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
    homeProductStore,
    favorateProductsStore,
  }
})
