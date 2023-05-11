const router = require("express").Router();
const nodemailer = require("nodemailer");

//Get request
router.get("/", (req, res) => {
  res.send("contacted");
});

// Post request
router.post("/", (req, res) => {
  // smtp -> is a protocol for sending messages, every email provider supports this protocol
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    // the port of connection
    port: 465,
    // for authentication
    auth: {
      user: "rajjdanush@gmail.com",
      pass: "Raj@97531",
    },
  });
  let mailOptions = {
    from: data.email,
    to: "rajjdanush@gmail.com",
    subject: `Message from ${data.name}`,
    html: `
      <h3>Informations</h3>
      <ul>
      <li>Name:${data.name}</li>
      <li>email:${data.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${data.message}</p>`,
  };
  smtpTransport.sendMail(mailOptions, (error, response) => {
    try {
      if (error) return res.status(400).json({ msg: error });
      else {
        return res.status(200).json({ msg: `Message wsa sent` });
      }
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  });
});

module.exports = router;
