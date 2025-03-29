const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const { name, email, message } = req.body;

    //Add logic to save the contact form data to a database or send an email
    console.log({ name, email, message });

    res.status(200).json({ message: "Message received, we will get back to you soon!" });
});

module.exports = router;
// This code defines a simple Express.js route for handling contact form submissions.
