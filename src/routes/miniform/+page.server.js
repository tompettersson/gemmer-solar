import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
  service: 'Actualize',
  host: "s1.actualizeserver.de",
  secureConnection: false,
  port: 465,
  secure: false,
  auth: {
    user: 'thomas.pettersson@actualize.de',
    pass: 'emailPETAsson1802'
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

    transporter.sendMail({
      from: email,
      to: 'tom@actualize.de',
      subject: 'Nachricht aus dem Kontaktformular',
      text: message,
    }, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    })
  }
};
