import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

const RECIPIENT = process.env["CONTACT_EMAIL"] || "info@nexgenbrtechnologies.com";

function createTransporter() {
  const user = process.env["GMAIL_USER"];
  const pass = process.env["GMAIL_APP_PASSWORD"];
  if (!user || !pass) return null;
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

async function sendMail(subject: string, html: string, attachments?: nodemailer.Attachment[]) {
  const transporter = createTransporter();
  if (!transporter) {
    console.log(`[EMAIL NOT SENT — add GMAIL_USER + GMAIL_APP_PASSWORD env vars]\nSubject: ${subject}`);
    return false;
  }
  await transporter.sendMail({
    from: `"NexGen BR Website" <${process.env["GMAIL_USER"]}>`,
    to: RECIPIENT,
    subject,
    html,
    attachments,
  });
  return true;
}

function row(label: string, value: string | undefined) {
  if (!value) return "";
  return `<tr><td style="padding:7px 14px;color:#9ca3af;font-size:13px;white-space:nowrap;font-family:monospace">${label}</td><td style="padding:7px 14px;color:#f3f4f6;font-size:13px;font-family:sans-serif">${value}</td></tr>`;
}

function emailHtml(title: string, rows: string) {
  return `<!DOCTYPE html><html><body style="background:#08091a;color:#fff;font-family:Inter,sans-serif;padding:32px;margin:0">
    <div style="max-width:580px;margin:0 auto">
      <h2 style="color:#a855f7;margin-bottom:4px;font-size:20px">${title}</h2>
      <p style="color:#6b7280;font-size:12px;margin-bottom:20px">Submitted via NexGen BR Technologies website</p>
      <table style="border-collapse:collapse;width:100%;background:#111827;border-radius:12px;overflow:hidden">
        <tbody>${rows}</tbody>
      </table>
      <p style="color:#374151;font-size:11px;margin-top:20px">NexGen BR Technologies · Wardha, Nagpur, Maharashtra</p>
    </div>
  </body></html>`;
}

function buildAttachments(body: { resumeBase64?: string; resumeFilename?: string }): nodemailer.Attachment[] {
  if (!body.resumeBase64 || !body.resumeFilename) return [];
  return [{ filename: body.resumeFilename, content: body.resumeBase64, encoding: "base64" }];
}

router.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, subject, message, resume } = req.body;
    const html = emailHtml("📩 New Contact Message", [
      row("Name", name), row("Email", email), row("Phone", phone),
      row("Topic", subject), row("Message", message), row("Portfolio", resume),
    ].join(""));
    await sendMail(`[Contact] ${subject || "New Message"} — ${name}`, html);
    res.json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "contact email failed");
    res.status(500).json({ ok: false });
  }
});

router.post("/students/enroll", async (req, res) => {
  try {
    const { name, email, phone, collegeName, collegeId, department, year, course } = req.body;
    const attachments = buildAttachments(req.body);
    const html = emailHtml("🎓 New Course Enrollment", [
      row("Name", name), row("Email", email), row("Phone", phone),
      row("College", collegeName), row("College ID", collegeId),
      row("Department", department), row("Year", year), row("Course", course),
    ].join(""));
    await sendMail(`[Enroll] ${course} — ${name}`, html, attachments);
    res.json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "enroll email failed");
    res.status(500).json({ ok: false });
  }
});

router.post("/internship/apply", async (req, res) => {
  try {
    const { name, email, phone, college, year, domain, skills, message, resume } = req.body;
    const attachments = buildAttachments(req.body);
    const html = emailHtml("🚀 New Internship Application", [
      row("Name", name), row("Email", email), row("Phone", phone),
      row("College", college), row("Year", year), row("Domain", domain),
      row("Skills", skills), row("Message", message), row("Portfolio", resume),
    ].join(""));
    await sendMail(`[Internship] ${domain} — ${name}`, html, attachments);
    res.json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "internship email failed");
    res.status(500).json({ ok: false });
  }
});

router.post("/hire/trainer", async (req, res) => {
  try {
    const { name, email, phone, experience, linkedin, portfolio, skills, bio, resumeFilename } = req.body;
    const attachments = buildAttachments(req.body);
    const html = emailHtml("🧑‍🏫 New Trainer Application", [
      row("Name", name), row("Email", email), row("Phone", phone),
      row("Experience", experience), row("LinkedIn", linkedin),
      row("Portfolio", portfolio), row("Skills", skills), row("Bio", bio),
      row("Resume", resumeFilename ? `Attached: ${resumeFilename}` : "Not provided"),
    ].join(""));
    await sendMail(`[Trainer] Application — ${name}`, html, attachments);
    res.json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "trainer email failed");
    res.status(500).json({ ok: false });
  }
});

router.post("/hire/student", async (req, res) => {
  try {
    const { name, email, phone, college, year, domain, skills, message, resumeFilename } = req.body;
    const attachments = buildAttachments(req.body);
    const html = emailHtml("🎓 New Student Application", [
      row("Name", name), row("Email", email), row("Phone", phone),
      row("College", college), row("Year", year), row("Domain", domain),
      row("Skills", skills), row("Message", message),
      row("Resume", resumeFilename ? `Attached: ${resumeFilename}` : "Not provided"),
    ].join(""));
    await sendMail(`[Student Apply] ${domain} — ${name}`, html, attachments);
    res.json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "student email failed");
    res.status(500).json({ ok: false });
  }
});

export default router;
