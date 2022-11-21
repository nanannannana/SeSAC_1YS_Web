//callback으로 fsmodule읽기
const fs = require("fs");
fs.readFile("./test.txt", function(err,data){
    // if (err) throw err; //throw하는 즉시 시스템이 멈춤(throw는 에러를 던질 때 사용)
    if(err) console.log(err);
    console.log("data: ",data); //버퍼형태로 읽음(인간이 읽을 수 없는 상태)
    console.log("data: ",data.toString());
});
//첫 번째 파라미터 에러에 대한 정보
//두 번째 파라미터 데이터 정보

fs.writeFile('./write2.txt','sesac22',function(err){
    if(err) throw err;
    console.log("writeFile success!");
    fs.readFile("./write2.txt",function(err,data){
        if (err) throw err;
        console.log("write2File data: ", String(data));
    })
});
