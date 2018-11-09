<template>
  <div class="login-box shadow p-3 mb-5 bg-white rounded">
    <h1>{{ username }} - {{ team }}</h1>
    <div class="row">
      <div class="col-sm-12 play-controller">
        <h3>{{ subtitle }} {{ counter }}</h3>
        <button class="btn boutane" v-if="waitingForBuzz" @click="buzz()" v-bind:style="{ backgroundColor: color}">BUZZ</button>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'LobbyP',
  props: {
    socket: Object,
    color: String,
  },
  data() {
    return {
      currentRound: 1,
      waitingForBuzz: false,
      counter: '',
    };
  },
  computed: {
    room() {
      return this.$store.getters.currentRoom;
    },
    team() {
      return this.$store.getters.team;
    },
    username() {
      return this.$store.getters.username;
    },
    subtitle() {
      return this.waitingForBuzz ? 'BE QUICK' : 'Get ready';
    }
  },
  methods: {
    buzz() {
      this.socket.emit('player_buzz');
    }
  },
  created() {
    if (this.socket) {
      this.socket.on('game_waitForBuzz', () => {
        this.waitingForBuzz = true;
        this.counter = '';
      });

      this.socket.on('player_stopWaiting', () => {
        this.waitingForBuzz = false;
        this.counter = '';
      });

      this.socket.on('game_roundEnd', () => {
        this.currentRound = this.currentRound += 1;
        this.waitingForBuzz = false;
        this.counter = '';
      });

      this.socket.on('game_offerCounter', (team) => {
        if (this.team !== team) {
          this.waitingForBuzz = true;
          this.counter = 'COUNTER';
        }
      });
    }
  },
};
</script>

<style scoped>
.navbar {
  background-color: #242424;
  box-shadow: 1px 1px #212121;
}
.navbar-brand {
  font-family: 'Fascinate Inline', cursive;
  font-size: 40px;
}

.chat-window {
  font-family: 'Roboto Condensed', sans-serif;
  margin-top: 3em;
}

.main-contaier {
  padding: 0;
  height: 100%;
}

.chat, .users {
  height: calc(100vh - 3em - 200px);
}

.chat .container-fluid, .users .container-fluid {
  background-color: #313131;
  height: 100%;
}

.chat .container-fluid {
  text-align: left;
}

#messages { list-style-type: none; margin: 0; padding: 0; }
#messages li { padding: 5px 10px; }
#messages li:nth-child(odd) { background: #eee; }

form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
form button { width: 9%; background: rgb(130, 224, 255); border: none; }

.login-box {
  width: 100%;
}

.play-controller {
  margin-top: 15px;
  margin-bottom: 15px;
}
.boutane {
  margin: 10px;
}
</style>
