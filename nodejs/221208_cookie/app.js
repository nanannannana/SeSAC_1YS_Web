const express = require("express");
const app = express();
const port = 8000;
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.get("/",function(req,res) {
    res.send("hello");
})

const option = {
    httpOnly: true, //true로 설정 시, javascript로 cookie를 조작하는 것을 막음(클라이언트가 document.cookie로 접근할 수 없게 함)
    maxAge: 30000, //만들어진 순간부터 지정한 밀리초(ms)만큼 뒤에 만료됨 (ms 단위)
    // expires: "2022-12-09T09:00:00", //GMT 시간으로 지정 ex) 2022-12-09T09:00:00
    //maxAge or expires 둘 중 하나 사용
    // path: "/visitor", //default는 "/"; localhost:8000/ -> 쿠키 없음, localhost:8000/visitor/ -> 쿠키 있음
    // secure: false, //true or false; default가 false, true 설정 시: https(보안 서버)에만 적용됨
    // signed: true //cookie 암호화 여부(true: 암호화), default는 false
};
app.get("/set",function(req,res) {
    // res.cookie("key","value",옵션객체);
    res.cookie("test","1",option); //서버에서 쿠키 생성 => 클라이언트로 보내기
    res.send("쿠키 생성 성공");
});
app.get("/get" , function(req,res) {
    res.send(req.cookies); //req객체 내 cookie를 저장할 수 있는 변수가 존재
    console.log(req.cookies); //클라이언트가 가지고 있는 쿠키 가져와서 확인(객체 형태)
    console.log(req.cookies.test);
})

app.listen(port, function() {
    console.log(port,"번 열기");
})