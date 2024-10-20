const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

exports.handler = async function (message) {
  const { content, email, user, subject } = message;

  // Crear el transportador con la configuración necesaria
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: "pcabreram1234@gmail.com",
      pass: process.env.GOOGLE_APPLICATION_PASSWORD,
    },
  });

  try {
    await transporter.verify();
    const templatePath = path.join(
      __dirname,
      "..",
      "/templates/",
      "mail_template.html"
    );
    let emailTemplate = fs.readFileSync(templatePath, "utf8");

    emailTemplate = emailTemplate.replace("{{SCHEDULED_MESSAGE}}", content);
    emailTemplate = emailTemplate.replace("{{User}}", user);
    emailTemplate = emailTemplate.replace("{{Subject}}", subject);
    emailTemplate = emailTemplate.replace("{{Email}}", email);

    // Enviar el correo de forma asincrónica
    const info = await transporter.sendMail({
      from: process.env.NODEMAILER_FROM, // Dirección del remitente
      to: email, // Dirección de destino
      subject: "Mail of concerns or problems", // Asunto del correo
      text: content.toString(), // Mensaje en texto plano
      html: emailTemplate,
    });

    // Determinar el resultado basado en la respuesta del envío
    let resp;
    if (info.messageId) {
      resp = "sended";
      await this.messageConfigService.updateMessagePending(id, resp);
      console.log("Message sent: %s", info.messageId);
    } else {
      resp = "error";
      console.error("Error en el envío del mensaje");
    }

    return resp;
  } catch (error) {
    console.log(error);
    return { error: error };
  }
};
