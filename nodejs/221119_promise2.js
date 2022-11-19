//promise 기본 문법
// new Promise(function(resolve, reject){
    //resolve: 함수형태, 성공했을 때 실행
    //reiect: 함수형태, 실패 혹은 에러 처리를 할 때 사용
// });

function func3(flag) {
    return new Promise(function(resolve,reject){
        if (flag) {
            resolve("flag는 true");
        } else {
            reject("flag는 false");
        }
    });
}

//then()은 두 개의 콜백 함수를 인수로 받음
//첫 번째 콜백 함수가 true일 경우, 첫 번째 함수 동작
//두 번째 콜백 함수가 true일 경우, 두 번째 함수 동작
func3(true).then(
    function(msg) {
        console.log("msg: ",msg);
    },
    function(msg){
        console.log("msg2: ",msg);
    }
);


func3(false).then(
    function(msg) {
        console.log("msg: ",msg);
    }
).catch(
    function(msg){
        console.log("msg2: ",msg);
    }
);
//then()에 동작해야 할(조건에 충족한) 함수가 없을 경우, catch함수 동작

func3(false).then(
    function(msg) {
        console.log("msg: ",msg);
    },
    function(msg){
        console.log("msg2: ",msg);
    }
).catch(
    function(msg){
        console.log("msg3: ",msg);
    }
);
//then에서 먼저 처리할 경우, catch함수는 동작하지 않음