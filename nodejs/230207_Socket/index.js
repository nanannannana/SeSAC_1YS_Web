const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/prac1", (req, res) => {
  res.sendFile(__dirname + "/prac1.html");
});

// 클라이언트 소켓이 연결이 되면 콜백 함수가 실행
// socket: 클라이언트 소켓과 연결 된 후, 새로 생성된 소켓
// 'connection' : socket.io의 기본 이벤트, 사용자가 웹사이트에 접속하면 자동으로 발생하는 이벤트
io.on("connection", (socket) => {
  // socket.id: 각 브라우저 마다 다른 id가 존재(?)
  // console.log("Server Socket Connected", socket.id);
  console.log("Server Socket Connected");

  // 메세지 보내기: socket.emit('이벤트명', data)
  // 메세지 받기: socket.on('이벤트명', (data) => {})
  socket.emit("welcome", { msg: "welcome" });
  socket.on("response", (data) => console.log("받아 온 데이터: ", data));

  //실습1
  // 1-1)함수 여러개
  //   socket.on("hello", (data) => {
  //     console.log("client", data);
  //     socket.emit("hello_res", "안녕하세요!");
  //   });
  //   socket.on("study", (data) => {
  //     console.log("client", data);
  //     socket.emit("study_res", "공부합시다!");
  //   });
  //   socket.on("bye", (data) => {
  //     console.log("client", data);
  //     socket.emit("bye_res", "안녕하가세요!");
  //   });

  // 1-2)함수 한번에
  let data = { hello: "안녕하세요", study: "공부하세요", bye: "안녕히가세요" };
  socket.on("send", (msg) => {
    console.log("client", msg);
    socket.emit("response", msg + ":" + data[msg]);
  });

  // disconnect: 연결이 끊겼을 때 발생하는 이벤트
  socket.on("disconnect", () => {
    console.log("Server Socket disconnected");
  });
});

http.listen(8000, () => {
  console.log("server port :", 8000);
});
