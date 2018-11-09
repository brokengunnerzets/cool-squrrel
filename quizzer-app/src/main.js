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
    setUsername: ({ commit }, username) => {
      commit('SET_USERNAME', username);
    },
    setTeam: ({ commit }, team) => {
      commit('SET_TEAM', team);
    },
  },
  getters: {
    currentRoom: s => s.currentRoom,
    team: s => s.team,
    username: s => s.username,
  },
  mutations: {
    SET_ROOM: (s, room) => {
      s.currentRoom = room; // eslint-disable-line
    },

    SET_USERNAME: (s, username) => {
      s.username = username; // eslint-disable-line
    },

    SET_TEAM: (s, team) => {
      s.team = team; // eslint-disable-line
    },
  },
});

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');
