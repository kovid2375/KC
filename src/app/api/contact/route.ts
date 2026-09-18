import { transporter } from "@/lib/mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { fullName, name, email, subject, message } = body;
    const senderName = fullName || name;

    if (!senderName || !email || !subject || !message) {
      return NextResponse.json(
        {
          message: "Please fill all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    const formattedDate = new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date());

    const sanitizedMessage = message.replace(/\n/g, "<br/>");

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.HR_EMAIL || process.env.EMAIL_USER,
      replyTo: email,

      subject: `⚡ Portfolio Inquiry: ${senderName} — "${subject}"`,

      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Portfolio Message</title>
      </head>
      <body style="margin:0;padding:32px 16px;background-color:#0c0d12;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#f3f4f6;">
        
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td align="center">
              
              <!-- Container Box -->
              <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#14151f;border-radius:18px;overflow:hidden;border:1px solid #232536;box-shadow:0 20px 40px rgba(0,0,0,0.5);">
                
                <!-- Header Banner -->
                <tr>
                  <td style="background:linear-gradient(135deg, #181926 0%, #11121b 100%);padding:36px 36px 28px 36px;border-bottom:1px solid #232536;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td>
                          <div style="display:inline-block;padding:5px 12px;background:rgba(239,68,68,0.12);border:1px solid rgba(239,68,68,0.3);border-radius:100px;color:#ef4444;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:14px;">
                            • Portfolio Contact Form
                          </div>
                          <h1 style="margin:0;font-size:24px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;line-height:1.2;">
                            New Inquiry from <span style="color:#ef4444;">${senderName}</span>
                          </h1>
                          <p style="margin:8px 0 0 0;font-size:13px;color:#9ca3af;line-height:1.4;">
                            Received on ${formattedDate}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Contact Meta Card -->
                <tr>
                  <td style="padding:28px 36px 12px 36px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#1a1c29;border:1px solid #26293d;border-radius:12px;overflow:hidden;">
                      <tr>
                        <td style="padding:16px 20px;border-bottom:1px solid #26293d;width:30%;color:#9ca3af;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;">
                          Sender
                        </td>
                        <td style="padding:16px 20px;border-bottom:1px solid #26293d;color:#ffffff;font-size:14px;font-weight:600;">
                          ${senderName}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:16px 20px;border-bottom:1px solid #26293d;width:30%;color:#9ca3af;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;">
                          Email Address
                        </td>
                        <td style="padding:16px 20px;border-bottom:1px solid #26293d;font-size:14px;">
                          <a href="mailto:${email}" style="color:#60a5fa;text-decoration:none;font-weight:500;">
                            ${email}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:16px 20px;width:30%;color:#9ca3af;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;">
                          Subject
                        </td>
                        <td style="padding:16px 20px;color:#f3f4f6;font-size:14px;font-weight:600;">
                          ${subject}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Message Body -->
                <tr>
                  <td style="padding:16px 36px 28px 36px;">
                    <div style="color:#9ca3af;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;margin-bottom:10px;">
                      Message Content
                    </div>
                    <div style="background:#1a1c29;border-left:3px solid #ef4444;border-radius:0 12px 12px 0;padding:22px 24px;color:#e5e7eb;font-size:15px;line-height:1.7;white-space:normal;word-break:break-word;">
                      ${sanitizedMessage}
                    </div>
                  </td>
                </tr>

                <!-- Quick Action Button -->
                <tr>
                  <td align="center" style="padding:0 36px 36px 36px;">
                    <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
                      <tr>
                        <td align="center" style="border-radius:10px;background:#ef4444;">
                          <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" 
                             target="_blank" 
                             style="display:inline-block;padding:14px 32px;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:0.5px;border-radius:10px;background:#ef4444;box-shadow:0 6px 20px rgba(239,68,68,0.35);">
                            Direct Reply to ${senderName} &rarr;
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding:22px 36px;background:#0f1017;border-top:1px solid #1f2130;text-align:center;">
                    <p style="margin:0;color:#6b7280;font-size:12px;letter-spacing:0.5px;">
                      Sent from <strong style="color:#9ca3af;">Kovid Chouhan Portfolio</strong> • Contact System
                    </p>
                  </td>
                </tr>

              </table>
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