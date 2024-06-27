import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface RequestBody {
  selectedServices: string[];
  selectedDay: string;
  buttonTime: string;
  name: string;
  phoneNumber: number;
  email: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const {
    selectedServices,
    selectedDay,
    buttonTime,
    name,
    phoneNumber,
    email,
  } = body;

  const transporter: nodemailer.Transporter = nodemailer.createTransport({
    service: process.env.NEXT_PUBLIC_NAME_HOST,
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  const mailOptions: nodemailer.SendMailOptions = {
    from: `${email}`,
    to: process.env.NEXT_PUBLIC_EMAIL_SEND_TO,
    subject: 'Appointment request',
    html: `<div><p>Name: ${name}</p><p>Selected Services: ${selectedServices.join(', ')}</p><p>Selected Day: ${selectedDay}</p><p>Time of day: ${buttonTime}</p><p>Number: ${phoneNumber}</p><p>Email: ${email}</p></div>`, // html body
  };

  return transporter
    .sendMail(mailOptions)
    .then((response: nodemailer.SentMessageInfo) => {
      return NextResponse.json(
        { error: false, emailSent: true, errors: [], response },
        { status: 200 },
      );
    })
    .catch((error: nodemailer.SentMessageInfo) => {
      return NextResponse.json(
        { error: true, emailSent: false, errors: [error] },
        { status: 500 },
      );
    });
}
