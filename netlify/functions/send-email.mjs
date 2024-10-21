import * as nodemailer from "nodemailer";
const fs = require("fs");
const path = require("path");
export default async (req, context) => {
  console.log(req);
  console.log(context);

  try {
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
      .replace("{{SCHEDULED_MESSAGE}}", req.body.content)
      .replace("{{User}}", req.body.user)
      .replace("{{Subject}}", req.body.subject)
      .replace("{{Email}}", req.body.email);

    // Enviar el correo
    const info = await transporter.sendMail({
      from: process.env.NODEMAILER_FROM,
      to: req.body.email,
      subject: req.body.subject,
      html,
    });

    const res = new Response(
      JSON.stringify({
        message: "Correo enviado exitosamente",
        messageId: info.messageId,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin":
            "https://6715b159db43ab0008f9a6d5--pmms-landing.netlify.app/",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "*",
        },
      }
    );

    return res;
  } catch (error) {
    console.error("Error al enviar el correo:", error);

    const res = new Response(
      JSON.stringify({
        error: "Error al procesar la solicitud",
        details: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin":
            "https://6715b159db43ab0008f9a6d5--pmms-landing.netlify.app/",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "*",
        },
      }
    );

    return res;
  }
};
