<template>
  <div class="login-box shadow p-3 mb-5 bg-white rounded">
    <b-alert variant="danger"
             dismissible
             :show="showAlert"
             @dismissed="showAlert=false">
      {{ errorText }}
    </b-alert>
    <h1>Join a Game</h1>
    <form v-on:submit.prevent>
      <div class="form-group">
        <label for="inputUsername">Username</label>
        <input v-model="username" type="text" class="form-control" id="inputUsername" aria-describedby="username" placeholder="Enter username">
        <small class="form-text text-muted">This will be your identity in the game.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Room</label>
        <input v-model="roomName" type="text" class="form-control" id="inputRoom" aria-describedby="room" placeholder="Enter room code">
        <small id="emailHelp" class="form-text text-muted">Ask the game master for the game code.</small>
      </div> 
      <button v-on:click="connect" class="btn" v-bind:style="{ backgroundColor: color}">Join</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Login',
  props: {
    color: String,
  },
  data: () => ({
    username: '',
    roomName: '',
    errorText: '',
    showAlert: false,
  }),
  methods: {
    async connect() {
      if (!this.username || !this.roomName) {
        this.toggleAlert('Username and room required');
        return;
      }

      const { data: roomValidation } = await axios.get(`/rooms/${this.roomName}`);

      if (!roomValidation.isValid) {
        this.toggleAlert('Room doesn\'t exists');
        return;
      }

      const { data: userValidation } = await axios.get(`/users/${this.username}`);

      if (!userValidation.isValid) {
        this.toggleAlert('Username is not available.');
        return;
      }

      const socket = io(`/${this.roomName}`);
      socket.emit('userConnect', this.username);
    },
    toggleAlert(message) {
        this.errorText = message;
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false
        }, 2000);
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
