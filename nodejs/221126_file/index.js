const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const port = 8080;

app.set("view engine","ejs");
app.use("/uploads",express.static("uploads"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// const upload = multer({
//     dest: "uploads/"
// }) //파일 경로 지정
const upload = multer({
    storage: multer.diskStorage({ //파일을 디스크에 저장하는 데에 대한 완전한 제어 제공
        destination(req,file,done) {
            done(null, 'uploads/'); //첫 번째 인자: 에러가 있을 때 에러를 받음, 두 번째 인자: 저장할 파일 경로 지정
        },
        filename(req,file,done) {
            console.log(req.body);
            const ext = path.extname(file.originalname); //file.originalname: 클라이언트가 올린 파일의 원본 이름
            const filename = req.body.name + ext;
            done(null, filename); //두 번째 인자: 새로운 폴더명 지정
        }
    }) //파일을 저장할 공간 지정
})
// file 이전까지의 데이터는 multer에서 처리 가능, file 이후의 데이터는 처리 불가능
// 따라서, 파일명을 입력한대로 지정하고 싶을 때 file 전에 name값 코드 작성

app.get("/file", function(req,res) {
    res.render("file");
});
//upload.single()
app.post("/upload-single", upload.single("userfile"), function(req,res) {
    console.log(req.file); //파일이 담겨있는 경로(path)와 size를 보여줌
    console.log(req.body);
    res.send("Upload Complete");
}); //파일을 받을 수 있는 미들웨어 등록
//upload.single("input태그의 name속성값"): 파일을 자동으로 업로드하고 req.file에 파일 정보를 담아서 전달(next함수까지 실행)
//single()는 파일을 하나만 업로드 하려고 할 때 사용
//----------
//upload.array(): 한꺼번에 여러 개 업로드
app.post("/upload-array", upload.array("userfile"), function(req,res) {
    console.log(req.files); //파일 여러 개 전달받을 때
    console.log(req.body);
    res.send("Upload Complete");
});
//upload.fields(): 하나씩 파일 업로드 후 취합해서 여러 개 전달
app.post("/upload-fields", upload.fields([{name: 'userfile1'}, {name: 'userfile2'}, {name: 'userfile3'}]), function(req,res) {
    console.log(req.files);
    console.log(req.body);
    res.send("Upload Complete");
});
//fields(): 배열 형태로 업로드 한 파일 name속성값 입력

app.get('/', test1, test2, (req,res) => {
    console.log("Hello");
    res.send("Hello");
});
//미들웨어는 url과 로직(함수) 사이에 위치: test를 실행시키고 함수를 실행시키겠다는 의미
function test1(req, res,next) {
    console.log(req.query);
    console.log("test 함수입니다.");
    next(); //test미들웨어함수가 끝났고 그 다음을 진행하라는 의미, 사용하지 않으면 다음이 진행되지 않음
}
function test2(req, res,next) {
    console.log("test2 함수입니다.");
    next();
}

//file실습
app.get("/file2", function(req,res) {
    res.render("file실습");
});
app.post("/upload2", upload.single("userfile"), function(req,res) {
    console.log(req.file);
    console.log(req.body);
    // res.send("<img src='/uploads/"+req.file.filename+"'>");
    res.render("file실습2", {
        filename: req.file.filename
    });
})
app.get("/file3", function(req,res) {
    res.render("file실습3");
});
app.post("/postupload", upload.single("userfile"), function(req,res) {
    console.log(req.file);
    console.log(req.body);
    res.send(req.file.filename);
})

app.listen(port, function() {
    console.log(port+"번 실행");
})