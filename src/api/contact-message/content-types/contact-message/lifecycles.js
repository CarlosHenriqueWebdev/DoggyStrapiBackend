const nodemailer = require("nodemailer");

module.exports = {
  async afterCreate(model) {
    const { FirstName, LastName, Email, Message, Location, InquiryType } =
      model.params.data;

    // Check if the model object has the expected properties
    if (FirstName && LastName && Email && Message && Location && InquiryType) {
      // Add isFormSucessful to the model.result
      model.result.isFormSuccessful = false;

      const transporter = nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 587,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_API_KEY,
        },
      });

      // Email content for the first email
      const mailOptions = {
        from: process.env.SMTP_EMAIL,
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

        // Set the isFormSuccessful flag
        model.result.isFormSuccessful = true;
      } catch (error) {
        console.error("Error sending email notification:", error);
      }

      // Nodemailer configuration for the second email
      const transporter2 = nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 587,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_API_KEY,
        },
      });

      // Email content for the second email
      const mailOptions02 = {
        from: process.env.SMTP_EMAIL,
        to: process.env.SMTP_EMAIL,
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
        model.result.isFormSuccessful = true;
      } catch (error) {
        console.error("Error sending second email notification:", error);
      }
    } else {
      console.error("Missing required properties in the model object");
    }
  },
};
