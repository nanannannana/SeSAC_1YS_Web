const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: "localhost", //or '컴퓨터ip'
    user: "user", 
    password: "12123",
    database: '데이터베이스'
}) //옵션에 입력한 정보에 해당하는 database연결

//cnn.query("sql문", cb(에러정보,결과값))
cnn.query("select * from user", function(err,result) {
    if (err) throw err;
    console.log(result);
});
