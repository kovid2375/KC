import { transporter } from "@/lib/mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { fullName, email, subject, message } = body;

    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        {
          message: "Please fill all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.HR_EMAIL,
      replyTo: email,

      subject: `📩 New Contact Enquiry from ${fullName}`,

      html: `
      <!DOCTYPE html>
      <html>
      <body style="margin:0;padding:40px;background:#f5f7fb;font-family:Arial,sans-serif;">

      <table width="650" align="center" cellpadding="0" cellspacing="0"
      style="background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.08);">

      <tr>
      <td style="background:#2563eb;padding:35px;text-align:center;">
      <h1 style="color:white;margin:0;">📨 New Contact Request</h1>
      <p style="color:#dbeafe;margin-top:10px;">
      Someone submitted your Contact Form.
      </p>
      </td>
      </tr>

      <tr>
      <td style="padding:35px;">

      <table width="100%" cellpadding="12" style="border-collapse:collapse;">

      <tr>
      <td><strong>Full Name</strong></td>
      <td>${fullName}</td>
      </tr>

      <tr style="background:#f8fafc;">
      <td><strong>Email</strong></td>
      <td>${email}</td>
      </tr>

      <tr>
      <td><strong>Subject</strong></td>
      <td>${subject}</td>
      </tr>

      <tr style="background:#f8fafc;">
      <td><strong>Submitted</strong></td>
      <td>${new Date().toLocaleString()}</td>
      </tr>

      </table>

      <div style="margin-top:30px;background:#f8fafc;padding:20px;border-left:4px solid #2563eb;border-radius:10px;">

      <h3>Message</h3>

      <p style="line-height:1.8;color:#444;">
      ${message}
      </p>

      </div>

      <div style="margin-top:35px;text-align:center;">

      <a
      href="mailto:${email}"
      style="display:inline-block;padding:14px 30px;background:#2563eb;color:white;text-decoration:none;border-radius:8px;font-weight:bold;">
      Reply to Customer
      </a>

      </div>

      </td>
      </tr>

      <tr>
      <td style="padding:20px;background:#111827;text-align:center;color:#9ca3af;font-size:13px;">
      EZ Soft Tech • Contact Form
      </td>
      </tr>

      </table>

      </body>
      </html>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}