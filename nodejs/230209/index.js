const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

io.on("connection", (socket) => {
  // console.log("Server Socket Connected", socket.id);
  io.emit("notice", `${socket.id}님이 입장하였습니다.`);
});

http.listen(8000, () => console.log("server port: ", 8000));
