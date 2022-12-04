const user = require("../model/User");

exports.main = function(req,res) {
    res.render("index");
}
exports.form_ing = function(req,res) {
    res.render("form");
}
exports.form_suc = function(req,res) {
    user.form_suc(req.body,function() {
        res.send(req.body);
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