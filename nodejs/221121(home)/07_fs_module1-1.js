const fs = require("fs");
console.log(fs.readFile); //[Function: readFile]

//fs.readFile('파일경로',콜백함수);
fs.readFile('./test.txt',function(err,data) {
    if (err) console.log(err);
    console.log(data);
}) //버퍼 형태로 출력


fs.readFile('./test.txt','utf8',function(err,data) {
    if (err) console.log(err);
    console.log(data);
})
fs.readFile('./test.txt', function(err,data) {
    if (err) throw err;
    console.log(String(data));
})