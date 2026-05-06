import { useState } from "react";

const DOMAINS = [
  { icon: "🌐", title: "Web Development", color: "from-blue-500 to-cyan-400", glow: "rgba(79,110,247,0.3)", duration: "2–3 Months", skills: ["HTML/CSS", "React", "Node.js", "MongoDB"], desc: "Build modern, responsive web apps used by real users in production environments." },
  { icon: "🐍", title: "Python Development", color: "from-yellow-400 to-green-400", glow: "rgba(250,204,21,0.25)", duration: "2–3 Months", skills: ["Python", "Flask", "FastAPI", "REST APIs"], desc: "Write clean, scalable Python backend services and automate real-world workflows." },
  { icon: "☕", title: "Java Development", color: "from-orange-500 to-red-400", glow: "rgba(249,115,22,0.25)", duration: "2–3 Months", skills: ["Java", "Spring Boot", "Hibernate", "SQL"], desc: "Build enterprise-grade Java applications with industry-standard frameworks." },
  { icon: "📊", title: "Data Science", color: "from-purple-500 to-pink-400", glow: "rgba(168,85,247,0.25)", duration: "3 Months", skills: ["Python", "Pandas", "NumPy", "Matplotlib"], desc: "Extract insights from real datasets and drive data-informed decisions." },
  { icon: "🧠", title: "Machine Learning", color: "from-indigo-500 to-purple-400", glow: "rgba(99,102,241,0.25)", duration: "3 Months", skills: ["Scikit-learn", "TensorFlow", "Keras", "Python"], desc: "Train, evaluate, and deploy ML models on industry-level datasets." },
  { icon: "🤖", title: "Artificial Intelligence", color: "from-fuchsia-500 to-violet-500", glow: "rgba(217,70,239,0.25)", duration: "3 Months", skills: ["Deep Learning", "NLP", "Computer Vision", "PyTorch"], desc: "Dive into cutting-edge AI techniques including LLMs, NLP, and computer vision." },
  { icon: "📈", title: "Data Analyst", color: "from-teal-400 to-cyan-500", glow: "rgba(20,184,166,0.25)", duration: "2 Months", skills: ["Excel", "SQL", "Power BI", "Tableau"], desc: "Analyze, visualize, and report on data to inform strategic business decisions." },
  { icon: "☁️", title: "Cloud Computing", color: "from-sky-500 to-blue-400", glow: "rgba(14,165,233,0.25)", duration: "3 Months", skills: ["AWS", "Azure", "GCP", "Docker"], desc: "Deploy, manage, and scale cloud infrastructure across AWS, Azure, and GCP." },
  { icon: "⚙️", title: "DevOps", color: "from-green-400 to-emerald-500", glow: "rgba(52,211,153,0.25)", duration: "3 Months", skills: ["CI/CD", "Kubernetes", "Terraform", "Linux"], desc: "Automate deployment pipelines and manage infra-as-code at scale." },
  { icon: "🔐", title: "Cyber Security", color: "from-red-500 to-orange-400", glow: "rgba(239,68,68,0.25)", duration: "3 Months", skills: ["Ethical Hacking", "Network Security", "VAPT", "OWASP"], desc: "Learn to protect systems, networks, and data from modern cyber threats." },
];

const PERKS = [
  { icon: "📜", title: "Industry Certificate", desc: "Verified certificate signed by working engineers." },
  { icon: "💰", title: "Stipend (Select Roles)", desc: "Paid internships available for top performers." },
  { icon: "🔗", title: "LinkedIn Endorsement", desc: "Mentor endorsements directly on your profile." },
  { icon: "📁", title: "Portfolio Projects", desc: "Deploy real products for your GitHub & resume." },
  { icon: "🎯", title: "Placement Support", desc: "Direct referrals to our hiring partner companies." },
  { icon: "🧑‍🏫", title: "Mentor Access", desc: "1-on-1 sessions with senior engineers every week." },
];

const YEARS = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Graduated"];

const inputCls = "w-full bg-[#080d15] border border-white/8 text-white placeholder:text-gray-600 focus:border-purple-500 outline-none rounded-xl h-11 px-4 text-sm transition-colors";
const labelCls = "block text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-1.5";

