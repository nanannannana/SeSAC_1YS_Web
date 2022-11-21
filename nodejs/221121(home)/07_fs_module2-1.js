const fs = require("fs").promises;
fs.readFile('./test.txt','utf8')
    .then(function(data) {
        console.log(data);
    });