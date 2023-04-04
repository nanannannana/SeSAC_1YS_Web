// (매개변수: type): <return>
// function 함수명 (매개변수:type): 반환타입 {}
function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(1, 2));
console.log("--------------");

// 인자가 필수값이 아닐 경우, 물음표(?) 사용함 ex) b?:number
function sum2(a: number, b?: number): number {
  if (!b) return a; // b가 undefined일 경우,
  return a + b;
}
console.log(sum2(1));
console.log("--------------");
console.log(sum2(1, 2));
console.log("--------------");
