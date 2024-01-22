const nodemailer = require("nodemailer");

module.exports = {
  async afterCreate(model) {
    const { FirstName, LastName, Email, Message, Location, InquiryType } =
      model.params.data;

      console.log(model.params.data)
      
    // Check if the model object has the expected properties
    if (FirstName && LastName && Email && Message && Location && InquiryType) {
      console.log("check is workig!")
      // Nodemailer configuration for the first email
      const transporter = nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        auth: {
          user: "ninjaman6u@gmail.com",
          pass: "2UAD7BnRhbN4Vazq",
        },
      });

      // Email content for the first email
      const mailOptions = {
        from: "carlahenriques@mail.com",
        to: Email,
        subject: "Assunto: Seu Contato foi Recebido com Sucesso!",
        text: `Olá ${FirstName}, agradecemos por entrar em contato conosco. Recebemos sua mensagem e entraremos em contato em breve.

        Detalhes do seu contato:

        Tipo de Consulta: ${InquiryType}
        Localidade: ${Location}

        Mensagem: "${Message}"

        Se tiver mais alguma dúvida, fique à vontade para nos contatar.

        Atenciosamente,
        Doggy Daycare.`,
      };

      // Send the first email
      try {
        await transporter.sendMail(mailOptions);
        console.log(`Email notification sent to ${Email}`);
      } catch (error) {
        console.error("Error sending email notification:", error);
      }

      // Nodemailer configuration for the second email
      const transporter2 = nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        auth: {
          user: "ninjaman6u@gmail.com",
          pass: "2UAD7BnRhbN4Vazq",
        },
      });

      // Email content for the second email
      const mailOptions02 = {
        from: "carlahenriques@mail.com",
        to: "carlahenriques@mail.com",
        subject: `${InquiryType} - ${FirstName} enviou uma Mensagem.`,
        text: `Um novo contato foi recebido através do formulário. Abaixo estão os detalhes:

        Tipo de Consulta: ${InquiryType}

        Nome: ${FirstName} ${LastName}
        Localização: ${Location}
        
        E-mail: ${Email}

        Mensagem: "${Message}"
        
        Por favor, responda ao usuário o mais rápido possível.

        Atenciosamente,
        Doggy Daycare.`,
      };

      // Send the second email
      try {
        await transporter2.sendMail(mailOptions02);
        console.log("Second email notification sent");
      } catch (error) {
        console.error("Error sending second email notification:", error);
      }
    } else {
      console.error("Missing required properties in the model object");
    }
  },
};
