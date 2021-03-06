const nodemailer = require('nodemailer');

 // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
    	type: 'OAuth2',
        user: process.env.EMAIL_ADDRESS, // generated ethereal user
        pass: process.env.EMAIL_PASSWORD  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Nodemailer Contact" <your@email.com>', // sender address
      to: 'kramer1346@gmail.com', // list of receivers
      subject: 'Node Contact Request', // Subject line
      // text: 'Hello world?', // plain text body
      html: '<p>This is a paragraph</p>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      // res.render('contact', {msg:'Email has been sent'});
  });