const mailTemplate = ({name}) => {
  const companyName = "Pestra";
  const address = "22A Henry Adefowope Street, Opebi";
  const supportEmail = "cs@pestra.net";

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Message received</title>
  </head>
  <body style="margin:0;padding:24px 0;background-color:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
      We've received your message and will be in touch shortly
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
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="center" style="padding-bottom:20px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td align="center" valign="middle" width="56" height="56" style="width:56px;height:56px;background-color:#dcfce7;border-radius:28px;color:#15803d;font-size:28px;font-weight:bold;line-height:56px;">
                            &#10003;
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td align="center" style="padding-bottom:16px;">
                      <h1 style="margin:0;font-size:22px;font-weight:500;color:#111827;">Message received</h1>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-bottom:12px;font-size:16px;color:#111827;">
                      Dear ${name},
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-bottom:16px;font-size:15px;line-height:28px;color:#4b5563;">
                      Thank you for contacting ${companyName}. Your message has been sent successfully, and a member of our team will reach out to you shortly.
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-bottom:20px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td style="background-color:#f9fafb;border-radius:8px;padding:12px 16px;font-size:14px;color:#4b5563;">
                            We usually reply within 24 hours
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style="font-size:15px;line-height:28px;color:#4b5563;">Kind regards,</td>
                  </tr>
                  <tr>
                    <td style="font-size:15px;font-weight:500;line-height:28px;color:#111827;">The ${companyName} Team</td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="background-color:#f9fafb;border-top:1px solid #e5e7eb;padding:20px 32px;font-size:12px;line-height:24px;color:#9ca3af;">
                <p style="margin:0;">${companyName} Ltd. &middot; ${address}</p>
                <p style="margin:0;">${supportEmail}</p>
                <p style="margin:8px 0 0;">This is an automated confirmation. Please don't reply to this email.</p>
                <p style="margin:0;">&copy; ${new Date().getFullYear()} ${companyName}. All rights reserved.</p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

module.exports = mailTemplate ;