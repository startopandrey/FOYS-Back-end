const express = require("express");
const router = express.Router();
const sendEmailController = require("../controllers/sendEmailController");

router.post("/sendEmail", sendEmailController.sendEmail);

module.exports = router;
