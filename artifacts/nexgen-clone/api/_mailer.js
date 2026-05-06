import nodemailer from "nodemailer";

export const RECIPIENT = "info@nexgenbrtechnologies.com";

export function createTransport() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

export function row(label, value) {
  if (!value) return "";
  return `<tr><td style="padding:7px 14px;color:#9ca3af;font-size:13px;white-space:nowrap;font-family:monospace">${label}</td><td style="padding:7px 14px;color:#f3f4f6;font-size:13px;font-family:sans-serif">${value}</td></tr>`;
}

export function emailHtml(title, rows) {
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

export async function sendMail(subject, html) {
  const t = createTransport();
  await t.sendMail({
    from: `"NexGen BR Technologies" <${process.env.GMAIL_USER}>`,
    to: RECIPIENT,
    subject,
    html,
  });
}
