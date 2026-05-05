import { useState } from "react";

const SUBJECTS = [
  "Course Enquiry",
  "Internship Application",
  "Hiring Partnership",
  "Trainer / Mentor Role",
  "Research Collaboration",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  };

  const inputCls = "w-full bg-[#080d15] border border-white/8 text-white placeholder:text-gray-600 focus:border-blue-500 outline-none rounded-xl h-11 px-4 text-sm transition-colors";
  const labelCls = "block text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-1.5";

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: "#07090f" }}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-px" style={{ background: "linear-gradient(90deg,#4f6ef7,#7c3aed)" }} />
            <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
            Get in touch —{" "}
            <span style={{ background: "linear-gradient(90deg,#4f6ef7,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              we respond fast.
            </span>
          </h2>
          <p className="text-gray-400 max-w-lg">
            Whether you're interested in a course, internship, or hiring our graduates — drop us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 rounded-2xl border border-white/8 bg-white/[0.02] p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm">We'll get back to you within 24 hours. Check your inbox for a confirmation.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Your Name</label>
                    <input className={inputCls} placeholder="Rahul Sharma" value={form.name} onChange={onChange("name")} required />
                  </div>
                  <div>
                    <label className={labelCls}>Email Address</label>
                    <input type="email" className={inputCls} placeholder="rahul@email.com" value={form.email} onChange={onChange("email")} required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Phone Number</label>
                    <input className={inputCls} placeholder="+91 98765 43210" value={form.phone} onChange={onChange("phone")} />
                  </div>
                  <div>
                    <label className={labelCls}>Subject</label>
                    <select className={inputCls} value={form.subject} onChange={onChange("subject")} required>
                      <option value="">Select subject…</option>
                      {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Message</label>
                  <textarea
                    className={`${inputCls} h-32 pt-3 resize-none`}
                    placeholder="Tell us which course you're interested in, batch dates, or anything else…"
                    value={form.message}
                    onChange={onChange("message")}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl text-white font-bold text-sm transition-all hover:opacity-90 active:scale-95 disabled:opacity-60"
                  style={{ background: "linear-gradient(135deg,#4f6ef7 0%,#7c3aed 100%)" }}
                >
                  {loading ? "Sending…" : "Send Message →"}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {[
              { icon: "📧", title: "Email Us", detail: "info@nexgenbrtechnologies.com", sub: "We reply within 24 hours" },
              { icon: "📍", title: "Location", detail: "Wardha, Nagpur, Maharashtra, India", sub: "Online & offline training available" },
              { icon: "🕐", title: "Office Hours", detail: "Mon–Sat: 10:00 AM – 6:00 PM", sub: "Sunday: 11:00 AM – 2:00 PM" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 flex gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-0.5">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.detail}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-white/8 flex-1 min-h-[180px]">
              <iframe
                title="NexGen BR Technologies Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59834.96284455257!2d78.58009689999999!3d20.745222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd39c7ef4c8d111%3A0x6f5f95eff1a3c3ca!2sWardha%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715600000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 180, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
