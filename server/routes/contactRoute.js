const router = require("express").Router();
require("dotenv").config();
const nodemailer = require("nodemailer");

// Get request
router.get("/", (req, res) => {
  res.send("contacted");
});

// Post request
router.post("/", (req, res) => {
  let data = req.body;

  // Create a Nodemailer transporter
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "process.env.EMAIL_USERNAME",
      pass: "process.env.EMAIL_PASSWORD",
    },
  });

  let mailOptions = {
    from: data.email,
    to: "rajjdanush@gmail.com",
    subject: `Message from ${data.name}`,
    html: `
      <h3>Information</h3>
      <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${data.message}</p>`,
  };

  smtpTransport.sendMail(mailOptions, (err, response) => {
    try {
      if (err) return res.status(400).json({ msg: err });
      else {
        return res.status(200).json({ msg: `Message was sent` });
      }
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  });
});

module.exports = router;
