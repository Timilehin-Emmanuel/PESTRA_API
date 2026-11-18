const router = require("express").Router();
const emailQueue = require("../services/mailingService");
const mailTemplate = require("../utils/customerVerification");
const formNotificationEmail = require("../utils/companyNotification");
const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/verification", async (req, res) => {
  const payload = JSON.stringify(req.body);

  try {
    const svixId = req.headers["svix-id"];
    const svixTimestamp = req.headers["svix-timestamp"];
    const svixSignature = req.headers["svix-signature"];

    if (!svixId || !svixTimestamp || !svixSignature) {
      return res.status(400).json({ error: "Missing Svix headers" });
    }

    const event = resend.webhooks.verify({
      payload,
      headers: {
        id: svixId,
        timestamp: svixTimestamp,
        signature: svixSignature,
      },
      webhookSecret: process.env.RESEND_WEBHOOK_SECRET,
    });

    const { recipient_name, recipient_email } = event.data?.tags || {};
    const accountEmail = recipient_email
  ? Buffer.from(recipient_email, "base64url").toString("utf8")
  : null;

    switch (event.type) {
      case "email.delivered":
        console.log("Delivered email ID:", event.data.email_id);
        try {
          const emailHtml = await mailTemplate({ name: recipient_name });
          await emailQueue.push({
            to: accountEmail,
            subject: "Testing - Message Received",
            html: emailHtml,
          });
          res.status(200).json({ message: "Email sent successfully" });
        } catch (error) {
          res
            .status(500)
            .json({ message: "Failed to send email", error: error.message });
        }
        break;
      case "email.bounced":
        console.log("Bounced recipient:", event.data.to);
        break;
      case "email.complained":
        console.log("Spam complaint from:", event.data.to);
        break;
      case "email.received":
        console.log("Inbound email subject:", event.data.subject);
        break;
      default:
        console.log("Unhandled Resend event:", event.type);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to send email", error: error.message });
  }

});

router.post("/notification", async (req, res) => {
  const { name, email, phone, message } = req.body;
  const encodedEmail = Buffer.from(email, "utf8").toString("base64url");

  function sanitizeTagValue(value) {
    return String(value)
      .trim()
      .replace(/[^a-zA-Z0-9_-]/g, "_")
      .slice(0, 256); // Resend max tag length is 256 chars
  }

  try {
    await emailQueue.push({
      to: "cs@pestra.net",
      subject: "New Message Received",
      html: formNotificationEmail({
        name,
        email,
        phone,
        message,
      }),
      name: sanitizeTagValue(name),
      email: encodedEmail,
    });
    console.log("Notification email sent successfully");
    res.status(200).json({ message: "Notification email sent successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to send notification email",
      error: error.message,
    });
  }
});

module.exports = router;
