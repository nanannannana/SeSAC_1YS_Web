//express사용을 위한 기본 코드
// const express = require("express");
// const app = express(); 
// const port = 8080;
// app.listen(port, () => {
//     console.log("server open: ",port);
// })

const express = require("express");
const app = express(); 
const port = 8080; //1023이상의 숫자입력

//ejs엔진을 view engine으로 쓰겠다는 코드
app.set("view engine", "ejs");

//클라이언트가 어떠한 파일을 접근할 수 있도록 권한을 주는 방법
//app.use함수는 미들웨어
// 첫 번째 인자("/public")는 가상 경로 입력(어떠한 이름도 상관 없음)
// 두 번째 인자는 express.static함수, express.static 메소드 안에 쓴 인자는 실제로 존재하는 폴더명을 넣어주어야 함

// app.use("/public",express.static("static"));
//static이라는 실제 존재하는 폴더에 public이라는 경로로 접근할 수 있도록 함
// src="/public/image/sea.png" -> html에서 경로 변경!

// app.use(express.static("static"));
// // src="/image/sea.png"

app.use("/static",express.static("static"));
//form 사용하기 위한 기본 문법
app.use(express.urlencoded({extended:true})); // form type에 대한 설정, x-www-urlencoded 데이터 해석
app.use(express.json()); //json형태(딕셔너리 형태와 유사함)로 데이터를 받음


// localhost:8080/
app.get('/', (req,res) => {
    //주소에 들어갔을 때 어떤 행동을 할 것인지 코드 입력
    res.send("hello express");
})

// localgost:8080/test
app.get('/test', function(req,res) {
    res.sendFile(__dirname+"/views/index.html"); //sendFile함수는 무조건 절대경로입력해야함
})

// localgost:8080/ejs
app.get('/ejs', function(req,res) {
    res.render("index", {
        title: "index 페이지 입니다",
        data: ["a","b","c"]
    }); 
})
//render메소드를 써서 해당하는 파일을 가져옴, 첫 번째 인자에 파일명 작성(확장자 생략, 파일경로 적지 않음(기본 디렉토리가 views이기 때문))
//render의 두번째 인자는 선택사항, 작성한다면 객체형태(딕셔너리)로 작성, 넘기고 싶은 값을 작성함
//두 번째 인자에서 지정한 key값을 index.ejs파일에서 변수명으로 활용하면 됨

app.get('/form',function(req,res) {
    res.render("form");
})
app.get('/getform',function(req,res) {
    console.log(req.query);  //get요청은 query에 담겨옴
    res.send("get 요청 성공");
})
app.post('/postform',function(req,res) {
    console.log(req.body); //post요청은 body에 담겨옴
    res.render("result", {data: req.body});
})
//method가 post면 get메소드가 아닌 post메소드로 바꿔주어야 함

//웹 서버 여는 코드 작성
app.listen(port, () => {
    console.log("server open: ",port);
})
