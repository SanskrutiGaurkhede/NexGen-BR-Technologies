import { useState } from "react";

const COURSES = [
  { icon: "🐍", title: "Python Full Stack Development", badge: "Most Popular", color: "from-blue-600 to-cyan-500", glow: "rgba(79,110,247,0.2)", duration: "16 weeks", level: "Beginner → Pro", levelColor: "text-green-400", tags: ["Python", "Django", "FastAPI", "React", "MongoDB"], desc: "Master Python, Django, FastAPI, React, MongoDB. Build deployable real-world apps.", category: "Development" },
  { icon: "☕", title: "Java Full Stack Development", badge: "Industry Ready", color: "from-orange-500 to-red-500", glow: "rgba(249,115,22,0.2)", duration: "16 weeks", level: "Beginner → Pro", levelColor: "text-green-400", tags: ["Java", "Spring Boot", "Hibernate", "React"], desc: "Java, Spring Boot, Hibernate, React. Enterprise-grade backend & frontend integration.", category: "Development" },
  { icon: "🌐", title: "Backend (Node.js)", badge: "API Mastery", color: "from-teal-500 to-green-500", glow: "rgba(20,184,166,0.2)", duration: "10 weeks", level: "Intermediate", levelColor: "text-yellow-400", tags: ["Node.js", "Express", "REST", "GraphQL", "PostgreSQL"], desc: "Node.js, Express, REST + GraphQL, Auth, MongoDB & PostgreSQL deployments.", category: "Development" },
  { icon: "📊", title: "Data Analyst Course", badge: "Career Track", color: "from-blue-600 to-indigo-500", glow: "rgba(99,102,241,0.2)", duration: "12 weeks", level: "All levels", levelColor: "text-cyan-400", tags: ["SQL", "Python", "Statistics", "Tableau", "Excel"], desc: "SQL, Python, statistics, dashboarding, storytelling with data, real datasets.", category: "Data & Analytics" },
  { icon: "📉", title: "Power BI", badge: "BI Tools", color: "from-yellow-500 to-amber-500", glow: "rgba(245,158,11,0.2)", duration: "6 weeks", level: "Intermediate", levelColor: "text-yellow-400", tags: ["Power BI", "DAX", "Power Query", "Data Modeling"], desc: "DAX, Power Query, modeling, professional dashboards & published reports.", category: "Data & Analytics" },
  { icon: "📋", title: "Advanced Excel", badge: "Foundational", color: "from-emerald-500 to-teal-500", glow: "rgba(16,185,129,0.2)", duration: "4 weeks", level: "Beginner", levelColor: "text-cyan-400", tags: ["Excel", "VBA", "Power Query", "Pivot Tables"], desc: "Pivots, formulas, Power Query, automation with VBA & data analysis.", category: "Data & Analytics" },
  { icon: "🤖", title: "AI & Machine Learning with Python", badge: "Hot 🔥", color: "from-red-600 to-orange-500", glow: "rgba(239,68,68,0.2)", duration: "14 weeks", level: "Intermediate", levelColor: "text-yellow-400", tags: ["Python", "scikit-learn", "ML", "Deployment"], desc: "Supervised/unsupervised ML, scikit-learn, end-to-end ML lifecycle, deployment.", category: "AI & Machine Learning" },
  { icon: "🧠", title: "Deep Learning Basics", badge: "Neural Nets", color: "from-violet-600 to-fuchsia-500", glow: "rgba(139,92,246,0.2)", duration: "8 weeks", level: "Intermediate+", levelColor: "text-yellow-400", tags: ["PyTorch", "CNNs", "RNNs", "Transformers"], desc: "Neural networks, CNNs, RNNs, Transformers fundamentals using PyTorch.", category: "AI & Machine Learning" },
  { icon: "🔬", title: "Real-Time ML Projects", badge: "Portfolio", color: "from-pink-600 to-rose-500", glow: "rgba(236,72,153,0.2)", duration: "Project-based", level: "Advanced", levelColor: "text-red-400", tags: ["NLP", "Computer Vision", "Recommender Systems"], desc: "Recommendation engines, computer vision, NLP — ship working ML systems.", category: "AI & Machine Learning" },
  { icon: "💻", title: "Data Structures & Algorithms (DSA)", badge: "Interview Prep", color: "from-cyan-600 to-blue-600", glow: "rgba(6,182,212,0.2)", duration: "12 weeks", level: "All levels", levelColor: "text-cyan-400", tags: ["DSA", "System Design", "FAANG Prep", "Problem Solving"], desc: "200+ problems, system design intro, FAANG-style interview preparation.", category: "Core CS" },
  { icon: "🎨", title: "UI/UX Design (Figma)", badge: "Creative", color: "from-fuchsia-600 to-pink-500", glow: "rgba(217,70,239,0.2)", duration: "8 weeks", level: "Beginner → Pro", levelColor: "text-green-400", tags: ["Figma", "UI/UX", "Wireframing", "Design Systems"], desc: "Design thinking, wireframing, prototyping, design systems & Figma mastery.", category: "Design" },
];

