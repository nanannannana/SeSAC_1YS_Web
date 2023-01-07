// @ts-check
const arr = [1, 2, 3, 4, 5];

console.log('map 전:', arr);

const resultArr = arr.map((el, index) => {
  return el * 3;
});

console.log('map 후:', resultArr);
