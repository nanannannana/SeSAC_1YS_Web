const express = require("express");
const session = require("express-session");
const app = express();
const port = 8000;

app.use(session({
    secret: "1234" , //임의의 문자열로 세션을 암호화함
    resave: false, //변경사항이 없어도 저장을 할지말지 결정; true: 모든 요청마다 session에 변화가 없어도, session을 다시 저장
    saveUninitialized: true, //초기화되지 않은 세션을 저장을 할지말지 결정
    // cookie: { // session id 쿠키에 대한 옵션
    //     httpOnly: true,
    //     maxAge:
    // },
    // secure: true //보안 서버에서만 작동
}));
app.get("/",function(req,res) {
    if(req.session.user) res.render("index", {isLogin: true})
    else res.render("index", {isLogin: false});
    res.send("세션 수업");
})

const user = {id: "a", pw: "1"};
app.get("/setSession", function(req,res) {
    // session 저장
    // req.session: 클라이언트가 가지고 있는 고유의 변수
    // session 생성하기: req.session.세션명 = 값;
    req.session.user = "서예지";
    res.send("세션 생성 성공");
})
app.get("/login", function(req,res) {
    if (req.body.id==user.id && req.body.pw == user.pw) {
        // session 생성하기: req.session.세션명 = 값;
        req.session.user = req.body.id;
        res.send("로그인 성공");
    } else {
        res.send("로그인 실패");
    }
})
app.destroy("/logout", function(req,res) {
    //req.session.destory(cb): session 파괴 및 설정 해제
    req.session.destroy(function(err) {
        if(err) throw err;
        res.send("로그아웃 성공");
    })
})

app.listen(port, function() {
    console.log(port,"번 열기");
})