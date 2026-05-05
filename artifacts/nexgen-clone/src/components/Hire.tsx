import { useState, useRef } from "react";

const STATS = [
  { val: "150+", label: "Companies Hiring" },
  { val: "85%", label: "Placement Rate" },
  { val: "4.8★", label: "Employer Rating" },
];

const PROFILES = [
  { initials: "PY", color: "from-yellow-500 to-orange-400", name: "Python Developer", exp: "0–1 yr experience", skills: ["Python", "FastAPI", "Django", "REST APIs", "PostgreSQL"], desc: "Trained on real backend projects. Can build and deploy Python APIs from day one." },
  { initials: "DS", color: "from-blue-500 to-cyan-400", name: "Data Scientist", exp: "0–1 yr experience", skills: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "SQL"], desc: "End-to-end ML pipeline experience — from data cleaning to model deployment." },
  { initials: "FS", color: "from-cyan-500 to-teal-400", name: "Full Stack Developer", exp: "0–1 yr experience", skills: ["React", "Node.js", "MongoDB", "Express", "AWS"], desc: "MERN-stack trained engineers who have shipped complete web applications." },
  { initials: "DA", color: "from-pink-500 to-fuchsia-400", name: "Data Analyst", exp: "Fresher–6 months", skills: ["Power BI", "SQL", "Excel", "Python", "Tableau"], desc: "Dashboard builders and SQL experts who translate data into business decisions." },
  { initials: "DO", color: "from-violet-500 to-purple-400", name: "DevOps Engineer", exp: "0–1 yr experience", skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"], desc: "Infrastructure engineers with hands-on cloud deployment and automation experience." },
  { initials: "AI", color: "from-emerald-500 to-teal-400", name: "AI / ML Engineer", exp: "0–1 yr experience", skills: ["PyTorch", "NLP", "Computer Vision", "FastAPI", "Python"], desc: "Deep learning practitioners with deployed model experience in NLP and CV." },
];

const TRAINER_SKILLS = ["Python", "JavaScript / TypeScript", "React / Next.js", "Node.js / Express", "Data Science", "Machine Learning", "Deep Learning / NLP", "SQL / PostgreSQL", "Power BI / Tableau", "AWS / Azure / GCP", "Docker / Kubernetes", "Java / Spring Boot", "Cyber Security", "DevOps / CI-CD", "UI/UX Design", "Android / Flutter"];
const STUDENT_DOMAINS = ["Web Development", "Python Development", "Java Development", "Data Science", "Machine Learning", "Artificial Intelligence", "Data Analyst", "Cloud Computing", "DevOps", "Cyber Security"];
const YEARS = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Graduated"];
const EXP_LEVELS = ["1–2 years", "2–4 years", "4–6 years", "6–10 years", "10+ years"];

const inputCls = "w-full bg-[#080d15] border border-white/8 text-white placeholder:text-gray-600 focus:border-purple-500 outline-none rounded-xl h-11 px-4 text-sm transition-colors";
const labelCls = "block text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-1.5";

function fileToBase64(file: File): Promise<string> {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res((r.result as string).split(",")[1]);
    r.onerror = rej;
    r.readAsDataURL(file);
  });
}

function FileUploadBox({ file, setFile, accent = "purple" }: { file: File | null; setFile: (f: File | null) => void; accent?: string }) {
  const ref = useRef<HTMLInputElement>(null);
  const borderColor = accent === "cyan" ? "hover:border-cyan-500/50" : "hover:border-purple-500/50";
  return (
    <div>
      <label className={labelCls}>Resume / CV (PDF or DOC)</label>
      <div
        className={`border border-dashed border-white/15 rounded-xl p-4 text-center cursor-pointer transition-colors ${borderColor}`}
        onClick={() => ref.current?.click()}
      >
        {file ? (
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
            <span>📄</span>
            <span className="truncate max-w-[200px]">{file.name}</span>
            <button type="button" className="text-gray-600 hover:text-red-400 ml-1 shrink-0" onClick={e => { e.stopPropagation(); setFile(null); }}>✕</button>
          </div>
        ) : (
          <div className="text-gray-500 text-sm">
            <span className="text-2xl block mb-1">📎</span>
            Click to upload (PDF, DOC, DOCX — max 5 MB)
          </div>
        )}
        <input ref={ref} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={e => setFile(e.target.files?.[0] ?? null)} />
      </div>
    </div>
  );
}

function TrainerModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", experience: "", linkedin: "", portfolio: "", bio: "" });
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));
  const toggleSkill = (s: string) =>
    setSelectedSkills(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let resumeBase64: string | undefined;
      let resumeFilename: string | undefined;
      if (resumeFile) { resumeBase64 = await fileToBase64(resumeFile); resumeFilename = resumeFile.name; }
      await fetch("/api/hire/trainer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, skills: selectedSkills.join(", "), resumeBase64, resumeFilename }),
      });
    } catch (_) {}
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}>
      <div className="w-full max-w-xl rounded-2xl border border-purple-500/20 bg-[#0d1120] p-8 relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white text-xl font-bold">✕</button>
        {submitted ? (
          <div className="text-center py-10">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-white font-bold text-xl mb-2">Application Received!</h3>
            <p className="text-gray-400 text-sm mb-1">We'll review your profile and reach out within 3–5 business days.</p>
            <p className="text-gray-600 text-xs mt-2">A copy has been forwarded to info@nexgenbrtechnologies.com</p>
            <button onClick={onClose} className="mt-6 px-6 py-2.5 rounded-full text-white text-sm font-bold" style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>Close</button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🧑‍🏫</span>
              <div>
                <h3 className="text-white font-bold text-lg">Become a Trainer</h3>
                <p className="text-gray-500 text-xs">Share your expertise with the next generation</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className={labelCls}>Full Name *</label><input className={inputCls} placeholder="Dr. Priya Sharma" value={form.name} onChange={set("name")} required /></div>
              <div><label className={labelCls}>Email Address *</label><input type="email" className={inputCls} placeholder="priya@company.com" value={form.email} onChange={set("email")} required /></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className={labelCls}>Phone Number *</label><input className={inputCls} placeholder="+91 91234 56789" value={form.phone} onChange={set("phone")} required /></div>
              <div>
                <label className={labelCls}>Years of Experience *</label>
                <select className={inputCls} value={form.experience} onChange={set("experience")} required>
                  <option value="">Select…</option>
                  {EXP_LEVELS.map(e => <option key={e}>{e}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className={labelCls}>Your Expertise / Skills *</label>
              <div className="flex flex-wrap gap-2 mt-1">
                {TRAINER_SKILLS.map(s => (
                  <button type="button" key={s} onClick={() => toggleSkill(s)}
                    className={`text-[10px] font-semibold px-3 py-1.5 rounded-full border transition-all ${selectedSkills.includes(s) ? "bg-purple-500/20 border-purple-400 text-purple-300" : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20"}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className={labelCls}>LinkedIn Profile</label><input className={inputCls} placeholder="linkedin.com/in/yourname" value={form.linkedin} onChange={set("linkedin")} /></div>
              <div><label className={labelCls}>Portfolio / GitHub</label><input className={inputCls} placeholder="github.com/yourname" value={form.portfolio} onChange={set("portfolio")} /></div>
            </div>
            <div><label className={labelCls}>Short Bio *</label><textarea className={`${inputCls} h-24 pt-3 resize-none`} placeholder="Tell us about your experience and why you want to mentor students…" value={form.bio} onChange={set("bio")} required /></div>
            <FileUploadBox file={resumeFile} setFile={setResumeFile} accent="purple" />
            <button type="submit" disabled={loading} className="w-full py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 disabled:opacity-60 transition-all" style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>
              {loading ? "Submitting…" : "Submit Trainer Application →"}
            </button>
            <p className="text-gray-600 text-xs text-center">info@nexgenbrtechnologies.com</p>
          </form>
        )}
      </div>
    </div>
  );
}

function StudentModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", college: "", year: "", domain: "", skills: "", message: "" });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let resumeBase64: string | undefined;
      let resumeFilename: string | undefined;
      if (resumeFile) { resumeBase64 = await fileToBase64(resumeFile); resumeFilename = resumeFile.name; }
      await fetch("/api/hire/student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, resumeBase64, resumeFilename }),
      });
    } catch (_) {}
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}>
      <div className="w-full max-w-xl rounded-2xl border border-cyan-500/20 bg-[#0d1120] p-8 relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white text-xl font-bold">✕</button>
        {submitted ? (
          <div className="text-center py-10">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-white font-bold text-xl mb-2">Application Submitted!</h3>
            <p className="text-gray-400 text-sm mb-1">Our team will get you into the right program within 2–3 business days.</p>
            <p className="text-gray-600 text-xs mt-2">A copy has been forwarded to info@nexgenbrtechnologies.com</p>
            <button onClick={onClose} className="mt-6 px-6 py-2.5 rounded-full text-white text-sm font-bold" style={{ background: "linear-gradient(135deg,#06b6d4,#0284c7)" }}>Close</button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🎓</span>
              <div>
                <h3 className="text-white font-bold text-lg">Fresher Apply</h3>
                <p className="text-gray-500 text-xs">Ready to start your tech journey? Let's get you in.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className={labelCls}>Full Name *</label><input className={inputCls} placeholder="Rahul Sharma" value={form.name} onChange={set("name")} required /></div>
              <div><label className={labelCls}>Email Address *</label><input type="email" className={inputCls} placeholder="rahul@email.com" value={form.email} onChange={set("email")} required /></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className={labelCls}>Phone Number *</label><input className={inputCls} placeholder="+91 91234 56789" value={form.phone} onChange={set("phone")} required /></div>
              <div><label className={labelCls}>College / University *</label><input className={inputCls} placeholder="MIT, Pune" value={form.college} onChange={set("college")} required /></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Year of Study *</label>
                <select className={inputCls} value={form.year} onChange={set("year")} required>
                  <option value="">Select year</option>
                  {YEARS.map(y => <option key={y}>{y}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Interested Domain *</label>
                <select className={inputCls} value={form.domain} onChange={set("domain")} required>
                  <option value="">Select domain</option>
                  {STUDENT_DOMAINS.map(d => <option key={d}>{d}</option>)}
                </select>
              </div>
            </div>
            <div><label className={labelCls}>Skills You Know</label><input className={inputCls} placeholder="Python, HTML, SQL, Excel…" value={form.skills} onChange={set("skills")} /></div>
            <div><label className={labelCls}>Why do you want to join? *</label><textarea className={`${inputCls} h-20 pt-3 resize-none`} placeholder="Tell us about your goals and what you're hoping to learn…" value={form.message} onChange={set("message")} required /></div>
            <FileUploadBox file={resumeFile} setFile={setResumeFile} accent="cyan" />
            <button type="submit" disabled={loading} className="w-full py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 disabled:opacity-60 transition-all" style={{ background: "linear-gradient(135deg,#06b6d4,#0284c7)" }}>
              {loading ? "Submitting…" : "Submit Application →"}
            </button>
            <p className="text-gray-600 text-xs text-center">info@nexgenbrtechnologies.com</p>
          </form>
        )}
      </div>
    </div>
  );
}

export default function Hire() {
  const [showTrainer, setShowTrainer] = useState(false);
  const [showStudent, setShowStudent] = useState(false);

  return (
    <section id="hire" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#0b0e20 0%,#08091a 100%)" }} />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="mb-14 text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-orange-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-orange-400/20 bg-orange-400/5">
            Hire / Apply
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            NexGen{" "}
            <span style={{ background: "linear-gradient(90deg,#f97316,#ef4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Ecosystem
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you want to hire our graduates, become a trainer, or apply as a student — this is your starting point.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-14">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 text-center">
              <span className="text-3xl font-black text-white block mb-1">{s.val}</span>
              <span className="text-[10px] text-gray-500 font-semibold tracking-widest uppercase">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-8 mb-10">
          <h3 className="text-white font-bold text-xl mb-3">NexGen Talent</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            Our graduates are not just trained in theory. They have built full-stack applications, understand version control, agile methodologies, and are ready to contribute from day one.
          </p>
          <a href="mailto:info@nexgenbrtechnologies.com" className="inline-block px-7 py-3 rounded-full text-white font-bold text-sm transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg,#f97316 0%,#ef4444 100%)" }}>
            Become a Hiring Partner →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {PROFILES.map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 hover:border-white/15 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white font-black text-sm shadow-lg`}>{p.initials}</div>
                <div>
                  <h3 className="text-white font-bold">{p.name}</h3>
                  <span className="text-[10px] text-gray-500 font-semibold tracking-widest uppercase">{p.exp}</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.skills.map((s) => <span key={s} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400">{s}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* Trainer & Fresher Apply Buttons */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-7 flex flex-col">
            <span className="text-3xl mb-3 block">🧑‍🏫</span>
            <h3 className="text-white font-bold text-lg mb-2">Become a Trainer</h3>
            <p className="text-gray-400 text-sm mb-5 flex-grow">Share your expertise with the next generation. We're looking for passionate working professionals to mentor our students.</p>
            <button onClick={() => setShowTrainer(true)} className="w-full py-3 rounded-xl text-white font-bold text-sm transition-all hover:opacity-90 active:scale-95" style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>
              Apply as Trainer →
            </button>
          </div>
          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-7 flex flex-col">
            <span className="text-3xl mb-3 block">🎓</span>
            <h3 className="text-white font-bold text-lg mb-2">Fresher Apply</h3>
            <p className="text-gray-400 text-sm mb-5 flex-grow">Ready to start your tech journey? Fill in your details and we'll get you into the right program.</p>
            <button onClick={() => setShowStudent(true)} className="w-full py-3 rounded-xl text-white font-bold text-sm transition-all hover:opacity-90 active:scale-95" style={{ background: "linear-gradient(135deg,#06b6d4,#0284c7)" }}>
              Apply as Student →
            </button>
          </div>
        </div>
      </div>

      {showTrainer && <TrainerModal onClose={() => setShowTrainer(false)} />}
      {showStudent && <StudentModal onClose={() => setShowStudent(false)} />}
    </section>
  );
}
