function func1(cb) {
    console.log("func1");
    console.log(cb);
    cb('이름');
}
func1(func2);
//console.log(cb); func2를 파라미터로 받은 걸 확인할 수 있음
//cb(); 강제로 순서를 만들어 줌, 함수한테 함수를 보내서 순서를 만들어 줌
function func2(name) {
    console.log("func2");
    console.log(name);
    console.log("name : ",name);
}
//위 코드의 형식이 밑 코드의 형식과 일치함.
// var a = 1;
// test(a);
// test(1);


//그냥 풀어쓴 코드
function func1(cb) {
    cb('이름');
}
func1(func2);
function func2(name) {
    console.log("name : ",name);
}

//위 코드를 callback함수를 사용한 방법
function func1(cb) {
    cb('이름');
}
func1(function(name){
    console.log("name: ",name);
})