const express = require("express");
const app = express();
const port = 8080;

app.set("view engine","ejs");
app.use("/static",express.static("static"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",function(req,res) {
    res.render("fetch실습2");
})
//axios
app.get('/form',function(req,res) {
    console.log(req.query);
    // res.send({msg: "이름은: " + req.query.name});
    res.send("get 이름은: "+req.query.name);
})
app.get('/form2',function(req,res) {
    console.log(req.query);
    res.send("이름은: "+req.query.name+" 성별은: "+req.query.gender+" 생년월일은: "+req.query.birthYear+"년"+req.query.birthMonth+"월"+req.query.birthDate);
})
app.post('/form3',function(req,res) {
    console.log(req.body);
    if (req.body.id == "1212" && req.body.pw == "fgfg") {
        res.send("<p style='color:black'>로그인 성공</p>");
    } else {
        res.send("<p style='color:red'>아이디 또는 비밀번호를 잘못 입력했습니다. 다시 확인하세용</p>");
    }
})
//ajax
app.post('/ajax1',function(req,res) {
    console.log(req.body);
    res.send("이름은: "+req.body.name+" 성별은: "+req.body.gender+" 생년월일은: "+req.body.birthYear+"년"+req.body.birthMonth+"월"+req.body.birthDate);
})
app.get('/ajax2',function(req,res) {
    console.log(req.query);
    if (req.query.id == "1212" && req.query.pw == "fgfg") {
        res.send("<p style='color:black'>로그인 성공</p>");
    } else {
        res.send("<p style='color:red'>아이디 또는 비밀번호를 잘못 입력했습니다. 다시 확인하세용</p>");
    }
})

//fetch
app.post('/fetch1',function(req,res) {
    console.log(req.body);
    res.send(req.body);
})
app.get('/fetch2',function(req,res) {
    console.log(req.query);
    if (req.query.id == "1212" && req.query.pw == "fgfg") {
        res.send(req.query);
    } else {
        res.send(req.query);
    }
})

app.listen(port, function() {
    console.log(port+"실행");
})