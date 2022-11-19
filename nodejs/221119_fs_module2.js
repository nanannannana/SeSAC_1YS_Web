//promise로 fsmodule읽기
const fs2 = require("fs").promises;
fs2.readFile("./test.txt")
    .then((data) => {
        console.log("promise - data: ",String(data));
    });

fs2.writeFile("./write.txt","sesac") //파라미터: 내가 만들 파일명, 내가 넣고 싶은 내용
    .then(function(result){
        return fs2.readFile("./write.txt");
    })
    .then(function(data) {
        console.log(data.toString());
    });