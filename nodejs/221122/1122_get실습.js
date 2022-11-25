const express = require("express");
const app = express(); 
const port = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',function(req,res) {
    res.send("hi");
})
app.get('/get',function(req,res) {
    res.render("study_get");
})
app.get('/getform',function(req,res) {
    console.log(req.query);
    res.send("get 요청 성공!");
})
app.get('/post',function(req,res) {
    res.render("study_post");
})
app.post('/postform',function(req,res) {
    console.log(req.body);
    res.send("post 요청 성공!");
})

app.listen(port, () => {
    console.log("server open: ",port);
})