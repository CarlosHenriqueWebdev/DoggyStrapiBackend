module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp-relay.brevo.com",
        port: 587,
        auth: {
          user: "carloshenrique.webdev@gmail.com",
          pass: "R07gfHNE5waFjWqy",
        },
      },
      settings: {
        defaultFrom: "carloshenrique.webdev@gmail.com",
        defaultReplyTo: "carloshenrique.webdev@gmail.com",
      },
    },
  },
});