const YEARS = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Graduated / Working"];
const DEPTS = ["Computer Science", "Information Technology", "Electronics", "Mechanical", "Civil", "Other"];
const inputCls = "w-full bg-[#080d15] border border-white/8 text-white placeholder:text-gray-600 focus:border-purple-500 outline-none rounded-xl h-11 px-4 text-sm transition-colors";
const labelCls = "block text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-1.5";

export default function Courses() {
  const [enrolling, setEnrolling] = useState<typeof COURSES[0] | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", collegeName: "", collegeId: "", department: "", year: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const openEnroll = (c: typeof COURSES[0]) => { setEnrolling(c); setSubmitted(false); setForm({ name: "", email: "", phone: "", collegeName: "", collegeId: "", department: "", year: "" }); };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/students/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, course: enrolling?.title }),
      });
    } catch (_) {}
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="courses" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#08091a 0%,#0b0e20 100%)" }} />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="mb-14 text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-purple-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-purple-400/20 bg-purple-400/5">
            Courses
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Industry-Ready{" "}
            <span style={{ background: "linear-gradient(90deg,#a855f7,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Courses
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pick a track. Build a portfolio. Get hired. Every course includes live projects, mentor feedback, and a verified certificate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {COURSES.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-white/8 bg-white/[0.03] p-6 hover:border-white/15 transition-all duration-300 flex flex-col"
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${c.glow}`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              {/* Header gradient */}
              <div className={`w-full h-1.5 rounded-full bg-gradient-to-r ${c.color} mb-5 opacity-70`} />
              <div className="flex items-start justify-between mb-3">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-xl shadow-lg`}>{c.icon}</div>
                <span className={`text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full bg-gradient-to-r ${c.color} text-white`}>{c.badge}</span>
              </div>
              <h3 className="text-white font-bold text-sm mb-1 leading-snug">{c.title}</h3>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] text-gray-500">⏱ {c.duration}</span>
                <span className={`text-[10px] font-bold ${c.levelColor}`}>{c.level}</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-grow text-justify">{c.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {c.tags.map(t => <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400">{t}</span>)}
              </div>
              <button onClick={() => openEnroll(c)} className={`w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${c.color} hover:opacity-90 transition-opacity`}>
                Enroll Now →
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">Not sure which course to pick? <a href="mailto:info@nexgenbrtechnologies.com" className="text-purple-400 hover:underline">Contact us →</a></p>
      </div>

      {/* Enroll Modal */}
      {enrolling && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}>
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0d1120] p-8 relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setEnrolling(null)} className="absolute top-4 right-4 text-gray-500 hover:text-white text-xl">✕</button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-white font-bold text-xl mb-2">Enrollment Request Sent!</h3>
                <p className="text-gray-400 text-sm">Our team will contact you within 24–48 hours to confirm your seat.</p>
                <button onClick={() => setEnrolling(null)} className="mt-6 px-6 py-2.5 rounded-full text-white text-sm font-bold" style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>Close</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Course Enrollment</h3>
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${enrolling.color} text-white mb-2`}>{enrolling.title}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className={labelCls}>Full Name *</label><input className={inputCls} placeholder="Rahul Sharma" value={form.name} onChange={set("name")} required /></div>
                  <div><label className={labelCls}>Email Address *</label><input type="email" className={inputCls} placeholder="rahul@email.com" value={form.email} onChange={set("email")} required /></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className={labelCls}>Phone Number *</label><input className={inputCls} placeholder="+91 91234 56789" value={form.phone} onChange={set("phone")} required /></div>
                  <div><label className={labelCls}>College Name *</label><input className={inputCls} placeholder="MIT, Pune" value={form.collegeName} onChange={set("collegeName")} required /></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className={labelCls}>College / Student ID *</label><input className={inputCls} placeholder="CS2024001" value={form.collegeId} onChange={set("collegeId")} /></div>
                  <div>
                    <label className={labelCls}>Department *</label>
                    <select className={inputCls} value={form.department} onChange={set("department")} required>
                      <option value="">Select dept</option>
                      {DEPTS.map(d => <option key={d}>{d}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Year of Study *</label>
                  <select className={inputCls} value={form.year} onChange={set("year")} required>
                    <option value="">Select year</option>
                    {YEARS.map(y => <option key={y}>{y}</option>)}
                  </select>
                </div>
                <button type="submit" disabled={loading} className="w-full py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 disabled:opacity-60 transition-all" style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>
                  {loading ? "Submitting…" : "Submit Enrollment →"}
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
