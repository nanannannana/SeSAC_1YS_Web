const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '12123',
    database: "데이터베이스"
});

exports.get_visitor = function(cb) {
    var sql = 'select * from visitor';
    cnn.query(sql, function(err,rows) {
        if (err) throw err;
        console.log("visitor: ", rows);
        cb(rows); //cnn.query메소드 느림 또한 비동기 방식이기 때문에 순차적으로 실행시키기 위해 콜백을 걸어서 실행)
    })
}

exports.register_visitor = function(info,cb) {
    var sql = `insert into visitor(name,comment) values('${info.name}','${info.comment}');`;
    cnn.query(sql,function(err,result) {
        if (err) throw err;
        console.log("insert result: ", result);
        cb(result.insertId);
    })
}