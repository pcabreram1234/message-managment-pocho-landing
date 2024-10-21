import * as nodemailer from "nodemailer";
const fs = require("fs");
const path = require("path");

export default async (req, context) => {
  console.log(req);
  console.log(context);
  const headers = {
    "Access-Control-Allow-Origin": "https://pmms-landing.netlify.app", // Permite solicitudes desde cualquier origen (puedes restringirlo a tu dominio)
    "Access-Control-Allow-Methods": "OPTIONS, POST", // Métodos permitidos
    "Access-Control-Allow-Headers": "Content-Type", // Encabezados permitidos
  };
  try {
    const { content, email, user, subject } = event.body;

    // Validación de datos
    if (!content || !email || !user || !subject) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Faltan parámetros en la solicitud" }),
        headers: headers,
      };
    }

    // Configuración del transportador (asegúrate de tener las variables de entorno configuradas)
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: "pcabreram1234@gmail.com",
        pass: process.env.GOOGLE_APPLICATION_PASSWORD1,
      },
    });

    // Verificar la configuración del transportador
    await transporter.verify();

    // Leer el template y reemplazar los valores
    const templatePath = path.join(
      __dirname,
      "..",
      "templates",
      "mail_template.html"
    );
    const template = fs.readFileSync(templatePath, "utf8");
    const html = template
      .replace("{{SCHEDULED_MESSAGE}}", content)
      .replace("{{User}}", user)
      .replace("{{Subject}}", subject)
      .replace("{{Email}}", email);

    // Enviar el correo
    const info = await transporter.sendMail({
      from: process.env.NODEMAILER_FROM,
      to: email,
      subject,
      html,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Correo enviado exitosamente",
        messageId: info.messageId,
      }),
    };
  } catch (error) {
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
