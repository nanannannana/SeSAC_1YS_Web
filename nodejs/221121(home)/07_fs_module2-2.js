const fs = require('fs').promises;
fs.writeFile('test3.txt','helllllooo')
    .then(function() {
        return console.log("test3.txt 작성 완료");
    })
    .then(function() {
        return fs.readFile('test3.txt','utf8');
    })
    .then(function(data) {
        return console.log(data);
    })