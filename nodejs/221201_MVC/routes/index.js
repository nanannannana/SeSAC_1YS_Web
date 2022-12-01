var express = require("express");
var controller = require("../controller/Cmain");
const router = express.Router();

// router에 관한 정의
router.get("/", controller.main);
router.get("/test", controller.test);
router.post("/post", controller.post);

router.get("/login",controller.login);
router.post("/login",controller.loginPost);
router.get("/login2",controller.login2);
router.post("/login2", controller.loginPost2);


// 호출 정의
module.exports = router;