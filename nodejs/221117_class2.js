// const Car = require("./221117_class.js");
const {Car} = require("./221117_class.js");
console.log(Car);

var car1 = new Car("red"); //new 함수()는 constructor(초기화함수)을 실행하는 것과 같음
console.log(car1.returnColor());
var car2 = new Car("blue");
console.log(car2.returnColor());
var car3 = new Car("yellow");
console.log(car3.returnColor());