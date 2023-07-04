const nodemailer = require("nodemailer");
require("dotenv").config();
console.log(process.env);
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});

const sendEmail2 = async (EmailSubject, EmailMessage, ToEmail) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.USER,
      to: ToEmail,
      subject: EmailSubject,
      text: EmailMessage,
    });

    console.log("Message sent", info.messageId);
  } catch (error) {
    console.log("Email not send");
    console.log(error);
  }
};

module.exports = sendEmail2;
