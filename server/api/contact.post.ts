// server/api/contact.post.ts

import { defineEventHandler, readBody } from "h3";
import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
    const body = await readBody<{
        name?: string;
        email?: string;
        subject?: string;
        message?: string;
    }>(event);

    const transporter = nodemailer.createTransport({
        host: "mail.mentorspacekenya.org",
        port: 465,
        secure: true,
        auth: {
            user: "info@mentorspacekenya.org",
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    await transporter.sendMail({
        from: `"Website Contact" <info@mentorspacekenya.org>`,
        to: "info@mentorspacekenya.org",
        subject: body.subject,
        text: `
Name: ${body.name}

Email: ${body.email}

${body.message}
    `,
    });

    return {
        success: true,
    };
});
