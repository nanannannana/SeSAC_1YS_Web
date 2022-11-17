console.log(global);
console.log(global.console); //console은 global객체임, global은 생략 가능
// global.console.log(global.console); 원래는 이렇게 작성해야 함
// console.log(global.__filename);

// console 내장 객체
// console.log('error'); //에러를 확인할 수 있음

let obj = {
    out : {
        in : {
            key: 'value'
        }
    }
};
console.log('obj');
console.log(obj['out']);
console.time('시간');
console.error('error');
console.timeEnd('시간'); //못들음.. 시간과 시간 사이의 거리? error라는 글자를 띄우는데 걸린 시간??
console.table([{name:'abc'},{name:'def'}]); //console을 표 형태로 보여줌
console.dir(obj, {colors:true,depth:1});  //객체의 구조(여기서는 obj)를 보여줌, colors는 false일 때 모두 흰색, true일 때 색깔이 조금 바뀜
console.dir(obj, {colors:true,depth:2});  //depth는 어느 단계까지 파악하고 싶은지
console.dir(obj); //dir의 기본값은 colors:true, 모든 구조 보여줌
console.trace('Error'); //에러난 위치를 알려줌