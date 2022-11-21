const http = require("http");

//클라이언트가 서버에 접속했을 때 실행될 함수
const server = http.createServer(function(req,res) {
    res.write("<h1>hello</h1>") //응답 중(로딩표시)
    res.end("<p>hi</p>") //응답 완료
});

//server.listen(port_num, callback); -> 서버를 실행하고 클라이언트를 기다림
server.listen(8080, function() {
    console.log('8080번 포트로 서버 실행');
})