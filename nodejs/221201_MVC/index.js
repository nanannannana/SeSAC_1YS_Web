const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const router = require("./routes");
// routes폴더 내 index.js 파일을 사용하려고 할 경우, 폴더명까지만 입력해도 됨
app.use("/",router);
// Router을 불러오는 부분
// 위의 코드를 이용해 특정 시작 url의 역할을 나눌 수 있음

app.get("*", function(req,res) {
    res.send("주소가 존재하지 않습니다. 다시 입력해주세요.")
    // res.render('error');
})
// 잘못된 주소에 접속했을 때, 에러 처리하는 코드
// (*)별표는 모든 라우터 의미, 라우터 처리 맨 마지막에 작성(app.listen메소드 앞에 작성)

app.listen(port, function() {
    console.log(port,"번 실행");
})