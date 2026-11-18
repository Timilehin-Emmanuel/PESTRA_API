const formNotificationEmail = ({ name, email, phone, message }) => {
  const companyName = "Pestra";
  const receivedAt = new Date().toLocaleString("en-NG", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Africa/Lagos",
  });

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New message from your website</title>
  </head>
  <body style="margin:0;padding:24px 0;background-color:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
      New contact form submission from ${name}
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding:0 16px;">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:560px;background-color:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">

            <!-- Header with logo -->
            <tr>
              <td align="center" style="padding:24px 32px;border-bottom:1px solid #e5e7eb;">
                <img src="https://res.cloudinary.com/gw2vxkuk/image/upload/v1794928683/pestra.png" alt="${companyName}" width="140" height="40" style="display:block;margin:0 auto;height:40px;width:auto;border:0;" />               
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 6px;font-size:12px;font-weight:500;letter-spacing:0.5px;color:#9ca3af;">NEW SUBMISSION</p>
                <h1 style="margin:0 0 8px;font-size:22px;font-weight:500;color:#111827;">New message from your website</h1>
                <p style="margin:0 0 24px;font-size:14px;line-height:24px;color:#4b5563;">
                  Someone just filled out the contact form. Here are the details.
                </p>

                <!-- Details -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e5e7eb;border-radius:8px;margin-bottom:20px;">
                  <tr>
                    <td width="90" style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#9ca3af;">Name</td>
                    <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:14px;color:#111827;">${name}</td>
                  </tr>
                  <tr>
                    <td width="90" style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#9ca3af;">Email</td>
                    <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:14px;">
                      <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td width="90" style="padding:12px 16px;font-size:13px;color:#9ca3af;">Phone</td>
                    <td style="padding:12px 16px;font-size:14px;">
                      <a href="tel:${phone}" style="color:#111827;text-decoration:none;">${phone}</a>
                    </td>
                  </tr>
                </table>

                <!-- Message -->
                <p style="margin:0 0 8px;font-size:13px;color:#9ca3af;">Message</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
                  <tr>
                    <td style="background-color:#f9fafb;border-radius:8px;padding:16px;font-size:14px;line-height:25px;color:#111827;">
                      ${message}
                    </td>
                  </tr>
                </table>

                <!-- Reply button -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="center">
                      <a href="mailto:${email}?subject=Re:%20Your%20message%20to%20${encodeURIComponent(companyName)}" style="display:inline-block;background-color:#111827;color:#ffffff;font-size:14px;font-weight:500;text-decoration:none;padding:12px 24px;border-radius:8px;">
                        Reply to ${name}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="background-color:#f9fafb;border-top:1px solid #e5e7eb;padding:20px 32px;font-size:12px;line-height:24px;color:#9ca3af;">
                <p style="margin:0;">Received on ${receivedAt}</p>
                <p style="margin:0;">This notification was sent automatically from your website contact form.</p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

module.exports = formNotificationEmail;