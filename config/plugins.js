module.exports = ({ env }) => ({
  // ...
  // email: {
  //   config: {
  //     provider: 'sendgrid',
  //     providerOptions: {
  //       apiKey: env('ENV_01_LAZY'),
  //     },
  //     settings: {
  //       defaultFrom: env('ENV_02_LAZY'),
  //       defaultReplyTo: env('ENV_03_LAZY'),
  //     },
  //   },
  // },
  // ...
  
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp-relay.brevo.com",
        port: 587,
        auth: {
          user: "ninjaman6u@gmail.com",
          pass: "2UAD7BnRhbN4Vazq",
        },
      },
      settings: {
        defaultFrom: "carlahenriques@mail.com",
        defaultReplyTo: "carlahenriques1@mail.com",
      },
    },
  },
});
