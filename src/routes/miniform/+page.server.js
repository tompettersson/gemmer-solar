import {
	PRIVATE_EMAIL_PW,
	SMTP_HOST,
	SMTP_PORT,
	SMTP_USER,
	SMTP_FROM_EMAIL,
	SMTP_TO_EMAIL
} from '$env/static/private';
import nodemailer from 'nodemailer';

// SMTP Transporter erstellen
const transporter = nodemailer.createTransport({
	host: SMTP_HOST,
	port: parseInt(SMTP_PORT),
	secure: true,
	auth: {
		user: SMTP_USER,
		pass: PRIVATE_EMAIL_PW
	}
});

// Test der SMTP-Verbindung beim Server-Start
transporter.verify(function (error, success) {
	if (error) {
		console.error('SMTP-Verbindungsfehler:', error);
	} else {
		console.log('SMTP-Server ist bereit für Nachrichten');
	}
});


export const actions = {
	default: async ({ request }) => {
		try {
			const values = await request.formData();
			const name = values.get('full-name') ? values.get('full-name') : '';
			const number = values.get('phone') ? values.get('phone') : '';
			const email = values.get('email') ? values.get('email') : '';
			const text = values.get('message') ? values.get('message') : '';
			const message =
				'Name: ' +
				name +
				'\n\nTelefon: ' +
				number +
				'\n\nE-Mail-Adresse: ' +
				email +
				'\n\nNachricht:\n\n' +
				text;

			const htmlMessage = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0; padding:0; background-color:#f4f4f5; font-family:'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5; padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden;">
        <!-- Header -->
        <tr>
          <td style="background-color:#27272a; padding:24px 32px; text-align:center;">
            <span style="color:#faba40; font-size:20px; font-weight:bold;">Gemmer Solar</span>
            <span style="color:#a1a1aa; font-size:20px; font-weight:300;"> | Kontaktformular</span>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <p style="margin:0 0 24px; color:#52525b; font-size:14px;">Neue Nachricht über das Kontaktformular auf gemmer-solar.de:</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td style="padding:12px 16px; background-color:#f4f4f5; border-bottom:1px solid #e4e4e7; width:140px; color:#71717a; font-size:13px; font-weight:600;">Name</td>
                <td style="padding:12px 16px; background-color:#f4f4f5; border-bottom:1px solid #e4e4e7; color:#27272a; font-size:14px;">${name || '–'}</td>
              </tr>
              <tr>
                <td style="padding:12px 16px; border-bottom:1px solid #e4e4e7; width:140px; color:#71717a; font-size:13px; font-weight:600;">Telefon</td>
                <td style="padding:12px 16px; border-bottom:1px solid #e4e4e7; color:#27272a; font-size:14px;">${number || '–'}</td>
              </tr>
              <tr>
                <td style="padding:12px 16px; background-color:#f4f4f5; border-bottom:1px solid #e4e4e7; width:140px; color:#71717a; font-size:13px; font-weight:600;">E-Mail</td>
                <td style="padding:12px 16px; background-color:#f4f4f5; border-bottom:1px solid #e4e4e7; color:#27272a; font-size:14px;"><a href="mailto:${email}" style="color:#faba40;">${email || '–'}</a></td>
              </tr>
            </table>
            <div style="background-color:#fafafa; border-left:3px solid #faba40; padding:16px 20px; border-radius:0 4px 4px 0;">
              <p style="margin:0 0 4px; color:#71717a; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:0.5px;">Nachricht</p>
              <p style="margin:0; color:#27272a; font-size:14px; line-height:1.6; white-space:pre-wrap;">${text || '–'}</p>
            </div>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background-color:#fafafa; padding:16px 32px; border-top:1px solid #e4e4e7; text-align:center;">
            <p style="margin:0; color:#a1a1aa; font-size:11px;">Diese Nachricht wurde automatisch über das Kontaktformular auf gemmer-solar.de versendet.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

			try {
				// E-Mail-Konfiguration
				const mailOptions = {
					from: `"Gemmer Solar Kontaktformular" <${SMTP_FROM_EMAIL}>`,
					to: SMTP_TO_EMAIL,
					subject: 'Neue Kontaktanfrage über gemmer-solar.de',
					text: message,
					html: htmlMessage,
					replyTo: email
				};

				// E-Mail senden mit Timeout
				const emailPromise = new Promise((resolve, reject) => {
					transporter.sendMail(mailOptions, (error, info) => {
						if (error) {
							console.error('E-Mail-Fehler:', error);
							reject(error);
						} else {
							console.log('E-Mail erfolgreich gesendet:', info.response);
							resolve(info);
						}
					});
				});

				// Timeout nach 10 Sekunden
				const timeoutPromise = new Promise((_, reject) => {
					setTimeout(() => reject(new Error('E-Mail-Timeout nach 10 Sekunden')), 10000);
				});

				// Race zwischen E-Mail-Versand und Timeout
				await Promise.race([emailPromise, timeoutPromise]).catch((error) => {
					console.warn('E-Mail konnte nicht rechtzeitig gesendet werden:', error.message);
				});

				// Erfolg zurückgeben, auch wenn E-Mail-Versand fehlschlägt
				return { success: true };
			} catch (emailError) {
				console.error('Fehler beim E-Mail-Versand:', emailError);
				return {
					success: true,
					warning: 'Nachricht empfangen, aber E-Mail konnte nicht sofort verarbeitet werden'
				};
			}
		} catch (formError) {
			console.error('Fehler bei der Formularverarbeitung:', formError);
			return { success: false, error: 'Es gab ein Problem bei der Verarbeitung des Formulars.' };
		}
	}
};
