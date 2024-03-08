// const nodemailer = require('nodemailer');
require('dotenv').config();

import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
    }
    });

var mailOptions = {
    from: 'innocentchime30@gmail.com',
    to: 'chimyinnocent@gmail.com',
    subject: 'Yoo whatsup man',
    text: 'Heyoo, I am sending an email using Node.js'
};

transporter.sendMail(mailOptions, function(error, info){
        if (error) {
    console.log(error);
} else {
    console.log('Email sent: ' + info.response);
}
});