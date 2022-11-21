const http = require('http');
const fs = require("fs").promises;
const server = http.createServer(function(req,res){  //클라이언트가 서버에 접속했을 때 실행될 함수
    // res.write("<h1>Hello</h1>");  //응답 중
    // res.end("<hr>"); //응답 끝
    fs.readFile("./test.html")
    .then(function(data){
        res.end(data.toString());
    });
});
//req=request(클라이언트가 서버에게 요청)
//res=response(서버가 클라이언트에게 하는 응답)

// server.on() //이벤트를 등록
// server.listen() //서버를 실행하고 클라이언트를 기다림

server.listen(8080, function() {
    console.log('8080번 포트로 실행');
});
//실행하려면 http://localhost:포트번호/ 인터넷에 검색해야 함, 취소하는 방법 ctrl+c