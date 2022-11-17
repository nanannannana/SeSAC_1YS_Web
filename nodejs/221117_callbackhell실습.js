function call(name, call, cb) {
    console.log("사용자는 " + name);
    setTimeout(() => {
        console.log("시작은 " + call);
        cb();  //다음 함수를 실행시키기 위한 함수
    },2000); //얘는 무조건 2초 뒤에 실행
}
function back(back,cb) {
    setTimeout(() => {
        console.log("두 번째는 " + back);
        cb();
    },1000);
}
function hell(hell,cb) {
    setTimeout(() => {
        cb("세 번째는 " + hell);
    },500);
}


call('kim','call',function() {
    back('back',function() {
        hell('hell',function(hell) {
            console.log(hell);
        });
    });
});