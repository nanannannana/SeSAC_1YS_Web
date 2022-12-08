const express = require("express");
const app = express();
const port = 8000;
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cookieParser());

const option = {
    httpOnly: true,
    maxAge: 24*60*60*1000
};
app.get("/",function(req,res) {
    // req.cookies.popup 값을 비교하여 1이면 "none", 아니면 "block"
    if(req.cookies.popup=="1") res.render("index", {popup:"none"})
    else res.render("index",{popup:"block"});
})

app.post("/set", function(req,res) {
    // 쿠키 생성("오늘 하루 열지 않음"을 클릭했음을 구분하는 쿠키 생성)
    // 서버 응답
    res.cookie("popup","1",option);
    res.send(true);
})

app.listen(port, function() {
    console.log(port,"번 열기");
})