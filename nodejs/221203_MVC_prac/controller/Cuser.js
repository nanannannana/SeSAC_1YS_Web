const user = require("../model/User");

exports.main = function(req,res) {
    res.render("index");
}
exports.form_ing = function(req,res) {
    res.render("form");
}
exports.form_sub = function(req,res) {
    user.form_sub(req.body,function() {
        res.send(req.body);
    })
}

exports.login = function(req,res) {
    res.render("login");
}

var info;
exports.login_cl = function(req,res) {
    var info = req.body;
    user.login_cl(req.body ,function(result) {
        res.send(result);
    });
}

exports.info_modify = function(req,res) {
    res.render("modify", {
        info: info
    });
}
exports.info_modify_sub = function(req,res) {
    user.info_modify(function() {
        res.send(true);
    });
}