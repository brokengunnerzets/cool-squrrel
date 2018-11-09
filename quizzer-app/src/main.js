import Vue from 'vue';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';

Vue.use(Vuex);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    currentRoom: undefined,
  },
  actions: {
    setCurrentRoom: ({ commit }, roomName) => {
      commit('SET_ROOM', roomName);
    },
  },
  getters: {
    currentRoom: s => s.currentRoom,
  },
  mutations: {
    SET_ROOM: (s, room) => {
      s.currentRoom = room; // eslint-disable-line
    },
  },
});

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');
