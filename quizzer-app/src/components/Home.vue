<template>
  <div class="container-fluid main-contaier">
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#">CoolSquirrel</a>
    </nav>
    <div class="container">
      asdddddddddd
    </div>
  </div>
</template>

<script>
import Login from './Login';

export default {
  name: 'Home',
  components: { Login },
  data: () => ({
    // socketSetupDone: false,
    // socket: io.connect(),
    // messages: [],
    currentMessage: '',
  }),
  // created() {
  //   this.socket.on('chat message', function (data) {
  //     console.log('Asdasd');
  //     this.messages.push(data);
  //   }.bind(this));
  // },
  methods: {
    // sendMessage() {
    //   if (this.currentMessage) {
    //     this.socket.emit('chat message', this.currentMessage);
    //     this.currentMessage = '';
    //   }
    // }
  }
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
</style>
