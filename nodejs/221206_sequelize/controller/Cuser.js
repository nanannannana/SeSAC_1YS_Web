const { User } = require("../model");
const { validationResult } = require("express-validator");

exports.main = function(req,res) {
    res.render("index");
}
exports.signup_ing = function(req,res) {
    res.render("signup");
}
exports.id_dupl = async function(req,res) {
    // select * from user2 where id='${id}'
    var dupl_flag = true;
    let result = await User.findAll({
        where: { id: req.body.id }
    });
    if (result.length == 0) dupl_flag=false;
    res.send(dupl_flag);
}
exports.signup_suc = async function(req,res) {
    // insert into user2 values('${info.id}','${info.pw}','${info.name}'
    const errors = validationResult(req);
    console.log(errors.errors);
    if (errors.errors.length==0) {
        var signup_suc = true;
        let result1 = await User.findAll({
            where: { id: req.body.id }
        });
        if (result1.length == 0) {
            let data = {
                id: req.body.id,
                pw: req.body.pw,
                name: req.body.name
            };
            let result2 = await User.create(data);
            console.log("insert result: ", result2);
            res.send(signup_suc);
        } else {
            res.send(signup_suc==false);
        }
    } else {
        res.send(errors);
    }
}

exports.login = function(req,res) {
    res.render("login");
}
exports.login_suc = async function(req,res) {
    // select * from user2 where id='${info.id}' and pw='${info.pw}'
    const errors = validationResult(req);
    if (errors.errors.length==0) {
        var login_flag = false;
        let result = await User.findAll({
            where: {
                id: req.body.id,
                pw: req.body.pw
            }
        });
        if (result.length>=1) login_flag = true
        res.send(login_flag);
    } else {
        res.send(errors);
    }

}

exports.info_modify = async function(req,res) {
    // select * from user2 where id='${info.id}'
    let result = await User.findAll({
        where: {id: req.body.id}
    });
    console.log("modify :",result);
    if (result.length>=1) res.render("modify", { info: result[0]});
}
exports.info_modify_suc = async function(req,res) {
    // update user2 set name='${info.name}', pw='${info.pw}' where id='${info.id}'
    const errors = validationResult(req);
    if (errors.errors.length==0) {
        let data = {
            pw: req.body.pw,
            name: req.body.name
        };
        await User.update(data, {
            where: { id : req.body.id }
        })
        res.send(true);
    } else {
        res.send(errors);
    }

}
exports.info_del = async function(req,res) {
    // delete from user2 where id='${info.id}'
    var del_flag = false;
    let result = await User.destroy({
        where: {id: req.body.id}
    });
    if (result==1) del_flag=true;
    res.send(del_flag);
}