let list = ['apple','banana'];
[item1, item2] = list;
//let item1 = list[0];
//let item2 = list[1];

console.log(item1);
console.log(item2);

[item1, item2 = 'peach',item3 = 'orange'] = list;
//item1이나 item2값이 없으면 peach로 출력, item3값이 없으면 orange값 출력
console.log(item1);
console.log(item2);
console.log(item3);

let x = 1;
let y = 3;
[y,x] = [x,y]; //x값과 y값이 바뀜
console.log(x);
console.log(y);

let obj = {
    a : 'one',
    b : 'two',
    e: '1',
    f: '2'
};
// let a = obj.a
// let {a,b} = obj;
// console.log(a);
// console.log(b);
//객체 구조분해는 key로 값을 찾기 때문에, 객체가 만들어진 순서대로 적지 않아도 됨
//그러나 배열은 인덱스로 값을 가져오기 때문에 순서를 지켜가며 적어야함

let {a , b:key1, c='three'} = obj;
console.log(a);
console.log(key1);
console.log(c);

let { b, ...rest} = obj; //배열이나 객체를 전개?해서 가져옴, 전개 연산자는 가장 마지막에 위치시켜야 함
console.log(b);
console.log(rest); //지정 키값 빼고 나머지 키와 값을 가져옴
