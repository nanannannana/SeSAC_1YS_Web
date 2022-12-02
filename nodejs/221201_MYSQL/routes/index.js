var express = require("express");
var controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/",controller.visitor);
router.post("/register", controller.register);

module.exports = router;