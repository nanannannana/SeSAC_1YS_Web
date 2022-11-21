function func4(nana) {
    return new Promise(function(resolve,reject){
        if (nana) {
            resolve("nana는 true");
        } else {
            reject("nana는 false");
        }
    });
}

func4(true)
    .then(function(nana) {
        console.log(nana);
    }, function(nana) {
        console.log(nana);
    });


func4(false)
    .then(function(nana) {
        console.log(nana);
    }, function(nana) {
        console.log(nana);
    });

func4(false)
    .then(function(nana) {
        console.log(nana);
    })
    .catch(function(nana) {
        console.log(nana);
    });