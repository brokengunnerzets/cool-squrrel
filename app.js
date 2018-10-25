const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = process.env.PORT || 3000;

io.on('connection', function(socket){
  console.log('CONNECTED');
  socket.on('chat message', function(msg){
    console.log('message');
    io.emit('chat message', msg);
  });
});

app.use(express.static(path.join(__dirname, '/quizzer-app/dist')))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/quizzer-app/dist/index.html');
});

http.listen(port, function(){
  console.log(`listening on *: ${port}`);
});