const nodemailer = require("nodemailer");

module.exports = {
  async afterCreate(model) {
    const { FirstName, LastName, Email, Location, PhoneNumber } =
      model.params.data;

    const { EmergencyName, EmergencyPhoneNumber } =
      model.result.EmergencyContact;

    const dogsInfo = model.result.DogsInformation.map((dog, index) => {
      const {
        DogName,
        Breed,
        Age,
        AdditionalInformation,
        SpreyedNeutered,
        VaccinationStatus,
      } = dog;

      // Return an object with the extracted data
      return {
        DogName,
        Breed,
        Age,
        AdditionalInformation,
        SpreyedNeutered,
        VaccinationStatus,
      };
    });

    const userText = `Olá ${FirstName} ${LastName}, 
    
    Agradecemos por escolher a nossa Creche para Cães. Sua reserva foi recebida com sucesso!
    
    Detalhes da sua reserva:
    
    Localidade: ${Location}
    
    Informações de Contato:
    - Email: ${Email}
    - Telefone: ${PhoneNumber}

    Contato de Emergência:
    - Nome do Contato de Emergência: ${EmergencyName}
    - Telefone do Contato de Emergência: ${EmergencyPhoneNumber}

    Cães Registrados: ${dogsInfo
      .map(
        (dog, index) => `

    Cão #${index + 1}:
    - Nome: ${dog.DogName}
    - Raça: ${dog.Breed}
    - Idade: ${dog.Age}
    - Informações Adicionais: ${dog.AdditionalInformation}
    - Castrado(a): ${dog.SpreyedNeutered}
    - Status de Vacinação: ${dog.VaccinationStatus}`
      )
      .join("\n")}
  
  Se tiver mais alguma dúvida ou necessitar de informações adicionais, não hesite em entrar em contato conosco.

  Atenciosamente,
  Doggy Daycare`;

    const adminNotificationText = `
    Nova Reserva Recebida:

    Cliente: ${FirstName} ${LastName}
    E-mail: ${Email}
    Telefone: ${PhoneNumber}
    Localidade: ${Location}

    Contato de Emergência:
    Nome: ${EmergencyName}
    Telefone de Emergência: ${EmergencyPhoneNumber}

    Detalhes dos Cães:
    ${dogsInfo
      .map(
        (dog, index) => `
    Cão #${index + 1}:
    Nome: ${dog.DogName}
    Raça: ${dog.Breed}
    Idade: ${dog.Age}

    Informações Adicionais:
    ${dog.AdditionalInformation || "Nenhuma informação adicional."}

    Castrado/esterilizado: ${dog.SpreyedNeutered}
    Status de Vacinação: ${dog.VaccinationStatus}
    `
      )
      .join("\n")}
    `;

    // Check if the model object has the expected properties
    if (
      FirstName &&
      LastName &&
      Email &&
      Location &&
      EmergencyName &&
      EmergencyPhoneNumber &&
      dogsInfo
    ) {
      model.result.isFormSuccessful = false;

      // Nodemailer configuration for the first email
      const transporter = nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Email content for the first email
      const mailOptions = {
        from: "carloshenrique.webdev@gmail.com",
        to: Email,
        subject: "Recebemos sua Reserva na Doggy Daycare!",
        text: `${userText}`,
      };

      // Send the first email
      try {
        await transporter.sendMail(mailOptions);
        console.log(`Email notification sent to ${Email}`);
        model.result.isFormSuccessful = true;
      } catch (error) {
        console.error("Error sending email notification:", error);
      }

      // Nodemailer configuration for the second email
      const transporter2 = nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Email content for the second email
      const mailOptions02 = {
        from: "carloshenrique.webdev@gmail.com",
        to: "carloshenrique.webdev@gmail.com",
        subject: `${Location} - Nova Reserva Recebida - ${FirstName} ${LastName}`,
        text: `${adminNotificationText}`,
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
