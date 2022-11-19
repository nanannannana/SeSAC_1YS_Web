const { stringify } = require("querystring");

const fs = require("fs").promises;   

fs.writeFile("./sesac.txt","반갑습니다")
.then(function(data){
    return fs.readFile("./sesac.txt")
    .then(function(data){
        console.log("원본: ",String(data))})
    .then(fs.copyFile("sesac.txt","sesac2.txt")
    .then(fs.rename("./sesac2.txt","new.txt"))
    .then(function(data){
        return fs.readFile("./sesac2.txt");
    })
    .then(function(data){
        console.log("복사본: ", String(data));
    }
    ))
})


//도희님 코드
// fs2.writeFile("./sesac.txt", "반갑습니다")
//     .then(function () {
//     return fs2.readFile("./sesac.txt")
//     .then(function (data) {
//         console.log(data.toString());
//         fs2.copyFile("./sesac.txt", "./sesac2.txt")
//         .then(() => {});
//         fs2.rename("./sesac2.txt", "new.txt")
//         .then(() => {});
//     });
// });