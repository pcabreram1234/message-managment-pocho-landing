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
    // Parsear el body JSON
    const requestBody = JSON.parse(req.body);

    // Extraer los campos del JSON
    const { content, email, user } = requestBody;

    // Lógica de procesamiento del correo

    // Configuración del transportador
    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      secure: true,
      port: 465,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_USER_PASSWORD,
      },
    });

    try {
      await transporter.verify();

      const template = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inquietudes o Inconvenientes</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      color: #333;
      background-color: #f4f4f4;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h2 {
      color: #2a2a2a;
    }
    p {
      font-size: 16px;
      line-height: 1.5;
    }
    .message {
      background-color: #f9f9f9;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 5px;
      margin-top: 20px;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      font-size: 14px;
      color: #777;
    }
    .footer a {
      color: #1a73e8;
      text-decoration: none;
    }
    .footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Hello <strong>PMMS</strong> Team:</h2>
    <p>A message has been received from one of our users with the following concerns or issues:</p>
    
    <div class="message">
    <p><strong>User Name:</strong> {{User}} </p>
    <p><strong>Email:</strong>{{Email}}</p>
    <p><strong>Subject:</strong>{{Subject}}</p>
    <p><strong>Message:</strong></p>
    <p>{{SCHEDULED_MESSAGE}}</p>
    </div>
    
    <p>Please review the message and provide a response as soon as possible.</p>
  </div>
</body>
</html>
`;
      const html = template
        .replace("{{SCHEDULED_MESSAGE}}", content)
        .replace("{{User}}", user)
        .replace("{{Subject}}", "Questions about PMMS")
        .replace("{{Email}}", email);

      // Enviar el correo
      const info = await transporter.sendMail({
        from: email,
        to: process.env.NODEMAILER_USER,
        subject: "Questions about PMMS",
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
