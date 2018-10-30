<template>
  <div id="app" class="container-fluid d-flex justify-content-center align-items-center" v-bind:style="{ backgroundColor: color}">
    <Home v-if="room"/>
    <Login v-if="!room" :color="color"/>
  </div>
</template>

<script>
import randomcolor from 'randomcolor';
import Home from './components/Home.vue';
import Login from './components/Login.vue';

export default {
  name: 'app',
  components: {
    Home,
    Login,
  },
  data() {
    return {
      color: '#ffffff',
    }
  },
  computed: {
    room() {
      return this.$store.getters.currentRoom;
    }
  },
  created() {
    this.color = randomcolor({ luminosity: 'light' });
  }
};
</script>

<style>
body {
  color: #1e1e1e;
  min-height: 100vh;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  min-height: 100vh;
}
/*
font-family: 'Shadows Into Light', cursive;
font-family: 'Fascinate Inline', cursive;
font-family: 'Roboto Condensed', sans-serif;
*/
</style>
