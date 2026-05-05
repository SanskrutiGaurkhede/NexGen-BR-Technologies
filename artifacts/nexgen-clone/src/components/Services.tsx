const SERVICES = [
  {
    icon: "🎓",
    title: "Industry-Level Training",
    desc: "Structured curriculum built for real job outcomes. Every module is mapped to actual job descriptions and interview patterns.",
    color: "from-blue-500 to-cyan-400",
    glow: "rgba(79,110,247,0.15)",
    tag: "Learning",
  },
  {
    icon: "🛠️",
    title: "Live Project Training",
    desc: "Hands-on training on real-world projects — giving students production-level experience before their first job.",
    color: "from-violet-500 to-purple-400",
    glow: "rgba(139,92,246,0.15)",
    tag: "Projects",
  },
  {
    icon: "💼",
    title: "Internship Programs",
    desc: "Paid and unpaid internship placements across 10+ domains — with mentor support, sprints, and real deliverables.",
    color: "from-cyan-500 to-teal-400",
    glow: "rgba(6,182,212,0.15)",
    tag: "Internship",
  },
  {
    icon: "🔬",
    title: "Research Support",
    desc: "Guidance for academic research papers, thesis projects, and publication-ready work in AI, ML, and Data Science.",
    color: "from-emerald-500 to-green-400",
    glow: "rgba(16,185,129,0.15)",
    tag: "Research",
  },
  {
    icon: "🚀",
    title: "Placement Assistance",
    desc: "End-to-end placement support — resume building, mock interviews, LinkedIn optimization, and company referrals.",
    color: "from-orange-500 to-amber-400",
    glow: "rgba(249,115,22,0.15)",
    tag: "Career",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps Labs",
    desc: "Practical AWS, Docker, and Kubernetes labs. Students deploy real applications to cloud infrastructure during training.",
    color: "from-pink-500 to-rose-400",
    glow: "rgba(236,72,153,0.15)",
    tag: "Cloud",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#0b0d1e 0%,#08091a 100%)" }} />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="mb-14 text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-cyan-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to{" "}
            <span style={{ background: "linear-gradient(90deg,#06b6d4,#4f46e5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Get Hired
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From beginner fundamentals to production-grade projects — we offer end-to-end career development under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="group rounded-2xl border border-white/8 bg-white/[0.03] p-7 hover:border-white/15 transition-all duration-300 cursor-default"
              style={{ boxShadow: `0 0 0 0 ${svc.glow}` }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${svc.glow}`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${svc.glow}`; }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center text-xl mb-5 shadow-lg`}>
                {svc.icon}
              </div>
              <span className={`text-[10px] font-bold tracking-widest uppercase mb-3 inline-block bg-gradient-to-r ${svc.color} bg-clip-text text-transparent`}>
                {svc.tag}
              </span>
              <h3 className="text-white font-bold text-lg mb-3">{svc.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
