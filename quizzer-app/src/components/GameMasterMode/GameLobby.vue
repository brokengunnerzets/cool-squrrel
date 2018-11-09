<template>
  <div class="login-box shadow p-3 mb-5 bg-white rounded">
    <h1>Room: {{ room }}</h1>
    <div class="row">
      <div class="col-sm-12 col-md-8 play-controller">
        <h2>Current Round: {{ currentRound }}</h2>
        <button class="btn boutane" v-if="!timerStarted && !timerPaused" v-bind:style="{ backgroundColor: color}" v-on:click="timerBtnFct()">{{ btnText }}</button>
        <button class="btn boutane" v-if="!timerStarted && timerPaused" @click="counterOffer()" v-bind:style="{ backgroundColor: color}">Counter</button>
        <button class="btn boutane" v-if="!timerStarted && timerPaused" @click="resetRound()" v-bind:style="{ backgroundColor: color}">Reset</button>
        <audio ref="audioRef">
          <source src="/sounds/buzzer-team-1.mp3" type="audio/mpeg">
        </audio>
      </div>
      <div class="col-sm-12 col-md-4">
        <hr/>
        <h2>Users connected</h2>
        <hr/>
        <h3>Team 1</h3>
        <b-list-group :key="index" v-for="(user, index) in users.team1">
          <b-list-group-item :class="{ buzzed: user === playerBuzzed }">{{ user }}</b-list-group-item>
        </b-list-group>
        <hr/>
        <h3>Team 2</h3>
        <b-list-group :key="index" v-for="(user, index) in users.team2">
          <b-list-group-item :class="{ buzzed: user === playerBuzzed }">{{ user }}</b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'LobbyGM',
  props: {
    socket: Object,
    color: String,
  },
  data() {
    return {
      users: {
        team1: [],
        team2: [],
      },
      timerStarted: false,
      timerPaused: false,
      currentRound: 1,
      playerBuzzed: '',
      teamBuzzed: '',
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
        this.socket.emit('gm_roundStart', this.currentRound);
        this.setTimerData(true, false);
      }
    },
    setTimerData(started, paused) {
      this.timerStarted = started;
      this.timerPaused = paused;
    },
    playSound() {
      this.$refs.audioRef.play();
    },
    resetRound() {
      this.socket.emit('gm_roundEnd');
    },
    counterOffer() {
      this.socket.emit('gm_offerCounter', this.teamBuzzed);
      this.teamBuzzed = '';
      this.playerBuzzed = '';
    }
  },
  created() {
    if (this.socket) {
      this.socket.on('userJoined', ({ username, team }) => {
        this.users[team].push(username);
      });

      this.socket.on('userLeft', ({ username, team }) => {
        const clone = _.cloneDeep(this.users[team]);
        const newArray = _.remove(clone, value => value === username );
        this.users[team] = clone;
      });

      this.socket.on('game_roundEnd', () => {
        this.currentRound = this.currentRound += 1;
        this.timerStarted = false;
        this.timerPaused = false;
        this.playerBuzzed = '';
        this.teamBuzzed = '';
      });

      this.socket.on('gm_receiveBuzz', ({ username, team }) => {
        this.playerBuzzed = username;
        this.teamBuzzed = team;
        this.timerPaused = true;
        this.setTimerData(false, true);
        this.playSound();
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

.buzzed {
  background-color: red;
  font-size: 600;
}
</style>
