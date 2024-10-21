import * as nodemailer from "nodemailer";
const fs = require("fs");
const path = require("path");

export default async (req, context) => {
  console.log(req);
  console.log(context);

  const res = new Response();

  res.headers.set(
    "Access-Control-Allow-Origin",
    "https://6715b159db43ab0008f9a6d5--pmms-landing.netlify.app/"
  );
  res.headers.append("Access-Control-Allow-Headers", "*");
  res.headers.append("Access-Control-Allow-Methods", "*");

  try {
    // const { content, email, user, subject } = req.body;
    console.log(JSON.parse(req?.body));

    // Validación de datos
    // if (!content || !email || !user || !subject) {
    //   return res(
    //     JSON.stringify(
    //       JSON.stringify(
    //         { error: "Faltan parámetros en la solicitud" },
    //         {
    //           statusCode: 400,
    //           headers: headers,
    //         }
    //       )
    //     )
    //   );
    // }

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

    return res(
      JSON.stringify(
        {
          message: "Correo enviado exitosamente",
          messageId: info.messageId,
        },
        {
          statusCode: 200,
        }
      )
    );
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return res(
      JSON.stringify(
        { error: "Error al procesar la solicitud", details: error.message },
        {
          statusCode: 500,
        }
      )
    );
  }
};
