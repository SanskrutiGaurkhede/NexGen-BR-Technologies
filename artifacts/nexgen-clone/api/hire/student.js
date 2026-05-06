import { row, emailHtml, sendMail } from "../_mailer.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  try {
    const { name, email, phone, college, year, domain, skills, message } = req.body;
    const html = emailHtml("🎓 New Student Application", [
      row("Name", name), row("Email", email), row("Phone", phone),
      row("College", college), row("Year", year), row("Domain", domain),
      row("Skills", skills), row("Message", message),
    ].join(""));
    await sendMail(`[Student Apply] ${domain} — ${name}`, html);
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false });
  }
}
