//promise 기본 문법
// new Promise(function(resolve, reject){
    //resolve: 함수형태, 성공했을 때 실행
    //reiect: 함수형태, 실패 혹은 에러 처리를 할 때 사용
// });

function login(id, pw) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("사용자 입장");
            resolve(id);
        },3000);
    })
}
function getVideo(id) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log(id+"의 비디오 리스트");
            resolve(['아바타','라라랜드']);
        },2000);
    })
}
function getDetail(video){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("비디오 제목: "+video);
        },1000);
    })
}


login('kim','1234')
    .then(function(id){
        return getVideo(id);
    })
    .then(function(video){
        return getDetail(video[0]);
    })
    .then(function(msg){
        return console.log(msg);
    })