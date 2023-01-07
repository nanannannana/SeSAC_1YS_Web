//dotenv = 환경변수; 프로젝트에 있는 어느 파일이든 접근 가능

console.log(process.env.PORT); //환경변수 설정 전
const dotenv = require('dotenv');
dotenv.config();
dotenv.config({path: "./common.env"}); //상대경로(env파일에 이름 지정 시)
dotenv.config({path: path.join(__dirname, "./common.env")}); //절대경로

console.log(process.env.PORT);  //환경변수 설정 후