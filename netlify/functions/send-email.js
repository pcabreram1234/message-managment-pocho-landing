const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const os = require("os");
exports.handler = async (req, context) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
    "Content-Type": "application/json",
    resp: "",
    error: "",
  };

  if (req.httpMethod === "GET") {
    console.log(req);
    return {
      statusCode: 204, // Respuesta vacía, solo con los encabezados CORS
      headers: headers,
    };
  }

  if (req.httpMethod === "POST") {
    console.log(req);

    // Parsear el body JSON
    const requestBody = JSON.parse(req.body);

    // Extraer los campos del JSON
    const { content, email, user, subject } = requestBody;

    // Lógica de procesamiento del correo

    // Configuración del transportador
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

      // Leer el template y reemplazar los valores
      console.log(path.parse("/opt/build/repo/dist/template.html"));
      console.log(os.homedir());
      const templatePath = path.parse("/opt/build/repo/dist/template.html");
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
        subject: subject,
        html,
        text: content.toString(),
      });

      headers.resp = info.messageId;
      return {
        statusCode: 204,
        headers: headers,
      };
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      headers.error = error.message;
      return {
        statusCode: 500,
        headers: headers,
      };
    }
  }
};
