import { row, emailHtml, sendMail } from "../_mailer.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  try {
    const { name, email, phone, college, year, domain, skills, message, resume } = req.body;
    const html = emailHtml("🚀 New Internship Application", [
      row("Name", name), row("Email", email), row("Phone", phone),
      row("College", college), row("Year", year), row("Domain", domain),
      row("Skills", skills), row("Message", message), row("Portfolio", resume),
    ].join(""));
    await sendMail(`[Internship] ${domain} — ${name}`, html);
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false });
  }
}
