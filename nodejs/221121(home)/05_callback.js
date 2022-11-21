function func1(print,cb) {
    console.log("첫 번째",print);
    setTimeout (function() {
        console.log("두 번째",print);
        cb(print);
    },2000);
}
function func2(print) {
    console.log("세 번째",print);
}
func1("출력",function(print) {
    func2(print);
})