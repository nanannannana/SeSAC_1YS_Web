function login(id,cb) {
    console.log("사용자 입장");
    setTimeout(function() {
        console.log(id,"님 로그인 성공!");
        cb(id);
    },1500);
}
function listloading(id,cb) {
    setTimeout(function() {
        console.log(id,"님의 music playlist");
        var mlist = ["antifragile","better","best part"];
        console.log(mlist);
        cb(mlist);
    },1500);
}
function select(mlist,cb) {
    setTimeout(function() {
        console.log('"',mlist[2],'" 노래 선택!');
        cb(mlist[2]);
    },1500);
}
function play(play) {
    setTimeout(function() {
        console.log('"',play,'" 노래 재생 시작♪');
    },1500);
}

login('nana',function(user) {
    listloading(user,function(list) {
        select(list,function(choose) {
            play(choose);
        })
    })
})