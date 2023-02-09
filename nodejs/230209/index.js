const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

// list객체: socket아이디와 사용자 닉네임을 key, value로 저장
let list = {};

io.on("connection", (socket) => {
  console.log("Server Socket Connected", socket.id);
  socket.emit("info", socket.id);

  // io.emit("notice", `${socket.id}님이 입장하였습니다.`);
  socket.on("username", (name) => {
    list[socket.id] = name;
    io.emit("list", list);
    // 클라이언트에게 사용자 닉네임 전달
    io.emit("notice", name + "님이 입장하였습니다.");

    // 모든 클라이언트에게 메세지 전달
    socket.on("send", (json) => {
      // json의 key 값: msg, form, username, to
      // 메세지를 보낸 사람의 id를 list의 from으로, nickname을 username으로 저장
      json["from"] = socket.id;
      json["username"] = list[socket.id];
      json["is_dm"] = false;

      // to: 누구에게 보낼 것인지 설정
      // 1. json.to가 '전체'라면, 모든 사람에게 메세지를 보냄
      // 2. json.to가 '특정 누군가'라면, 그 사람에게만 메세지 보냄
      //  2-1) Object.keys(list): list 객체의 key값만 배열화
      //  2-2) 배열화 한 것에서 find 메서드 사용:
      //       list[k]와 json.to가 같으면(선택한 닉네임이 일치하면), 그 닉네임한테만 메세지 전송
      if (json.to === "전체") {
        io.emit("newMsg", json);
      } else {
        console.log(Object.keys(list));
        json["is_dm"] = true;
        const socketID = Object.keys(list).find((k) => list[k] === json.to);
        io.to(socketID).emit("newMsg", json);
        socket.emit("newMsg", json);
      }
    });

    // 클라이언트와의 연결이 끊길 경우, 퇴장메세지 전달
    socket.on("disconnect", () => {
      io.emit("notice", list[socket.id] + "님이 퇴장하셨습니다.");
      delete list[socket.id];
      // 퇴장한 사람 외에 채팅방에 있는 사용자 list 클라이언트로 전달
      io.emit("list", list);
    });
  });
});

http.listen(8000, () => console.log("server port: ", 8000));
