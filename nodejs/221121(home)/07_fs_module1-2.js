const fs = require("fs");

//fs.writeFile('파일명', '내용', 콜백함수);
fs.writeFile('test2.txt','hello',function(err) {
    if (err) throw err;
    console.log('test2.txt 작성 완료');
    fs.readFile('./test2.txt','utf8',function(err, data) {
        if (err) throw err;
        console.log(data);
    });
})