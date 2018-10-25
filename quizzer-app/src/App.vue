<template>
  <div id="app">
    <Home msg="Cool Squirrels"/>
  </div>
</template>

<script>
import Home from './components/Home.vue';

export default {
  name: 'app',
  components: {
    Home,
  },
};
</script>

<style>
body {
  background-color: #1e1e1e;
  color: #c1c1c1
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #1e1e1e;
}
/*
font-family: 'Shadows Into Light', cursive;
font-family: 'Fascinate Inline', cursive;
font-family: 'Roboto Condensed', sans-serif;
*/
</style>
