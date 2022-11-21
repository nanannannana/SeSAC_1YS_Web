// function func1(value, call) {
//     console.log(value);
//     call();
// }
// func1('a',function() {
//     console.log("1");
// });
// function func2(){
//     console.log("2");
// };
// func1(func2);

// console.log('Start');
// function login(id,cb){
//     setTimeout(() => {
//         console.log('x');
//         return id;
//     },2000);
// }
//setTimeout은 비동기함수(하나씩 실행되지 않음)
//따라서 callback함수를 써서 비동기를 동기함수로 만들어 줌
// const id = login('kim',null);
// console.log(id + "님 환영!");
// console.log("finish");

console.log('Start');
function login(id,cb){
    setTimeout(() => {
        console.log('로그인 성공');
        cb(id);
    },2000);
}
login('kim',function(id) {
    console.log(id+"님, 환영합니다.");
})
console.log("finish");

