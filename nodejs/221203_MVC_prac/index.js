const express = require('express');
const router = require('./routes');
const app = express();
const port = 8080;

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/",router);
app.get("*", function(req,res) {
    res.send("주소가 존재하지 않습니다.");
})

app.listen(port,function() {
    console.log(port,"실행");
})