const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());

let users = {};
io.on('connection', (socket) => {
  console.log('server open' + socket.id);
  socket.emit('socketID', socket.id);

  socket.on('username', (username) => {
    users[socket.id] = username;

    io.emit('users', users);
    io.emit('notice', {
      username: username,
      msg: '님이 입장하였습니다.',
    });

    socket.on('sendMsg', (data) => {
      console.log(data);
      data['from'] = socket.id;
      data['username'] = users[socket.id];
      io.emit('newMsg', data);
    });
  });
});

http.listen(4000, () => console.log('4000 server running'));
