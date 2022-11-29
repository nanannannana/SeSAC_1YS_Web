const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use("/static",express.static("static"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', function(req,res) {
    res.render('1124_form2');
})
app.get("/form", function(req,res) {
    console.log(req.query);
    res.send("이름은: "+ req.query.name);
})

app.listen(port, function(req,res) {
    console.log(port+" 실행");
})