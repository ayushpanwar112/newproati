// mailer.js
import nodemailer from 'nodemailer';
import 'dotenv/config'; // Automatically loads .env variables
import { generateTemplate } from '../../view/emailTemplate.js';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendMail = async (userEmail, userName) => {
  try {
    const info = await transporter.sendMail({
      from: `"My Company"`,
      to: userEmail,
      subject: `Welcome ${userName}!`,
      html: generateTemplate(userName),
    });

    console.log(`✅ Email sent to: ${userEmail} | ID: ${info.messageId}`);
    return { success: true };
  } catch (error) {
    console.error(`❌ Error for ${userEmail}:`, error.message);
    return { success: false, error: error.message };
  }
};

