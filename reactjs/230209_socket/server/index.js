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
  // 채팅방 입장
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
      data['isDm'] = false;

      if (data.to === '전체') {
        io.emit('newMsg', data);
      } else {
        data['isDm'] = true;
        const socketID = Object.keys(users).find((id) => users[id] === data.to);
        io.to(socketID).emit('newMsg', data);
        socket.emit('newMsg', data);
      }
    });
  });

  // 채팅방 퇴장
  socket.on('disconnect', () => {
    io.emit('notice', {
      username: users[socket.id],
      msg: '님이 퇴장하였습니다.',
    });
    delete users[socket.id];
    io.emit('users', users);
  });
});

http.listen(4000, () => console.log('4000 server running'));
