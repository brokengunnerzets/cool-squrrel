<template>
  <div class="login-box shadow p-3 mb-5 bg-white rounded">
    <h1>Room: {{ room }}</h1>
    <div class="row">
      <div class="col-sm-12 col-md-8 play-controller">
        <h2>Current Round: {{ currentRound }}</h2>
        <button class="btn boutane" v-bind:style="{ backgroundColor: color}" v-on:click="timerBtnFct()">{{ btnText }}</button>
        <button class="btn boutane" v-if="!timerStarted && timerPaused" v-bind:style="{ backgroundColor: color}">Resume</button>
        <button class="btn boutane" v-if="!timerStarted && timerPaused" v-bind:style="{ backgroundColor: color}">Reset</button>
        <stopwatch ref="timerRef"></stopwatch>
      </div>
      <div class="col-sm-12 col-md-4">
        <hr/>
        <h2>Users connected</h2>
        <b-list-group :key="index" v-for="(user, index) in users">
          <b-list-group-item>{{ user }}</b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'LobbyGM',
  components: { Stopwatch },
  props: {
    socket: Object,
    color: String,
  },
  data() {
    return {
      users: [],
      timerStarted: false,
      timerPaused: false,
      currentRound: 1,
    };
  },
  computed: {
    room() {
      return this.$store.getters.currentRoom;
    },
    btnText() {
      return this.timerStarted ? 'Pause': 'Start';
    },
  },
  methods: {
    timerBtnFct() {
      if (!this.timerStarted) {
        this.socket.emit('gm_timerStart', this.currentRound);
        this.$refs.timerRef.startTimer();
        this.setTimerData(true, false);
      } else {
        this.socket.emit('gm_timerPause', this.currentRound);
        // this.$refs.timerRef.startTimer();
        this.setTimerData(false, true);
      }
    },
    setTimerData(started, paused) {
      this.timerStarted = started;
      this.timerPaused = paused;
    }
  },
  created() {
    if (this.socket) {
      this.socket.on('userJoined', (username) => {
        this.users.push(username);
      });

      this.socket.on('userLeft', (username) => {
        const clone = _.cloneDeep(this.users);
        const newArray = _.remove(clone, value => value === username );
        this.users = clone;
      });

      this.socket.on('game_roundEnd', () => {
        this.currentRound = this.currentRound += 1;
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
