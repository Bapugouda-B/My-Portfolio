const sendMail = require("../controlers/emailControllers.js");
const express = require("express");
const router = express.Router();

router.post("/sendEmail", sendMail);

module.exports = router;