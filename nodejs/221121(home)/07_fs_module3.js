const fs = require('fs').promises;

fs.writeFile('hello.txt','안녕하세용')  //hello.txt 파일 작성
    .then(function() {
        return fs.readFile('./hello.txt','utf8');  //hello.txt 파일 읽기
    })
    .then(function(data) {
        console.log("hello.txt: ",data);  //읽어 온 파일 내용 출력
    })
    .then(function() {
        return fs.copyFile('hello.txt', 'hello2.txt');  //hello.txt파일 hello2.txt로 복제
    })
    .then(function() {
        fs.rename('./hello2.txt','./new.txt');  //hello2.txt파일 new.txt로 이름 바꿈
        console.log("hello2.txt -> new.txt");
    })
    .then(function() {
        return fs.readFile('./new.txt','utf8'); //new.txt파일 읽기
    })
    .then(function(data) {
        console.log("new.txt: ",data);  //읽어 온 파일 내용 출력
    })