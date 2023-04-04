// 1. interface: 미리 정의를 해놓는 약속/규칙
interface Student {
  name: string;
  age: number;
  nickname?: string;
}
const student: Student = {
  name: "서새싹",
  age: 10,
};
console.log(student);
console.log("--------------");

const student2: Student = {
  name: "서새싹",
  age: 20,
  nickname: "사과",
};
console.log(student2);
console.log("--------------");

function check(stu: Student) {
  console.log(stu.name);
}
check(student);
console.log("--------------");

// 2. class
// class 클래스명 {
//   변수명: 타입;
//   constructor(변수:타입) {
//       this.변수명 = 변수;
//   }
// }
class Person {
  id: string;
  constructor(name: string, age: number) {
    this.id = name + age;
  }
}
const person1 = new Person("바나나", 22);
console.log(person1.id);
console.log("--------------");

// interface에 함수도 정의 가능
interface Shape {
  width: number;
  getLength(): number; //number를 리턴하는 함수
}
class Square implements Shape {
  //readonly 키워드를 작성하면 초기값 세팅 작업을 하지 않아도 자동 처리함
  height: number;
  constructor(readonly width: number, height?: number) {
    if (!height) this.height = 0;
    else this.height = height;
  }
  getLength(): number {
    return this.width + this.height;
  }
}
const square1 = new Square(10, 11);
const square2 = new Square(10);
console.log(square1.getLength());
console.log(square2.getLength());
console.log("--------------");

class Person2 {
  constructor(public name: string, private age: number) {
    this.name = name;
    this.age = age;
  }
}
const person3 = new Person2("a", 1);
console.log(person3.name);
// console.log(person3.age)
console.log("--------------");

// 3. 제네릭(Generic): 재사용성
// <T> 사용
function getText<T>(text: T): T {
  return text;
}
console.log(getText<number>(555));
console.log(getText<string>("사과사과"));
console.log("--------------");

const text = <T>(text: T): T => text;
console.log(text<string>("바나나"));
