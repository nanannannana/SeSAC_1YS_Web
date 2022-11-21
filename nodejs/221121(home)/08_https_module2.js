const http = require("http");
const fs = require("fs").promises;
const server = http.createServer(function(req,res) {
    fs.readFile("../html/221102_css_animation2.html",'utf8')
        .then(function(data) {
            res.writeHead(200);
            res.end(data);
        });
})
server.listen(8080, function() {
    console.log("8080번 포트로 실행");
})