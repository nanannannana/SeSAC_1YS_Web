var express = require("express");
var controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.main);
router.get("/form", controller.form_ing)
router.post("/form", controller.form_suc);
router.get("/login", controller.login);
router.post("/login", controller.login_suc);
router.post("/modify", controller.info_modify);
router.patch("/modify_suc", controller.info_modify_suc);

module.exports = router;