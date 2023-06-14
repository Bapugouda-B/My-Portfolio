const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_MAIL, // Your Gmail account email address
    pass: process.env.SMTP_PASSWORD, // Your Gmail account password
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  // HTML code for the email template sent to the user
  const userHtml = `
  <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        color: #333;
        margin: 0;
        padding: 20px;
      }
  
      .card {
        max-width: 800px;
        margin: 0 auto;
        background-color: #F5FCFF;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 20px;
      }
  
      .header {
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
      }
  
      .header img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 8px;
      }

      .header h1 {
        color: #555;
        font-size: 24px;
        margin: 0;
      }
  
      .content {
        margin-bottom: 20px;
      }
  
      .content p {
        margin: 0;
        line-height: 1.5;
      }
  
    </style>
  </head>
  <body>
    <div class="card">
      <div class="header">
        <img src="https://hairgrotherapy.com/wp-content/uploads/2017/12/Thank-you-contacting-us.png" alt="Banner Image" />
        <h1>Thank You for Contacting Us!</h1>
      </div>
      <div class="content">
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
        <p>Here are the details you provided:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
        <p>I would appreciate some suggestions/advice regarding...</p>
      </div>
      <div class="footer">
        <p>Best regards,<br>Bapu</p>
      </div>
    </div>
  </body>
  </html>
  
`;

  // Mail options for the user
  const userMailOptions = {
    from: process.env.SMTP_MAIL, // Your email address
    to: email, // User's email address
    subject: "Thank You for Contacting Us!",
    html: userHtml,
  };

  transporter.sendMail(userMailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Thank you email sent to the user!");
    }
  });

  // HTML code for the email template sent to you
  const adminHtml = `
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      color: #333;
      margin: 0;
      padding: 20px;
    }

    .card {
      max-width: 800px;
      margin: 0 auto;
      background-color: #F5FCFF;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 20px;
    }

    .header {
      text-align: center;
      margin-bottom: 20px;
    }
    
    .header h1 {
      color: #555;
      font-size: 24px;
      margin: 0;
    }

    .content {
      margin-bottom: 20px;
    }

    .content p {
      margin: 0;
      line-height: 1.5;
    }

  
    .footer {
      text-align: center;
    }

    .footer p {
      margin: 0;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New Contact Form Submission</h1>
    </div>
    <div class="content">
      <p>You have received a new contact form submission from:</p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Message:</strong> ${message}</li>
      </ul>
      <p>Please respond to the inquiry promptly.</p>
    </div>
  </div>
</body>
</html>
`;

  // Mail options for you
  const adminMailOptions = {
    from: `${name} ${email}`, // User name
    to: process.env.SMTP_MAIL, // Your email address
    subject: "New Contact Form Submission",
    html: adminHtml,
  };

  transporter.sendMail(adminMailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(
        "Email sent to you with the contact form submission details!"
      );
    }
  });

  // Send a response to the client
  res.send("Thank you for contacting us. We will get back to you soon!");
});

module.exports = sendEmail;
