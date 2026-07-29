import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request) {
  try {
    const data = await request.json();

    const requiredFields = ["name", "company", "phone", "budget", "timeline", "service"];
    const missing = requiredFields.filter((field) => !data[field] || String(data[field]).trim() === "");

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.SMTP_FROM || !process.env.SMTP_TO) {
      console.error("SMTP configuration is incomplete.");
      return NextResponse.json(
        { error: "SMTP email settings are not configured. Check your .env.local." },
        { status: 500 }
      );
    }

    const subject = `New enquiry from ${data.name} — ${data.company}`;
    const messageText = `
Name: ${data.name}
Company: ${data.company}
Phone: ${data.phone}
Email: ${data.email || "(not provided)"}
Budget: ${data.budget}
Timeline: ${data.timeline}
Service: ${data.service}
Message: ${data.message || "(none)"}
`;

    await transport.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      replyTo: data.email || process.env.SMTP_FROM,
      subject,
      text: messageText,
      html: `<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Company:</strong> ${data.company}</p>
<p><strong>Phone:</strong> ${data.phone}</p>
<p><strong>Email:</strong> ${data.email || "(not provided)"}</p>
<p><strong>Budget:</strong> ${data.budget}</p>
<p><strong>Timeline:</strong> ${data.timeline}</p>
<p><strong>Service:</strong> ${data.service}</p>
<p><strong>Message:</strong> ${data.message || "(none)"}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("send-email route error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to send email." },
      { status: 500 }
    );
  }
}
