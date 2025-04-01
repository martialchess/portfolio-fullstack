const express = require("express");
const router = express.Router();
const { sendEmail } = require("../controllers/emailController");

router.post("/", sendEmail); //updated path and also other things 

module.exports = router;