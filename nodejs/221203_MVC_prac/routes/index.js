var express = require("express");
var controller = require("../controller/Cuser");
const router = express.Router();
const { body } = require("express-validator");

router.get("/", controller.main);
router.get("/signup", controller.signup_ing);
router.post("/id_dupl", controller.id_dupl);
router.post("/signup",
    body('name')
        .trim()
        .isLength({min:2})
        .notEmpty(),
    body("id")
        .trim()
        .isLength({min:8,max:16})
        .notEmpty(),
    body("pw")
        .trim()
        .isLength({min:8,max:16})
        .notEmpty(),
    controller.signup_suc);
router.get("/login", controller.login);
router.post("/login",
    body("id")
        .trim()
        .notEmpty(),
    body("pw")
        .trim()
        .notEmpty(),
    controller.login_suc);
router.post("/modify", controller.info_modify);
router.patch("/modify_suc",
    body('name')
        .trim()
        .isLength({min:2})
        .notEmpty(),
    body("id")
        .trim()
        .isLength({min:8,max:16})
        .notEmpty(),
    body("pw")
        .trim()
        .isLength({min:8,max:16})
        .notEmpty(),
    controller.info_modify_suc);
router.delete("/modify_del", controller.info_del);

module.exports = router;