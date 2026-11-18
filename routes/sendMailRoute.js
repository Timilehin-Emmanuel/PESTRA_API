const router = require("express").Router();

const sendMail = require("../controller/sendMailController");

router.use("/", sendMail);

module.exports = router;
