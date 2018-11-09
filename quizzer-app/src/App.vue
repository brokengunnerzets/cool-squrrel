<template>
  <div id="app" class="container-fluid d-flex justify-content-center align-items-center flex-column" v-bind:style="{ backgroundColor: color}">
    <Login v-if="!room && !isGameMasterMode" :color="color" v-on:roomConnected="soc => setUpRoom(soc)"/>
    <PLobby v-if="room && !isGameMasterMode && socketRef" :color="color" :socket="socketRef" />
    <GMLogin v-if="!room && isGameMasterMode" :color="color" v-on:roomConnected="soc => setUpRoom(soc)"/>
    <GMLobby v-if="room && isGameMasterMode && socketRef" :color="color" :socket="socketRef" />
    <div v-if="!room">
      <button class="btn" v-on:click="toggleMode">{{ toggleText }}</button>
    </div>
  </div>
</template>

<script>
import randomcolor from 'randomcolor';
import Login from './components/PlayerMode/Login.vue';
import PLobby from './components/PlayerMode/GameLobby.vue';
import GMLogin from './components/GameMasterMode/LoginGameMaster';
import GMLobby from './components/GameMasterMode/GameLobby';

export default {
  name: 'app',
  components: {
    Login,
    PLobby,
    GMLogin,
    GMLobby,
  },
  data() {
    return {
      color: '#ffffff',
      isGameMasterMode: true,
      socketRef: null,
    }
  },
  computed: {
    room() {
      return this.$store.getters.currentRoom;
    },
    toggleText() {
      return this.isGameMasterMode ? 'Player Mode' : 'Game Master Mode';
    }
  },
  created() {
    this.color = randomcolor({ luminosity: 'light' });
  },
  methods: {
    toggleMode() {
      this.isGameMasterMode = !this.isGameMasterMode;
    },
    setUpRoom(soc) {
      this.socketRef = soc;
    }
  },
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
