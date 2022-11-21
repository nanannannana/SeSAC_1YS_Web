function login(id) {
    return new Promise(function(resolve,reject) {
        console.log("사용자 입장");
        setTimeout(function() {
            console.log(id,"님 로그인 성공!");
            resolve(id);
        },1500);
    });
}
function listloading(id) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(id,"님의 music playlist");
            var mlist = ["antifragile","better","best part"];
            console.log(mlist);
            resolve(mlist);
        },1500);
    });
}
function select(mlist) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('"',mlist[2],'" 노래 선택!');
            resolve(mlist[2]);
        },1500);
    });
}
function play(play) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('"',play,'" 노래 재생 시작♪');
        },1500);
    });
}

login('nana')
    .then(function(user) {
        return listloading(user);
    })
    .then(function(list) {
        return select(list);
    })
    .then(function(choose) {
        return play(choose);
    });