const express = require("express");
const router = express.Router();
const { sendMail } = require("../controllers/emailController");

router.post("/", sendMail);

module.exports = router;
// This code sets up an Express router for handling POST requests to the "/api/contact" endpoint. It imports the sendMail function from the emailController module and uses it to handle incoming requests. The router is then exported for use in other parts of the application.