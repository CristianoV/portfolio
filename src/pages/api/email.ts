import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_EMAIL_HOST,
  port: 2525,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USER,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
  },
});

const sendEmail = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body as {
      name: string;
      email: string;
      message: string;
    };

    if (!name || !email || !message) {
      res.status(400).json({ message: 'Dados inválidos' });
      return;
    }

    const mailOptions = {
      from: email,
      to: 'cristianoviieira@gmail.com',
      subject: name,
      text: message,
    };

    transport.sendMail(mailOptions, (error) => {
      if (error) res.status(500).json({ message: 'Erro ao enviar e-mail' });
    });

    res.status(200).json({ message: 'E-mail enviado com sucesso', teste: process.env.NEXT_PUBLIC_EMAIL_USER, });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }
};

export default sendEmail;
