// const Visitor = require("../model/Visitor");
const { Visitor } = require("../model");

exports.visitor = async (req, res) => {
    //select * from visitor;
    //findAll() = select문

    //async await문법 사용
    let result = await Visitor.findAll();
    res.render("visitor", {data:result});

    // Promise객체 사용
    // Visitor.findAll()
    // .then(function(result) {
    //     console.log(result);
    //     console.log("id :",result[0].id); //dataValues는 생략 가능 
    //     res.render("visitor", {data: result});
    // })
    
    // mysql모듈 사용
    // Visitor.get_visitor(function(result){
    //     console.log(result);
    //     res.render("visitor", {data: result});
    // })
}

exports.register = async (req, res) => {
    // insert into visitor(name, comment) values('${req.body.name}', '${req.body.comment}')
    //create(data) = insert문

    // async await 문법 사용
    let data = {
        name: req.body.name, //key값은 column명과 같아야 함
        comment: req.body.comment
    }
    let result = await Visitor.create(data);
    // console.log(result);
    res.send(String(result.id));

    // promise 객체 사용
    // Visitor.create(data)
    // .then(function(result) {
    //     console.log("register result: ", result);
    //     res.send(String(result.id)); //result.id = result.dataValues.id
    // })

    // Visitor.register_visitor( req.body, function(id){
    //     console.log(id);
    //     res.send(String(id));
    // })
}

exports.delete = async (req, res) => {
    // delete from visitor where id='${req.body.id}'
    // destroy({조건}) = delete문

    // async await문법 사용
    await Visitor.destroy({
        where: { id: req.body.id }
    })
    res.send(true);

    // promise 객체 사용
    // Visitor.destroy({
    //     where: { id: req.body.id }
    // })
    // .then(function(result) {
    //     console.log("del result: ",result);
    //     res.send(true);
    // })

    // mysql 모듈 사용
    // Visitor.delete_visitor(req.body.id, function(){
    //     res.send(true);
    // })
}

exports.get_visitor_by_id = (req, res) => {
    // select * from visitor where id = req.query.id;

    // async await문법 사용
    // let result = await Visitor.findOne({where: {id: req.query.id}});
    // res.send(result);

    // Promise 객체 사용
    Visitor.findOne({ 
        attributes: ["id","name","comment"], //attributes속성: 원하는 필드만 조회 가능
        where: { id: req.query.id },
        order: [[ "id", "desc" ]],
        limit: 1
    })
    .then(function(result) {
        res.send(result);
    })

    // Visitor.findAll({
    //     where: { id: req.query.id },
    //     limit: 1
    // })

    // Visitor.get_visitor_by_id_model(req.query.id, function(rows){
    //     res.send(rows);
    // });
}

exports.update_visitor = async(req, res) => {
    // update visitor set name='${req.body.name}', comment='${req.body.comment}' where id='${req.body.id}'
    let data = {
        name: req.body.name,
        comment: req.body.comment
    }

    // async await 문법 사용
    await Visitor.update(data,{
        where: {id: req.body.id}
    })
    res.send(true);

    // promise 객체 사용
    // update(업데이트내용,option(조건)) = update문
    // Visitor.update(data,{
    //     where: { id: req.body.id }
    // })
    // .then(function(result) {
    //     console.log("update edit: ",result);
    //     res.send(true);
    // })

    // mysql 모듈 사용
    // Visitor.update_visitor(req.body, function(){
    //     res.send(true);
    // });
}