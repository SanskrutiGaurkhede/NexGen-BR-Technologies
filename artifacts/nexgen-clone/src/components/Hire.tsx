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

export default function Hire() {
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

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 text-center">
              <span className="text-3xl font-black text-white block mb-1">{s.val}</span>
              <span className="text-[10px] text-gray-500 font-semibold tracking-widest uppercase">{s.label}</span>
            </div>
          ))}
        </div>

        {/* NexGen Talent */}
        <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-8 mb-10">
          <h3 className="text-white font-bold text-xl mb-3">NexGen Talent</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            Our graduates are not just trained in theory. They have built full-stack applications, understand version control, agile methodologies, and are ready to contribute from day one.
          </p>
          <a
            href="mailto:info@nexgenbrtechnologies.com"
            className="inline-block px-7 py-3 rounded-full text-white font-bold text-sm transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg,#f97316 0%,#ef4444 100%)" }}
          >
            Become a Hiring Partner →
          </a>
        </div>

        {/* Talent Profiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
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

        {/* Trainer & Fresher Apply */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-7">
            <span className="text-2xl mb-3 block">🧑‍🏫</span>
            <h3 className="text-white font-bold text-lg mb-2">Become a Trainer</h3>
            <p className="text-gray-400 text-sm mb-4">Share your expertise with the next generation. We're looking for passionate working professionals to mentor our students.</p>
            <a href="mailto:info@nexgenbrtechnologies.com" className="inline-block px-5 py-2.5 rounded-full text-white font-semibold text-sm border border-purple-400/30 bg-purple-500/10 hover:bg-purple-500/20 transition-all">
              Apply as Trainer →
            </a>
          </div>
          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-7">
            <span className="text-2xl mb-3 block">🎓</span>
            <h3 className="text-white font-bold text-lg mb-2">Fresher Apply</h3>
            <p className="text-gray-400 text-sm mb-4">Ready to start your tech journey? Fill in your details and we'll get you into the right program.</p>
            <a href="mailto:info@nexgenbrtechnologies.com" className="inline-block px-5 py-2.5 rounded-full text-white font-semibold text-sm border border-cyan-400/30 bg-cyan-500/10 hover:bg-cyan-500/20 transition-all">
              Apply as Student →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
