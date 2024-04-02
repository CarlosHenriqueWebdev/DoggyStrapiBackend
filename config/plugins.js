module.exports = () => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: "smtp.sendgrid.net",
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_API_KEY,
      },
    },
    settings: {
      defaultFrom: process.env.SMTP_EMAIL,
      defaultReplyTo: process.env.SMTP_EMAIL,
    },
  },
});
