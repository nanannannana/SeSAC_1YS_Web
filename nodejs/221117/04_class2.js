// const Car = require("./04_class.js");
const {Car} = require("./04_class.js");
console.log(Car);

// 변수명 = new 클래스명();
var car1 = new Car("red");
console.log(car1.returnColor());
var car2 = new Car("blue");
console.log(car2.returnColor());
var car3 = new Car("yellow");
console.log(car3.returnColor());