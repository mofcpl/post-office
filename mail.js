const config = require('./config');

nodeMailer = require('nodemailer');


const sendMail = (name, sender, subject, msg) =>
{
    let transporter = nodeMailer.createTransport(
    {
        host: config.emailHost,
        port: 465,
        secure: true,
        auth: 
        {
            user: config.emailUser,
            pass: config.emailPassword
        }
    });


    let mailOptions = 
    {
        from: config.host, // sender address
        to: config.recipient, // list of receivers
        subject: `Message from postoffice: ${subject}`, // Subject line
        text:` 
            Name: ${name}
            Sender: ${sender}
            Subject: ${subject}
            Message: ${msg}
            `,
    };

    transporter.sendMail(mailOptions, (error, info) => 
    {
        if (error) 
        {
            console.log('Error sending email: '+error);
            return error;
        }
        console.log('Message %s sent: %s', info.messageId, info.response);  
    });
    
    return 0;
}

module.exports = {sendMail};