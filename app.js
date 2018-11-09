const path = require('path');
const express = require('express');

const utils = require('./utils');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;
const io = require('socket.io')(http);
const _ = require('lodash');

const ROOM_NAMES = [];
const ROOMS = [];
const USERNAMES = [];

  // socket.on('adduser', function(username){
  //   socket.username = username;
  //   USERNAMES.push(username);
  //   socket.emit('userJoined', { username });
  // });

  // socket.on('joinroom', function(room){
  //   socket.room = room;
  // });
	// // when the client emits 'adduser', this listens and executes
	// socket.on('adduser', function(username){
	// 	// store the username in the socket session for this client
	// 	socket.username = username;
	// 	// store the room name in the socket session for this client
	// 	socket.room = 'room1';
	// 	// add the client's username to the global list
	// 	usernames[username] = username;
	// 	// send client to room 1
	// 	socket.join('room1');
	// 	// echo to client they've connected
	// 	socket.emit('updatechat', 'SERVER', 'you have connected to room1');
	// 	// echo to room 1 that a person has connected to their room
	// 	socket.broadcast.to('room1').emit('updatechat', 'SERVER', username + ' has connected to this room');
	// 	socket.emit('updaterooms', rooms, 'room1');
	// });

	// // when the client emits 'sendchat', this listens and executes
	// socket.on('sendchat', function (data) {
	// 	// we tell the client to execute 'updatechat' with 2 parameters
	// 	io.sockets.in(socket.room).emit('updatechat', socket.username, data);
	// });

	// socket.on('switchRoom', function(newroom){
	// 	// leave the current room (stored in session)
	// 	socket.leave(socket.room);
	// 	// join new room, received as function parameter
	// 	socket.join(newroom);
	// 	socket.emit('updatechat', 'SERVER', 'you have connected to '+ newroom);
	// 	// sent message to OLD room
	// 	socket.broadcast.to(socket.room).emit('updatechat', 'SERVER', socket.username+' has left this room');
	// 	// update socket session room title
	// 	socket.room = newroom;
	// 	socket.broadcast.to(newroom).emit('updatechat', 'SERVER', socket.username+' has joined this room');
	// 	socket.emit('updaterooms', rooms, newroom);
	// });

	// // when the user disconnects.. perform this
	// socket.on('disconnect', function(){
	// 	// remove the username from global usernames list
	// 	delete usernames[socket.username];
	// 	// update list of users in chat, client-side
	// 	io.sockets.emit('updateusers', usernames);
	// 	// echo globally that this client has left
	// 	socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
	// 	socket.leave(socket.room);
	// });
// });

app.use(express.static(path.join(__dirname, '/quizzer-app/dist')))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/quizzer-app/dist/index.html');
});

app.get('/rooms/:roomName', (req, res) => {
	const { roomName } = req.params;

	const roomExists = ROOM_NAMES.includes(roomName);

	return res.status(200).json({ isValid: roomExists });
});

app.get('/users/:username', (req, res) => {
	const { username } = req.params;
	const userDontExist = !USERNAMES.includes(username);

	return res.status(200).json({ isValid: userDontExist });
});

app.get('/newRoom', (req, res) => {
  let newName = utils.getNewRoomName();
  let index = ROOM_NAMES.findIndex(room => room === newName);

  while (index > -1) {
    newName = utils.getNewRoomName();
    index = ROOM_NAMES.findIndex(room => room === newName);
	}
	
	ROOM_NAMES.push(newName);
	const socketName = `/${newName}`;
	const room = io
	.of(socketName)
	.on('connection', function (socket) {
		socket.on('gameMasterConnect', (data) => {
			socket.isGameMaster = true;
			socket.username = data;
			USERNAMES.push(data);
		});

		socket.on('userConnect', (data) => {
			socket.isGameMaster = false;
			socket.username = data;
			USERNAMES.push(data);
			room.emit('userJoined', data);
		});

		socket.on('startRound', (ms) => {
			room.emit('startTimer');
		});

		socket.on('gm_roundStart', () => {
			room.emit('game_waitForBuzz');
		});

		socket.on('disconnect', () => {
			if (socket.isGameMaster) {
				room.emit('roomClosed');
				room.removeAllListeners();
				delete io.nsps[socketName];
			} else {
				const clone = _.cloneDeep(USERNAMES);
				_.remove(clone, value => value === socket.username);
				USERNAMES = clone;
				room.emit('userLeft', socket.username);
			}
			
		});
	});
	ROOMS.push(room);
  return res.status(200).json({ roomName: newName });
});

http.listen(port, function(){
  console.log(`listening on *: ${port}`);
});