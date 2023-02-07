const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

io.on("connection", (socket) => {
  console.log("Server Socket Connected");
});

http.listen(8000, () => console.log("server port: ", 8000));
