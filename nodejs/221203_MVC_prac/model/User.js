const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: '12123',
    database: "데이터베이스"
});

exports.form_sub = function(info, cb) {
    var sql = `insert into user2 values('${info.id}','${info.pw}','${info.name}');`;
    cnn.query(sql, function(err,result) {
        if (err) throw err;
        console.log("form result: ", result);
        cb();
    })
}
exports.login_cl = function(user_info, cb) {
    var sql = `select * from user2 where id='${user_info.id}' and pw='${user_info.pw}';`;
    cnn.query(sql, function(err,result) {
        console.log(err);
        console.log("login result: ",result);
        var login_flag = false;
        if (result.length>=1) login_flag=true;
        cb(login_flag);
    })
}
exports.info_modify = function(info, cb) {
    var sql = `update user2 set name='${info.name}' and pw='${info.pw}' where id='${info.id}';`;
    cnn.query(sql, function(err,result) {
        if (err) throw err;
        console.log("update result: ", result);
        cb();
    })
}