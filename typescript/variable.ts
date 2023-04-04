// 변수 선언
// 키워드 변수이름:타입 = 값;
// 타입표기( type annotation )
// 1. number, string, boolean
const num: number = 1;
const str: string = "hi";
const bool: boolean = true;

// 2. object
const arr1: number[] = [1, 2, 3];
const arr2: string[] = ["a", "b", "c"];
const arr3: Array<number> = [1, 2, 3];
console.log(arr2[0].concat("!"));

// 3. tuple(배열의 길이 및 타입이 고정된 배열)
const arr4: [boolean, string] = [true, "a"];
console.log(arr4[1].concat("!"));

// 4. enum(어떤 특정 값들을 열거하는 집합)
enum Names {
  sesac,
  새싹,
}
// 집합 안에 존재하는 값들만 불러와 사용 가능
const name1: Names = Names.sesac;
console.log(name1);

// 5. any(지양됨): 모든 타입에 대해서 허용
const any1: any = "a";
console.log(any1);

// 6. void: undefined와 null만 들어갈 수 있는 타입
// 함수에 많이 사용됨(함수의 리턴값이 없을 때, void 선언)

// 7. never: 절대 끝에 도달하지 않는 함수에 사용됨
// function neverEnd():never {
//     while (true) {
//         // 조건이 true인 while문과 같이 절대 끝나지 않는 것을 담고있는 함수의 경우, never 타입 사용
//     }
// }
