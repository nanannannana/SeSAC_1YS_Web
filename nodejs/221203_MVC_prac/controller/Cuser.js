const user = require("../model/User");

exports.main = function(req,res) {
    res.render("index");
}
exports.signup_ing = function(req,res) {
    res.render("signup");
}
exports.id_dupl = function(req,res) {
    user.id_dupl(req.body.id,function(rows){
        var dupl_flag = true;
        if (rows.length==0) dupl_flag=false;
        res.send(dupl_flag);
    })
}
exports.signup_suc = function(req,res) {
    user.signup_suc(req.body, function(result) {
        var signup_suc = false;
        if (result=="duplicate") {
            res.send(signup_suc);
        } else {
            signup_suc = true;
            res.send(signup_suc);
        }
    })
}

exports.login = function(req,res) {
    res.render("login");
}
exports.login_suc = function(req,res) {
    user.login_suc(req.body ,function(rows) {
        var login_flag = false;
        if (rows.length>=1) login_flag = true
        res.send(login_flag);
    });
}

exports.info_modify = function(req,res) {
    user.info_modify(req.body, function(rows) {
        if (rows.length>=1) res.render("modify", { info: rows[0] });
    })
}
exports.info_modify_suc = function(req,res) {
    user.info_modify_suc(req.body, function() {
        res.send(true);
    });
}
exports.info_del = function(req,res) {
    user.info_del(req.body, function(result) {
        del_flag=false;
        if (result==1) del_falg = true;
        res.send(del_flag);
    })
}