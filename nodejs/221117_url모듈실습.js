const url = require('url');
var string = new url.URL('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sesac')
console.log(string.searchParams.keys());
console.log(string.searchParams.values());
string.searchParams.delete('sm');
console.log(string.searchParams.keys());
console.log("------------");
console.log(string.searchParams.sort());