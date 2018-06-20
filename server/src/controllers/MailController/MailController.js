require('dotenv').config()
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class MailController {
   
    send(req, res) {
        const msg = {
            to: process.env.TO,
            from: process.env.FROM,
            subject: 'New Lead',
            text: `
            First Name: ${req.body.firstName}
            Last Name: ${req.body.lastName}
            Mail Address: ${req.body.email}
            Phone Number: ${req.body.phoneNumber}
            `,
            html: `
            <strong>First Name</strong>: ${req.body.firstName} <br/>
            <strong>Last Name</strong>: ${req.body.lastName} <br/>
            <strong>Mail Address</strong>: ${req.body.email} <br/>
            <strong>Phone Number</strong>: ${req.body.phoneNumber} <br/>
            `,
        };
         sgMail.send(msg).then((mail) => {
             return res.json(mail)
         }).catch((err) => {
            return res.json(err).status(500)
         });    
    }
}

const mailController = new MailController();
module.exports = mailController;