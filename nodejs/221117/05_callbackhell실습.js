function call(name, call, cb) {
    console.log("사용자는 " + name);
    setTimeout(() => {
        console.log("시작은 " + call);
        cb();  //다음 함수를 실행시키기 위한 함수
    },2000);
}
//1번 콘솔은 무조건 실행
//2번 콘솔을 2초 뒤에 실행(timeout이어서)
//back함수를 call함수 뒤에 실행시키기 위해 cb함수 사용

function back(back,cb) {
    setTimeout(() => {
        console.log("두 번째는 " + back);
        cb();
    },1000);
}
//back함수 1초 뒤에 실행
//hell함수를 back함수 뒤에 실행시키기 위해 cb함수 실행

function hell(hell,cb) {
    setTimeout(() => {
        cb("세 번째는 " + hell);
    },500);
}
//hell함수 0.5초 뒤에 실행
//console.log(hell);을 hell함수 뒤에 실행시키기 위해 cb함수 실행

call('kim','call',function() {
    back('back',function() {
        hell('hell',function(hell) {
            console.log(hell);
        });
    });
});