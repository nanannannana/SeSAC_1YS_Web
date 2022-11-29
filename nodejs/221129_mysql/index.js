const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 8080;
const cnn = mysql.createConnection({
    host: "localhost", //or '컴퓨터ip'
    user: "user", 
    password: "12123",
    database: '데이터베이스'
})

app.set('view engine','ejs');
app.get('/',function(req,res) {
    cnn.query("select * from user", function(err,result) {
        if (err) throw err;
        console.log(result);
        res.render("index", { rows: result });
    });
})

app.listen(port,function() {
    console.log(port+"번 실행");
})