var nodemailer = require('nodemailer');

// needs a transport service such as gmail
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sherri.digitalcraftstemp@gmail.com',
    pass: 'benice2019'
  }
});

const mailOptions = {
  from: 'sherri.digitalcraftstemp@gmail.com',
  to: 'sherribooher74@gmail.com',
  subject: 'All hail Nodemailer!',
  html: '<p>Hi Sherri! This is a test email from NodeMailer, the NPM module that allows you to send email to anyone!</p>'
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log(info);
  }
});