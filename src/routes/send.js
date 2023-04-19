const express = require("express");
const router = express.Router();
const sendController = require("../controllers/sendController");

router.post("/email", sendController.sendEmail);

router.post("/hire", sendController.sendHire);

module.exports = router;
