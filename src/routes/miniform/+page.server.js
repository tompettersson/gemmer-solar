import { PRIVATE_EMAIL_PW } from '$env/static/private';
import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
  service: 'Actualize',
  host: "s1.actualizeserver.de",
  secureConnection: true,
  port: 465,
  secure: true,
  auth: {
    user: 'thomas.pettersson@actualize.de',
    pass: PRIVATE_EMAIL_PW
  }
})

export const actions = {
  default: async ({ request }) => {
    const values = await request.formData();
    const name = values.get("full-name") ? values.get("full-name") : '';
    const number = values.get("phone") ? values.get("phone") : '';
    const email = values.get("email") ? values.get("email") : '';
    const text = values.get("message") ? values.get("message") : '';
    const message = "Name: " + name + "\n\nTelefon: " + number + "\n\nE-Mail-Adresse: " + email + "\n\nNachricht:\n\n" + text;

    await new Promise((resolve, reject) => {
      transporter.sendMail({
        from: email,
        to: 'tom@actualize.de',
        subject: 'Nachricht aus dem Kontaktformular',
        text: message,
      }, (error, info) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log('Email sent: ' + info.response);
          resolve(info);
        }
      })
    });
  }
};