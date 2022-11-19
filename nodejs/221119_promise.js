//promise 기본 문법
// new Promise(function(resolve, reject){
    //resolve: 함수형태, 성공했을 때 실행
    //reiect: 함수형태, 실패 혹은 에러 처리를 할 때 사용
// });

function func1() {
    return new Promise(function(resolve, reject){
        resolve("성공");
    });
}
// var a = func1();
// console.log(a); //Promise { '성공' }
func1().then(function(result) {
    console.log("result: ",result);
});
//then은 앞에 있던 promise에서 resolve된 "값"들만 가져옴, **result: 성공
//then은 promise의 값을 리턴하고 두 개의 콜백 함수를 인수로 받음.

function func2() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("성공")
        },1000);
    });
}
// var b = func2();
// console.log(b); //Promise { <pending> }
//아직 수행중인 b(setTimeout을 걸어서)를 가져오려고 해서 pending이 뜨게 됨(비동기여서)

func2().then(function(result) {
    console.log("result2: ",result);
    return 'a';
}).then(function(abc) {
    console.log("abc: ",abc);
});
// pending상태 일 때는 then이 실행되지 않고 resolve될 때(fulfilled상태) 실행됨(즉, 비동기를 동기처럼 사용할 수 있게 함)
// 앞 함수의 리턴값을 다음 then이 받음(chaining??)





