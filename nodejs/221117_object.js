console.log("__filename : "+__filename);
console.log("__dirname : "+__dirname);

//process 객체 = 현재 실행 중이 노드 프로세스 정보
console.log("process.version: ", process.version);
console.log("process.arch: ", process.arch);
console.log("process.platform: ", process.platform);
console.log("process.cpuUsage: ",process.cpuUsage());
console.log("---------------------------------------");

//os(운영체제) 객체
const os = require("os");
//내장 객체는 불러오지 않고도 바로 사용 가능, 내장 모듈은 불러온 후 사용해야 함, os는 내장모듈
console.log("os.type: ",os.type());
console.log("os.cpus: ",os.cpus());
console.log("os.homedir: ",os.homedir());
console.log("os.freemem: ",os.freemem());

//path모듈
const path = require('path');
const file = __filename;
console.log("path.extname: ", path.extname(file)); //파일의 확장자를 가져옴
console.log("path.parse: ", path.parse(file)); //parse는 파일의 경로를 구분지어서 보여줌(ex, 확장자 등)