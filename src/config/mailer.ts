import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'jonathanmelo0905@gmail.com', // generated ethereal user
      pass: 'maszojzhljouoxqy', // generated ethereal password
    },
});

transporter.verify().then(()=>{
    console.log('ready for send emails');
})
