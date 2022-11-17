//1번
// const result = require('./221117_module01.js');

// console.log(result.a);
// console.log(result.b);
// // console.log(result.test); //함수 정의를 가져옴
// result.test(); //함수 값을 가져옴

const num = require('./221117_module01.js');
// const {a,b} = require('./221117_module01.js');
const a = num.a;
const b = num.b;

function add() {
    return a + b;
}

module.exports = add; //하나만 보내면 딕셔너리 형태로 나가지 않음, 값만 출력됨