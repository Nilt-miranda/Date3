// api/enviar.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { horario, comida, mensagem } = req.body;

  if (!horario || !comida || !mensagem) {
    return res.status(400).json({ error: "Dados incompletos" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // ex: niltonpgvm@gmail.com
        pass: process.env.EMAIL_PASS, // senha de app
      },
    });

    const info = await transporter.sendMail({
      from: `"Convite Interativo" <${process.env.EMAIL_USER}>`,
      to: "cleberlsdadsa@gmail.com",
      subject: `Convite: ${horario} - ${comida}`,
      text: `Horário: ${horario}\nComida: ${comida}\nMensagem:\n${mensagem}`,
    });

    return res.status(200).json({ ok: true, messageId: info.messageId });
  } catch (err) {
    console.error("Erro ao enviar:", err);
    return res.status(500).json({ error: "Erro ao enviar o e-mail" });
  }
}
