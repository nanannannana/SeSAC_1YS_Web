function func3() {
    return new Promise(function(resolve, reject) {
        resolve("hello");
    })
}
func3()
    .then(function(hello) {
        console.log(hello);
        return "hi";
    })
    .then(function(hi){
        console.log(hi);
    });