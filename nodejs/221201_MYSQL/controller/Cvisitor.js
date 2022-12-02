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