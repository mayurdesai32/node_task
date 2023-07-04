const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");

//
var option = {
  auth: {
    api_key: process.env.SEND_MAIL_API_KEY,
  },
};

var Email = nodemailer.createTransport(sgTransport(option));

const sendEmail = async (EmailSubject, EmailMessage, ToEmail) => {
  try {
    const mail = {
      from: process.env.SMTP_FROM_EMAIL,
      to: ToEmail,
      // to: 'msdesai32@gmail.com',
      subject: EmailSubject,
      text: EmailMessage,
    };

    const output = await Email.sendMail(mail);
    console.log(output);
    console.log("Email send");
  } catch (error) {
    console.log("Email not send");
    console.log(error);
  }
};

module.exports = sendEmail;
