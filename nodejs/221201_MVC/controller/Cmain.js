const Test = require("../model/Test");
const User = require("../model/User");

// 수업
exports.main = (req,res) => {
    let hi = Test.hello();
    res.send(hi);
    // res.render("../views/index");
}
// 경로와 연결될 함수 내용을 정의

exports.test = (req,res) => {
    res.send("test");
}
exports.post = (req,res) => {
    res.send("post");
}

// practice1
exports.login = function(req,res) {
    res.render("login");
}
exports.loginPost = function(req,res) {
    let info = User.user();
    if (req.body.id == info.id && req.body.pw == info.pw) res.send("로그인 성공");
    else res.send("로그인 실패");
}

//practice2
exports.login2 = function(req,res) {
    res.render("login2");
}
exports.loginPost2 = function(req,res) {
    let users = User.user2();
    let user_list = users.split("\n");
    let login_flag = false;
    let name = ""
    for (let i=0 ; i <user_list.length ; i++) {
        let user = user_list[i].split("//");
        if(req.body.id == user[0] && req.body.pw == user[1]) {
            login_flag = true;
            name = user[2];
            break; //성공 시 for문 더이상 돌지 않도록
        }
    }
    if(login_flag) res.send(`${name} 님 환영합니다.`);
    else res.send(`로그인 실패`);
}