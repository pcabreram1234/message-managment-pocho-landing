const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

exports.handler = async function (req, context) {
  // Accediendo a los parámetros de la URL en una solicitud GET
  const { content, email, user, subject } = JSON.stringify(req.body);
  console.log(content, email, user, subject);

  if (!content || !email || !user || !subject) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Faltan parámetros en la solicitud" }),
    };
  }

  // Crear el transportador con la configuración necesaria
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: process.env.GOOGLE_EMAIL_USER, // Usa una variable de entorno para el usuario de Gmail
      pass: process.env.GOOGLE_APPLICATION_PASSWORD, // Usa una variable de entorno para la contraseña
    },
  });

  try {
    // Verificar la configuración del transportador
    await transporter.verify();

    // Ruta del template de correo
    const templatePath = path.join(
      __dirname,
      "..",
      "/templates/",
      "mail_template.html"
    );

    // Leer el template de correo
    let emailTemplate = fs.readFileSync(templatePath, "utf8");

    // Reemplazar los valores en el template
    emailTemplate = emailTemplate.replace("{{SCHEDULED_MESSAGE}}", content);
    emailTemplate = emailTemplate.replace("{{User}}", user);
    emailTemplate = emailTemplate.replace("{{Subject}}", subject);
    emailTemplate = emailTemplate.replace("{{Email}}", email);

    // Enviar el correo
    const info = await transporter.sendMail({
      from: process.env.NODEMAILER_FROM, // Dirección del remitente
      to: email, // Dirección de destino
      subject: subject || "Mail of concerns or problems", // Asunto del correo
      text: content, // Mensaje en texto plano
      html: emailTemplate, // Template en HTML
    });

    // Determinar el resultado basado en la respuesta del envío
    if (info.messageId) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Correo enviado exitosamente",
          messageId: info.messageId,
        }),
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Error al enviar el correo" }),
      };
    }
  } catch (error) {
    // Manejo de errores
    console.error("Error al enviar el correo:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Error al procesar la solicitud",
        details: error.message,
      }),
    };
  }
};
