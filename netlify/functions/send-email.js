const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
exports.handler = async (req, context) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
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
    return {
      statusCode: 204, // Respuesta vacía, solo con los encabezados CORS
      headers: headers,
      body: JSON.stringify(req.body),
    };
  }

  // try {
  //   // Lógica de procesamiento del correo

  //   // Configuración del transportador
  //   const transporter = nodemailer.createTransport({
  //     port: 465,
  //     host: "smtp.gmail.com",
  //     secure: true,
  //     auth: {
  //       user: "pcabreram1234@gmail.com",
  //       pass: process.env.GOOGLE_APPLICATION_PASSWORD,
  //     },
  //   });

  //   await transporter.verify();

  //   // Leer el template y reemplazar los valores
  //   const templatePath = path.join(
  //     __dirname,
  //     "..",
  //     "templates",
  //     "mail-template.html"
  //   );
  //   const template = fs.readFileSync(templatePath, "utf8");
  //   const html = template
  //     .replace("{{SCHEDULED_MESSAGE}}", req.body.content)
  //     .replace("{{User}}", req.body.user)
  //     .replace("{{Subject}}", req.body.subject)
  //     .replace("{{Email}}", req.body.email);

  //   // Enviar el correo
  //   const info = await transporter.sendMail({
  //     from: process.env.NODEMAILER_FROM,
  //     to: req.body.email,
  //     subject: req.body.subject,
  //     html,
  //   });

  //   const res = new Response(
  //     JSON.stringify({
  //       message: "Correo enviado exitosamente",
  //       messageId: info.messageId,
  //     }),
  //     {
  //       status: 200,
  //       headers: headers,
  //     }
  //   );

  //   return res;
  // } catch (error) {
  //   console.error("Error al enviar el correo:", error);

  //   const res = new Response(
  //     JSON.stringify({
  //       error: "Error al procesar la solicitud",
  //       details: error.message,
  //     }),
  //     {
  //       status: 500,
  //       headers: headers,
  //     }
  //   );

  //   return res;
  // }
};
