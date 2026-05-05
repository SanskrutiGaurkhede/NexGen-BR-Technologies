const PROFILES = [
  {
    initials: "PY",
    color: "from-yellow-500 to-orange-400",
    name: "Python Developer",
    exp: "0–1 yr experience",
    skills: ["Python", "FastAPI", "Django", "REST APIs", "PostgreSQL"],
    desc: "Trained on real backend projects. Can build and deploy Python APIs from day one.",
  },
  {
    initials: "DS",
    color: "from-blue-500 to-cyan-400",
    name: "Data Scientist",
    exp: "0–1 yr experience",
    skills: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "SQL"],
    desc: "End-to-end ML pipeline experience — from data cleaning to model deployment.",
  },
  {
    initials: "FS",
    color: "from-cyan-500 to-teal-400",
    name: "Full Stack Developer",
    exp: "0–1 yr experience",
    skills: ["React", "Node.js", "MongoDB", "Express", "AWS"],
    desc: "MERN-stack trained engineers who have shipped complete web applications.",
  },
  {
    initials: "DA",
    color: "from-pink-500 to-fuchsia-400",
    name: "Data Analyst",
    exp: "Fresher–6 months",
    skills: ["Power BI", "SQL", "Excel", "Python", "Tableau"],
    desc: "Dashboard builders and SQL experts who translate data into business decisions.",
  },
  {
    initials: "DO",
    color: "from-violet-500 to-purple-400",
    name: "DevOps Engineer",
    exp: "0–1 yr experience",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
    desc: "Infrastructure engineers with hands-on cloud deployment and automation experience.",
  },
  {
    initials: "AI",
    color: "from-emerald-500 to-teal-400",
    name: "AI / ML Engineer",
    exp: "0–1 yr experience",
    skills: ["PyTorch", "NLP", "Computer Vision", "FastAPI", "Python"],
    desc: "Deep learning practitioners with deployed model experience in NLP and CV.",
  },
];

const PROCESS = [
  { num: "01", title: "Share Requirements", desc: "Tell us the role, stack, and team size. We'll curate matching profiles within 48 hours." },
  { num: "02", title: "Review Profiles", desc: "Access detailed portfolios, GitHub links, and project demos for each candidate." },
  { num: "03", title: "Interview", desc: "Schedule technical interviews. We prep our students specifically for your stack." },
  { num: "04", title: "Onboard", desc: "Hire with confidence. We provide 30-day post-joining support at no extra cost." },
];

export default function Hire() {
  return (
    <section id="hire" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#0b0e20 0%,#08091a 100%)" }} />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="mb-14 text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-orange-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-orange-400/20 bg-orange-400/5">
            Hire From Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hire{" "}
            <span style={{ background: "linear-gradient(90deg,#f97316,#ef4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Job-Ready Engineers
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Skip the training overhead. Our graduates arrive with real project experience, deployed code, and professional work habits.
          </p>
        </div>

        {/* Profiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {PROFILES.map((p) => (
            <div key={p.name} className="group rounded-2xl border border-white/8 bg-white/[0.03] p-6 hover:border-white/15 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white font-black text-sm shadow-lg`}>
                  {p.initials}
                </div>
                <div>
                  <h3 className="text-white font-bold">{p.name}</h3>
                  <span className="text-[10px] text-gray-500 font-semibold tracking-widest uppercase">{p.exp}</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.skills.map((s) => (
                  <span key={s} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <h3 className="text-2xl font-bold text-white mb-8 text-center">How Hiring Works</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {PROCESS.map((p) => (
            <div key={p.num} className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 relative">
              <span className="text-4xl font-black text-white/5 absolute top-4 right-4">{p.num}</span>
              <span className="text-orange-400 font-black text-sm mb-3 block">{p.num}</span>
              <h4 className="text-white font-bold mb-2">{p.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Hire?</h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto text-sm">Share your hiring requirements and we'll send you matched profiles within 48 hours — zero recruitment fee.</p>
          <a
            href="mailto:info@nexgenbrtechnologies.com"
            className="inline-block px-10 py-4 rounded-full text-white font-bold text-lg transition-all hover:opacity-90 active:scale-95"
            style={{ background: "linear-gradient(135deg,#f97316 0%,#ef4444 100%)", boxShadow: "0 4px 32px rgba(249,115,22,0.35)" }}
          >
            Contact Us to Hire →
          </a>
        </div>
      </div>
    </section>
  );
}
