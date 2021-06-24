const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
        auth: {
            api_key: '',
            domain: ''
        }
    };
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'nia1234ruby@gmail.com',
               pass: 'daredevils_11'
           }
       });
    const sendMail = (name, email, subject, text, cb) => {
        const mailOptions = {
            sender: name,
            from: email,
            to: 'sandrasasi.cek@gmail.com',
            subject: subject,
            text: text
        };
    
        transporter.sendMail(mailOptions, function(err, data) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, data);
            }
        });
    
    // Exporting the sendmail
    module.exports = sendMail;
    }