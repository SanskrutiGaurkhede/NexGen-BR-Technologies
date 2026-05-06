import { row, emailHtml, sendMail } from "./_mailer.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  try {
    const { name, email, phone, subject, message, resume } = req.body;
    const html = emailHtml("📩 New Contact Message", [
      row("Name", name), row("Email", email), row("Phone", phone),
      row("Topic", subject), row("Message", message), row("Portfolio", resume),
    ].join(""));
    await sendMail(`[Contact] ${subject || "New Message"} — ${name}`, html);
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false });
  }
}
