import Vue from 'vue';
import Vuex from 'vuex';

import App from './App.vue';

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    currentRoom: undefined,
  },
  getters: {
    currentRoom: s => s.currentRoom,
  },
});

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');
