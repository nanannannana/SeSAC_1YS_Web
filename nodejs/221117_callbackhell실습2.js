function call(name, call, cb) {
    console.log("사용자는 " + name);
    setTimeout(() => {
        console.log("시작은 " + call);
        cb();
    },2000);
}

function back(back,cb) {
    setTimeout(() => {
        console.log("두 번째는 " + back);
        cb();
    },1000);
}
function hell(hell) {
    setTimeout(() => {
        console.log("세 번째는 " + hell);
    },500);
}
call('kim','call',function() {
    back('back',function() {
        hell('hell');
    });
});