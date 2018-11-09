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

		socket.on('userConnect', ({ username, team }) => {
			socket.isGameMaster = false;
			socket.username = username;
			socket.team = `team${team}`;
			USERNAMES.push(username);
			room.emit('userJoined', { username, team: `team${team}` });
		});

		socket.on('gm_roundStart', () => {
			room.emit('game_waitForBuzz');
			room.awaitingBuzz = true;
		});

		socket.on('gm_roundEnd', () => {
			room.emit('game_roundEnd');
			room.awaitingBuzz = false;
		});

		socket.on('player_buzz', () => {
			if (room.awaitingBuzz) {
				room.awaitingBuzz = false;
				room.emit('gm_receiveBuzz', { username: socket.username, team: socket.team });
				room.emit('player_stopWaiting');
			}
		});

		socket.on('gm_offerCounter', (team) => {
			room.awaitingBuzz = true;
			room.emit('game_offerCounter', team);
		})

		socket.on('disconnect', () => {
			if (socket.isGameMaster) {
				room.emit('roomClosed');
				room.removeAllListeners();
				delete io.nsps[socketName];
			} else {
				const clone = _.cloneDeep(USERNAMES);
				_.remove(clone, value => value === socket.username);
				room.emit('userLeft', { team: `team${socket.team}`, username: socket.username });
			}
			
		});
	});
	ROOMS.push(room);
  return res.status(200).json({ roomName: newName });
});

http.listen(port, function(){
  console.log(`listening on *: ${port}`);
});