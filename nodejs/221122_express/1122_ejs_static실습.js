const express = require("express");
const app = express(); 
const port = 8080;

app.set("view engine","ejs");
app.use("/static",express.static("static"));
app.get('/img', function(req,res) {
    res.render("study");
})
app.listen(port, () => {
    console.log("server open: ",port);
})