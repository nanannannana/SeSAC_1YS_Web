var express = require("express");
var controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.main);
router.get("/form", controller.form_ing)
router.post("/form", controller.form_sub);
router.get("/login", controller.login);
router.post("/login", controller.login_cl);
router.get("/modify", controller.info_modify);
router.patch("/modify", controller.info_modify_sub);

module.exports = router;