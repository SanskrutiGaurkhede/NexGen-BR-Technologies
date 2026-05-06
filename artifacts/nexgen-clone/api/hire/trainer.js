import { row, emailHtml, sendMail } from "../_mailer.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  try {
    const { name, email, phone, experience, linkedin, portfolio, skills, bio } = req.body;
    const html = emailHtml("🧑‍🏫 New Trainer Application", [
      row("Name", name), row("Email", email), row("Phone", phone),
      row("Experience", experience), row("LinkedIn", linkedin),
      row("Portfolio", portfolio), row("Skills", skills), row("Bio", bio),
    ].join(""));
    await sendMail(`[Trainer] Application — ${name}`, html);
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false });
  }
}
