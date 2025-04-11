import {
	PRIVATE_EMAIL_PW,
	SMTP_HOST,
	SMTP_PORT,
	SMTP_USER,
	SMTP_FROM_EMAIL,
	SMTP_TO_EMAIL
} from '$env/static/private';
import nodemailer from 'nodemailer';

// Fast Mail Transporter erstellen
const transporter = nodemailer.createTransport({
	service: 'Fastmail',
	host: SMTP_HOST,
	secureConnection: true,
	port: parseInt(SMTP_PORT),
	secure: true,
	auth: {
		user: SMTP_USER,
		pass: PRIVATE_EMAIL_PW
	},
	// Debug-Optionen für mehr Informationen
	debug: true,
	logger: true
});

// Test der SMTP-Verbindung beim Server-Start
transporter.verify(function (error, success) {
	if (error) {
		console.error('SMTP-Verbindungsfehler:', error);
	} else {
		console.log('SMTP-Server ist bereit für Nachrichten');
	}
});

/**
 * Sendet eine E-Mail ohne auf Antwort zu warten
 * @param {Object} mailOptions - Die E-Mail-Optionen
 */
function sendEmailAsync(mailOptions) {
	// E-Mail in einem nicht-blockierenden Kontext senden
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error('Fehler beim asynchronen E-Mail-Versand:', error);
		} else {
			console.log('E-Mail async gesendet:', info.response);
		}
	});
}

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

			try {
				// E-Mail-Konfiguration
				const mailOptions = {
					from: `"Gemmer Solar Website Formular" <${SMTP_FROM_EMAIL}>`,
					to: SMTP_TO_EMAIL,
					subject: 'TEST - Nachricht aus dem Kontaktformular - Gemmer-Solar',
					text: message,
					replyTo: email
				};

				console.log(
					'Versuche E-Mail zu senden mit folgenden Optionen:',
					JSON.stringify(mailOptions, null, 2)
				);

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
