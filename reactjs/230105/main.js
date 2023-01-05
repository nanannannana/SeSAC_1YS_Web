// @ts-check

const arr = [1, 2, 3, 4, 5];
console.log(arr);
// console.log(...arr);

// 주솟값 복사
const copyArr = arr;
console.log(copyArr);
console.log(arr === copyArr); // 메모리 주소 같음(true), 값 같음

// 값만 복사
const copyArr2 = [...arr];
console.log(arr === copyArr2); // 메모리 주소 다름(false), 값 같음

const obj = {
  pororo: '뽀로로',
  lupy: '루피',
  crong: '크롱',
};

const copyObj = obj;
const copyObj2 = { ...obj, lupy: 'lupy' }; // lupy값만 변경

console.log(obj);
console.log('copyObj: ', copyObj);
console.log('copyObj2: ', copyObj2);
console.log(obj === copyObj);
