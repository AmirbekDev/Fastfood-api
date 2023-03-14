import nodemailer from "nodemailer";
import "../../../setup"
import Mail from "nodemailer/lib/mailer";

const transporter = nodemailer.createTransport(({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
}))

export const sendEmail = async (email: string, code: string): Promise<void> => {

  const mailOptions: Mail.Options = {
    from: "amiryusupov.070@gmail.com",
    to: email,
    subject: 'Verify code on Faveo',
    html: `<div style="text-align:center"><span>To complete the sign in, enter the verification code <span/><h3>Verification code: ${code}<h3/<div/>`
  }

  transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
          console.log("Error:" + err);
      }
      else {
          console.log('Send Mail: ' + info.response);
      }
  })

}