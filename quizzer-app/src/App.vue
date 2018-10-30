<template>
  <div id="app">
    <Home v-if="room"/>
    <Login v-if="!room"/>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Login from './components/Login.vue';

export default {
  name: 'app',
  components: {
    Home,
    Login,
  },
  computed: {
    room() {
      return this.$store.getters.currentRoom;
    }
  }
};
</script>

<style>
body {
  background-color: #ffffff;
  color: #1e1e1e
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #ffffff;
}
/*
font-family: 'Shadows Into Light', cursive;
font-family: 'Fascinate Inline', cursive;
font-family: 'Roboto Condensed', sans-serif;
*/
</style>
