 // nabilwazze19@gmail.com
 // const sendgridAPIKey = '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'



 const sgMail = require('@sendgrid/mail')

 
 sgMail.setApiKey(process.env.SEND_API_KEY)


 const sendWelcomeEmail = (email, name) => {
     sgMail.send({
         to: email,
         from: 'nabilwazze19@gmail.com',
         subject: 'Thanks for joining in!',
         text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
     })
 }
 
 const sendCancelationEmail = (email, name) => {
     sgMail.send({
         to: email,
         from: 'nabilwazze19@gmail.com',
         subject: 'Sorry to see you go!',
         text: `Goodbye, ${name}. I hope to see you back sometime soon.`
     })
 }
 
 module.exports = {
     sendWelcomeEmail,
     sendCancelationEmail
 }