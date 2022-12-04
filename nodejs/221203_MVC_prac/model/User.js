const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: '12123',
    database: "db"
});

exports.form_suc = function(info, cb) {
    var sql = `insert into user2 values('${info.id}','${info.pw}','${info.name}');`;
    cnn.query(sql, function(err,result) {
        if (err) throw err;
        console.log("form result: ", result);
        cb();
    })
}
exports.login_suc = function(info, cb) {
    var sql = `select * from user2 where id='${info.id}' and pw='${info.pw}';`;
    cnn.query(sql, function(err,rows) {
        if (err) throw err;
        console.log("login result: ",rows);
        cb(rows);
    })
}
exports.info_modify = function(info, cb) {
    var sql = `select * from user2 where id='${info.id}';`;
    cnn.query(sql, function(err,rows) {
        if(err) throw err;
        console.log("modify_result: ", rows);
        cb(rows);
    })
}
exports.info_modify_suc = function(info, cb) {
    var sql = `update user2 set name='${info.name}', pw='${info.pw}' where id='${info.id}';`;
    cnn.query(sql, function(err,result) {
        if (err) throw err;
        console.log("update result: ", result);
        cb();
    })
}