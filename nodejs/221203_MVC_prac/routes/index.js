var express = require("express");
var controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.main);
router.get("/signup", controller.signup_ing);
router.post("/id_dupl", controller.id_dupl);
router.post("/signup", controller.signup_suc);
router.get("/login", controller.login);
router.post("/login", controller.login_suc);
router.post("/modify", controller.info_modify);
router.patch("/modify_suc", controller.info_modify_suc);
router.delete("/modify_del", controller.info_del);

module.exports = router;