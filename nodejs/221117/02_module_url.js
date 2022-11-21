const url = require("url");
console.log(url);
console.log(url.parse);
var obj = url.parse('https://section.blog.naver.com/BlogHome.naver?directoryNo=0&currentPage=1&groupId=0')
console.log(obj);
console.log(url.format(obj)); //나누어져 있는 문자열을 다시 합침
console.log(obj.protocol);
console.log("---------");

//searchParams은 일부 함수를 사용하여 조작해야 함.
var string = new url.URL('https://section.blog.naver.com/BlogHome.naver?directoryNo=0&currentPage=1&groupId=0');
console.log(string);
console.log(string.searchParams);
console.log(string.searchParams.getAll('currentPage')); //currentPager값을 다 가져옴
console.log(string.searchParams.keys()); //주소의 key값을 다 가져옴
string.searchParams.append('age','20');//age라는 key와 값 추가
console.log(string.searchParams.getAll('age')); //확인
console.log(string.searchParams.has('age')); //age라는 key가 존재하는 지(존재하면 true)