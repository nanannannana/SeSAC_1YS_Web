// function func1() {
//     return new Promise(function(resolve,reject) {
//         resolve("성공!");
//     });
// }

// console.log(func1());
// func1().then(function(result) {
//     console.log(result);
// })

function func2() {
    return new Promise(function(resolve,reject) {
        setTimeout(function() {
            resolve("성공!!");
        },2000);
    });
}
console.log(func2());
func2().then(function(result) {
    console.log(result);
})
