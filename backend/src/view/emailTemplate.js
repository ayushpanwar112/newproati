// emailTemplate.js
export const generateTemplate = (userName) => {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px;">
      <h2 style="color: #333;">Hello, ${userName}!</h2>
      <p>Thank you for reaching out. We have received your message and will get back to you soon.</p>
      <br />
      <p>Best Regards,<br>Support Team</p>
    </div>
  `;
};