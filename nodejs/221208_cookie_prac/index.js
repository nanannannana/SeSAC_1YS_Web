const express = require("express");
const session = require("express-session");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(session({
    secret: "111",
    resave: false,
    saveUninitialized: true
}));

app.get("/", function(req,res) {
    console.log(req.session.user);
    res.render("session");
})
const user = {id: "1", pw: "1"};
app.post("/login", function(req,res) {
    if (req.body.id==user.id && req.body.pw==user.pw) {
        req.session.user = req.body.id;
        res.send(true);
    } else {
        res.send(false);
    }
})
app.post("/login_suc", function(req,res) {
    console.log(req.session.user);
    res.render("login", {id: req.session.user});
})
app.get("/logout", function(req,res) {
    req.session.destroy(function(err) {
        if (err) throw err;
        res.send(true);
    })
})

app.listen(port, function() {
    console.log(port,"번 열기");
})