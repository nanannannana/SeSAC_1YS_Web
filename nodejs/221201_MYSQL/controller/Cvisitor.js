const Visitor = require("../model/Visitor");

exports.visitor = function(req,res) {
    Visitor.get_visitor(function(result){
        console.log(result);
        res.render("visitor", { data: result });
    })
}

exports.register = function(req,res) {
    Visitor.register_visitor(req.body,function(id) {
        console.log(id);
        res.send(String(id)); //send에는 숫자만 보낼 수 없음
    })
}

// exports.delete = function(req,res) {
//     Visitor.delete_visitor(req.body.id, function(result) {
//         res.send(true); // true = 삭제 완료
//     })
// }
// mysql req.body.id에 해당하는 데이터 delete
// 서버 응답 res.send

exports.delete = function(req,res) {
    Visitor.delete_visitor(req.body.id, function() {
        res.send(true); // true = 삭제 완료
    })
}

exports.get_visitor_by_id = function(req,res) {
    // req.query.id에 해당하는 데이터를 조회
    // 서버 응답 > 조회한 데이터
    Visitor.get_visitor_by_id_model(req.query.id, function(rows) {
        res.send(rows[0]); //id값만 보냄
    });
}

exports.update_visitor = function(req,res) {
    // req.body 데이터를 mysql에 update할 수 있도록
    // 서버 응답
    Visitor.update_visitor(req.body, function(){
        res.send(true);
    });
}