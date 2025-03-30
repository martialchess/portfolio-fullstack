const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "Please fill in all the fields" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.TO_EMAIL, 
            subject: subject || "New Contact Form Submission",
            text: `You have a new message from your portfolio website:
            
            Name: ${name}
            Email: ${email}
            Subject: ${subject || "No Subject"}
            
            Message: ${message}`,
        });

        res.status(200).json({ success: true, message: "Email sent successfully!" });
    }
    catch (err) {
        console.error("Email send error:", err);
        res.status(500).json({ error: "Failed to send email" });
    }
};

module.exports = { sendEmail };
// This code defines a function to send an email using Nodemailer. It checks if all required fields are filled, creates a transporter using Gmail, and sends the email with the provided details. If successful, it returns a success message; otherwise, it returns an error message.