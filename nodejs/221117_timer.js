const func1 = setTimeout(function() { 
    console.log('1.5초 후에 실행');
},1500); //익명함수를 사용하는 이유; 한 번만 사용하고 사용하지 않을 것이기 때문
//위 코드와 같은 결과가 나옴
// function a() { console.log('1.5초 후 실행');};
// setTimeout(a,1500);
const func2 = setInterval(() => { 
    console.log('1초마다 반복');
},1000);
const func3 = setTimeout(() => { 
    console.log('func3 실행');
},3000);
setTimeout(() => {
    clearTimeout(func3);
    clearInterval(func2);
},2500);
const func4 = setImmediate(() => {
    console.log("func4 즉시 실행");
});
const func5 = setImmediate(() => {
    console.log("func5 즉시 실행");
});
clearImmediate(func5);

