const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/contact', (req, res) => {
  // Extract the form data from the request body
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Configure your email provider settings here
    service: 'Gmail',
    auth: {
      user: 'mr.jollysr@gmail.com',
      pass: process.env.GMAIL_PASSWORD
    },
  });

  // Compose the email message
  const mailOptions = {
    from: email,
    to: 'mr.jollysr@gmail.com', // Enter your email address here
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.send('Email sent successfully');
    }
  });
});

const PORT = 5500; // You can change the port number if desired
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});