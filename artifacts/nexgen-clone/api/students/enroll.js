import { row, emailHtml, sendMail } from "../_mailer.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  try {
    const { name, email, phone, collegeName, collegeId, department, year, course } = req.body;
    const html = emailHtml("🎓 New Course Enrollment", [
      row("Name", name), row("Email", email), row("Phone", phone),
      row("College", collegeName), row("College ID", collegeId),
      row("Department", department), row("Year", year), row("Course", course),
    ].join(""));
    await sendMail(`[Enroll] ${course} — ${name}`, html);
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false });
  }
}
