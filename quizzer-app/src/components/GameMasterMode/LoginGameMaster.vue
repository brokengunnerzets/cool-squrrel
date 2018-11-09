<template>
  <div class="login-box shadow p-3 mb-5 bg-white rounded">
    <b-alert variant="danger"
             dismissible
             :show="showAlert"
             @dismissed="showAlert=false">
      {{ errorText }}
    </b-alert>
    <h1>Create a Game</h1>
    <div class="form-group">
      <label for="inputUsername">Username</label>
      <input v-model="username" type="text" class="form-control" id="inputUsername" aria-describedby="username" placeholder="Enter username">
      <small class="form-text text-muted">This will be your identity as the gamemaster.</small>
    </div>
    <button class="btn" v-bind:style="{ backgroundColor: color}" v-on:click="createRoom">Create</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginGameMaster',
  props: {
    color: String,
  },
  data: () => ({
    username: '',
    showAlert: false,
    errorText: 'Something wrong happened',
  }),
  methods: {
    async createRoom() {
      try {
        if (!this.username) {
          this.errorText = 'Username required';
          this.showAlert = true;
          return;
        }
        const { data } = await axios.get('/newRoom');
        const socket = io(`/${data.roomName}`);
        socket.emit('gameMasterConnect', this.username);
        this.$emit('roomConnected', socket);
        this.$store.dispatch('setCurrentRoom', data.roomName);
      } catch(error) {
        this.errorText = error.message;
        this.showAlert = true;
      }
    }
  }
};
</script>

<style scoped>
.login-box {
  width: 100%;
  max-width: 600px;
  text-align: center;
}
</style>