export default function Internship() {
  const [selected, setSelected] = useState<typeof DOMAINS[0] | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", college: "", year: "", skills: "", message: "", resume: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/internship/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, domain: selected?.title }),
      });
    } catch (_) {}
    setSubmitted(true);
    setLoading(false);
  };

  const openForm = (d: typeof DOMAINS[0]) => { setSelected(d); setShowForm(true); setSubmitted(false); setForm({ name: "", email: "", phone: "", college: "", year: "", skills: "", message: "", resume: "" }); };

  return (
    <section id="internship" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#0b0e20 0%,#08091a 100%)" }} />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="mb-14 text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-cyan-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5">
            Internship Program
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hands-on internships in{" "}
            <span style={{ background: "linear-gradient(90deg,#06b6d4,#4f46e5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              10 high-demand domains.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Work on real projects, get mentored by industry experts, and launch your tech career.
          </p>
        </div>

        {/* Domain Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {DOMAINS.map((d) => (
            <div
              key={d.title}
              className="group rounded-2xl border border-white/8 bg-white/[0.03] p-6 hover:border-white/15 transition-all duration-300 flex flex-col cursor-pointer"
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${d.glow}`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              onClick={() => openForm(d)}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${d.color} flex items-center justify-center text-xl mb-4 shadow-lg`}>
                {d.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-1">{d.title}</h3>
              <span className="text-[10px] text-gray-500 font-semibold tracking-widest uppercase mb-3">⏱ {d.duration}</span>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-grow text-justify">{d.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {d.skills.map(s => (
                  <span key={s} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400">{s}</span>
                ))}
              </div>
              <button className={`w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${d.color} hover:opacity-90 transition-opacity`}>
                Apply for Internship →
              </button>
            </div>
          ))}
        </div>

        {/* What You Get */}
        <h3 className="text-2xl font-bold text-white mb-8 text-center">What You Get</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {PERKS.map(p => (
            <div key={p.title} className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5">
              <span className="text-2xl">{p.icon}</span>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">{p.title}</h4>
                <p className="text-gray-500 text-xs text-justify">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => openForm(DOMAINS[0])}
            className="px-10 py-4 rounded-full text-white font-bold text-lg transition-all hover:opacity-90 active:scale-95"
            style={{ background: "linear-gradient(135deg,#7c3aed 0%,#4f46e5 100%)", boxShadow: "0 4px 32px rgba(124,58,237,0.4)" }}
          >
            Apply for Internship →
          </button>
          <p className="text-gray-600 text-sm mt-3">Rolling admissions — next batch starts soon</p>
        </div>
      </div>

      {/* Apply Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}>
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0d1120] p-8 relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 text-gray-500 hover:text-white text-xl">✕</button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-white font-bold text-xl mb-2">Application Submitted!</h3>
                <p className="text-gray-400 text-sm mb-1">Our team will review your application and respond within 2–3 business days.</p>
                <p className="text-gray-600 text-xs mt-2">A copy has been forwarded to info@nexgenbrtechnologies.com</p>
                <button onClick={() => setShowForm(false)} className="mt-6 px-6 py-2.5 rounded-full text-white text-sm font-bold" style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>Close</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Apply for Internship</h3>
                  {selected && (
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${selected.color} text-white mb-3`}>{selected.title}</span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className={labelCls}>Full Name *</label><input className={inputCls} placeholder="Rahul Sharma" value={form.name} onChange={set("name")} required /></div>
                  <div><label className={labelCls}>Email *</label><input type="email" className={inputCls} placeholder="rahul@email.com" value={form.email} onChange={set("email")} required /></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className={labelCls}>Phone *</label><input className={inputCls} placeholder="+91 91234 56789" value={form.phone} onChange={set("phone")} required /></div>
                  <div>
                    <label className={labelCls}>Internship Domain</label>
                    <select className={inputCls} value={selected?.title || ""} onChange={e => { const d = DOMAINS.find(x => x.title === e.target.value); if (d) setSelected(d); }} required>
                      {DOMAINS.map(d => <option key={d.title} value={d.title}>{d.title}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className={labelCls}>College / University *</label><input className={inputCls} placeholder="MIT, Pune" value={form.college} onChange={set("college")} required /></div>
                  <div>
                    <label className={labelCls}>Year of Study *</label>
                    <select className={inputCls} value={form.year} onChange={set("year")} required>
                      <option value="">Select year</option>
                      {YEARS.map(y => <option key={y}>{y}</option>)}
                    </select>
                  </div>
                </div>
                <div><label className={labelCls}>Skills You Already Know</label><input className={inputCls} placeholder="Python, HTML, SQL…" value={form.skills} onChange={set("skills")} /></div>
                <div><label className={labelCls}>Why do you want to join NexGen?</label><textarea className={`${inputCls} h-20 pt-3 resize-none`} placeholder="Tell us about your goals…" value={form.message} onChange={set("message")} /></div>
                <div><label className={labelCls}>Portfolio / GitHub (Optional)</label><input className={inputCls} placeholder="github.com/yourprofile" value={form.resume} onChange={set("resume")} /></div>
                <button type="submit" disabled={loading} className="w-full py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 disabled:opacity-60 transition-all" style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>
                  {loading ? "Submitting…" : "Submit Application →"}
                </button>
                <p className="text-gray-600 text-xs text-center">info@nexgenbrtechnologies.com</p>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
